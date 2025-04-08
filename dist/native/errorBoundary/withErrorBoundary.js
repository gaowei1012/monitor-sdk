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
exports.withErrorBoundary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var ErrorBoundary_1 = require("./ErrorBoundary");
/**
 * React HOC for creating ErrorBoundaryWrapper component.
 * @param params.renderBoundary
 * @param params.onDidCatch
 * @returns
 */
//  * @example
//  * ```tsx
//  * const ErrorBoundaryWrapper = withErrorBoundary({
//  *   renderBoundary: () => <Text>Something went wrong.</Text>,
//  *   onDidCatch: (error, errorInfo) => {
//  *     console.log('Error caught in HOC:', error, errorInfo)
//  *   }
//  * })(MyComponent)
//  * ```
var withErrorBoundary = function (params) {
    return function (WrappedComponent) {
        var renderBoundary = params.renderBoundary, onDidCatch = params.onDidCatch;
        return function (props) {
            return ((0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, { renderBoundary: renderBoundary, onDidCatch: onDidCatch, children: (0, jsx_runtime_1.jsx)(WrappedComponent, __assign({}, props)) }));
        };
    };
};
exports.withErrorBoundary = withErrorBoundary;
