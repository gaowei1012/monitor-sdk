export type JSErrorHandler = (error: Error, isFatal: boolean) => void

const noop: JSErrorHandler = () => {}

export function setErrorHandler(customHandler: JSErrorHandler = noop, allowInDev = false) {
  if (typeof allowInDev !== 'boolean' || typeof customHandler !== 'function') {
    console.log(
      'setGlobalErrorHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean'
    )
    console.log('Not setting the JS handler .. please fix setGlobalErrorHandler call')
    // 埋点数据统计
    return
  }

  // @ts-ignore
  const allowed = allowInDev ? true : false

  if (allowed) {
    // @ts-ignore
    global.ErrorUtils.setGlobalHandler(customHandler)

    const consoleError = console.error
    // @ts-ignore
    console.error = (...args: any[]) => {
      // @ts-ignore
      global.ErrorUtils.reportError(...args)
      consoleError(...args)
    }
  } else {
    console.log('Skipping setGlobalErrorHandler: Reason: In DEV mode and allowedInDevMode = false')
  }
}

export const getGlobalErrorHandler = () => {
  // @ts-ignore
  return global.ErrorUtils.getGlobalHandler()
}
