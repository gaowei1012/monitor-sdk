"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: gaowei1012 gyb2020018@163.com
 * @Date: 2025-04-07 11:45:17
 * @LastEditors: gaowei1012 gyb2020018@163.com
 * @LastEditTime: 2025-04-07 11:45:36
 * @FilePath: /monitor-sdk/packages/taro/core.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var Core = /** @class */ (function () {
    function Core() {
        console.log('Core initialized');
    }
    Core.prototype.init = function () {
        console.log('Core initialized');
    };
    Core.prototype.destroy = function () {
        console.log('Core destroyed');
    };
    return Core;
}());
exports.default = Core;
