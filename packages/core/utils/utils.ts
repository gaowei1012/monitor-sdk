import { httpMetrics, mechanismType, MPerformanceNavigationTiming, OriginInformation, PageInformation, PerformanceEntryHander, ResourceFlowTiming } from '../types'

// afterLoad function
export const afterLoad = (callback: any) => {
  if (document.readyState === 'complete') {
    setTimeout(callback)
  } else {
    window.addEventListener('pageshow', callback, { once: true, capture: true })
  }
}

// observe
export const observe = (type: string, callback: PerformanceEntryHander): PerformanceObserver | undefined => {
  if (PerformanceObserver.supportedEntryTypes?.includes(type)) {
    const ob: PerformanceObserver = new PerformanceObserver((l) => l.getEntries().map(callback))
    ob.observe({ type, buffered: true })
    return ob
  }
  return undefined
}

// 获取 FP
export const getFP = (): PerformanceEntry | undefined => {
  const [entry] = performance.getEntriesByName('first-panit')
  return entry
}

// 获取 FCP
export const getFCP = (): PerformanceEntry | undefined => {
  const [entry] = performance.getEntriesByName('first-contenful-paint')
  return entry
}

// 获取 LCP
export const getLCP = (entryHandler: PerformanceEntryHander): PerformanceObserver | undefined => {
  return observe('largest-contentful-paint', entryHandler)
}

// 获取 FID
export const getFID = (entryHander: PerformanceEntryHander): PerformanceObserver | undefined => {
  return observe('first-input', entryHander)
}

// 获取 CLS
export const getCLS = (entryHander: PerformanceEntryHander): PerformanceObserver | undefined => {
  return observe('layout-shift', entryHander)
}

// 获取 NT
export const getNavigationTiming = (): MPerformanceNavigationTiming | undefined => {
  const resolveNavigationTiming = (entry: PerformanceNavigationTiming): MPerformanceNavigationTiming => {
    const { domainLookupStart, domainLookupEnd, connectStart, connectEnd, secureConnectionStart, responseStart, responseEnd, domInteractive, domContentLoadedEventEnd, loadEventStart, fetchStart } =
      entry
    return {
      // 关键时间点
      FP: responseEnd - fetchStart,
      TTI: domInteractive - fetchStart,
      DomRead: domContentLoadedEventEnd - fetchStart,
      Load: loadEventStart - fetchStart,
      FirstByte: responseStart - domainLookupStart,
      // 关键时间段
      DNS: domainLookupEnd - domainLookupStart,
      TCP: connectEnd - connectStart,
      SSL: secureConnectionStart ? connectEnd - secureConnectionStart : 0,
      TTFB: responseEnd - responseStart,
      DomParse: domInteractive - responseStart,
      Res: loadEventStart - domContentLoadedEventEnd
    }
  }

  const navigation = performance.getEntriesByType('navigation').length > 0 ? performance.getEntriesByType('navigation')[0] : performance.timing
  return resolveNavigationTiming(navigation as PerformanceNavigationTiming)
}

// 获取 RF
export const getResourceFlow = (resourceFlow: Array<ResourceFlowTiming>): PerformanceObserver | undefined => {
  const entryHander = (entry: PerformanceResourceTiming) => {
    const { name, transferSize, initiatorType, startTime, responseEnd, domainLookupEnd, domainLookupStart, connectStart, connectEnd, secureConnectionStart, responseStart, requestStart } = entry
    resourceFlow.push({
      // name 资源地址
      name,
      // transferSize 传输大小
      transferSize,
      // initiatorType 资源类型
      initiatorType,
      // startTime 开始时间
      startTime,
      // responseEnd 结束时间
      responseEnd,
      // 贴近 Chrome 的近似分析方案，受到跨域资源影响
      dnsLookup: domainLookupEnd - domainLookupStart,
      initialConnect: connectEnd - connectStart,
      ssl: connectEnd - secureConnectionStart,
      request: responseStart - requestStart,
      ttfb: responseStart - requestStart,
      contentDownload: responseStart - requestStart
    })
  }
  return observe('resource', entryHander)
}

export const getOriginInfo = (): OriginInformation => {
  return {
    referrer: document.referrer,
    type: window.performance?.navigation.type || ''
  }
}

export const getPageInfo = (): PageInformation => {
  const { host, hostname, href, protocol, origin, port, pathname, search, hash } = window.location
  const { width, height } = window.screen
  const { language, userAgent } = navigator
  return {
    host,
    hostname,
    href,
    protocol,
    origin,
    port,
    pathname,
    search,
    hash,
    title: document.title,
    language: language.substr(0, 2),
    userAgent,
    winScreen: `${width}x${height}`,
    docScreen: `${document.documentElement.clientWidth || document.body.clientWidth}x${document.documentElement.clientHeight || document.body.clientHeight}`
  }
}

// wr
export const wr = (type: keyof History) => {
  const orig = history[type]
  return function (this: unknown) {
    const rv = orig.apply(this, arguments)
    const e = new Event(type)
    window.dispatchEvent(e)
    return rv
  }
}

// 添加 pushState replaceState 事件
export const wrHistory = (): void => {
  history.pushState = wr('pushState')
  history.replaceState = wr('replaceState')
}

// 为 pushState 以及 replaceState 方法添加 Event 事件
export const proxyHistory = (handler: Function): void => {
  // 添加对 replaceState 的监听
  window.addEventListener('replaceState', (e) => handler(e), true)
  // 添加对 pushState 的监听
  window.addEventListener('pushState', (e) => handler(e), true)
}

// 为 hashchange 以及 popstate 方法添加 Event 事件
export const proxyHash = (handler: Function): void => {
  // 添加对 replaceState 的监听
  window.addEventListener('hashchange', (e) => handler(e), true)
  // 添加对 pushState 的监听
  window.addEventListener('popstate', (e) => handler(e), true)
}

// proxyXmlHttp
export const proxyXmlHttp = (sendHanler: Function | null | undefined, loadHandler: Function) => {
  if ('XMLHttpRequest' in window && typeof window.XMLHttpRequest === 'function') {
    const oXMLHttpRequest = window.XMLHttpRequest
    if (!(window as any).oXMLHttpRequest) {
      ;(window as any).oXMLHttpRequest = oXMLHttpRequest
    }
    ;(window as any).XMLHttpRequest = function () {
      // 覆写 window.XMLHttpRequest
      const xhr = new oXMLHttpRequest()
      const { open, send } = xhr
      let metrics = {} as httpMetrics
      xhr.open = (method, url) => {
        metrics.method = method
        metrics.url = url
        open.call(xhr, method, url, true)
      }
      xhr.send = (body) => {
        metrics.body = body || ''
        metrics.requestTime = new Date().getTime()
        // sendHandler 可以在发送 Ajax 请求之前，挂载一些信息，比如 header 请求头
        // setRequestHeader 设置请求header，用来传输关键参数等
        // xhr.setRequestHeader('xxx-id', 'VQVE-QEBQ');
        if (typeof sendHanler === 'function') sendHanler(xhr)
        send.call(xhr, body)
      }
      xhr.addEventListener('loadend', () => {
        const { status, statusText, response } = xhr
        metrics = {
          ...metrics,
          status,
          statusText,
          response,
          responseTime: new Date().getTime()
        }
        if (typeof loadHandler === 'function') loadHandler(metrics)
      })
      return xhr
    }
  }
}

// 调用 proxyFetch 即可完成全局监听 fetch
export const proxyFetch = (sendHandler: Function | null | undefined, loadHandler: Function) => {
  if ('fetch' in window && typeof window.fetch === 'function') {
    const oFecth = window.fetch
    if (!(window as any).oFecth) {
      ;(window as any).oFecth = oFecth
    }
    ;(window as any).fetch = async (input: any, init: RequestInit) => {
      if (typeof sendHandler === 'function') sendHandler(init)
      let metrics = {} as httpMetrics
      metrics.method = init?.method || ''
      metrics.url = (input && typeof input !== 'string' ? input?.url : input) || ''
      metrics.body = init?.body || ''
      metrics.requestTime = new Date().getTime()

      return oFecth.call(window, input, init).then(async (response) => {
        const res = response.clone()
        metrics = {
          ...metrics,
          status: res.status,
          statusText: res.statusText,
          response: res.response,
          responseTime: res.responseTime
        }
        if (typeof loadHandler === 'function') loadHandler(metrics)
      })
    }
  }
}

// 判断JS异常、静态资源异常、还是跨域异常
export const getErrorKey = (event: ErrorEvent | Event) => {
  const isJsError = event instanceof ErrorEvent
  if (!isJsError) return mechanismType.RS
  return event.message === 'Script error.' ? mechanismType.CS : mechanismType.JS
}

// 对每一个错误详情，生成一串编码
export const getErrorUid = (input: string) => {
  return window.btoa(unescape(encodeURIComponent(input)))
}

// 正则表达式，用以解析堆栈split后得到的字符串
const FULL_MATCH = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i

// 限制只追溯10个
const STACKTRACE_LIMIT = 10

// 解析每一行
export function parseStatckLine(line: string) {
  const lineMatch = line.match(FULL_MATCH)
  if (!lineMatch) return {}
  const filename = lineMatch[2]
  const functionName = lineMatch[1] || ''
  const lineno = parseInt(lineMatch[3], 10) || undefined
  const colno = parseInt(lineMatch[4], 10) || undefined
  return {
    filename,
    functionName,
    lineno,
    colno
  }
}

// 解析错误堆栈
export function parseStatckFrames(error: Error) {
  const { stack } = error
  // 无 statck 返回
  if (!stack) return []
  const frames = []
  for (const line of stack.split('\n').slice(1)) {
    const frame = parseStatckLine(line)
    if (frame) {
      frames.push(frame)
    }
  }
  return frames.slice(0, STACKTRACE_LIMIT)
}
