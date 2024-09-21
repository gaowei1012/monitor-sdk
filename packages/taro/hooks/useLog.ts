import { useContext, useRef, useCallback, useEffect, createContext } from 'react'

export const LogContext = createContext({})

export const useLog = () => {
  const message = useContext(LogContext)
  const listenDOM = useRef(null)

  // 分清依赖关系
  const reportMessage = useCallback(
    function (data: any, type: string) {
      if (type == 'pv') {
        console.log('组件 pv 上报', message)
      } else if (type == 'click') {
        console.log('组件 click 上报', message, data)
      }
    },
    [message]
  )

  useEffect(() => {
    const handleClick = function (e: { target: any }) {
      reportMessage(e.target, 'click')
    }
    if (listenDOM.current) {
      listenDOM.current.addEventListener('click', handleClick)
    }
    return function () {
      listenDOM.current && listenDOM.current.removeEventListener('click', handleClick)
    }
  }, [reportMessage])

  return [listenDOM, reportMessage]
}
