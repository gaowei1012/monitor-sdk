"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setErrorHandlerAndNative = exports.setNativeErrorHandler = exports.setErrorHandler = void 0;
var MessageQueue_1 = __importDefault(require("react-native/Libraries/BatchedBridge/MessageQueue"));
var react_native_exception_handler_1 = require("react-native-exception-handler");
var utils_1 = require("./utils");
/**
 * @description: 设置 JS 异常处理
 * @param {any} options
 * @return {*}
 */
var setErrorHandler = function () {
    (0, react_native_exception_handler_1.setJSExceptionHandler)(function (error, isFatal) {
        console.log('error', error);
        console.log('isFatal', isFatal);
        // 发送错误信息
        (0, utils_1.sendError)(JSON.stringify(error), isFatal);
    }, true);
};
exports.setErrorHandler = setErrorHandler;
/**
 * @description: 设置原生异常处理
 * @param {any} options
 * @return {*}
 */
var setNativeErrorHandler = function () {
    (0, react_native_exception_handler_1.setNativeExceptionHandler)(function (errorString) {
        console.log('errorString', errorString);
        // 发送错误信息
        (0, utils_1.sendError)(errorString, false);
    }, true);
};
exports.setNativeErrorHandler = setNativeErrorHandler;
var setErrorHandlerAndNative = function () {
    // 设置 JS 异常处理
    MessageQueue_1.default.spy = function (spy) {
        console.log('spy', spy);
    };
};
exports.setErrorHandlerAndNative = setErrorHandlerAndNative;
