"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
        var SelecTickefaField = form.getFieldInstance('SelecTickefa');
        var key = SelecTickefaField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'SelecTickefa',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['SelecTickefa'],
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
            dtar = '材料合同-' + item.name;
        }
        else if (this.state.detdate === 'b1') {
            dtar = '劳务合同-' + item.name;
        }
        else if (this.state.detdate === 'c1') {
            dtar = '分包合同-' + item.name;
        }
        else if (this.state.detdate === 'd1') {
            dtar = '租赁合同-' + item.name;
        }
        else if (this.state.detdate === 'e1') {
            dtar = '收入合同-' + item.name;
        }
        console.log(dtar);
        this.setState({ inputvalue: dtar, showElem: 'none' });
        form.setFieldValue('SelecTickefa', dtar);
        form.setExtendFieldValue('SelecTickefa', {
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
        var field = form.getFieldInstance('SelecTickefa');
        var label = form.getFieldProp('SelecTickefa', 'label');
        var required = form.getFieldProp('SelecTickefa', 'required');
        var placeholder = form.getFieldProp('SelecTickefa', 'placeholder');
        var tabs = [
            { title: '材料合同' },
            { title: '劳务合同' },
            { title: '分包合同' },
            { title: '租赁合同' },
            { title: '收入合同' },
        ];
        var sidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, onCancel: this.onCancel, showCancelButton: true }),
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
                    else if (index === 3) {
                        _this.setState({ detdate: 'd1' });
                        newpage.rk_id = ['d'];
                    }
                    _this.setState({
                        allData: newpage,
                    });
                    _this.asyncSetFieldProps(newpage);
                } }),
            react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true }, item.name));
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
            react_1.default.createElement("div", { className: "CorpHouse_class_m" })));
    },
};
exports.default = FormField;
