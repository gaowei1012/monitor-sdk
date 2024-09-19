import MetricsStore from '../store/store';
export default class WebVitals {
    private engineInstance;
    metrics: MetricsStore;
    constructor(engineInstance: any);
    perfSendHander: () => void;
    initFP: () => void;
    initFCP: () => void;
    initLCP: () => void;
    initFID: () => void;
    initCLS: () => void;
    initNavigationTiming: () => void;
    initResourceFlow: () => void;
}
