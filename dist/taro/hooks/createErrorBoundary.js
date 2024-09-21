"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("../utils");
function createErrorBoundary(Page) {
    return /** @class */ (function (_super) {
        __extends(ErrorBoundary, _super);
        function ErrorBoundary() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                hasError: null
            };
            return _this;
        }
        ErrorBoundary.getDerivedStateFromError = function () {
            return {
                hasError: true
            };
        };
        // 收集错误
        ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
            var currentPath = (0, utils_1.getPath)();
            var sysInfo = (0, utils_1.getSysInfo)({
                path: currentPath,
                errorMsg: error.message,
                errorInfo: errorInfo['componentStack'] ? errorInfo['componentStack'] : ''
            });
            (0, utils_1.sendError)(sysInfo);
            // 捕获错误
            // console.log('componentDidCatch', error, error.message)
        };
        // render() {
        //   return this.state.hasError ? <>Something went wrong.</> : <Page />
        // }
        // 对页面的错误使用 componentDidCatch 捕获，上报
        ErrorBoundary.prototype.render = function () {
            return (0, jsx_runtime_1.jsx)(Page, {});
        };
        return ErrorBoundary;
    }(react_1.Component));
}
exports.default = createErrorBoundary;
