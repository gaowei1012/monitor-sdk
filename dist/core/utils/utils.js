"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyHash = exports.proxyHistory = exports.wrHistory = exports.wr = exports.getPageInfo = exports.getOriginInfo = exports.getResourceFlow = exports.getNavigationTiming = exports.getCLS = exports.getFID = exports.getLCP = exports.getFCP = exports.getFP = exports.observe = exports.afterLoad = void 0;
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
