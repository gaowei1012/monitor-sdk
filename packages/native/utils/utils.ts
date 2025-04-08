import DeviceInfo from 'react-native-device-info'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { request } from '../services/request'
import CryptoJS from 'crypto-js'


export function sendPv(args: string, options?: string) {
  console.log('埋点：args', args, options)
  // 发送埋点数据
  // request(`msg/upload`, { msg: args })
  //   .then((res) => {
  //     console.log('发送成功')
  //   })
  //   .catch((err) => {
  //     console.log('发送失败', err)
  //   })

  request(
    {
      url: `msg/upload`,
      data: { msg: args },
      method: 'POST'
    },
    'msg/upload'
  )
    .then((res) => {
      console.log('发送成功')
    })
    .catch((err) => {
      console.log('发送失败', err)
    })
}

export function sendError(args: string, options?: any) {
  console.log('错误统计：', args, options)
  request(
    {
      url: `error/upload`,
      data: { msg: args },
      method: 'POST'
    },
    'error/upload'
  )
    .then((res) => {
      console.log('发送成功')
    })
    .catch((err) => {
      console.log('发送失败', err)
    })
}

export const getSysInfo = async (options?: any) => {
  // const sysInfo = Taro.getSystemInfoSync() as unknown as any
  const platform = await DeviceInfo.getModel()
  const version = await DeviceInfo.getVersion()
  const system = await DeviceInfo.getReadableVersion()
  const os = await DeviceInfo.getDeviceId()
  const lang = await DeviceInfo.getApiLevel()
  // 使用uuid作为用户唯一标识
  const h = {
    platform: platform,
    os: os,
    lang: lang,
    ov: system,
    vr: version
  }
  let device_info
  const _device_info =  await AsyncStorage.getItem('device_info', device_info)
  if (device_info) {
    device_info = _device_info
  } else {
    device_info = CryptoJS.SHA256(JSON.stringify(h), 'secretKey').toString()
    await AsyncStorage.setItem('device_info', device_info)
  }
  return JSON.stringify({ start_time: new Date().getTime(), h: { ...h, device_info }, options })
}


