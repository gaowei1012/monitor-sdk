import { Method } from 'axios';
type Option = {
    url: string;
    data?: any;
    method?: Method;
};
export declare const request: (option: Option, __callback: string) => Promise<unknown>;
export {};
