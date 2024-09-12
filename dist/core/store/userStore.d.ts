import { metricsName } from '../types/index';
export interface IMetrics {
    [prop: string | number]: any;
}
export default class UswerMetricsStore {
    state: Map<metricsName | string, IMetrics>;
    constructor();
    set(key: metricsName | string, value: IMetrics): void;
    add(key: metricsName | string, value: IMetrics): void;
    get(key: metricsName | string): IMetrics | undefined;
    has(key: metricsName | string): boolean;
    clear(): void;
    getValues(): IMetrics;
}
