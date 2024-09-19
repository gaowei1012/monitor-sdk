export interface PerformanceEntryHander {
    (entry: any): void;
}
export interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecenInput: boolean;
}
export interface MPerformanceNavigationTiming {
    FP?: number;
    TTI?: number;
    DomRead?: number;
    Load?: number;
    FirstByte?: number;
    DNS?: number;
    TCP?: number;
    SSL?: number;
    TTFB?: number;
    Trans?: number;
    DomParse?: number;
    Res?: number;
}
export interface ResourceFlowTiming {
    name: string;
    transferSize: number;
    initiatorType: string;
    startTime: number;
    responseEnd: number;
    dnsLookup: number;
    initialConnect: number;
    ssl: number;
    request: number;
    ttfb: number;
    contentDownload: number;
}
export interface PageInformation {
    host: string;
    hostname: string;
    href: string;
    protocol: string;
    origin: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    title: string;
    language: string;
    userAgent?: string;
    winScreen: string;
    docScreen: string;
}
export interface OriginInformation {
    referrer: string;
    type: number | string;
}
export interface behaviorRecordsOptions {
    maxBehaviorRecords: number;
}
export interface behaviorStack {
    name: metricsName;
    page: string;
    timestamp: number | string;
    value: Object;
}
export declare enum metricsName {
    FP = "first-panit",
    FCP = "first-contentful-paint",
    LCP = "largest-contentful-paint",
    FID = "first-input-delay",
    CLS = "cumulative-layout-shift",
    NT = "navigation-timing",
    RF = "resource-flow",
    PI = "page-information",
    OI = "origin-information",
    RCR = "router-change-record",
    CBR = "click-behavior-record",
    CDR = "custom-define-record",
    HT = "http-record"
}
export interface CustomAnalyticsData {
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
    eventValue?: string;
}
export interface httpMetrics {
    method: string;
    url: string | URL;
    body: Document | XMLHttpRequestBodyInit | null | undefined | ReadableStream;
    requestTime: number;
    responseTime: number;
    status: number;
    statusText: string;
    response?: any;
}
export declare enum mechanismType {
    JS = "js",
    RS = "resource",
    UJ = "unhandledrejection",
    HP = "http",
    CS = "cors",
    VUE = "vue",
    REACT = "react"
}
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
    Vue: any;
    React: any;
}
export interface ResourceErrorTarget {
    src?: string;
    tagName?: string;
    outerHTML?: string;
}
export interface Vue {
    config: {
        errorHandler?: any;
        warnHandler?: any;
    };
}
export interface ViewModel {
    _isVue?: boolean;
    __isVue?: boolean;
    $root?: ViewModel;
    $parent?: ViewModel;
    $props?: {
        [key: string]: any;
    };
    $options: {
        name?: string;
        propsData?: {
            [key: string]: any;
        };
        _componentTag?: string;
        __file?: string;
    };
}
export interface React {
    config: {
        errorHandler?: any;
        warnHandler?: any;
    };
}
