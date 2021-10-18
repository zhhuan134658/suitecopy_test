"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var notification_1 = __importDefault(require("antd/lib/notification"));
require("antd/lib/notification/style");
var loadScript_1 = __importDefault(require("./utils/loadScript"));
notification_1.default.info({
    message: 'Swap Debug Mode',
    description: '当前环境：套件调试环境',
    duration: 5,
});
// eruda dev-tools
loadScript_1.default('https://g.alicdn.com/code/lib/eruda/2.4.1/eruda.min.js').then(function () {
    eruda.init();
    console.log('eruda init success');
});
// 运行态视图
var pc_1 = __importDefault(require("./runtime/pc"));
var mobile_1 = __importDefault(require("./runtime/mobile"));
// 套件配置
var config_1 = __importDefault(require("./config"));
console.warn('swap cli debug mode start');
window.thirdSuitemMaterialSet = {
    PCRender: pc_1.default,
    MobileRender: mobile_1.default,
    BizSuiteConfig: config_1.default,
};
exports.default = {
    PCRender: pc_1.default,
    MobileRender: mobile_1.default,
    BizSuiteConfig: config_1.default,
};
