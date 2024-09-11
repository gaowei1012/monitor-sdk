import UserMetricsStore, { IMetrics } from '../store/userStore'
import { CustomAnalyticsData, OriginInformation, PageInformation, behaviorStack, httpMetrics, metricsName } from '../types/index'
import { afterLoad, getOriginInfo, getPageInfo, proxyFetch, proxyHash, proxyHistory, proxyXmlHttp, wrHistory } from '../utils'
import BehaviorStore from '../store/behaviorStore'

export default class UserVitals {
  private engineInstance: any

  // 本地暂存数据在 Map 里 （也可以自己用对象来存储）
  public metrics: UserMetricsStore

  public breadcrumbs

  public customHandler: Function

  // 最大行为追踪记录数
  public maxBehaviorRecords: number

  // 允许捕获click事件的DOM标签 eg:button div img canvas
  clickMountList: Array<string>

  constructor(engineInstance: any) {
    this.engineInstance = engineInstance
    this.metrics = new UserMetricsStore()
    // 限制最大行为追踪记录数 100，真实场景下需要外部传入自定义
    this.maxBehaviorRecords = 100
    // 初始化行为追踪记录
    this.breadcrumbs = new BehaviorStore({ maxBehaviorRecords: this.maxBehaviorRecords })
    // 初始化 用户自定义 事件捕获
    this.customHandler = this.initCustomerHandler()
    // 作为 真实sdk 的时候，需要在初始化时传入与默认值合并
    this.clickMountList = ['button'].map((x) => x.toLowerCase())

    // 重写事件
    wrHistory()
  }

  // 封装用户行为的上报入口
  userSendHandler = (data: IMetrics) => {
    // 进行通知内核实例进行上报;
  }

  // 补齐 pathname 和 timestamp 参数
  getExtends = (): { page: string; timestamp: number | string } => {
    return {
      page: getPageInfo().pathname,
      timestamp: new Date().getTime()
    }
  }

  // 初始化用户自定义埋点数据的获取上报
  initCustomerHandler = (): Function => {
    const handler = (options: CustomAnalyticsData) => {
      // 记录到 UserMetricsStore
      this.metrics.add(metricsName.CDR, options)
      // 自定义埋点的信息一般立即上报
      this.userSendHandler(options)
      // 记录到用户行为记录栈
      this.breadcrumbs.push({
        category: metricsName.CDR,
        data: options,
        ...this.getExtends()
      })
    }
    return handler
  }

  // 初始化 PI 页面基本信息的获取以及返回
  initPageInfo = (): void => {
    const info: PageInformation = getPageInfo()
    const metrics = info as IMetrics
    this.metrics.set(metricsName.PI, metrics)
  }

  // 初始化 RCR 路由跳转的获取以及返回
  initRouteChange = (): void => {
    const handler = (e: Event) => {
      // 正常记录
      const metrics = {
        // 跳转方法类型
        jumpType: e.type,
        // 创建时间
        timestamp: new Date().getTime(),
        // 页面信息
        pageInfo: getPageInfo()
      } as IMetrics
      // 一般路由跳转的信息不会进行上报，根据业务形态决定；
      this.metrics.add(metricsName.RCR, metrics)

      // 行为记录，不需要携带pageInfo
      delete metrics['pageInfo']
      // 记录到行为记录追踪
      const behavior = {
        category: metricsName.RCR,
        data: metrics,
        ...this.getExtends()
      } as unknown as behaviorStack
      this.breadcrumbs.push(behavior)
    }
    proxyHash(handler)
    // 为 pushState 以及 replaceState 方法添加 Evetn 事件
    proxyHistory(handler)
  }

  // 初始化 PV 的获取以及返回
  initPV = (): void => {
    const handler = () => {
      const metrics = {
        timestamp: new Date().getTime(),
        pageInfo: getPageInfo(),
        originInformation: getOriginInfo()
      } as IMetrics
      this.userSendHandler(metrics)
    }
    afterLoad(() => {
      handler()
    })
    proxyHash(handler)
    proxyHistory(handler)
  }

  // 初始化 OI 用户来路的获取以及返回
  initOriginInfo = (): void => {
    const info: OriginInformation = getOriginInfo()
    const metrics = info as IMetrics
    this.metrics.set(metricsName.OI, metrics)
  }

  // 初始化 CBR 点击事件的获取和返回
  initClickHandler = (mountList: Array<string>): void => {
    const handler = (e: MouseEvent | any) => {
      let target = e.path?.find((x: Element) => mountList.includes(x.tagName?.toLowerCase()))
      target = target || (mountList.includes(e.target.tagName?.toLowerCase()) ? e.target : undefined)

      if (!target) return
      const metrics = {
        tagInfo: {
          id: target.id,
          classList: Array.from(target.classList),
          tagName: target.tagName,
          text: target.textContent
        },
        timestamp: new Date().getTime(),
        pageInfo: getPageInfo()
      } as IMetrics
      // 除开商城业务外，一般不会特意上报点击行为的数据，都是作为辅助检查错误的数据存在;
      this.metrics.add(metricsName.CBR, metrics)
      // 行为记录 不需要携带 完整的pageInfo
      // delete metrics.pageInfo;
      const behavior = {
        category: metricsName.CBR,
        data: metrics,
        ...this.getExtends()
      } as unknown as behaviorStack
      this.breadcrumbs.push(behavior)
    }

    window.addEventListener('click', (e) => {
      handler(e), true
    })
  }

  // 初始化 http 请求的数据获取和上报
  initHttpHandler = (): void => {
    const loadHandler = (metrice: httpMetrics) => {
      // 对于正常请求的 HTTP 请求来说,不需要记录 请求体 和 响应体
      if (metrice.status < 400) {
        delete metrice.response
        delete metrice.body
      }
      // 记录到 UserMetricsStore
      this.metrics.add(metricsName.HT, metrice)

      // 记录到用户行为记录栈
      this.breadcrumbs.push({
        category: metricsName.HT,
        data: metrice,
        ...this.getExtends()
      })
    }
    proxyXmlHttp(null, loadHandler)
    proxyFetch(null, loadHandler)
  }
}
