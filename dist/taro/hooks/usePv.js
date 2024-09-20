"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taro_1 = require("@tarojs/taro");
var index_1 = require("../utils/index");
var usePv = function (_a) {
    var getExtra = _a.getExtra;
    (0, taro_1.useDidShow)(function () {
        var currentPath = (0, index_1.getPath)();
        var sysInfo = (0, index_1.getSysInfo)({
            path: currentPath
        });
        var extra = getExtra === null || getExtra === void 0 ? void 0 : getExtra();
        extra ? (0, index_1.sendPv)(sysInfo, extra) : (0, index_1.sendPv)(sysInfo, "");
    });
};
exports.default = usePv;
