"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLog = exports.LogContext = void 0;
var react_1 = require("react");
exports.LogContext = (0, react_1.createContext)({});
var useLog = function () {
    var message = (0, react_1.useContext)(exports.LogContext);
    var listenDOM = (0, react_1.useRef)(null);
    // 分清依赖关系
    var reportMessage = (0, react_1.useCallback)(function (data, type) {
        if (type == 'pv') {
            console.log('组件 pv 上报', message);
        }
        else if (type == 'click') {
            console.log('组件 click 上报', message, data);
        }
    }, [message]);
    (0, react_1.useEffect)(function () {
        var handleClick = function (e) {
            reportMessage(e.target, 'click');
        };
        if (listenDOM.current) {
            listenDOM.current.addEventListener('click', handleClick);
        }
        return function () {
            listenDOM.current && listenDOM.current.removeEventListener('click', handleClick);
        };
    }, [reportMessage]);
    return [listenDOM, reportMessage];
};
exports.useLog = useLog;
