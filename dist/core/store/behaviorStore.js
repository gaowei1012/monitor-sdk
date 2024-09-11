"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var behaviorStore = /** @class */ (function () {
    // 外部传入 options 初始化
    function behaviorStore(options) {
        var maxBehaviorRecords = options.maxBehaviorRecords;
        this.maxBehaviorRecords = maxBehaviorRecords;
        this.state = [];
    }
    // 从底部插入一个元素，且不超过 maxBehaviorRecords 限制数量
    behaviorStore.prototype.push = function (value) {
        if (this.length() === this.maxBehaviorRecords) {
            this.shift();
        }
        this.state.push(value);
    };
    behaviorStore.prototype.shift = function () {
        return this.state.shift();
    };
    behaviorStore.prototype.length = function () {
        return this.state.length;
    };
    behaviorStore.prototype.get = function () {
        return this.state;
    };
    behaviorStore.prototype.clear = function () {
        this.state = [];
    };
    return behaviorStore;
}());
exports.default = behaviorStore;
