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
            Inputmoney1: '',
            checked: false,
            treevalue: undefined,
            deColumns: [
                {
                    title: '费用科目',
                    dataIndex: 'ke_name',
                },
                {
                    title: '金额',
                    dataIndex: 'money',
                },
                {
                    title: '备注',
                    dataIndex: 'remarks',
                },
            ],
            treeData: [],
            maxnum: '',
            date: now,
            checkindex: '',
            SearchBarvalue: '',
            showElem: 'none',
            showElem2: 'none',
            inputvalue: '',
            Numbervalue1: '',
            Numbervalue2: '',
            Numbervalue3: '',
            Numbervalue4: '',
            Numbervalue5: '',
            allData: { type: '0', number: '99999', page: '1', name: '' },
            listData: [],
            petty_sele: '否',
            materialList: [
                {
                    ke_name: '',
                    money: '',
                    remarks: '',
                },
            ],
        };
    },
    asyncSetFieldProps: function (vlauedata, type) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        vlauedata.petty_sele = this.state.petty_sele;
        // vlauedata.petty_yu = this.state.Numbervalue1;
        // vlauedata.project_name = this.state.Numbervalue2;
        var TestExpeField = form.getFieldInstance('TestExpe');
        var key = TestExpeField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestExpe',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['TestExpe'],
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
            if (type == '12') {
                var menuId = [];
                var len = newarr.length;
                for (var i = 0; i < len; i++) {
                    var item = newarr[i];
                    if (item.children && item.children.length != 0) {
                        var children = item.children;
                        for (var j = 0; j < children.length; j++) {
                            newarr[len + j] = children[j];
                        }
                        len = newarr.length;
                    }
                    menuId.push(item);
                }
                var add = menuId.filter(function (item) {
                    if (!item.children) {
                        return item;
                    }
                });
                _this.setState({
                    listData: add,
                });
                console.log('2222222', add);
            }
            else if (type == '11') {
                _this.setState({
                    Numbervalue1: Number(newarr.sy),
                    Numbervalue3: Number(newarr.fybx_dk_spz),
                    Numbervalue4: Number(newarr.re_money_spz),
                    maxnum: Number(newarr.sy) -
                        Number(newarr.fybx_dk_spz) -
                        Number(newarr.re_money_spz),
                });
            }
            //   树状图数据
            // const newtarr = JSON.parse(res.dataList[0].extendValue);
            // const newtarr1 = [
            //   {
            //     title: '物资类型',
            //     key: '0',
            //     children: newtarr,
            //   },
            // ];
            // this.setState({
            //   treeData: [...newtarr1],
            // });
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
        newdate.rk_id = ['a'];
        this.asyncSetFieldProps(newdate, '12');
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
        arr[arrindex].ke_name = item.value;
        this.setState({ inputvalue: item.value, showElem: 'none', materialList: arr }, function () {
            form.setFieldValue('TestExpe', item.value);
            form.setExtendFieldValue('TestExpe', {
                data: item.value,
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
            ke_name: '',
            money: '',
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
        var newarr2 = [];
        newarr2 = arr.filter(function (item) {
            if (item.money) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.money;
        });
        this.setState({
            materialList: __spreadArray([], arr),
            Inputmoney1: eval(newarr2.join('+')).toFixed(2),
        });
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
                hanmoney: '',
                nomoney: '',
                detailedData: [],
                petty_sele: '',
                Numbervalue1: '',
                Numbervalue2: '',
                Numbervalue3: '',
                Numbervalue4: '',
                Numbervalue5: '', //财务应支付金额
            };
            if (this.state.Inputmoney1) {
                editData.hanmoney = this.state.Inputmoney1;
            }
            if (this.state.Inputmoney2) {
                editData.nomoney = this.state.Inputmoney2;
            }
            editData.detailedData = this.state.materialList;
            editData.petty_sele = this.state.petty_sele;
            editData.Numbervalue1 = this.state.Numbervalue1;
            editData.Numbervalue2 = this.state.Numbervalue2;
            editData.Numbervalue3 = this.state.Numbervalue3;
            editData.Numbervalue4 = this.state.Numbervalue4;
            editData.Numbervalue5 = this.state.Numbervalue5;
            var form = this.props.form;
            form.setFieldValue('TestExpe', editData);
            form.setExtendFieldValue('TestExpe', {
                data: editData,
            });
        }
        // this.state.dataSource;
        // this.state.Inputmoney1;
        // this.state.Inputmoney2;
    },
    fieldRender: function () {
        var _this = this;
        // fix in codepen
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('TestExpe');
        var required = form.getFieldProp('SelectPro', 'required');
        var label = form.getFieldProp('TestExpe', 'label');
        var onSelect = function (selectedKeys, info) {
            var arr = _this.state.materialList;
            var newindex = _this.state.checkindex;
            arr[newindex].ke_name = info.node.title;
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
                return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.habdlClick.bind(_this, item), key: index, multipleLine: true }, item.value));
            }))));
        var treesidebar = (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_mobile_1.SearchBar, { value: this.state.SearchBarvalue, placeholder: "\u8BF7\u8F93\u5165", onSubmit: this.onSubmit, onChange: this.onSearchBarChange, onCancel: function () { return _this.setState({ showElem2: 'none' }); }, showCancelButton: true }),
            react_1.default.createElement(antd_1.Tree, { onSelect: onSelect, treeData: this.state.treeData })));
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _b = value.hanmoney, hanmoney = _b === void 0 ? '' : _b, _c = value.detailedData, detailedData = _c === void 0 ? [] : _c, _d = value.petty_sele, petty_sele = _d === void 0 ? '' : _d, _e = value.Numbervalue1, Numbervalue1 = _e === void 0 ? '' : _e, _f = value.Numbervalue2, Numbervalue2 = _f === void 0 ? '' : _f, _g = value.Numbervalue3, Numbervalue3 = _g === void 0 ? '' : _g, _h = value.Numbervalue4, Numbervalue4 = _h === void 0 ? '' : _h;
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
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, "\u5907\u7528\u91D1\u62B5\u6263"),
                    react_1.default.createElement("div", { className: "m-field-view-value" },
                        " ",
                        petty_sele)),
                ' ',
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, "\u5907\u7528\u91D1\u4F59\u989D"),
                    react_1.default.createElement("div", { className: "m-field-view-value" },
                        " ",
                        Numbervalue1)),
                ' ',
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, "\u672C\u6B21\u62B5\u6263\u91D1\u989D"),
                    react_1.default.createElement("div", { className: "m-field-view-value" },
                        " ",
                        Numbervalue2)),
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, "\u5BA1\u6279\u4E2D\u7684\u8D39\u7528\u62A5\u9500\u62B5\u6263"),
                    react_1.default.createElement("div", { className: "m-field-view-value" },
                        " ",
                        Numbervalue3)),
                ' ',
                react_1.default.createElement("div", { className: "m-field-view" },
                    react_1.default.createElement("label", { className: "m-field-view-label" }, "\u5BA1\u6279\u4E2D\u7684\u5F52\u8FD8"),
                    react_1.default.createElement("div", { className: "m-field-view-value" },
                        " ",
                        Numbervalue4))));
        }
        return (react_1.default.createElement("div", { className: "field-wrapper" },
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
                                        _this.state.materialList.length > 1 ? (react_1.default.createElement("div", { className: "dele_item", onClick: _this.deleteItem.bind(_this, index) }, "\u5220\u9664")) : (react_1.default.createElement("div", null))),
                                    react_1.default.createElement("div", { className: "row" },
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement("div", { className: "field-wrapper" },
                                                react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                    react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                        react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                            react_1.default.createElement("div", { className: "m-field-head" },
                                                                react_1.default.createElement("div", { className: "m-field-label" },
                                                                    react_1.default.createElement("span", null, "\u8D39\u7528\u79D1\u76EE"))),
                                                            react_1.default.createElement("div", { className: "m-field-box" },
                                                                react_1.default.createElement("div", { className: "m-field-content left" },
                                                                    react_1.default.createElement("div", { className: "input-wrapper" },
                                                                        react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, type: "text", className: "ant-input m-mobile-inner-input", value: item.ke_name, placeholder: "\u8BF7\u9009\u62E9", onClick: _this.onOpenChange.bind(_this, index), onChange: function (e) {
                                                                                return _this.onInputchange('ke_name', index, e);
                                                                            } }))))))))),
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement("div", { className: "field-wrapper" },
                                                react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                    react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                        react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                            react_1.default.createElement("div", { className: "m-field-head" },
                                                                react_1.default.createElement("div", { className: "m-field-label" },
                                                                    react_1.default.createElement("span", null, "\u91D1\u989D"))),
                                                            react_1.default.createElement("div", { className: "m-field-box" },
                                                                react_1.default.createElement("div", { className: "m-field-content left" },
                                                                    react_1.default.createElement("div", { className: "input-wrapper" },
                                                                        react_1.default.createElement(antd_mobile_1.InputItem, { type: "text", className: "ant-input m-mobile-inner-input", value: item.money, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                return _this.onInputchange('money', index, e);
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
                            react_1.default.createElement("span", { className: "add-button-text" }, "\u589E\u52A01\u660E\u7EC6"))),
                    react_1.default.createElement("div", { className: "field-wrapper" },
                        react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                            react_1.default.createElement("div", { className: "m-field-wrapper" },
                                react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                    react_1.default.createElement("div", { className: "m-field-head" },
                                        react_1.default.createElement("div", { className: "m-field-label" },
                                            react_1.default.createElement("span", null, "\u62A5\u9500\u5408\u8BA1"))),
                                    react_1.default.createElement("div", { className: "m-field-box" },
                                        react_1.default.createElement("div", { className: "m-field-content left" },
                                            react_1.default.createElement("div", { className: "input-wrapper" },
                                                react_1.default.createElement(antd_mobile_1.InputItem, { type: "text", className: "ant-input m-mobile-inner-input", value: this.state.Inputmoney1, placeholder: "\u81EA\u52A8\u83B7\u53D6", readOnly: true, editable: false })))))))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "field-wrapper" },
                            react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                react_1.default.createElement("div", { className: "m-field-wrapper" },
                                    react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                        react_1.default.createElement("div", { className: "m-field-head" },
                                            react_1.default.createElement("div", { className: "m-field-label" },
                                                react_1.default.createElement("span", null, "\u5907\u7528\u91D1\u62B5\u6263"))),
                                        react_1.default.createElement("div", { className: "m-field-box" },
                                            react_1.default.createElement("div", { className: "m-field-content left" },
                                                react_1.default.createElement("div", { className: "input-wrapper" },
                                                    react_1.default.createElement(antd_mobile_1.Switch, { checked: this.state.checked, onChange: function (checked) {
                                                            console.log(checked);
                                                            if (checked == false) {
                                                                _this.setState({
                                                                    petty_sele: '否',
                                                                });
                                                            }
                                                            else {
                                                                _this.setState({
                                                                    petty_sele: '是',
                                                                });
                                                                var newdate = _this.state.allData;
                                                                newdate.rk_id = ['是'];
                                                                _this.asyncSetFieldProps(newdate, '11');
                                                            }
                                                            _this.setState({
                                                                checked: !_this.state.checked,
                                                            });
                                                        } }))))))))),
                    react_1.default.createElement("div", null, this.state.checked ? (react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "field-wrapper" },
                            react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                react_1.default.createElement("div", { className: "m-field-wrapper" },
                                    react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                        react_1.default.createElement("div", { className: "m-field-head" },
                                            react_1.default.createElement("div", { className: "m-field-label" },
                                                react_1.default.createElement("span", null, "\u5907\u7528\u91D1\u4F59\u989D"))),
                                        react_1.default.createElement("div", { className: "m-field-box" },
                                            react_1.default.createElement("div", { className: "m-field-content left" },
                                                react_1.default.createElement("div", { className: "input-wrapper" },
                                                    react_1.default.createElement(antd_mobile_1.InputItem, { type: "text", className: "ant-input m-mobile-inner-input", value: this.state.Numbervalue1, placeholder: "\u81EA\u52A8\u83B7\u53D6", readOnly: true, editable: false })))))))),
                        react_1.default.createElement("div", { className: "field-wrapper" },
                            react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                react_1.default.createElement("div", { className: "m-field-wrapper" },
                                    react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                        react_1.default.createElement("div", { className: "m-field-head" },
                                            react_1.default.createElement("div", { className: "m-field-label" },
                                                react_1.default.createElement("span", null, "\u5BA1\u6279\u4E2D\u7684\u8D39\u7528\u62A5\u9500\u62B5\u6263"))),
                                        react_1.default.createElement("div", { className: "m-field-box" },
                                            react_1.default.createElement("div", { className: "m-field-content left" },
                                                react_1.default.createElement("div", { className: "input-wrapper" },
                                                    react_1.default.createElement(antd_mobile_1.InputItem, { type: "text", className: "ant-input m-mobile-inner-input", value: this.state.Numbervalue3, placeholder: "\u81EA\u52A8\u83B7\u53D6", readOnly: true, editable: false })))))))),
                        react_1.default.createElement("div", { className: "field-wrapper" },
                            react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                react_1.default.createElement("div", { className: "m-field-wrapper" },
                                    react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                        react_1.default.createElement("div", { className: "m-field-head" },
                                            react_1.default.createElement("div", { className: "m-field-label" },
                                                react_1.default.createElement("span", null, "\u5BA1\u6279\u4E2D\u7684\u5F52\u8FD8"))),
                                        react_1.default.createElement("div", { className: "m-field-box" },
                                            react_1.default.createElement("div", { className: "m-field-content left" },
                                                react_1.default.createElement("div", { className: "input-wrapper" },
                                                    react_1.default.createElement(antd_mobile_1.InputItem, { type: "text", className: "ant-input m-mobile-inner-input", value: this.state.Numbervalue4, placeholder: "\u81EA\u52A8\u83B7\u53D6", readOnly: true, editable: false })))))))),
                        react_1.default.createElement("div", { className: "field-wrapper" },
                            react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                react_1.default.createElement("div", { className: "m-field-wrapper" },
                                    react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                        react_1.default.createElement("div", { className: "m-field-head" },
                                            react_1.default.createElement("div", { className: "m-field-label" },
                                                react_1.default.createElement("span", null, "\u672C\u6B21\u62B5\u6263\u91D1\u989D"))),
                                        react_1.default.createElement("div", { className: "m-field-box" },
                                            react_1.default.createElement("div", { className: "m-field-content left" },
                                                react_1.default.createElement("div", { className: "input-wrapper" },
                                                    react_1.default.createElement("input", { type: "number", max: this.state.maxnum, className: "ant-input m-mobile-inner-input", value: this.state.Numbervalue2, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                            //   e.target.value
                                                            var number1 = _this.state.maxnum;
                                                            var number2 = _this.state.Inputmoney1;
                                                            var val = Number(e.target.value);
                                                            if (number1 > number2) {
                                                                if (val > _this.state.Inputmoney1) {
                                                                    var aa = _this.state.Inputmoney1;
                                                                    var bb = Number(aa) -
                                                                        Number(_this.state.maxnum);
                                                                    _this.setState({
                                                                        Numbervalue2: _this.state.Inputmoney1,
                                                                        Numbervalue5: bb.toFixed(2),
                                                                    });
                                                                }
                                                                else {
                                                                    var aa = _this.state.Inputmoney1;
                                                                    var bb = aa - val;
                                                                    _this.setState({
                                                                        Numbervalue2: val.toFixed(2),
                                                                        Numbervalue5: bb.toFixed(2),
                                                                    });
                                                                }
                                                            }
                                                            else {
                                                                if (val > _this.state.maxnum) {
                                                                    var aa = _this.state.Inputmoney1;
                                                                    var bb = aa - _this.state.maxnum;
                                                                    _this.setState({
                                                                        Numbervalue2: _this.state.maxnum.toFixed(2),
                                                                        Numbervalue5: bb.toFixed(2),
                                                                    });
                                                                }
                                                                else {
                                                                    var aa = _this.state.Inputmoney1;
                                                                    var bb = aa - val;
                                                                    _this.setState({
                                                                        Numbervalue2: val.toFixed(2),
                                                                        Numbervalue5: bb.toFixed(2),
                                                                    });
                                                                }
                                                            }
                                                            console.log(e.target.value);
                                                        } })))))))),
                        react_1.default.createElement("div", { className: "field-wrapper" },
                            react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                react_1.default.createElement("div", { className: "m-field-wrapper" },
                                    react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                        react_1.default.createElement("div", { className: "m-field-head" },
                                            react_1.default.createElement("div", { className: "m-field-label" },
                                                react_1.default.createElement("span", null, "\u8D22\u52A1\u5E94\u652F\u4ED8\u91D1\u989D"))),
                                        react_1.default.createElement("div", { className: "m-field-box" },
                                            react_1.default.createElement("div", { className: "m-field-content left" },
                                                react_1.default.createElement("div", { className: "input-wrapper" },
                                                    react_1.default.createElement("input", { readOnly: true, type: "number", className: "ant-input m-mobile-inner-input", value: this.state.Numbervalue5, placeholder: "\u8BF7\u8F93\u5165" })))))))))) : null))),
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
                }, sidebar: treesidebar, onOpenChange: this.onOpenChange2 }), document.getElementById('MF_APP'))));
    },
};
exports.default = FormField;
