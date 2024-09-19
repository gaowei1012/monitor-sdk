"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var utils_1 = require("../utils");
var ErrorVitals = /** @class */ (function () {
    function ErrorVitals(engineInstance, options) {
        var _this = this;
        // 封装错误的上报入口，上报前，判断错误是否已经发生过
        this.errorSendHandler = function (data) {
            var submitParams = __assign(__assign({}, data), { breadcrumbs: _this.engineInstance.userInstance.breadcrumbs.get(), pageInformation: _this.engineInstance.userInstance.metrics.get('page-information') });
            // 判断同一个错误在本次请求中是否已经发生过
            var hasSubmitStatus = _this.submitErrorUids.includes(submitParams.errorUid);
            // 检查一下错误在本次页面访问中，是否已经产生过
            if (hasSubmitStatus)
                return;
            _this.submitErrorUids.push(submitParams.errorUid);
            // 记录后清除 breadcrumbs
            _this.engineInstance.userInstance.breadcrumbs.clear();
            // 一般来说，有报错就立刻上报;
            _this.engineInstance.transportInstance.kernelTransportHandler(_this.engineInstance.transportInstance.formatTransportData('error', submitParams));
        };
        // 初始化 JS异常 的数据获取和上报
        this.initJsError = function () {
            var handler = function (event) {
                // 阻止向上抛出控制台报错
                event.preventDefault();
                if ((0, utils_1.getErrorKey)(event) !== types_1.mechanismType.JS)
                    return;
                var exception = {
                    // 上报错误归类
                    mechanism: {
                        type: types_1.mechanismType.JS
                    },
                    // 错误信息
                    value: event.message,
                    // 错误类型
                    type: (event.type && event.error.name) || 'UnKnowun',
                    // 解析后的错误堆栈
                    stackTrace: {
                        frames: (0, utils_1.parseStatckFrames)(event.error)
                    },
                    // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
                    // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
                    // 错误的标识码
                    errorUid: (0, utils_1.getErrorUid)("".concat(types_1.mechanismType.JS, "-").concat(event.message, "-").concat(event.filename)),
                    meta: {
                        // file 解析所处的文件地址
                        file: event.filename,
                        // col 错误列号
                        col: event.colno,
                        // row 错误行号
                        row: event.lineno
                    }
                };
                _this.errorSendHandler(exception);
            };
            window.addEventListener('error', function (event) { return handler(event); }, true);
        };
        // 初始化 静态资源异常 的数据获取和上报
        this.initResourceError = function () {
            var handler = function (event) {
                // 阻止事件向上冒泡
                event.preventDefault();
                if ((0, utils_1.getErrorKey)(event) != types_1.mechanismType.RS)
                    return;
                var target = event.target;
                // 上报错误归类
                var exception = {
                    mechanis: {
                        type: types_1.mechanismType.RS
                    },
                    // 错误信息
                    value: '',
                    // 错误类型
                    type: 'ResourceError',
                    // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
                    // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
                    // 错误的标识码
                    errirUid: (0, utils_1.getErrorUid)("".concat(types_1.mechanismType.RS, "-").concat(target.src, "-").concat(target.tagName)),
                    meta: {
                        url: target.src,
                        html: target.outerHTML,
                        type: target.tagName
                    },
                };
                // 一般错误异常立刻上报，不用缓存在本地
                _this.errorSendHandler(exception);
            };
            window.addEventListener('error', function (event) { return handler(event); }, true);
        };
        // 初始化 Promise异常 的数据获取和上报
        this.initPromiseError = function () {
            var handler = function (event) {
                // 阻止事件向上冒泡
                event.preventDefault();
                var value = event.reason.message || event.reason;
                var type = event.reason.name || 'UnKnowun';
                var exception = {
                    mechanis: {
                        type: types_1.mechanismType.UJ
                    },
                    // 错误信息
                    value: value,
                    // 错误类型
                    type: type,
                    // 解析后的错误堆栈
                    statckTrace: {
                        frames: (0, utils_1.parseStatckFrames)(event.reason)
                    },
                    // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
                    // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
                    // 错误的标识码
                    errirUid: (0, utils_1.getErrorUid)("".concat(types_1.mechanismType.UJ, "-").concat(value, "-").concat(type)),
                    // 附带信息
                    meta: {},
                };
                // 一般错误异常立刻上报，不用缓存在本地
                _this.errorSendHandler(exception);
            };
            window.addEventListener('unhandledrejection', function (event) { return handler(event); }, true);
        };
        // 初始化 HTTP请求异常 的数据获取和上报
        this.initHttpError = function () {
            var loadHandler = function (metrics) {
                if (metrics.status < 400)
                    return;
                var value = metrics.response;
                var exception = {
                    mechanis: {
                        type: types_1.mechanismType.HP
                    },
                    // 错误信息
                    value: value,
                    // 错误类型
                    type: 'HttpError',
                    // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
                    // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
                    // 错误的标识码
                    errirUid: (0, utils_1.getErrorUid)("".concat(types_1.mechanismType.HP, "-").concat(value, "-").concat(metrics.statusText)),
                    // 附带信息
                    meta: {
                        metrics: metrics
                    },
                };
                // 一般错误异常立刻上报，不用缓存在本地
                _this.errorSendHandler(exception);
            };
            (0, utils_1.proxyXmlHttp)(null, loadHandler);
            (0, utils_1.proxyFetch)(null, loadHandler);
        };
        // 初始化 跨域异常 的数据获取和上报
        this.initCorsError = function () {
            var handler = function (event) {
                // 阻止事件向上冒泡
                event.preventDefault();
                if ((0, utils_1.getErrorKey)(event) !== types_1.mechanismType.CS)
                    return;
                var exception = {
                    mechanis: {
                        type: types_1.mechanismType.HP
                    },
                    // 错误信息
                    value: event.message,
                    // 错误类型
                    type: 'HttpError',
                    // 用户行为追踪 breadcrumbs 在 errorSendHandler 中统一封装
                    // 页面基本信息 pageInformation 也在 errorSendHandler 中统一封装
                    // 错误的标识码
                    errirUid: (0, utils_1.getErrorUid)("".concat(types_1.mechanismType.HP, "-").concat(event.message)),
                    // 附带信息
                    meta: {},
                };
                // 自行上报异常，也可以跨域脚本的异常都不上报;
                _this.errorSendHandler(exception);
            };
            window.addEventListener('error', function (event) { return handler(event); }, true);
        };
        // 初始化 Vue异常 的数据获取和上报
        this.initReactError = function (app) {
            //... 详情代码在下
        };
        // 初始化 Vue异常 的数据获取和上报
        this.initVueError = function (app) {
            app.config.errorHandler = function (err, vm, info) {
                var componentName = (0, utils_1.formatComponentName)(vm, false);
                var exception = {
                    // 上报错误归类
                    mechanism: {
                        type: types_1.mechanismType.VUE
                    },
                    // 错误信息
                    value: err.message,
                    // 错误类型
                    type: err.name,
                    // 解析后的错误堆栈
                    statckTrace: {
                        frames: (0, utils_1.parseStatckFrames)(err)
                    },
                    // 错误标识
                    errirUid: (0, utils_1.getErrorUid)("".concat(types_1.mechanismType.HP, "-").concat(err.message, "-").concat(componentName, "-").concat(info)),
                    // 附带信息
                    meta: {
                        // 报错的vue组件名称
                        componentName: componentName,
                        // 报错的Vue阶段
                        hook: info
                    }
                };
                // 自行上报异常，也可以跨域脚本的异常都不上报;
                _this.errorSendHandler(exception);
            };
        };
        var React = options.React;
        this.engineInstance = engineInstance;
        this.submitErrorUids = [];
        // 初始化 js错误
        this.initJsError();
        // 初始化 静态资源加载错误
        this.initResourceError();
        // 初始化 Promise异常
        this.initPromiseError();
        // 初始化 HTTP请求异常
        this.initHttpError();
        // 初始化 跨域异常
        this.initCorsError();
        // 初始化 React异常
        this.initReactError(React);
    }
    return ErrorVitals;
}());
exports.default = ErrorVitals;
