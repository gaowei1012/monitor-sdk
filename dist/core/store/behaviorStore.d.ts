import { behaviorStack, behaviorRecordsOptions } from '../types/index';
export default class behaviorStore {
    private state;
    private maxBehaviorRecords;
    constructor(options: behaviorRecordsOptions);
    push(value: behaviorStack): void;
    shift(): behaviorStack;
    length(): number;
    get(): behaviorStack[];
    clear(): void;
}
