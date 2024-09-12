import UserMetricsStore, { IMetrics } from './store/userStore';
export default class UserVitals {
    private engineInstance;
    metrics: UserMetricsStore;
    breadcrumbs: any;
    customHandler: Function;
    maxBehaviorRecords: number;
    clickMountList: Array<string>;
    constructor(engineInstance: any);
    userSendHandler: (data: IMetrics) => void;
    getExtends: () => {
        page: string;
        timestamp: number | string;
    };
    initCustomerHandler: () => Function;
    initPageInfo: () => void;
    initRouteChange: () => void;
    initPV: () => void;
    initOriginInfo: () => void;
    initClickHandler: (mountList: Array<string>) => void;
    initHttpHandler: () => void;
}
