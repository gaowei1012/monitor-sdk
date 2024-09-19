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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatComponentName = exports.getErrorUid = exports.getErrorKey = exports.proxyFetch = exports.proxyXmlHttp = exports.proxyHash = exports.proxyHistory = exports.wrHistory = exports.wr = exports.getPageInfo = exports.getOriginInfo = exports.getResourceFlow = exports.getNavigationTiming = exports.getCLS = exports.getFID = exports.getLCP = exports.getFCP = exports.getFP = exports.observe = exports.afterLoad = void 0;
exports.parseStatckLine = parseStatckLine;
exports.parseStatckFrames = parseStatckFrames;
var types_1 = require("../types");
// afterLoad function
var afterLoad = function (callback) {
    if (document.readyState === 'complete') {
        setTimeout(callback);
    }
    else {
        window.addEventListener('pageshow', callback, { once: true, capture: true });
    }
};
exports.afterLoad = afterLoad;
// observe
var observe = function (type, callback) {
    var _a;
    if ((_a = PerformanceObserver.supportedEntryTypes) === null || _a === void 0 ? void 0 : _a.includes(type)) {
        var ob = new PerformanceObserver(function (l) { return l.getEntries().map(callback); });
        ob.observe({ type: type, buffered: true });
        return ob;
    }
    return undefined;
};
exports.observe = observe;
// 获取 FP
var getFP = function () {
    var entry = performance.getEntriesByName('first-panit')[0];
    return entry;
};
exports.getFP = getFP;
// 获取 FCP
var getFCP = function () {
    var entry = performance.getEntriesByName('first-contenful-paint')[0];
    return entry;
};
exports.getFCP = getFCP;
// 获取 LCP
var getLCP = function (entryHandler) {
    return (0, exports.observe)('largest-contentful-paint', entryHandler);
};
exports.getLCP = getLCP;
// 获取 FID
var getFID = function (entryHander) {
    return (0, exports.observe)('first-input', entryHander);
};
exports.getFID = getFID;
// 获取 CLS
var getCLS = function (entryHander) {
    return (0, exports.observe)('layout-shift', entryHander);
};
exports.getCLS = getCLS;
// 获取 NT
var getNavigationTiming = function () {
    var resolveNavigationTiming = function (entry) {
        var domainLookupStart = entry.domainLookupStart, domainLookupEnd = entry.domainLookupEnd, connectStart = entry.connectStart, connectEnd = entry.connectEnd, secureConnectionStart = entry.secureConnectionStart, responseStart = entry.responseStart, responseEnd = entry.responseEnd, domInteractive = entry.domInteractive, domContentLoadedEventEnd = entry.domContentLoadedEventEnd, loadEventStart = entry.loadEventStart, fetchStart = entry.fetchStart;
        return {
            // 关键时间点
            FP: responseEnd - fetchStart,
            TTI: domInteractive - fetchStart,
            DomRead: domContentLoadedEventEnd - fetchStart,
            Load: loadEventStart - fetchStart,
            FirstByte: responseStart - domainLookupStart,
            // 关键时间段
            DNS: domainLookupEnd - domainLookupStart,
            TCP: connectEnd - connectStart,
            SSL: secureConnectionStart ? connectEnd - secureConnectionStart : 0,
            TTFB: responseEnd - responseStart,
            DomParse: domInteractive - responseStart,
            Res: loadEventStart - domContentLoadedEventEnd
        };
    };
    var navigation = performance.getEntriesByType('navigation').length > 0 ? performance.getEntriesByType('navigation')[0] : performance.timing;
    return resolveNavigationTiming(navigation);
};
exports.getNavigationTiming = getNavigationTiming;
// 获取 RF
var getResourceFlow = function (resourceFlow) {
    var entryHander = function (entry) {
        var name = entry.name, transferSize = entry.transferSize, initiatorType = entry.initiatorType, startTime = entry.startTime, responseEnd = entry.responseEnd, domainLookupEnd = entry.domainLookupEnd, domainLookupStart = entry.domainLookupStart, connectStart = entry.connectStart, connectEnd = entry.connectEnd, secureConnectionStart = entry.secureConnectionStart, responseStart = entry.responseStart, requestStart = entry.requestStart;
        resourceFlow.push({
            // name 资源地址
            name: name,
            // transferSize 传输大小
            transferSize: transferSize,
            // initiatorType 资源类型
            initiatorType: initiatorType,
            // startTime 开始时间
            startTime: startTime,
            // responseEnd 结束时间
            responseEnd: responseEnd,
            // 贴近 Chrome 的近似分析方案，受到跨域资源影响
            dnsLookup: domainLookupEnd - domainLookupStart,
            initialConnect: connectEnd - connectStart,
            ssl: connectEnd - secureConnectionStart,
            request: responseStart - requestStart,
            ttfb: responseStart - requestStart,
            contentDownload: responseStart - requestStart
        });
    };
    return (0, exports.observe)('resource', entryHander);
};
exports.getResourceFlow = getResourceFlow;
var getOriginInfo = function () {
    var _a;
    return {
        referrer: document.referrer,
        type: ((_a = window.performance) === null || _a === void 0 ? void 0 : _a.navigation.type) || ''
    };
};
exports.getOriginInfo = getOriginInfo;
var getPageInfo = function () {
    var _a = window.location, host = _a.host, hostname = _a.hostname, href = _a.href, protocol = _a.protocol, origin = _a.origin, port = _a.port, pathname = _a.pathname, search = _a.search, hash = _a.hash;
    var _b = window.screen, width = _b.width, height = _b.height;
    var language = navigator.language, userAgent = navigator.userAgent;
    return {
        host: host,
        hostname: hostname,
        href: href,
        protocol: protocol,
        origin: origin,
        port: port,
        pathname: pathname,
        search: search,
        hash: hash,
        title: document.title,
        language: language.substr(0, 2),
        userAgent: userAgent,
        winScreen: "".concat(width, "x").concat(height),
        docScreen: "".concat(document.documentElement.clientWidth || document.body.clientWidth, "x").concat(document.documentElement.clientHeight || document.body.clientHeight)
    };
};
exports.getPageInfo = getPageInfo;
// wr
var wr = function (type) {
    var orig = history[type];
    return function () {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        window.dispatchEvent(e);
        return rv;
    };
};
exports.wr = wr;
// 添加 pushState replaceState 事件
var wrHistory = function () {
    history.pushState = (0, exports.wr)('pushState');
    history.replaceState = (0, exports.wr)('replaceState');
};
exports.wrHistory = wrHistory;
// 为 pushState 以及 replaceState 方法添加 Event 事件
var proxyHistory = function (handler) {
    // 添加对 replaceState 的监听
    window.addEventListener('replaceState', function (e) { return handler(e); }, true);
    // 添加对 pushState 的监听
    window.addEventListener('pushState', function (e) { return handler(e); }, true);
};
exports.proxyHistory = proxyHistory;
// 为 hashchange 以及 popstate 方法添加 Event 事件
var proxyHash = function (handler) {
    // 添加对 replaceState 的监听
    window.addEventListener('hashchange', function (e) { return handler(e); }, true);
    // 添加对 pushState 的监听
    window.addEventListener('popstate', function (e) { return handler(e); }, true);
};
exports.proxyHash = proxyHash;
// proxyXmlHttp
var proxyXmlHttp = function (sendHanler, loadHandler) {
    if ('XMLHttpRequest' in window && typeof window.XMLHttpRequest === 'function') {
        var oXMLHttpRequest_1 = window.XMLHttpRequest;
        if (!window.oXMLHttpRequest) {
            ;
            window.oXMLHttpRequest = oXMLHttpRequest_1;
        }
        ;
        window.XMLHttpRequest = function () {
            // 覆写 window.XMLHttpRequest
            var xhr = new oXMLHttpRequest_1();
            var open = xhr.open, send = xhr.send;
            var metrics = {};
            xhr.open = function (method, url) {
                metrics.method = method;
                metrics.url = url;
                open.call(xhr, method, url, true);
            };
            xhr.send = function (body) {
                metrics.body = body || '';
                metrics.requestTime = new Date().getTime();
                // sendHandler 可以在发送 Ajax 请求之前，挂载一些信息，比如 header 请求头
                // setRequestHeader 设置请求header，用来传输关键参数等
                // xhr.setRequestHeader('xxx-id', 'VQVE-QEBQ');
                if (typeof sendHanler === 'function')
                    sendHanler(xhr);
                send.call(xhr, body);
            };
            xhr.addEventListener('loadend', function () {
                var status = xhr.status, statusText = xhr.statusText, response = xhr.response;
                metrics = __assign(__assign({}, metrics), { status: status, statusText: statusText, response: response, responseTime: new Date().getTime() });
                if (typeof loadHandler === 'function')
                    loadHandler(metrics);
            });
            return xhr;
        };
    }
};
exports.proxyXmlHttp = proxyXmlHttp;
// 调用 proxyFetch 即可完成全局监听 fetch
var proxyFetch = function (sendHandler, loadHandler) {
    if ('fetch' in window && typeof window.fetch === 'function') {
        var oFecth_1 = window.fetch;
        if (!window.oFecth) {
            ;
            window.oFecth = oFecth_1;
        }
        ;
        window.fetch = function (input, init) { return __awaiter(void 0, void 0, void 0, function () {
            var metrics;
            return __generator(this, function (_a) {
                if (typeof sendHandler === 'function')
                    sendHandler(init);
                metrics = {};
                metrics.method = (init === null || init === void 0 ? void 0 : init.method) || '';
                metrics.url = (input && typeof input !== 'string' ? input === null || input === void 0 ? void 0 : input.url : input) || '';
                metrics.body = (init === null || init === void 0 ? void 0 : init.body) || '';
                metrics.requestTime = new Date().getTime();
                return [2 /*return*/, oFecth_1.call(window, input, init).then(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            res = response.clone();
                            metrics = __assign(__assign({}, metrics), { status: res.status, statusText: res.statusText, response: res.response, responseTime: res.responseTime });
                            if (typeof loadHandler === 'function')
                                loadHandler(metrics);
                            return [2 /*return*/];
                        });
                    }); })];
            });
        }); };
    }
};
exports.proxyFetch = proxyFetch;
// 判断JS异常、静态资源异常、还是跨域异常
var getErrorKey = function (event) {
    var isJsError = event instanceof ErrorEvent;
    if (!isJsError)
        return types_1.mechanismType.RS;
    return event.message === 'Script error.' ? types_1.mechanismType.CS : types_1.mechanismType.JS;
};
exports.getErrorKey = getErrorKey;
// 对每一个错误详情，生成一串编码
var getErrorUid = function (input) {
    return window.btoa(unescape(encodeURIComponent(input)));
};
exports.getErrorUid = getErrorUid;
// 正则表达式，用以解析堆栈split后得到的字符串
var FULL_MATCH = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
// 限制只追溯10个
var STACKTRACE_LIMIT = 10;
// 解析每一行
function parseStatckLine(line) {
    var lineMatch = line.match(FULL_MATCH);
    if (!lineMatch)
        return {};
    var filename = lineMatch[2];
    var functionName = lineMatch[1] || '';
    var lineno = parseInt(lineMatch[3], 10) || undefined;
    var colno = parseInt(lineMatch[4], 10) || undefined;
    return {
        filename: filename,
        functionName: functionName,
        lineno: lineno,
        colno: colno
    };
}
// 解析错误堆栈
function parseStatckFrames(error) {
    var stack = error.stack;
    // 无 statck 返回
    if (!stack)
        return [];
    var frames = [];
    for (var _i = 0, _a = stack.split('\n').slice(1); _i < _a.length; _i++) {
        var line = _a[_i];
        var frame = parseStatckLine(line);
        if (frame) {
            frames.push(frame);
        }
    }
    return frames.slice(0, STACKTRACE_LIMIT);
}
// 获取报错组件名
var classifyRE = /(?:^|[-_])(\w)/g;
var classify = function (str) { return str.replace(classifyRE, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, ''); };
var ROOT_COMPONENT_NAME = '<Root>';
var ANONYMOUS_COMPONENT_NAME = '<Anonymous>';
var formatComponentName = function (vm, includeFile) {
    if (!vm) {
        return ANONYMOUS_COMPONENT_NAME;
    }
    if (vm.$root === vm) {
        return ROOT_COMPONENT_NAME;
    }
    var options = vm.$options;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        if (match) {
            name = match[1];
        }
    }
    return ((name ? "<".concat(classify(name), ">") : ANONYMOUS_COMPONENT_NAME) + (file && includeFile !== false ? " at ".concat(file) : ''));
};
exports.formatComponentName = formatComponentName;
