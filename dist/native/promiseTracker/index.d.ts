export type PromoiseCatchHandler = (id: string, error: Error) => void;
export declare const setPromiseCatchHandler: (customHandler?: PromoiseCatchHandler, allowedInDevMode?: boolean) => void;
export declare const getPromiseCatchHandler: () => () => any;
