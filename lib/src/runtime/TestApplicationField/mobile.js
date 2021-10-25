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
                    title: '规格型号',
                    dataIndex: 'size',
                },
                {
                    title: '总计划量',
                    dataIndex: 'zh_plan_quantity',
                },
                {
                    title: '需用数量',
                    dataIndex: 'need_quantity',
                    editable: true,
                },
                {
                    title: '参考价格',
                    dataIndex: 'refer_price',
                    editable: true,
                },
                {
                    title: '小计',
                    dataIndex: 'subtotal',
                },
                {
                    title: '备注',
                    dataIndex: 'remarks',
                },
            ],
            Inputmoney1: '',
            checkData: [],
            chenkdata: '',
            treevalue: undefined,
            treeData: [],
            date: now,
            checkindex: '',
            SearchBarvalue: '',
            showElem: 'none',
            showElem2: 'none',
            showElem3: 'none',
            inputvalue: '',
            allData: { type: '0', number: '99999', page: '1', name: '' },
            listData: [],
            materialList: [
                {
                    typename: '',
                    name: '',
                    size: '',
                    unit: '',
                    rk_number: '',
                    tax_price: '',
                    tax_rate: '',
                    notax_price: '',
                    tax_money: '',
                    notax_money: '',
                },
            ],
            sonData: {
                typename: '',
                name: '',
                size: '',
                unit: '',
                rk_number: '',
                tax_price: '',
                tax_rate: '',
                notax_price: '',
                tax_money: '',
                notax_money: '',
            },
        };
    },
    asyncSetFieldProps: function (vlauedata, type) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var TestApplicationField = form.getFieldInstance('TestApplication');
        var key = TestApplicationField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestApplication',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['TestApplication'],
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
            _this.setState({
                checkData: __spreadArray([], newarr),
            });
            if (type === 1) {
                console.log('9887987', newarr);
                _this.setState({
                    materialList: newarr,
                });
            }
        });
    },
    getcheckdata: function () {
        var form = this.props.form;
        var Pro_name = form.getFieldValue('Autopro');
        this.setState({ dstatus: '1' });
        var newpage = {
            rk_id: ['a'],
            number: '10',
            page: 1,
            name: '',
        };
        this.setState({
            allData: newpage,
        });
        this.asyncSetFieldProps(newpage);
        this.setState({ showElem3: 'inherit' });
    },
    onOpenChange: function (index) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log('sss');
        console.log(args);
        var newdate = this.state.allData;
        newdate.rk_id = ['-1'];
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
            form.setFieldValue('TestApplication', item.name);
            form.setExtendFieldValue('TestApplication', {
                data: item.name,
            });
        });
    },
    checkClick: function (item) {
        var cDataid = [item.id];
        var newdate = this.state.allData;
        newdate.rk_id = __spreadArray(['a1'], cDataid);
        this.asyncSetFieldProps(newdate, 1);
        this.setState({
            chenkdata: item.name,
            showElem3: 'none',
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
        this.setState({
            materialList: __spreadArray(__spreadArray([], this.state.materialList), [this.state.sonData]),
        });
    },
    //删除明细
    deleteItem: function (index) {
        var list = this.state.materialList;
        list.splice(index, 1);
        this.setState({
            materialList: list,
        });
        var newarr2 = [];
        newarr2 = list.filter(function (item) {
            if (item.subtotal) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.subtotal;
        });
        this.setState({
            Inputmoney1: eval(newarr2.join('+')).toFixed(2),
        });
    },
    //更新数据
    onInputchange: function (types, index, e) {
        console.log(types, index, e, this);
        var arr = this.state.materialList;
        console.log('120', this.state.materialList);
        var arrindex = e;
        var newindex = index;
        var newtype = types;
        arr[newindex][newtype] = arrindex;
        arr[newindex].subtotal =
            arr[newindex].need_quantity * arr[newindex].refer_price;
        //   含税金额
        var newarr2 = [];
        newarr2 = arr.filter(function (item) {
            if (item.subtotal) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.subtotal;
        });
        this.setState({
            materialList: __spreadArray([], arr),
            Inputmoney1: eval(newarr2.join('+')).toFixed(2),
        });
        console.log('12', arr);
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
                hanmoney: '',
                nomoney: '',
                detailname: '',
                detailedData: [], //物资明细
            };
            if (this.state.Inputmoney1) {
                editData.hanmoney = this.state.Inputmoney1;
            }
            if (this.state.Inputmoney2) {
                editData.nomoney = this.state.Inputmoney2;
            }
            editData.detailname = this.state.chenkdata;
            editData.detailedData = this.state.materialList;
            var form = this.props.form;
            form.setFieldValue('TestApplication', editData);
            form.setExtendFieldValue('TestApplication', {
                data: editData,
            });
        }
    },
    fieldRender: function () {
        var _this = this;
        // fix in codepen
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('TestApplication');
        var required = form.getFieldProp('SelectPro', 'required');
        var label = form.getFieldProp('TestApplication', 'label');
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
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, showCancelButton: true, onCancel: function () {
                    return _this.setState({ showElem: 'none', SearchBarvalue: '' });
                } }),
            react_1.default.createElement(antd_mobile_1.List, null, this.state.listData.map(function (item, index) {
                return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true },
                    item.name,
                    "/",
                    item.unit,
                    "/",
                    item.size));
            }))));
        var checkdebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, showCancelButton: true, onCancel: function () {
                    return _this.setState({ showElem3: 'none', SearchBarvalue: '' });
                } }),
            react_1.default.createElement(antd_mobile_1.List, null, this.state.checkData.map(function (item, index) {
                return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.checkClick.bind(_this, item), key: index, multipleLine: true }, item.name));
            }))));
        var treesidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, onCancel: function () {
                    return _this.setState({ showElem2: 'none', SearchBarvalue: '' });
                }, showCancelButton: true }),
            react_1.default.createElement(antd_1.Tree, { onSelect: onSelect, treeData: this.state.treeData })));
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _b = value.hanmoney, hanmoney = _b === void 0 ? '' : _b, _c = value.nomoney, nomoney = _c === void 0 ? '' : _c, _d = value.detailname, detailname = _d === void 0 ? '' : _d, _e = value.detailedData, detailedData = _e === void 0 ? [] : _e;
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
                    }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "field-wrapper" },
                        react_1.default.createElement("div", { className: "m-field-view" },
                            react_1.default.createElement("label", { className: "m-field-view-label" }, "\u5408\u8BA1\u603B\u989D"),
                            react_1.default.createElement("div", { className: "m-field-view-value" },
                                react_1.default.createElement("span", null, hanmoney)))))));
        }
        return (react_1.default.createElement("div", { className: "CorpHouse_class_m" },
            ' ',
            react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "field-wrapper" },
                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                react_1.default.createElement("div", { className: "m-field-head" },
                                    react_1.default.createElement("div", { className: "m-field-label" },
                                        react_1.default.createElement("span", null, label))),
                                react_1.default.createElement("div", { className: "m-field-box" },
                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, value: this.state.chenkdata, onClick: this.getcheckdata, placeholder: "\u8BF7\u9009\u62E9", readOnly: true })))))))),
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
                                                                        react_1.default.createElement("span", null, "\u603B\u8BA1\u5212\u91CF"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { value: item.zh_plan_quantity, placeholder: "\u81EA\u52A8\u83B7\u53D6", onChange: function (e) {
                                                                                    return _this.onInputchange('zh_plan_quantity', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u9700\u7528\u6570\u91CF"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { clear: true, value: item.need_quantity, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('need_quantity', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u53C2\u8003\u4EF7\u683C"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { clear: true, value: item.refer_price, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('refer_price', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u5C0F\u8BA1"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, clear: true, value: item.subtotal, placeholder: "\u81EA\u52A8\u8BA1\u7B97" }))))))))),
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
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { clear: true, value: item.remarks, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('remarks', index, e);
                                                                                } }))))))))))))));
                        }),
                        react_1.default.createElement("div", { className: "table-actions" },
                            react_1.default.createElement("div", { className: "tbody-add-button tTap", onClick: this.addSon },
                                react_1.default.createElement("img", { style: { width: '20px' }, src: "https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//Em46p8naW61629791119284.png", alt: "" }),
                                "\u00A0",
                                react_1.default.createElement("span", { className: "add-button-text" }, "\u589E\u52A0\u660E\u7EC6"))))),
                react_1.default.createElement("div", { className: "field-wrapper" },
                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                react_1.default.createElement("div", { className: "m-field-head" },
                                    react_1.default.createElement("div", { className: "m-field-label" },
                                        react_1.default.createElement("span", null, "\u5408\u8BA1\u603B\u989D"))),
                                react_1.default.createElement("div", { className: "m-field-box" },
                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, value: this.state.Inputmoney1, placeholder: "\u81EA\u52A8\u8BA1\u7B97", readOnly: true })))))))),
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
                    }, sidebar: treesidebar, onOpenChange: this.onOpenChange2 }), document.getElementById('MF_APP')),
                react_dom_1.createPortal(react_1.default.createElement(antd_mobile_1.Drawer, { className: "my-drawer", open: true, style: {
                        minHeight: document.documentElement.clientHeight,
                        display: this.state.showElem3,
                    }, enableDragHandle: true, contentStyle: {
                        color: '#A6A6A6',
                        textAlign: 'center',
                        paddingTop: 42,
                    }, sidebar: checkdebar, onOpenChange: this.onOpenChange3 }), document.getElementById('MF_APP')))));
    },
};
exports.default = FormField;
