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
var react_dom_1 = require("react-dom");
require("antd-mobile/dist/antd-mobile.css");
var antd_mobile_1 = require("antd-mobile");
require("./mobile.less");
/**
 * 自定义控件运行态 Mobile 视图
 */
var FormField = {
    getInitialState: function () {
        var form = this.props.form;
        return {
            SearchBarvalue: '',
            showElem: 'none',
            inputvalue: '',
            allData: { type: '0', number: '99999', page: '1', name: '' },
            listData: [],
        };
    },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var SelectSpoField = form.getFieldInstance('SelectSpo');
        var key = SelectSpoField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'SelectSpo',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['SelectSpo'],
            bizAsyncData: bizAsyncData,
        })
            .then(function (res) {
            var newarr;
            //   表格数据
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            _this.setState({
                listData: __spreadArray([], newarr),
            });
        });
    },
    onOpenChange: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('sss');
        console.log(args);
        var newdate = this.state.allData;
        newdate.rk_id = ['a'];
        this.asyncSetFieldProps(newdate);
        this.setState({ showElem: 'inherit' });
    },
    habdlClick: function (item) {
        var form = this.props.form;
        console.log(item);
        this.setState({ inputvalue: item.name, showElem: 'none' }, function () {
            form.setFieldValue('Jiesmoney', item.detailed_money);
            form.setExtendFieldValue('Jiesmoney', item.detailed_money);
            form.setFieldValue('SelectSpo', item.name);
            form.setExtendFieldValue('SelectSpo', {
                data: item,
            });
        });
    },
    onCancel: function () {
        this.setState({ showElem: 'none' });
    },
    onSubmit: function (value) {
        var newdate = this.state.allData;
        newdate.name = value;
        this.asyncSetFieldProps(newdate);
    },
    //搜索框
    onSearchBarChange: function (value) {
        this.setState({ SearchBarvalue: value });
    },
    fieldRender: function () {
        var _this = this;
        // fix in codepen
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('SelectSpo');
        var label = form.getFieldProp('SelectSpo', 'label');
        var required = form.getFieldProp('SelectSpo', 'required');
        var placeholder = form.getFieldProp('SelectSpo', 'placeholder');
        var sidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, onCancel: this.onCancel, showCancelButton: true }),
            react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true },
                    item.name,
                    "/",
                    item.reply_money,
                    "/",
                    item.t3));
            }))));
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, label),
                    react_1.default.createElement("div", { className: "m-field-view-value" },
                        " ",
                        value))));
        }
        return (react_1.default.createElement("div", { className: "CorpHouse_class_m" },
            ' ',
            react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                    react_1.default.createElement("div", { className: "m-field-wrapper" },
                        react_1.default.createElement("div", { className: "m-field m-field-mobile m-mobile-input vertical" },
                            react_1.default.createElement("div", { className: "m-field-head", style: { marginLeft: '-5px' } },
                                react_1.default.createElement("label", { className: "m-field-label" },
                                    react_1.default.createElement("span", null,
                                        required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                                        label))),
                            react_1.default.createElement("div", { className: "m-field-box" },
                                react_1.default.createElement("div", { className: "m-field-content left" },
                                    react_1.default.createElement("div", { className: "input-wrapper" },
                                        react_1.default.createElement("input", { readOnly: true, className: "ant-input m-mobile-inner-input", type: "text", placeholder: "\u8BF7\u9009\u62E9", value: this.state.inputvalue, onClick: this.onOpenChange })))))),
                    react_dom_1.createPortal(react_1.default.createElement(antd_mobile_1.Drawer, { className: "my-drawer", open: true, style: {
                            minHeight: document.documentElement.clientHeight,
                            display: this.state.showElem,
                        }, enableDragHandle: true, contentStyle: {
                            color: '#A6A6A6',
                            textAlign: 'center',
                            paddingTop: 42,
                        }, sidebar: sidebar, onOpenChange: this.onOpenChange }), document.getElementById('MF_APP'))))));
    },
};
exports.default = FormField;
