"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_mobile_1 = require("antd-mobile");
require("./mobile.less");
/**
 * 自定义控件运行态 Mobile 视图
 */
var FormField = {
    getInitialState: function () {
        var form = this.props.form;
        return {
            allData: { type: '0', number: '99999', page: '1', name: '' },
            modalview: false,
            Inputvalue: '',
            listData: [],
        };
    },
    inputFocus: function () {
        var newdate = this.state.allData;
        this.asyncSetFieldProps(newdate);
        this.setState({
            modalview: true,
        });
    },
    itemclick: function (item) {
        this.setState({
            modalview: false,
            Inputvalue: item.name,
        });
    },
    /** 控件首次渲染完成之后 */
    fieldDidMount: function () {
        console.log(location.href);
    },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var SelectProField = form.getFieldInstance('SelectPro');
        var key = SelectProField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'SelectPro',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['SelectPro'],
            bizAsyncData: bizAsyncData,
        })
            .then(function (res) {
            console.log(JSON.parse(res.listData[0].value));
            //   表格数据
            var newarr = JSON.parse(res.listData[0].value).data;
            _this.setState({
                listData: __spreadArray([], newarr),
            });
        });
    },
    fieldRender: function () {
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('SelectPro');
        var label = form.getFieldProp('SelectPro', 'label');
        var required = form.getFieldProp('SelectPro', 'required');
        var placeholder = form.getFieldProp('SelectPro', 'placeholder');
        var season = [
            {
                label: '春',
                value: '春',
            },
            {
                label: '夏',
                value: '夏',
            },
        ];
        return (react_1.default.createElement("div", { className: "field-wrapper" },
            react_1.default.createElement("div", { className: "label" },
                required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                label),
            react_1.default.createElement(antd_mobile_1.InputItem, { value: this.state.Inputvalue, onFocus: this.inputFocus }, "\u59D3\u540D"),
            react_1.default.createElement(antd_mobile_1.Modal, { popup: true, visible: this.state.modalview, onClose: this.onClose('modalview'), animationType: "slide-up" })));
    },
};
exports.default = FormField;
