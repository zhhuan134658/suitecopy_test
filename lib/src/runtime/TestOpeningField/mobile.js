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
var antd_1 = require("antd");
require("./mobile.less");
var Item = antd_mobile_1.List.Item;
/**
 * 自定义控件运行态 Mobile 视图
 */
var nowTimeStamp = Date.now();
var now = new Date(nowTimeStamp);
var FormField = {
    getInitialState: function () {
        var form = this.props.form;
        return {
            treevalue: undefined,
            deColumns: [
                {
                    title: '物资名称',
                    dataIndex: 'name',
                },
                {
                    title: '单位',
                    dataIndex: 'unit',
                },
                {
                    title: '规格',
                    dataIndex: 'size',
                },
                {
                    title: '库存数量',
                    dataIndex: 'wz_number',
                },
                {
                    title: '备注',
                    dataIndex: 'remarks',
                },
            ],
            treeData: [],
            date: now,
            checkindex: '',
            SearchBarvalue: '',
            showElem: 'none',
            showElem2: 'none',
            inputvalue: '',
            allData: { type: '0', number: '99999', page: '1', name: '' },
            listData: [],
            materialList: [
                {
                    typename: '',
                    name: '',
                    size: '',
                    unit: '',
                    wz_number: '',
                    purchase_unit: '',
                    purchase_riqi: '',
                    purchase_address: '',
                    remarks: '',
                },
            ],
        };
    },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var TestOpeningField = form.getFieldInstance('TestOpening');
        var key = TestOpeningField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestOpening',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['TestOpening'],
            bizAsyncData: bizAsyncData,
        })
            .then(function (res) {
            console.log(JSON.parse(res.dataList[0].value));
            //   表格数据
            var newarr;
            //   表格数据
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            _this.setState({
                listData: __spreadArray([], newarr),
            });
            //   树状图数据
            var newtarr = JSON.parse(res.dataList[0].extendValue);
            var newtarr1 = [
                {
                    title: '物资类型',
                    key: '0',
                    children: newtarr,
                },
            ];
            _this.setState({
                treeData: __spreadArray([], newtarr1),
            });
        });
    },
    onOpenChange: function (index) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log('sss');
        console.log(args);
        var newdate = this.state.allData;
        this.asyncSetFieldProps(newdate);
        this.setState({ showElem: 'inherit', checkindex: index });
    },
    onOpenChange2: function (index) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log('sss');
        console.log(args);
        var newdate = this.state.allData;
        this.asyncSetFieldProps(newdate);
        this.setState({ showElem2: 'inherit', checkindex: index });
    },
    habdlClick: function (item) {
        var form = this.props.form;
        console.log(item);
        var arr = this.state.materialList;
        var arrindex = this.state.checkindex;
        arr[arrindex].name = item.name;
        arr[arrindex].size = item.size;
        arr[arrindex].unit = item.unit;
        this.setState({ inputvalue: item.name, showElem: 'none', materialList: arr }, function () {
            form.setFieldValue('TestOpening', item.name);
            form.setExtendFieldValue('TestOpening', {
                data: item.name,
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
    onSearchBarChange: function (value) {
        this.setState({ SearchBarvalue: value });
    },
    //增加明细
    addSon: function () {
        var sonData = {
            typename: '',
            name: '',
            size: '',
            unit: '',
            wz_number: '',
            purchase_unit: '',
            purchase_riqi: '',
            purchase_address: '',
            remarks: '',
        };
        this.setState({
            materialList: __spreadArray(__spreadArray([], this.state.materialList), [sonData]),
        });
    },
    //删除明细
    deleteItem: function (index) {
        var list = this.state.materialList;
        list.splice(index, 1);
        this.setState({
            materialList: list,
        });
    },
    //更新数据
    onInputchange: function (types, index, e) {
        console.log(types, index, e, this);
        var arr = this.state.materialList;
        console.log(this.state.materialList);
        // let arrindex = e.target.value;
        var arrindex = e;
        var newindex = index;
        var newtype = types;
        // arr[newindex] = {};
        arr[newindex][newtype] = arrindex;
        this.setState({ materialList: __spreadArray([], arr) });
        console.log(arr);
    },
    onDatechange: function (types, index, dateString) {
        // let arr = this.state.materialList;
        // let purchase_riqi = 'purchase_riqi';
        // arr[index][purchase_riqi] = dateString;
        // this.setState({ materialList: [...arr] });
    },
    fieldDidUpdate: function () {
        if (!this.props.runtimeProps.viewMode) {
            console.log('发起页：fieldDidUpdate');
            var editData = {
                detailedData: [], //物资明细
            };
            editData.detailedData = this.state.materialList;
            var form = this.props.form;
            form.setFieldValue('TestOpening', editData);
            form.setExtendFieldValue('TestOpening', {
                data: editData,
            });
        }
    },
    fieldRender: function () {
        var _this = this;
        // fix in codepen
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('TestOpening');
        var required = form.getFieldProp('SelectPro', 'required');
        var label = form.getFieldProp('TestOpening', 'label');
        var onSelect = function (selectedKeys, info) {
            var arr = _this.state.materialList;
            var newindex = _this.state.checkindex;
            arr[newindex].typename = info.node.title;
            _this.setState({ showElem2: 'none', materialList: __spreadArray([], arr) });
            var treedata = { type: selectedKeys[0], number: '10', page: '1' };
            _this.setState({
                allData: treedata,
            });
            _this.asyncSetFieldProps(treedata);
            console.log('selected', selectedKeys, info.node.title);
        };
        var onCheck = function (checkedKeys, info) {
            console.log('onCheck', checkedKeys, info);
        };
        var sidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, showCancelButton: true, onCancel: function () { return _this.setState({ showElem: 'none' }); } }),
            react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true },
                    item.name,
                    "/",
                    item.unit,
                    "/",
                    item.size));
            }))));
        var treesidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, onCancel: function () { return _this.setState({ showElem2: 'none' }); }, showCancelButton: true }),
            react_1.default.createElement(antd_1.Tree, { onSelect: onSelect, treeData: this.state.treeData })));
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _b = value.detailedData, detailedData = _b === void 0 ? [] : _b;
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "tablefield-mobile" },
                    react_1.default.createElement("div", { className: "tbody-row-wrap" }, detailedData.map(function (item, index) {
                        return (react_1.default.createElement("div", { className: "row" },
                            react_1.default.createElement("label", { className: "label row-label-title" },
                                label,
                                "\u660E\u7EC6(",
                                index + 1,
                                ")"),
                            _this.state.deColumns.map(function (itemname, indexname) {
                                if (!item[itemname.dataIndex]) {
                                    return null;
                                }
                                return (react_1.default.createElement("div", null,
                                    react_1.default.createElement("div", { className: "field-wrapper" },
                                        react_1.default.createElement("div", { className: "m-field-view" },
                                            react_1.default.createElement("label", { className: "m-field-view-label" }, itemname.title),
                                            react_1.default.createElement("div", { className: "m-field-view-value" },
                                                react_1.default.createElement("span", null, item[itemname.dataIndex]))))));
                            })));
                    })))));
        }
        return (react_1.default.createElement("div", { className: "CorpHouse_class_m" },
            ' ',
            react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "tablefield-mobile" },
                    react_1.default.createElement("div", { className: "table-body  tbody  " },
                        this.state.materialList.map(function (item, index) {
                            return (react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: "tbody-row-wrap" },
                                    react_1.default.createElement("div", { className: "tbody-row-pannel" },
                                        react_1.default.createElement("div", { className: "custom-list-title", style: {
                                                width: '100%',
                                                paddingLeft: '15px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            } },
                                            react_1.default.createElement("div", null,
                                                label,
                                                "-\u660E\u7EC6(",
                                                index + 1,
                                                ")"),
                                            _this.state.materialList.length > 0 ? (react_1.default.createElement("div", { className: "dele_item", onClick: _this.deleteItem.bind(_this, index) }, "\u5220\u9664")) : (react_1.default.createElement("div", null))),
                                        react_1.default.createElement("div", { className: "row" },
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u7269\u8D44\u540D\u79F0"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, type: "text", className: "ant-input m-mobile-inner-input", value: item.name, placeholder: "\u8BF7\u9009\u62E9", onClick: _this.onOpenChange.bind(_this, index), onChange: function (e) {
                                                                                    return _this.onInputchange('name', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u89C4\u683C\u578B\u53F7"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, type: "text", className: "ant-input m-mobile-inner-input", value: item.size, placeholder: "\u81EA\u52A8\u83B7\u53D6", readOnly: true }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u5355\u4F4D"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, type: "text", readOnly: true, className: "ant-input m-mobile-inner-input", value: item.unit, placeholder: "\u81EA\u52A8\u83B7\u53D6" }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u5E93\u5B58\u6570\u91CF"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { className: "ant-input m-mobile-inner-input", value: item.wz_number, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('wz_number', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u5907\u6CE8"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { type: "text", className: "ant-input m-mobile-inner-input", value: item.remarks, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('remarks', index, e);
                                                                                } }))))))))))))));
                        }),
                        react_1.default.createElement("div", { className: "table-actions" },
                            react_1.default.createElement("div", { className: "tbody-add-button tTap", onClick: this.addSon },
                                react_1.default.createElement("img", { style: { width: '20px' }, src: "https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//Em46p8naW61629791119284.png", alt: "" }),
                                "\u00A0",
                                react_1.default.createElement("span", { className: "add-button-text" }, "\u589E\u52A0\u660E\u7EC6"))))),
                react_dom_1.createPortal(react_1.default.createElement(antd_mobile_1.Drawer, { className: "my-drawer", open: true, style: {
                        minHeight: document.documentElement.clientHeight,
                        display: this.state.showElem,
                    }, enableDragHandle: true, contentStyle: {
                        color: '#A6A6A6',
                        textAlign: 'center',
                        paddingTop: 42,
                    }, sidebar: sidebar, onOpenChange: this.onOpenChange }), document.getElementById('MF_APP')),
                react_dom_1.createPortal(react_1.default.createElement(antd_mobile_1.Drawer, { className: "my-drawer", open: true, style: {
                        minHeight: document.documentElement.clientHeight,
                        display: this.state.showElem2,
                    }, enableDragHandle: true, contentStyle: {
                        color: '#A6A6A6',
                        textAlign: 'center',
                        paddingTop: 42,
                    }, sidebar: treesidebar, onOpenChange: this.onOpenChange2 }), document.getElementById('MF_APP')))));
    },
};
exports.default = FormField;
