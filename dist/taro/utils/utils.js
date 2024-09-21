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
exports.getSysInfo = exports.getPath = void 0;
exports.sendPv = sendPv;
exports.sendError = sendError;
var taro_1 = __importDefault(require("@tarojs/taro"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var request_1 = require("../services/request");
var getPath = function () {
    var path = taro_1.default.getCurrentInstance().router.path || '';
    return path.match(/^\/*/) ? path.replace(/^\/*/, '') : path;
};
exports.getPath = getPath;
function sendPv(args, options) {
    console.log('埋点：args', args, options);
    // 发送埋点数据
    (0, request_1.doRequest)("msg/upload", { msg: args })
        .then(function (res) {
        console.log('发送成功');
    })
        .catch(function (err) {
        console.log('发送失败', err);
    });
}
function sendError(args, options) {
    console.log('错误统计：', args, options);
    (0, request_1.doRequest)("error/upload", { msg: args })
        .then(function (res) {
        console.log('发送成功');
    })
        .catch(function (err) {
        console.log('发送失败', err);
    });
}
var getSysInfo = function (options) {
    var sysInfo = taro_1.default.getSystemInfoSync();
    // 使用uuid作为用户唯一标识
    var h = {
        platform: sysInfo.app,
        os: sysInfo.platform,
        lang: sysInfo.language,
        ov: sysInfo.system,
        vr: sysInfo.version
    };
    var device_info;
    var _device_info = taro_1.default.getStorageSync('device_info');
    if (device_info) {
        device_info = _device_info;
    }
    else {
        device_info = crypto_js_1.default.SHA256(JSON.stringify(h), 'secretKey').toString();
        taro_1.default.setStorageSync('device_info', device_info);
    }
    return JSON.stringify({ dt: sysInfo.brand, start_time: new Date().getTime(), h: __assign(__assign({}, h), { device_info: device_info }), options: options });
};
exports.getSysInfo = getSysInfo;
