"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
require("./style.less");
var SuiteSetterDemo = {
    handleChange: function (checked) {
        this.setFieldProps('leaveReason', {
            hidden: !checked,
        });
    },
    setterRender: function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, this.props.label),
            react_1.default.createElement(antd_1.Switch, { defaultChecked: true, onChange: this.handleChange })));
    },
};
exports.default = SuiteSetterDemo;
