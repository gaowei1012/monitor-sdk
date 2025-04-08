import { useEffect } from 'react'
import { sendPv, getSysInfo } from '../utils/index'

const usePv = ({ getExtra }: { getExtra?: () => any }) => {
  useEffect(() => {
    ;(async () => {
      const sysInfo = await getSysInfo()
      const extra = getExtra?.()
      extra ? sendPv(sysInfo, extra) : sendPv(sysInfo, '')
    })()
  }, [])
}

export default usePv
