import { useEffect } from 'react'
import { getPath, sendPv, getSysInfo } from '../utils/index'

const usePv = ({ getExtra }: { getExtra?: () => any }) => {
    useEffect(() => {
    ;(async () => {
      const currentPath = getPath()
      const sysInfo = await getSysInfo({
        path: currentPath
      })
      const extra = getExtra?.()
      extra ? sendPv(sysInfo, extra) : sendPv(sysInfo, '')
    })()
  }, [])
}

export default usePv
