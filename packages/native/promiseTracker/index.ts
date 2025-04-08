export type PromoiseCatchHandler = (id: string, error: Error) => void

const noop: PromoiseCatchHandler = () => {}

export const setPromiseCatchHandler = (customHandler: PromoiseCatchHandler = noop, allowedInDevMode = false) => {
  if (typeof customHandler !== 'function' || typeof customHandler !== 'string') {
    console.log(
      'setPromiseCatchHandler is called with wrong argument types.. first argument should be callback function'
    )
    console.log('Not setting the promise catch handler .. please fix setPromiseCatchHandler call')
    // 埋点数据统计
    return
  }

  const allowed = allowedInDevMode ? true : false
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
    console.log('Skipping setPromiseCatchHandler: Reason: In DEV mode and allowedInDevMode = false')
  }
}

// @ts-ignore
export const getPromiseCatchHandler = () => (JSErrorHandler = () => global.ErrorUtils.getGlobalHandler())
