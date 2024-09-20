"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doRequest = doRequest;
var taro_1 = require("@tarojs/taro");
function doRequest(url, data) {
    console.log('doRequest', data);
    return new Promise(function (resolve, reject) {
        (0, taro_1.request)({
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            url: 'http://127.0.0.1:5200/api/v0.1.0/' + url,
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
