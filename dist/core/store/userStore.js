"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UswerMetricsStore = /** @class */ (function () {
    function UswerMetricsStore() {
        this.state = new Map();
    }
    UswerMetricsStore.prototype.set = function (key, value) {
        this.state.set(key, value);
    };
    UswerMetricsStore.prototype.add = function (key, value) {
        var keyValue = this.state.get(key);
        this.state.set(key, keyValue ? keyValue.concat([value]) : [value]);
    };
    UswerMetricsStore.prototype.get = function (key) {
        return this.state.get(key);
    };
    UswerMetricsStore.prototype.has = function (key) {
        return this.state.has(key);
    };
    UswerMetricsStore.prototype.clear = function () {
        this.state.clear();
    };
    UswerMetricsStore.prototype.getValues = function () {
        return Object.fromEntries(this.state);
    };
    return UswerMetricsStore;
}());
exports.default = UswerMetricsStore;
