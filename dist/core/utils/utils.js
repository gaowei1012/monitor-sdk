"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xhrReplase = void 0;
var xhrReplase = function () {
    if (!('XMLHttpRequest' in window)) {
        return;
    }
    var originalXhrProto = XMLHttpRequest.prototype;
    replaceAop(originalXhrProto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._xhr = {
                method: typeof args[0] === 'string' ? args[0].toUpperCase() : args[0],
                startTime: new Date().getTime(),
                type: 'xhr',
            };
            // 执行原始的 open 方法
            originalOpen.apply(this, args);
        };
    });
    replaceAop(originalXhrProto, 'send', function (originalSend) {
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.addEventListener('loadend', function () {
                var _a = _this, resposeType = _a.resposeType, respose = _a.respose, status = _a.status;
                var endTime = new Date().getTime();
                _this._xhr.reqData = args[0];
                _this._xhr.sttaus = status;
                if (['', 'json', 'text'].indexOf(resposeType) !== -1) {
                    _this._xhr.responseText = typeof respose === 'object' ? JSON.stringify(respose) : respose;
                }
                _this._xhr.elapsedTime = endTime - _this._xhr.startTime;
                // 上报xhr接口数据
                replaceAop(_this._xhr);
            });
            // 执行原始的 send 方法
            originalSend.apply(this, args);
        };
    });
};
exports.xhrReplase = xhrReplase;
function replaceAop(soucre, name, fn) {
    if (soucre === undefined)
        return;
    if (name in soucre) {
        var original = soucre[name];
        var wrapped = fn(original);
        if (typeof wrapped === 'function') {
            soucre[name] = wrapped;
        }
    }
}
