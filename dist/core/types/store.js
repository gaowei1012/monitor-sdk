"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mechanismType = exports.metricsName = void 0;
var metricsName;
(function (metricsName) {
    metricsName["FP"] = "first-panit";
    metricsName["FCP"] = "first-contentful-paint";
    metricsName["LCP"] = "largest-contentful-paint";
    metricsName["FID"] = "first-input-delay";
    metricsName["CLS"] = "cumulative-layout-shift";
    metricsName["NT"] = "navigation-timing";
    metricsName["RF"] = "resource-flow";
    metricsName["PI"] = "page-information";
    metricsName["OI"] = "origin-information";
    metricsName["RCR"] = "router-change-record";
    metricsName["CBR"] = "click-behavior-record";
    metricsName["CDR"] = "custom-define-record";
    metricsName["HT"] = "http-record";
})(metricsName || (exports.metricsName = metricsName = {}));
// 错误类型枚举
var mechanismType;
(function (mechanismType) {
    mechanismType["JS"] = "js";
    mechanismType["RS"] = "resource";
    mechanismType["UJ"] = "unhandledrejection";
    mechanismType["HP"] = "http";
    mechanismType["CS"] = "cors";
    mechanismType["VUE"] = "vue";
    mechanismType["REACT"] = "react";
})(mechanismType || (exports.mechanismType = mechanismType = {}));
