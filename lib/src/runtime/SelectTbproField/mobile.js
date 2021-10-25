"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./mobile.less");
/**
 * 自定义控件运行态 Mobile 视图
 */
var FormField = {
    fieldRender: function () {
        // 如果不需要定制视图 这里直接return null即可 引擎会默认识别children进行渲染
        // return null;
        // 定制渲染
        return (react_1.default.createElement("div", { className: "CorpHouse_class_m" },
            react_1.default.createElement("div", { className: "field-wrapper" })));
    },
};
exports.default = FormField;
