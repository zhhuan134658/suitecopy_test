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
var array_tree_filter_1 = __importDefault(require("array-tree-filter"));
require("./mobile.less");
/**
 * 自定义控件运行态 Mobile 视图
 */
var FormField = {
    getInitialState: function () {
        var form = this.props.form;
        return {
            pickerValuedata: '',
            pickerValue: [],
            visible: false,
            value: null,
            province: [],
            modal2: false,
            SearchBarvalue: '',
            showElem: 'none',
            inputvalue: '',
            allData: { type: '0', number: '99999', page: '1', name: '' },
            listData: [],
        };
    },
    fieldDidUpdate: function () {
        if (!this.props.runtimeProps.viewMode) {
        }
    },
    sublisk: function () {
        var newdate = this.state.allData;
        this.asyncSetFieldProps(newdate);
        this.setState({ visible: true });
    },
    onOk: function () {
        this.setState({ visible: false });
    },
    onPickerChange: function (value) {
        var form = this.props.form;
        this.setState({ pickerValue: value });
        var valuedata = this.state.pickerValue;
        var desData = { Optionsid: '', Optionsname: '' };
        if (!value) {
            this.setState({ pickerValuedata: '' }, function () {
                form.setFieldValue('PositionDes', desData);
                form.setExtendFieldValue('PositionDes', {
                    data: desData,
                });
            });
        }
        else {
            var treeChildren = array_tree_filter_1.default(this.state.province, function (c, level) { return c.value === value[level]; });
            var newdata = treeChildren.map(function (v) { return v.label; }).join('/');
            desData.Optionsid = value;
            desData.Optionsname = newdata;
            this.setState({ pickerValuedata: newdata }, function () {
                form.setFieldValue('PositionDes', desData);
                form.setExtendFieldValue('PositionDes', {
                    data: desData,
                });
            });
        }
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
            console.log('weqweq111111111111111111', res);
            var newarr;
            //   表格数据
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            _this.setState({
                province: __spreadArray([], newarr),
                current_page: JSON.parse(res.dataList[0].value).page,
                total2: JSON.parse(res.dataList[0].value).count,
            });
        });
    },
    fieldRender: function () {
        var _this = this;
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('PositionDes');
        var label = form.getFieldProp('PositionDes', 'label');
        var required = form.getFieldProp('PositionDes', 'required');
        var placeholder = form.getFieldProp('PositionDes', 'placeholder');
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _b = value.Optionsname, Optionsname = _b === void 0 ? '' : _b;
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, label),
                    react_1.default.createElement("div", { className: "m-field-view-value" }, Optionsname))));
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.Picker, { visible: this.state.visible, data: this.state.province, value: this.state.pickerValue, onChange: this.onPickerChange, onOk: this.onOk, onDismiss: function () { return _this.setState({ visible: false }); } },
                react_1.default.createElement("div", { className: "field-wrapper" },
                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-mobile-input vertical" },
                                react_1.default.createElement("div", { className: "m-field-head", style: { marginLeft: '-5px' } },
                                    react_1.default.createElement("label", { className: "m-field-label" },
                                        react_1.default.createElement("span", null, label))),
                                react_1.default.createElement("div", { className: "m-field-box" },
                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                            react_1.default.createElement("input", { readOnly: true, className: "ant-input m-mobile-inner-input", type: "text", placeholder: "\u8BF7\u9009\u62E9", value: this.state.pickerValuedata, onClick: this.sublisk })))))))))));
    },
};
exports.default = FormField;
