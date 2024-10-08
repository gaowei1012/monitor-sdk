import { ErrorVitalsInitOptions, ExceptionMetrics, httpMetrics, mechanismType, React, ResourceErrorTarget, ViewModel, Vue } from '../types'
import { getErrorKey, getErrorUid, parseStatckFrames, proxyFetch, proxyXmlHttp, formatComponentName } from '../utils'

export default class ErrorVitals {
  private engineInstance: any

  private submitErrorUids: Array<string>

  constructor(engineInstance: any, options: ErrorVitalsInitOptions) {
    const { React } = options
    this.engineInstance = engineInstance
    this.submitErrorUids = []

    // 初始化 js错误
    this.initJsError()
    // 初始化 静态资源加载错误
    this.initResourceError()
    // 初始化 Promise异常
    this.initPromiseError()
    // 初始化 HTTP请求异常
    this.initHttpError()
    // 初始化 跨域异常
    this.initCorsError()
    // 初始化 React异常
    this.initReactError(React)
  }

  // 封装错误的上报入口，上报前，判断错误是否已经发生过
  errorSendHandler = (data: ExceptionMetrics) => {
    const submitParams = {
      ...data,
      breadcrumbs: this.engineInstance.userInstance.breadcrumbs.get(),
      pageInformation: this.engineInstance.userInstance.metrics.get('page-information')
    } as ExceptionMetrics
    // 判断同一个错误在本次请求中是否已经发生过
    const hasSubmitStatus = this.submitErrorUids.includes(submitParams.errorUid)
    // 检查一下错误在本次页面访问中，是否已经产生过
    if (hasSubmitStatus) return
    this.submitErrorUids.push(submitParams.errorUid)
    // 记录后清除 breadcrumbs
    this.engineInstance.userInstance.breadcrumbs.clear()
    // 一般来说，有报错就立刻上报;
    this.engineInstance.transportInstance.kernelTransportHandler(this.engineInstance.transportInstance.formatTransportData('error', submitParams))
  }

  // 初始化 JS异常 的数据获取和上报
  initJsError = (): void => {
    const handler = (event: ErrorEvent) => {
      // 阻止向上抛出控制台报错
      event.preventDefault()
      if (getErrorKey(event) !== mechanismType.JS) return
      const exception = {
        // 上报错误归类
        mechanism: {
          type: mechanismType.JS
        },
        // 错误信息
        value: event.message,
        // 错误类型
        type: (event.type && event.error.name) || 'UnKnowun',
        // 解析后的错误堆栈
        stackTrace: {
          frames: parseStatckFrames(event.error)
        },
        // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
        // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
        // 错误的标识码
        errorUid: getErrorUid(`${mechanismType.JS}-${event.message}-${event.filename}`),
        meta: {
          // file 解析所处的文件地址
          file: event.filename,
          // col 错误列号
          col: event.colno,
          // row 错误行号
          row: event.lineno
        }
      } as ExceptionMetrics
      this.errorSendHandler(exception)
    }
    window.addEventListener('error', (event) => handler(event), true)
  }

  // 初始化 静态资源异常 的数据获取和上报
  initResourceError = (): void => {
    const handler = (event: Event) => {
      // 阻止事件向上冒泡
      event.preventDefault()
      if (getErrorKey(event) != mechanismType.RS) return
      const target = event.target as ResourceErrorTarget
      // 上报错误归类
      const exception = {
        mechanis: {
          type: mechanismType.RS
        },
        // 错误信息
        value: '',
        // 错误类型
        type: 'ResourceError',
        // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
        // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
        // 错误的标识码
        errirUid: getErrorUid(`${mechanismType.RS}-${target.src}-${target.tagName}`),
        meta: {
          url: target.src,
          html: target.outerHTML,
          type: target.tagName
        },
      } as unknown as ExceptionMetrics;
      // 一般错误异常立刻上报，不用缓存在本地
      this.errorSendHandler(exception)
    }
    window.addEventListener('error', (event) => handler(event), true)
  }

  // 初始化 Promise异常 的数据获取和上报
  initPromiseError = (): void => {
    const handler = (event: PromiseRejectionEvent) => {
      // 阻止事件向上冒泡
      event.preventDefault()
      const value = event.reason.message || event.reason
      const type = event.reason.name || 'UnKnowun'
      const exception = {
        mechanis: {
          type: mechanismType.UJ
        },
        // 错误信息
        value,
        // 错误类型
        type,
        // 解析后的错误堆栈
        statckTrace: {
          frames: parseStatckFrames(event.reason)
        },
        // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
        // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
        // 错误的标识码
        errirUid: getErrorUid(`${mechanismType.UJ}-${value}-${type}`),
        // 附带信息
        meta: {},
      } as unknown as ExceptionMetrics
       // 一般错误异常立刻上报，不用缓存在本地
      this.errorSendHandler(exception)
    }
    window.addEventListener('unhandledrejection', (event) => handler(event), true)
  }

  // 初始化 HTTP请求异常 的数据获取和上报
  initHttpError = (): void => {
    const loadHandler = (metrics: httpMetrics) => {
      if (metrics.status < 400) return
      const value = metrics.response
      const exception = {
        mechanis: {
          type: mechanismType.HP
        },
        // 错误信息
        value,
        // 错误类型
        type: 'HttpError',
        // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
        // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
        // 错误的标识码
        errirUid: getErrorUid(`${mechanismType.HP}-${value}-${metrics.statusText}`),
        // 附带信息
        meta: {
          metrics
        },
      } as unknown as ExceptionMetrics
      // 一般错误异常立刻上报，不用缓存在本地
      this.errorSendHandler(exception)
    }
    proxyXmlHttp(null, loadHandler)
    proxyFetch(null, loadHandler)
  }

  // 初始化 跨域异常 的数据获取和上报
  initCorsError = (): void => {
    const handler = (event: ErrorEvent) => {
      // 阻止事件向上冒泡
      event.preventDefault()
      if (getErrorKey(event) !== mechanismType.CS) return
      const exception = {
        mechanis: {
          type: mechanismType.HP
        },
        // 错误信息
        value: event.message,
        // 错误类型
        type: 'HttpError',
        // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
        // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
        // 错误的标识码
        errirUid: getErrorUid(`${mechanismType.HP}-${event.message}`),
        // 附带信息
        meta: {},
      } as unknown as ExceptionMetrics
      // 自行上报异常，也可以跨域脚本的异常都不上报;
      this.errorSendHandler(exception)
    }
    window.addEventListener('error', (event) => handler(event), true)
  }

  // 初始化 Vue异常 的数据获取和上报
  initReactError = (app: React): void => {
    //... 详情代码在下
  }

  // 初始化 Vue异常 的数据获取和上报
  initVueError = (app: Vue): void => {
    app.config.errorHandler = (err: Error, vm: ViewModel, info: string):void => {
      const componentName = formatComponentName(vm, false)
      const exception = {
        // 上报错误归类
        mechanism: {
          type: mechanismType.VUE
        },
        // 错误信息
        value: err.message,
        // 错误类型
        type: err.name,
        // 解析后的错误堆栈
        statckTrace: {
          frames: parseStatckFrames(err)
        },
        // 错误标识
        errirUid: getErrorUid(`${mechanismType.HP}-${err.message}-${componentName}-${info}`),
        // 附带信息
        meta: {
          // 报错的vue组件名称
          componentName,
          // 报错的Vue阶段
          hook: info
        }
      } as unknown as ExceptionMetrics
      // 自行上报异常，也可以跨域脚本的异常都不上报;
      this.errorSendHandler(exception)
    }
  }
}
