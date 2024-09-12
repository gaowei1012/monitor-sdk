import { behaviorStack, behaviorRecordsOptions } from '../types/index'

export default class behaviorStore {
  // 数组形式的 stack
  private state: Array<behaviorStack>

  // 记录最大值
  private maxBehaviorRecords: number

  // 外部传入 options 初始化
  constructor(options: behaviorRecordsOptions) {
    const { maxBehaviorRecords } = options
    this.maxBehaviorRecords = maxBehaviorRecords
    this.state = []
  }

  // 从底部插入一个元素，且不超过 maxBehaviorRecords 限制数量
  push(value: behaviorStack) {
    if (this.length() === this.maxBehaviorRecords) {
      this.shift()
    }
    this.state.push(value)
  }
  shift() {
    return this.state.shift()
  }

  length() {
    return this.state.length
  }

  get() {
    return this.state
  }

  clear() {
    this.state = []
  }
}
