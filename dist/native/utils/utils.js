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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSysInfo = void 0;
exports.sendPv = sendPv;
exports.sendError = sendError;
var react_native_device_info_1 = __importDefault(require("react-native-device-info"));
var async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
var request_1 = require("../services/request");
var crypto_js_1 = __importDefault(require("crypto-js"));
function sendPv(args, options) {
    console.log('埋点：args', args, options);
    // 发送埋点数据
    // request(`msg/upload`, { msg: args })
    //   .then((res) => {
    //     console.log('发送成功')
    //   })
    //   .catch((err) => {
    //     console.log('发送失败', err)
    //   })
    (0, request_1.request)({
        url: "msg/upload",
        data: { msg: args },
        method: 'POST'
    }, 'msg/upload')
        .then(function (res) {
        console.log('发送成功');
    })
        .catch(function (err) {
        console.log('发送失败', err);
    });
}
function sendError(args, options) {
    console.log('错误统计：', args, options);
    (0, request_1.request)({
        url: "error/upload",
        data: { msg: args },
        method: 'POST'
    }, 'error/upload')
        .then(function (res) {
        console.log('发送成功');
    })
        .catch(function (err) {
        console.log('发送失败', err);
    });
}
var getSysInfo = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var platform, version, system, os, lang, h, device_info, _device_info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, react_native_device_info_1.default.getModel()];
            case 1:
                platform = _a.sent();
                return [4 /*yield*/, react_native_device_info_1.default.getVersion()];
            case 2:
                version = _a.sent();
                return [4 /*yield*/, react_native_device_info_1.default.getReadableVersion()];
            case 3:
                system = _a.sent();
                return [4 /*yield*/, react_native_device_info_1.default.getDeviceId()];
            case 4:
                os = _a.sent();
                return [4 /*yield*/, react_native_device_info_1.default.getApiLevel()
                    // 使用uuid作为用户唯一标识
                ];
            case 5:
                lang = _a.sent();
                h = {
                    platform: platform,
                    os: os,
                    lang: lang,
                    ov: system,
                    vr: version
                };
                return [4 /*yield*/, async_storage_1.default.getItem('device_info', device_info)];
            case 6:
                _device_info = _a.sent();
                if (!device_info) return [3 /*break*/, 7];
                device_info = _device_info;
                return [3 /*break*/, 9];
            case 7:
                device_info = crypto_js_1.default.SHA256(JSON.stringify(h), 'secretKey').toString();
                return [4 /*yield*/, async_storage_1.default.setItem('device_info', device_info)];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9: return [2 /*return*/, JSON.stringify({ start_time: new Date().getTime(), h: __assign(__assign({}, h), { device_info: device_info }), options: options })];
        }
    });
}); };
exports.getSysInfo = getSysInfo;
