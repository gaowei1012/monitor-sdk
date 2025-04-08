"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var axios_1 = __importDefault(require("axios"));
var config_1 = __importDefault(require("../../common/config"));
var request = function (option, __callback) {
    var url = option.url, data = option.data, method = option.method;
    return new Promise(function (resolve, reject) {
        (0, axios_1.default)({
            method: method,
            url: config_1.default.baseUrl + url,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
            resolve(response.data);
        })
            .catch(function (err) {
            reject(err);
        });
    });
};
exports.request = request;
