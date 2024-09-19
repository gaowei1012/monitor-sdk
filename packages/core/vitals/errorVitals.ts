import { ErrorVitalsInitOptions, ExceptionMetrics, mechanismType, ResourceErrorTarget } from '../types'
import { getErrorKey, getErrorUid, parseStatckFrames } from '../utils'

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
    //... 详情代码在下
  }

  // 初始化 HTTP请求异常 的数据获取和上报
  initHttpError = (): void => {
    //... 详情代码在下
  }

  // 初始化 跨域异常 的数据获取和上报
  initCorsError = (): void => {
    //... 详情代码在下
  }

  // 初始化 Vue异常 的数据获取和上报
  initReactError = (app: React): void => {
    //... 详情代码在下
  }
}
