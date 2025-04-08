"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalErrorHandler = void 0;
exports.setErrorHandler = setErrorHandler;
var noop = function () { };
function setErrorHandler(customHandler, allowInDev) {
    if (customHandler === void 0) { customHandler = noop; }
    if (allowInDev === void 0) { allowInDev = false; }
    if (typeof allowInDev !== 'boolean' || typeof customHandler !== 'function') {
        console.log('setGlobalErrorHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean');
        console.log('Not setting the JS handler .. please fix setGlobalErrorHandler call');
        // 埋点数据统计
        return;
    }
    // @ts-ignore
    var allowed = allowInDev ? true : false;
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
        console.log('Skipping setGlobalErrorHandler: Reason: In DEV mode and allowedInDevMode = false');
    }
}
var getGlobalErrorHandler = function () {
    // @ts-ignore
    return global.ErrorUtils.getGlobalHandler();
};
exports.getGlobalErrorHandler = getGlobalErrorHandler;
