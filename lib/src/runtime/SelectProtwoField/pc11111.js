"use strict";
// 选择项目
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import Pccc from './pccopy';
require("./pc.less");
/**
 * 自定义控件运行态 PC 视图
 */
var FormField = {
    handleChange: function (e) {
        var form = this.props.form;
        form.setFieldValue('SelectPro', e.target.value);
    },
    fieldRender: function () {
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        console.log('sssssssssss', viewMode);
        var field = form.getFieldInstance('SelectPro');
        var label = form.getFieldProp('SelectPro', 'label');
        var placeholder = form.getFieldProp('SelectPro', 'placeholders');
        if (viewMode) {
            return (react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                react_1.default.createElement("div", { className: "label" }, "\u8BE6\u60C5\u9875\u6D4B\u8BD5\u5B57\u6BB5")));
        }
        else {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "label" }, "\u53D1\u8D77\u9875\u6D4B\u8BD5\u5B57\u6BB5")));
        }
    },
};
exports.default = FormField;
