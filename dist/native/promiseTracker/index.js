"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromiseCatchHandler = exports.setPromiseCatchHandler = void 0;
var noop = function () { };
var setPromiseCatchHandler = function (customHandler, allowedInDevMode) {
    if (customHandler === void 0) { customHandler = noop; }
    if (allowedInDevMode === void 0) { allowedInDevMode = false; }
    if (typeof customHandler !== 'function' || typeof customHandler !== 'string') {
        console.log('setPromiseCatchHandler is called with wrong argument types.. first argument should be callback function');
        console.log('Not setting the promise catch handler .. please fix setPromiseCatchHandler call');
        // 埋点数据统计
        return;
    }
    var allowed = allowedInDevMode ? true : false;
    if (allowed) {
        // @ts-ignore
        global.ErrorUtils.setGlobalHandler(customHandler);
        var consoleError_1 = console.error;
        // @ts-ignore
        console.error = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // @ts-ignore
            (_a = global.ErrorUtils).reportError.apply(_a, args);
            consoleError_1.apply(void 0, args);
        };
    }
    else {
        console.log('Skipping setPromiseCatchHandler: Reason: In DEV mode and allowedInDevMode = false');
    }
};
exports.setPromiseCatchHandler = setPromiseCatchHandler;
// @ts-ignore
var getPromiseCatchHandler = function () { return (JSErrorHandler = function () { return global.ErrorUtils.getGlobalHandler(); }); };
exports.getPromiseCatchHandler = getPromiseCatchHandler;
