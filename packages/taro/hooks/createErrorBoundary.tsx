import { Component, ReactNode } from 'react'
import { getPath, getSysInfo, sendError } from '../utils'

function createErrorBoundary(Page) {
  return class ErrorBoundary extends Component {
    state = {
      hasError: null
    }

    static getDerivedStateFromError() {
      return {
        hasError: true
      }
    }

    // 收集错误
    componentDidCatch(error, errorInfo) {
      const currentPath = getPath()
      const sysInfo = getSysInfo({
        path: currentPath,
        errorMsg: error.message,
        errorInfo: errorInfo['componentStack'] ? errorInfo['componentStack'] : ''
      })
      sendError(sysInfo)
    }

    // render() {
    //   return this.state.hasError ? <>Something went wrong.</> : <Page />
    // }
    // 对页面的错误使用 componentDidCatch 捕获，上报
    // 拦截错误页面
    render(): ReactNode {
      return <Page />
    }
  }
}

export default createErrorBoundary