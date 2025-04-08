export type JSErrorHandler = (error: Error, isFatal: boolean) => void;
export declare function setErrorHandler(customHandler?: JSErrorHandler, allowInDev?: boolean): void;
export declare const getGlobalErrorHandler: () => any;
