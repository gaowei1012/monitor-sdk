export interface PerformanceEntryHander {
  (entry: any): void
}

// LayoutShift
export interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecenInput: boolean
}

// MPerformanceNavigationTiming
export interface MPerformanceNavigationTiming {
  FP?: number
  TTI?: number
  DomRead?: number
  Load?: number
  FirstByte?: number
  DNS?: number
  TCP?: number
  SSL?: number
  TTFB?: number
  Trans?: number
  DomParse?: number
  Res?: number
}

// ResourceFlowTiming
export interface ResourceFlowTiming {
  name: string
  transferSize: number
  initiatorType: string
  startTime: number
  responseEnd: number
  dnsLookup: number
  initialConnect: number
  ssl: number
  request: number
  ttfb: number
  contentDownload: number
}

export interface PageInformation {
  host: string
  hostname: string
  href: string
  protocol: string
  origin: string
  port: string
  pathname: string
  search: string
  hash: string
  // 网页标题
  title: string
  // 浏览器的语种 (eg:zh) ; 这里截取前两位，有需要也可以不截取
  language: string
  // 用户 userAgent 信息
  userAgent?: string
  // 屏幕宽高 (eg:1920x1080)  屏幕宽高意为整个显示屏的宽高
  winScreen: string
  // 文档宽高 (eg:1388x937)   文档宽高意为当前页面显示的实际宽高（有的同学喜欢半屏显示）
  docScreen: string
}

export interface OriginInformation {
  referrer: string
  type: number | string
}


export interface behaviorRecordsOptions {
  maxBehaviorRecords: number
}

export interface behaviorStack {
  name: metricsName
  page: string
  timestamp: number | string
  value: Object
}

export enum metricsName {
  FP = 'first-panit',
  FCP = 'first-contentful-paint',
  LCP = 'largest-contentful-paint',
  FID = 'first-input-delay',
  CLS = 'cumulative-layout-shift',
  NT = 'navigation-timing',
  RF = 'resource-flow',
  PI = 'page-information',
  OI = 'origin-information',
  RCR = 'router-change-record',
  CBR = 'click-behavior-record',
  CDR = 'custom-define-record',
  HT = 'http-record'
}

// 这里参考了 谷歌GA 的自定义埋点上报数据维度结构
export interface CustomAnalyticsData {
  // 事件类别 互动的对象 eg:Video
  eventCategory: string
  // 事件动作 互动动作方式 eg:play
  eventAction: string
  // 事件标签 对事件进行分类 eg:
  eventLabel: string
  // 事件值 与事件相关的数值   eg:180min
  eventValue?: string
}

// httpMetrics
export interface httpMetrics {
  method: string
  url: string | URL
  body: Document | XMLHttpRequestBodyInit | null | undefined | ReadableStream
  requestTime: number
  responseTime: number
  status: number
  statusText: string
  response?: any
}

// 错误类型枚举
export enum mechanismType {
  JS = 'js',
  RS = 'resource',
  UJ = 'unhandledrejection',
  HP = 'http',
  CS = 'cors',
  VUE = 'vue',
  REACT = 'react'
}

// 格式化后的 异常数据结构体
export interface ExceptionMetrics {
  mechanism: Object;
  value?: string;
  type: string;
  stackTrace?: Object;
  pageInformation?: Object;
  breadcrumbs?: Array<behaviorStack>;
  errorUid: string;
  meta?: any;
}

export interface ErrorVitalsInitOptions {
  Vue: any
}