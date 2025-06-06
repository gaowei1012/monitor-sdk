"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doRequest = doRequest;
var taro_1 = require("@tarojs/taro");
var config_1 = __importDefault(require("../../common/config"));
function doRequest(url, data) {
    console.log('doRequest', data);
    return new Promise(function (resolve, reject) {
        (0, taro_1.request)({
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            url: config_1.default.baseUrl + url,
            data: typeof data == 'object' ? JSON.stringify(data) : ''
        })
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
