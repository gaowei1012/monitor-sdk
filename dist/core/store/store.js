"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metricsStore = /** @class */ (function () {
    function metricsStore() {
        this.state = new Map();
    }
    metricsStore.prototype.set = function (key, value) {
        this.state.set(key, value);
    };
    metricsStore.prototype.add = function (key, value) {
        var keyValue = this.state.get(key);
        this.state.set(key, keyValue ? keyValue.concat([value]) : [value]);
    };
    metricsStore.prototype.get = function (key) {
        return this.state.get(key);
    };
    metricsStore.prototype.has = function (key) {
        return this.state.has(key);
    };
    metricsStore.prototype.clear = function () {
        this.state.clear();
    };
    metricsStore.prototype.getValues = function () {
        return Object.fromEntries(this.state);
    };
    return metricsStore;
}());
exports.default = metricsStore;
