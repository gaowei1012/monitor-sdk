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
