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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userStore_1 = __importDefault(require("../store/userStore"));
var index_1 = require("../types/index");
var utils_1 = require("../utils");
var behaviorStore_1 = __importDefault(require("../store/behaviorStore"));
var UserVitals = /** @class */ (function () {
    function UserVitals(engineInstance) {
        var _this = this;
        // 封装用户行为的上报入口
        this.userSendHandler = function (data) {
            // 进行通知内核实例进行上报;
        };
        // 补齐 pathname 和 timestamp 参数
        this.getExtends = function () {
            return {
                page: (0, utils_1.getPageInfo)().pathname,
                timestamp: new Date().getTime()
            };
        };
        // 初始化用户自定义埋点数据的获取上报
        this.initCustomerHandler = function () {
            var handler = function (options) {
                // 记录到 UserMetricsStore
                _this.metrics.add(index_1.metricsName.CDR, options);
                // 自定义埋点的信息一般立即上报
                _this.userSendHandler(options);
                // 记录到用户行为记录栈
                _this.breadcrumbs.push(__assign({ category: index_1.metricsName.CDR, data: options }, _this.getExtends()));
            };
            return handler;
        };
        // 初始化 PI 页面基本信息的获取以及返回
        this.initPageInfo = function () {
            var info = (0, utils_1.getPageInfo)();
            var metrics = info;
            _this.metrics.set(index_1.metricsName.PI, metrics);
        };
        // 初始化 RCR 路由跳转的获取以及返回
        this.initRouteChange = function () {
            var handler = function (e) {
                // 正常记录
                var metrics = {
                    // 跳转方法类型
                    jumpType: e.type,
                    // 创建时间
                    timestamp: new Date().getTime(),
                    // 页面信息
                    pageInfo: (0, utils_1.getPageInfo)()
                };
                // 一般路由跳转的信息不会进行上报，根据业务形态决定；
                _this.metrics.add(index_1.metricsName.RCR, metrics);
                // 行为记录，不需要携带pageInfo
                delete metrics['pageInfo'];
                // 记录到行为记录追踪
                var behavior = __assign({ category: index_1.metricsName.RCR, data: metrics }, _this.getExtends());
                _this.breadcrumbs.push(behavior);
            };
            (0, utils_1.proxyHash)(handler);
            // 为 pushState 以及 replaceState 方法添加 Evetn 事件
            (0, utils_1.proxyHistory)(handler);
        };
        // 初始化 PV 的获取以及返回
        this.initPV = function () {
            var handler = function () {
                var metrics = {
                    timestamp: new Date().getTime(),
                    pageInfo: (0, utils_1.getPageInfo)(),
                    originInformation: (0, utils_1.getOriginInfo)()
                };
                _this.userSendHandler(metrics);
            };
            (0, utils_1.afterLoad)(function () {
                handler();
            });
            (0, utils_1.proxyHash)(handler);
            (0, utils_1.proxyHistory)(handler);
        };
        // 初始化 OI 用户来路的获取以及返回
        this.initOriginInfo = function () {
            var info = (0, utils_1.getOriginInfo)();
            var metrics = info;
            _this.metrics.set(index_1.metricsName.OI, metrics);
        };
        // 初始化 CBR 点击事件的获取和返回
        this.initClickHandler = function (mountList) {
            var handler = function (e) {
                var _a, _b;
                var target = (_a = e.path) === null || _a === void 0 ? void 0 : _a.find(function (x) { var _a; return mountList.includes((_a = x.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
                target = target || (mountList.includes((_b = e.target.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) ? e.target : undefined);
                if (!target)
                    return;
                var metrics = {
                    tagInfo: {
                        id: target.id,
                        classList: Array.from(target.classList),
                        tagName: target.tagName,
                        text: target.textContent
                    },
                    timestamp: new Date().getTime(),
                    pageInfo: (0, utils_1.getPageInfo)()
                };
                // 除开商城业务外，一般不会特意上报点击行为的数据，都是作为辅助检查错误的数据存在;
                _this.metrics.add(index_1.metricsName.CBR, metrics);
                // 行为记录 不需要携带 完整的pageInfo
                // delete metrics.pageInfo;
                var behavior = __assign({ category: index_1.metricsName.CBR, data: metrics }, _this.getExtends());
                _this.breadcrumbs.push(behavior);
            };
            window.addEventListener('click', function (e) {
                handler(e), true;
            });
        };
        // 初始化 http 请求的数据获取和上报
        this.initHttpHandler = function () {
            var loadHandler = function (metrice) {
                // 对于正常请求的 HTTP 请求来说,不需要记录 请求体 和 响应体
                if (metrice.status < 400) {
                    delete metrice.response;
                    delete metrice.body;
                }
                // 记录到 UserMetricsStore
                _this.metrics.add(index_1.metricsName.HT, metrice);
                // 记录到用户行为记录栈
                _this.breadcrumbs.push(__assign({ category: index_1.metricsName.HT, data: metrice }, _this.getExtends()));
            };
            (0, utils_1.proxyXmlHttp)(null, loadHandler);
            (0, utils_1.proxyFetch)(null, loadHandler);
        };
        this.engineInstance = engineInstance;
        this.metrics = new userStore_1.default();
        // 限制最大行为追踪记录数 100，真实场景下需要外部传入自定义
        this.maxBehaviorRecords = 100;
        // 初始化行为追踪记录
        this.breadcrumbs = new behaviorStore_1.default({ maxBehaviorRecords: this.maxBehaviorRecords });
        // 初始化 用户自定义 事件捕获
        this.customHandler = this.initCustomerHandler();
        // 作为 真实sdk 的时候，需要在初始化时传入与默认值合并
        this.clickMountList = ['button'].map(function (x) { return x.toLowerCase(); });
        // 重写事件
        (0, utils_1.wrHistory)();
    }
    return UserVitals;
}());
exports.default = UserVitals;
