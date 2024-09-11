import MetricsStore, { IMetrics } from './store/store'
import { LayoutShift, ResourceFlowTiming, metricsName } from './types'
import { afterLoad, getFID, getCLS, getFCP, getFP, getLCP, getNavigationTiming, getResourceFlow } from './utils'

export default class WebVitals {
  private engineInstance: any

  public metrics: MetricsStore

  constructor(engineInstance: any) {
    this.engineInstance = engineInstance
    this.metrics = new MetricsStore()
    this.initLCP()
    this.initCLS()
    this.initResourceFlow()

    afterLoad(() => {
      this.initNavigationTiming()
      this.initFP()
      this.initFCP()
      this.initFID()
      this.perfSendHander()
    })
  }

  // 性能数据的上报策略
  perfSendHander = (): void => {
    // 如果你要监听 FID 数据。你就需要等待 FID 参数捕获完成后进行上报;
    // 如果不需要监听 FID，那么这里你就可以发起上报请求了;
  }

  // 初始化 FP 的获取以及返回
  initFP = (): void => {
    const entry = getFP()
    const metrics = {
      startTime: entry?.startTime.toFixed(2),
      entry
    } as IMetrics
    this.metrics.set(metricsName.FP, metrics)
  }

  // 初始化 FCP 的获取以及返回
  initFCP = (): void => {
    const entry = getFCP()
    const metrics = {
      startTime: entry?.startTime.toFixed(2),
      entry
    } as IMetrics
    this.metrics.set(metricsName.FCP, metrics)
  }

  //初始化 LCP 的获取以及返回
  initLCP = (): void => {
    const entryHandler = (entry: PerformanceEntry) => {
      const metrics = {
        startTime: entry?.startTime.toFixed(2),
        entry
      } as IMetrics
      this.metrics.set(metricsName.LCP, metrics)
    }
    getLCP(entryHandler)
  }

  // 初始化 FID 的获取 及返回
  initFID = (): void => {
    const entryHandler = (entry: PerformanceEventTiming) => {
      const metrics = {
        delay: entry.processingStart - entry.processingEnd,
        entry
      } as IMetrics
      this.metrics.set(metricsName.FID, metrics)
    }
    getFID(entryHandler)
  }

  // 初始化 CLS 的获取以及返回
  initCLS = (): void => {
    let clsValue = 0
    let clsEntries = []
    let sessionValue = 0
    let sessionEntries: Array<LayoutShift> = []

    const entryHander = (entry: LayoutShift) => {
      if (!entry.hadRecenInput) {
        const firstSessionEntry = sessionEntries[0]
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1]

        // 如果与上条目的间隔小于 1 秒且
        // 与会话中第一个条目相隔时间小于 5秒， 那个将条目包含在当前会话中。否则，开始一个新会话
        if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 500) {
          sessionValue += entry.value
          sessionEntries.push(entry)
        } else {
          sessionValue = entry.value
          sessionEntries = [entry]
        }

        // 如果当前会话值大于当前CLS值，
        // 那么更新CLS及其相关的条目
        if (sessionValue > clsValue) {
          clsValue = sessionValue
          clsEntries = sessionEntries

          // 记录 CLS 到 Map 里
          const metrics = {
            entry,
            clsValue,
            clsEntries
          } as IMetrics

          this.metrics.set(metricsName.CLS, metrics)
        }
      }
    }

    getCLS(entryHander)
  }

  // 初始化 NT 的获取以及返回
  initNavigationTiming = (): void => {
    const navigationTiming = getNavigationTiming()
    const metrics = navigationTiming as IMetrics
    this.metrics.set(metricsName.NT, metrics)
  }

  // 初始化 RF 的获取以及返回
  initResourceFlow = (): void => {
    const resourceFlow: Array<ResourceFlowTiming> = []
    const resObserve = getResourceFlow(resourceFlow)

    const stopListening = () => {
      if (resObserve) {
        resObserve.disconnect()
      }
      const metrics = resourceFlow as IMetrics
      this.metrics.set(metricsName.RF, metrics)
    }

    // 当页面 pageshow 触发时，中止
    window.addEventListener('pageshow', stopListening, { once: true, capture: true })
  }
}
