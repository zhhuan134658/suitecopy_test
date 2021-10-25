"use strict";
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
            detdate: 'a1',
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
        var TestRegistField = form.getFieldInstance('TestRegist');
        var key = TestRegistField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestRegist',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['TestRegist'],
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
                listData: newarr,
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
        var form = this.props.form;
        var newvalue = this.state.allData;
        newvalue.name = '';
        newvalue.type = 0;
        newvalue.page = 1;
        newvalue.rk_id = ['a'];
        newvalue.project_name = '';
        // this.setState({
        //   allData: newvalue,
        // });
        this.asyncSetFieldProps(newvalue);
        this.setState({ showElem: 'inherit' });
    },
    habdlClick: function (item) {
        var form = this.props.form;
        var dtar = '';
        if (this.state.detdate === 'a1') {
            dtar = '租赁结算-' + item.name;
        }
        else if (this.state.detdate === 'b1') {
            dtar = '租赁合同-' + item.name;
        }
        else if (this.state.detdate === 'c1') {
            dtar = '机械费结算-' + item.name;
        }
        console.log(dtar);
        form.setFieldValue('RegistField', item.contract_name);
        this.setState({ inputvalue: dtar, showElem: 'none' });
        form.setFieldValue('TestRegist', dtar);
        form.setExtendFieldValue('TestRegist', {
            data: dtar,
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
        var field = form.getFieldInstance('TestRegist');
        var label = form.getFieldProp('TestRegist', 'label');
        var required = form.getFieldProp('TestRegist', 'required');
        var placeholder = form.getFieldProp('TestRegist', 'placeholder');
        var tabs = [
            { title: '租赁结算' },
            { title: '租赁合同' },
            { title: '机械费结算' },
        ];
        var sidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, onCancel: this.onCancel, showCancelButton: true }),
            react_1.default.createElement(antd_mobile_1.Tabs, { tabs: tabs, initialPage: 0, onChange: function (tab, index) {
                    console.log('onChange', index, tab);
                    _this.setState({ detdate: 'a1' });
                    var newpage = {
                        defaultActiveKey: 'a',
                        rk_id: ['a'],
                        number: '1000',
                        page: 1,
                        name: '',
                    };
                    if (index === 0) {
                        _this.setState({ detdate: 'a1' });
                        newpage.rk_id = ['a'];
                    }
                    else if (index === 1) {
                        _this.setState({ detdate: 'b1' });
                        newpage.rk_id = ['b'];
                    }
                    else if (index === 2) {
                        _this.setState({ detdate: 'c1' });
                        newpage.rk_id = ['c'];
                    }
                    _this.setState({
                        allData: newpage,
                    });
                    _this.asyncSetFieldProps(newpage);
                } },
                react_1.default.createElement("div", null,
                    ' ',
                    react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                        return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true },
                            item.name,
                            "/ ",
                            item.supplier,
                            "/ ",
                            item.reply_money));
                    }))),
                react_1.default.createElement("div", null,
                    ' ',
                    react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                        return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true },
                            item.name,
                            "/ ",
                            item.supplier,
                            "/ ",
                            item.contract_money));
                    }))),
                react_1.default.createElement("div", null,
                    ' ',
                    react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                        return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true },
                            item.name,
                            "/ ",
                            item.extend_first,
                            "/ ",
                            item.detailed_money));
                    }))))));
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
