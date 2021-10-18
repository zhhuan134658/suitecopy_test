"use strict";
// 选择项目
// import React from 'react';
// import { Input } from 'antd';
// import { IFormField } from '../../types';
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var DirectoryTree = antd_1.Tree.DirectoryTree;
var antd_2 = require("antd");
var Header = antd_2.Layout.Header, Footer = antd_2.Layout.Footer, Sider = antd_2.Layout.Sider, Content = antd_2.Layout.Content;
var react_1 = __importDefault(require("react"));
var antd_3 = require("antd");
var Search = antd_3.Input.Search;
var Column = antd_3.Table.Column;
require("./pc.less");
/**
 * 自定义控件运行态 PC 视图
 */
var FormField = {
    getInitialState: function () {
        var form = this.props.form;
        return {
            options: [],
            //   Inputvalue: '123',
            current_page: '',
            total2: '',
            allData: { type: '0', number: '10', page: '1', name: '' },
            isModalVisible: false,
            listData: [],
        };
    },
    /** 控件首次渲染完成之后 */
    fieldDidMount: function () {
        var newdate = this.state.allData;
        this.asyncSetFieldProps(newdate);
    },
    //   onClick() {
    //     const newdate = this.state.allData;
    //     this.asyncSetFieldProps(newdate);
    //   },
    onChangevalue: function (value, selectedOptions) {
        var form = this.props.form;
        var desData = { Optionsid: '', Optionsname: '' };
        desData.Optionsid =
            selectedOptions[0].value +
                '/' +
                selectedOptions[1].value +
                '/' +
                selectedOptions[2].value;
        desData.Optionsname =
            selectedOptions[0].label +
                '/' +
                selectedOptions[1].label +
                '/' +
                selectedOptions[2].label;
        console.log(desData, value);
        form.setFieldValue('PositionDes', desData);
        form.setExtendFieldValue('PositionDes', {
            data: desData,
        });
    },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var PositionDesField = form.getFieldInstance('PositionDes');
        // const leaveReasonField = form.getFieldInstance('leaveReason');
        var key = PositionDesField.getProp('id');
        // const value = PositionDesField.getValue();
        var value = '1';
        // const extendValue = PositionDesField.getExtendValue();
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'PositionDes',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['PositionDes'],
            bizAsyncData: bizAsyncData,
        })
            .then(function (res) {
            var _a;
            var newarr;
            //   表格数据
            try {
                newarr = JSON.parse((_a = res === null || res === void 0 ? void 0 : res.dataList[0]) === null || _a === void 0 ? void 0 : _a.value).data;
            }
            catch (e) { }
            _this.setState({
                options: __spreadArray([], newarr),
                current_page: JSON.parse(res.dataList[0].value).page,
                total2: JSON.parse(res.dataList[0].value).count,
            });
        });
    },
    fieldRender: function () {
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        console.log('qqqqqq', this.props);
        var viewMode = runtimeProps.viewMode;
        console.log('qqqqqq', viewMode);
        var field = form.getFieldInstance('PositionDes');
        console.log('qqqqqq', field);
        var label = form.getFieldProp('PositionDes', 'label');
        var required = form.getFieldProp('PositionDes', 'required');
        var placeholder = form.getFieldProp('PositionDes', 'placeholder');
        var _b = this.state, dataSource = _b.dataSource, selectedRowKeys = _b.selectedRowKeys;
        // 详情页
        if (viewMode) {
            var value = field.getValue();
            var _c = value.Optionsname, Optionsname = _c === void 0 ? '' : _c;
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, Optionsname)));
        }
        return (react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
            react_1.default.createElement("div", { className: "label" },
                required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                ' ',
                label),
            react_1.default.createElement("div", null,
                react_1.default.createElement(antd_3.Cascader, { options: this.state.options, onChange: this.onChangevalue, placeholder: "\u8BF7\u9009\u62E9" }))));
    },
};
exports.default = FormField;
