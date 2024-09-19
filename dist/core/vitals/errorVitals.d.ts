import { ErrorVitalsInitOptions, ExceptionMetrics, React, Vue } from '../types';
export default class ErrorVitals {
    private engineInstance;
    private submitErrorUids;
    constructor(engineInstance: any, options: ErrorVitalsInitOptions);
    errorSendHandler: (data: ExceptionMetrics) => void;
    initJsError: () => void;
    initResourceError: () => void;
    initPromiseError: () => void;
    initHttpError: () => void;
    initCorsError: () => void;
    initReactError: (app: React) => void;
    initVueError: (app: Vue) => void;
}
