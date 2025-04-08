"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogContext = exports.createErrorBoundary = exports.usePv = exports.useLog = void 0;
__exportStar(require("./native"), exports);
var taro_1 = require("./taro");
Object.defineProperty(exports, "useLog", { enumerable: true, get: function () { return taro_1.useLog; } });
Object.defineProperty(exports, "usePv", { enumerable: true, get: function () { return taro_1.usePv; } });
Object.defineProperty(exports, "createErrorBoundary", { enumerable: true, get: function () { return taro_1.createErrorBoundary; } });
Object.defineProperty(exports, "LogContext", { enumerable: true, get: function () { return taro_1.LogContext; } });
__exportStar(require("./web"), exports);
