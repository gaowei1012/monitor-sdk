import Taro from '@tarojs/taro'
import CryptoJS from 'crypto-js'
import { doRequest } from '../services/request'

export const getPath = () => {
  const path = Taro.getCurrentInstance().router.path || ''
  return path.match(/^\/*/) ? path.replace(/^\/*/, '') : path
}

export function sendPv(args: string, options?: string) {
  console.log('埋点：args', args, options)
  // 发送埋点数据
  doRequest(`msg/upload`, { msg: args })
    .then((res) => {
      console.log('发送成功')
    })
    .catch((err) => {
      console.log('发送失败', err)
    })
}

export function sendError(args: string, options?: any) {
  console.log('错误统计：', args, options)
  doRequest(`error/upload`, { msg: args })
    .then((res) => {
      console.log('发送成功')
    })
    .catch((err) => {
      console.log('发送失败', err)
    })
}

export const getSysInfo = (options?: any) => {
  const sysInfo = Taro.getSystemInfoSync() as unknown as any
  // 使用uuid作为用户唯一标识
  const h = {
    platform: sysInfo.app,
    os: sysInfo.platform,
    lang: sysInfo.language,
    ov: sysInfo.system,
    vr: sysInfo.version
  }
  let device_info
  const _device_info = Taro.getStorageSync('device_info')
  if (device_info) {
    device_info = _device_info
  } else {
    device_info = CryptoJS.SHA256(JSON.stringify(h), 'secretKey').toString()
    Taro.setStorageSync('device_info', device_info)
  }
  return JSON.stringify({ dt: sysInfo.brand, start_time: new Date().getTime(), h: { ...h, device_info }, options })
}
