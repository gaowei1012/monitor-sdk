"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __importDefault(require("../store/store"));
var types_1 = require("../types");
var utils_1 = require("../utils");
var WebVitals = /** @class */ (function () {
    function WebVitals(engineInstance) {
        var _this = this;
        // 性能数据的上报策略
        this.perfSendHander = function () {
            // 如果你要监听 FID 数据。你就需要等待 FID 参数捕获完成后进行上报;
            // 如果不需要监听 FID，那么这里你就可以发起上报请求了;
        };
        // 初始化 FP 的获取以及返回
        this.initFP = function () {
            var entry = (0, utils_1.getFP)();
            var metrics = {
                startTime: entry === null || entry === void 0 ? void 0 : entry.startTime.toFixed(2),
                entry: entry
            };
            _this.metrics.set(types_1.metricsName.FP, metrics);
        };
        // 初始化 FCP 的获取以及返回
        this.initFCP = function () {
            var entry = (0, utils_1.getFCP)();
            var metrics = {
                startTime: entry === null || entry === void 0 ? void 0 : entry.startTime.toFixed(2),
                entry: entry
            };
            _this.metrics.set(types_1.metricsName.FCP, metrics);
        };
        //初始化 LCP 的获取以及返回
        this.initLCP = function () {
            var entryHandler = function (entry) {
                var metrics = {
                    startTime: entry === null || entry === void 0 ? void 0 : entry.startTime.toFixed(2),
                    entry: entry
                };
                _this.metrics.set(types_1.metricsName.LCP, metrics);
            };
            (0, utils_1.getLCP)(entryHandler);
        };
        // 初始化 FID 的获取 及返回
        this.initFID = function () {
            var entryHandler = function (entry) {
                var metrics = {
                    delay: entry.processingStart - entry.processingEnd,
                    entry: entry
                };
                _this.metrics.set(types_1.metricsName.FID, metrics);
            };
            (0, utils_1.getFID)(entryHandler);
        };
        // 初始化 CLS 的获取以及返回
        this.initCLS = function () {
            var clsValue = 0;
            var clsEntries = [];
            var sessionValue = 0;
            var sessionEntries = [];
            var entryHander = function (entry) {
                if (!entry.hadRecenInput) {
                    var firstSessionEntry = sessionEntries[0];
                    var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                    // 如果与上条目的间隔小于 1 秒且
                    // 与会话中第一个条目相隔时间小于 5秒， 那个将条目包含在当前会话中。否则，开始一个新会话
                    if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 500) {
                        sessionValue += entry.value;
                        sessionEntries.push(entry);
                    }
                    else {
                        sessionValue = entry.value;
                        sessionEntries = [entry];
                    }
                    // 如果当前会话值大于当前CLS值，
                    // 那么更新CLS及其相关的条目
                    if (sessionValue > clsValue) {
                        clsValue = sessionValue;
                        clsEntries = sessionEntries;
                        // 记录 CLS 到 Map 里
                        var metrics = {
                            entry: entry,
                            clsValue: clsValue,
                            clsEntries: clsEntries
                        };
                        _this.metrics.set(types_1.metricsName.CLS, metrics);
                    }
                }
            };
            (0, utils_1.getCLS)(entryHander);
        };
        // 初始化 NT 的获取以及返回
        this.initNavigationTiming = function () {
            var navigationTiming = (0, utils_1.getNavigationTiming)();
            var metrics = navigationTiming;
            _this.metrics.set(types_1.metricsName.NT, metrics);
        };
        // 初始化 RF 的获取以及返回
        this.initResourceFlow = function () {
            var resourceFlow = [];
            var resObserve = (0, utils_1.getResourceFlow)(resourceFlow);
            var stopListening = function () {
                if (resObserve) {
                    resObserve.disconnect();
                }
                var metrics = resourceFlow;
                _this.metrics.set(types_1.metricsName.RF, metrics);
            };
            // 当页面 pageshow 触发时，中止
            window.addEventListener('pageshow', stopListening, { once: true, capture: true });
        };
        this.engineInstance = engineInstance;
        this.metrics = new store_1.default();
        this.initLCP();
        this.initCLS();
        this.initResourceFlow();
        (0, utils_1.afterLoad)(function () {
            _this.initNavigationTiming();
            _this.initFP();
            _this.initFCP();
            _this.initFID();
            _this.perfSendHander();
        });
    }
    return WebVitals;
}());
exports.default = WebVitals;
