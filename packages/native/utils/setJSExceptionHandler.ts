import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue'
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler'
import { sendError } from './utils'

/**
 * @description: 设置 JS 异常处理
 * @param {any} options
 * @return {*}
 */
export const setErrorHandler = () => {
  setJSExceptionHandler((error, isFatal) => {
    console.log('error', error)
    console.log('isFatal', isFatal)
    // 发送错误信息
    sendError(JSON.stringify(error), isFatal)
  }, true)
}

/**
 * @description: 设置原生异常处理
 * @param {any} options
 * @return {*}
 */
export const setNativeErrorHandler = () => {
  setNativeExceptionHandler((errorString) => {
    console.log('errorString', errorString)
    // 发送错误信息
    sendError(errorString, false)
  }, true)
}


export const setErrorHandlerAndNative = () => {
  // 设置 JS 异常处理
  MessageQueue.spy = (spy) => {
    console.log('spy', spy)
  }
}
