import { mechanismType, MPerformanceNavigationTiming, OriginInformation, PageInformation, PerformanceEntryHander, ResourceFlowTiming, ViewModel } from '../types';
export declare const afterLoad: (callback: any) => void;
export declare const observe: (type: string, callback: PerformanceEntryHander) => PerformanceObserver | undefined;
export declare const getFP: () => PerformanceEntry | undefined;
export declare const getFCP: () => PerformanceEntry | undefined;
export declare const getLCP: (entryHandler: PerformanceEntryHander) => PerformanceObserver | undefined;
export declare const getFID: (entryHander: PerformanceEntryHander) => PerformanceObserver | undefined;
export declare const getCLS: (entryHander: PerformanceEntryHander) => PerformanceObserver | undefined;
export declare const getNavigationTiming: () => MPerformanceNavigationTiming | undefined;
export declare const getResourceFlow: (resourceFlow: Array<ResourceFlowTiming>) => PerformanceObserver | undefined;
export declare const getOriginInfo: () => OriginInformation;
export declare const getPageInfo: () => PageInformation;
export declare const wr: (type: keyof History) => (this: unknown) => any;
export declare const wrHistory: () => void;
export declare const proxyHistory: (handler: Function) => void;
export declare const proxyHash: (handler: Function) => void;
export declare const proxyXmlHttp: (sendHanler: Function | null | undefined, loadHandler: Function) => void;
export declare const proxyFetch: (sendHandler: Function | null | undefined, loadHandler: Function) => void;
export declare const getErrorKey: (event: ErrorEvent | Event) => mechanismType.JS | mechanismType.RS | mechanismType.CS;
export declare const getErrorUid: (input: string) => string;
export declare function parseStatckLine(line: string): {
    filename?: undefined;
    functionName?: undefined;
    lineno?: undefined;
    colno?: undefined;
} | {
    filename: string;
    functionName: string;
    lineno: number;
    colno: number;
};
export declare function parseStatckFrames(error: Error): any[];
export declare const formatComponentName: (vm: ViewModel, includeFile: Boolean) => string;
