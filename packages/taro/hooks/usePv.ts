import { useDidShow } from '@tarojs/taro'
import { getPath, sendPv, getSysInfo } from '../utils/index'

const usePv = ({ getExtra }: { getExtra?: () => any }) => {
  useDidShow(() => {
    const currentPath = getPath()
    const sysInfo = getSysInfo({
      path: currentPath
    })
    const extra = getExtra?.()
    extra ? sendPv(sysInfo, extra) : sendPv(sysInfo, "")
  })
}

export default usePv
