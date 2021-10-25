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
                    title: '需用数量',
                    dataIndex: 'det_quantity',
                },
                {
                    title: '不含税单价(元)',
                    dataIndex: 'no_unit_price',
                },
                {
                    title: '含税单价(元)',
                    dataIndex: 'unit_price',
                },
                {
                    title: '税率(%)',
                    dataIndex: 'tax_rate',
                },
                {
                    title: '税额(元)',
                    dataIndex: 'tax_amount',
                },
                {
                    title: '不含税金额(元)',
                    dataIndex: 'no_amount_tax',
                },
                {
                    title: '含税金额(元)',
                    dataIndex: 'amount_tax',
                },
            ],
            Inputmoney1: '',
            checkData: [],
            chenkdata: '',
            treevalue: undefined,
            treeData: [],
            detdate: '',
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
                    det_quantity: '',
                    no_unit_price: '',
                    tax_rate: '',
                    tax_amount: '',
                    amount_tax: '',
                    no_amount_tax: '',
                },
            ],
        };
    },
    asyncSetFieldProps: function (vlauedata, type) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var TestPurField = form.getFieldInstance('TestPur');
        var key = TestPurField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestPur',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['TestPur'],
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
            // this.setState({
            //   checkData: [...newarr],
            // });
            if (type === 1) {
                console.log('988798711', newarr);
                var newssarr = __spreadArray([], newarr);
                // 含税金额合计;
                _this.setState({
                    materialList: newarr,
                });
                var newarr2 = [];
                newarr2 = newssarr.filter(function (item) {
                    if (item.amount_tax) {
                        return item;
                    }
                });
                newarr2 = newarr2.map(function (item) {
                    return item.amount_tax;
                });
                var newdata1 = eval(newarr2.join('+'));
                if (isNaN(newdata1)) {
                    _this.setState({
                        Inputmoney1: 0,
                    });
                }
                else {
                    _this.setState({
                        Inputmoney1: newdata1,
                    });
                }
                // 不含税金额合计;
                var newarr4 = [];
                newarr4 = newssarr.filter(function (item) {
                    if (item.no_amount_tax) {
                        return item;
                    }
                });
                newarr4 = newarr4.map(function (item) {
                    return item.no_amount_tax;
                });
                var newdata2 = eval(newarr4.join('+'));
                if (isNaN(newdata2)) {
                    _this.setState({
                        Inputmoney2: 0,
                    });
                }
                else {
                    _this.setState({
                        Inputmoney2: newdata2,
                    });
                }
            }
            else if (type === 2) {
                _this.setState({
                    checkData: newarr,
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
        this.asyncSetFieldProps(newpage, 2);
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
        this.setState({
            //   chenkdata: item.name,
            showElem: 'none',
            materialList: arr,
        });
    },
    checkClick: function (item) {
        var cDataid = [item.id];
        var newdate = this.state.allData;
        var dtar = '';
        if (this.state.detdate === 'a1') {
            dtar = '采购申请-' + item.name;
        }
        else if (this.state.detdate === 'b1') {
            dtar = '材料总计划-' + item.name;
        }
        newdate.rk_id = __spreadArray([this.state.detdate], cDataid);
        this.asyncSetFieldProps(newdate, 1);
        this.setState({
            chenkdata: dtar,
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
        var sonData = {
            typename: '',
            name: '',
            size: '',
            unit: '',
            det_quantity: '',
            no_unit_price: '',
            tax_rate: '',
            tax_amount: '',
            amount_tax: '',
            no_amount_tax: '',
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
        //   含税金额
        var newarr2 = [];
        newarr2 = list.filter(function (item) {
            if (item.amount_tax) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.amount_tax;
        });
        //不含税金额
        var newarr4 = [];
        newarr4 = list.filter(function (item) {
            if (item.no_amount_tax) {
                return item;
            }
        });
        newarr4 = newarr4.map(function (item) {
            return item.no_amount_tax;
        });
        var newdata1 = this.toFixed(eval(newarr2.join('+')), 2);
        if (isNaN(newdata1)) {
            this.setState({
                Inputmoney1: 0,
            });
        }
        else {
            this.setState({
                Inputmoney1: newdata1,
            });
        }
        var newdata2 = this.toFixed(eval(newarr4.join('+')), 2);
        if (isNaN(newdata2)) {
            this.setState({
                Inputmoney2: 0,
            });
        }
        else {
            this.setState({
                Inputmoney2: newdata2,
            });
        }
    },
    // 两个浮点数相减
    accSub: function (num1, num2) {
        var r1, r2, m, n;
        try {
            r1 = num1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = r1 >= r2 ? r1 : r2;
        return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
    },
    // 两数相除
    accDiv: function (num1, num2) {
        var t1, t2, r1, r2;
        try {
            t1 = num1.toString().split('.')[1].length;
        }
        catch (e) {
            t1 = 0;
        }
        try {
            t2 = num2.toString().split('.')[1].length;
        }
        catch (e) {
            t2 = 0;
        }
        r1 = Number(num1.toString().replace('.', ''));
        r2 = Number(num2.toString().replace('.', ''));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    },
    // 两个浮点数相乘
    accMul: function (num1, num2) {
        var m = 0, s1 = num1.toString(), s2 = num2.toString();
        try {
            m += s1.split('.')[1].length;
        }
        catch (e) { }
        try {
            m += s2.split('.')[1].length;
        }
        catch (e) { }
        return ((Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
            Math.pow(10, m));
    },
    // 两个浮点数求和
    accAdd: function (num1, num2) {
        var r1, r2, m;
        try {
            r1 = num1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        // return (num1*m+num2*m)/m;
        return Math.round(num1 * m + num2 * m) / m;
    },
    toFixed: function (dight, bits) {
        return Math.round(dight * Math.pow(10, bits)) / Math.pow(10, bits);
    },
    //更新数据
    onInputchange: function (types, index, e) {
        console.log(types, index, e, this);
        var arr = this.state.materialList;
        console.log('120', this.state.materialList);
        var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
        var arrindex = e;
        var newindex = index;
        var newtype = types;
        arr[newindex][newtype] = arrindex;
        if (!reg.test(arr[newindex].tax_rate)) {
            return this.setState({
                materialList: __spreadArray([], arr),
            });
        }
        switch (newtype) {
            case 'no_unit_price':
                if (reg.test(arr[newindex].no_unit_price) &&
                    reg.test(arr[newindex].tax_rate)) {
                    //   含税单价
                    //   newData[index].unit_price = (
                    //     row.no_unit_price *
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                    var a = 1 + arr[newindex].tax_rate * 0.01;
                    arr[newindex].unit_price = this.toFixed(this.accMul(arr[newindex].no_unit_price, a), 2);
                }
                else if (arr[newindex].no_unit_price == null &&
                    reg.test(arr[newindex].tax_rate) &&
                    arr[newindex].unit_price) {
                    //   newData[index].no_unit_price = (
                    //     row.unit_price /
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                    var a = 1 + arr[newindex].tax_rate * 0.01;
                    arr[newindex].no_unit_price = this.toFixed(this.accDiv(arr[newindex].unit_price, a), 2);
                }
                break;
            case 'unit_price':
                if (arr[newindex].unit_price && reg.test(arr[newindex].tax_rate)) {
                    //   bu含税单价
                    var a = 1 + arr[newindex].tax_rate * 0.01;
                    arr[newindex].no_unit_price = this.toFixed(this.accDiv(arr[newindex].unit_price, a), 2);
                    //   newData[index].no_unit_price = (
                    //     row.unit_price /
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                }
                else if (arr[newindex].unit_price == null &&
                    reg.test(arr[newindex].tax_rate) &&
                    arr[newindex].no_unit_price) {
                    var a = 1 + arr[newindex].tax_rate * 0.01;
                    arr[newindex].unit_price = this.toFixed(this.accMul(arr[newindex].no_unit_price, a), 2);
                    //   newData[index].unit_price = (
                    //     row.no_unit_price *
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                }
                if (arr[newindex].unit_price && arr[newindex].det_quantity) {
                    //   newData[index].amount_tax = (
                    //     row.unit_price * row.det_quantity
                    //   ).toFixed(2);
                    arr[newindex].amount_tax = this.toFixed(this.accMul(arr[newindex].unit_price, arr[newindex].det_quantity), 2);
                }
                //不含税金额
                if (arr[newindex].unit_price &&
                    arr[newindex].det_quantity &&
                    reg.test(arr[newindex].tax_rate)) {
                    var a = 1 + arr[newindex].tax_rate * 0.01;
                    var b = this.accMul(arr[newindex].unit_price, arr[newindex].det_quantity);
                    arr[newindex].no_amount_tax = this.toFixed(this.accDiv(b, a), 2);
                    //   newData[index].no_amount_tax = (
                    //     (row.unit_price * row.det_quantity) /
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                    var c = arr[newindex].unit_price * arr[newindex].det_quantity;
                    var d = 1 + arr[newindex].tax_rate * 0.01;
                    var e_1 = this.accDiv(c, d);
                    var f = arr[newindex].tax_rate * 0.01;
                    arr[newindex].tax_amount = this.toFixed(this.accMul(e_1, f), 2);
                    //   newData[index].tax_amount = (
                    //     ((row.unit_price * row.det_quantity) / (1 + row.tax_rate * 0.01)) *
                    //     row.tax_rate *
                    //     0.01
                    //   ).toFixed(2);
                }
                break;
            case 'tax_rate':
                if (arr[newindex].no_unit_price &&
                    !reg.test(arr[newindex].unit_price)) {
                    //   let a = 1 + row.tax_rate * 0.01;
                    //   newData[index].unit_price = this.toFixed(
                    //     this.accMul(row.no_unit_price, a, 2),
                    //   );
                    arr[newindex].unit_price = this.toFixed(arr[newindex].no_unit_price * (1 + arr[newindex].tax_rate * 0.01), 2);
                }
                else if (!reg.test(arr[newindex].no_unit_price) &&
                    arr[newindex].unit_price) {
                    //   let a = 1 + row.tax_rate * 0.01;
                    //   newData[index].no_unit_price = this.toFixed(
                    //     this.accDiv(row.unit_price, a),
                    //     2,
                    //   );
                    arr[newindex].no_unit_price = this.toFixed(arr[newindex].unit_price / (1 + arr[newindex].tax_rate * 0.01), 2);
                    arr[newindex].amount_tax = this.toFixed(arr[newindex].unit_price * arr[newindex].det_quantity, 2);
                    arr[newindex].no_amount_tax = this.toFixed((arr[newindex].unit_price * arr[newindex].det_quantity) /
                        (1 + arr[newindex].tax_rate * 0.01), 2);
                    arr[newindex].tax_amount = this.toFixed(arr[newindex].amount_tax - arr[newindex].no_amount_tax, 2);
                }
                else if (arr[newindex].no_unit_price && arr[newindex].unit_price) {
                    var a = 1 + arr[newindex].tax_rate * 0.01;
                    arr[newindex].unit_price = this.toFixed(this.accMul(arr[newindex].no_unit_price, a), 2);
                    //   newData[index].unit_price = (
                    //     row.no_unit_price *
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                }
                if (reg.test(arr[newindex].no_unit_price) &&
                    reg.test(arr[newindex].det_quantity) &&
                    reg.test(arr[newindex].tax_rate)) {
                    var a = this.accMul(arr[newindex].no_unit_price, arr[newindex].det_quantity);
                    var b = this.accMul(arr[newindex].tax_rate, 0.01);
                    arr[newindex].tax_amount = this.toFixed(this.accMul(a, b), 2);
                    //   newData[index].tax_amount = (
                    //     row.no_unit_price *
                    //     row.det_quantity *
                    //     row.tax_rate *
                    //     0.01
                    //   ).toFixed(2);
                    var c = this.accMul(arr[newindex].no_unit_price, arr[newindex].det_quantity);
                    var d = 1 + arr[newindex].tax_rate * 0.01;
                    arr[newindex].amount_tax = this.toFixed(this.accMul(c, d), 2);
                    //   newData[index].amount_tax = (
                    //     row.no_unit_price *
                    //     row.det_quantity *
                    //     (1 + row.tax_rate * 0.01)
                    //   ).toFixed(2);
                }
                break;
            default:
                break;
        }
        //税额
        if (newtype != 'unit_price') {
            if (arr[newindex].no_unit_price &&
                arr[newindex].det_quantity &&
                reg.test(arr[newindex].tax_rate)) {
                var a = this.accMul(arr[newindex].no_unit_price, arr[newindex].det_quantity);
                var b = this.accMul(arr[newindex].tax_rate, 0.01);
                arr[newindex].tax_amount = this.toFixed(this.accMul(a, b), 2);
                // newData[index].tax_amount = (
                //   row.no_unit_price *
                //   row.det_quantity *
                //   row.tax_rate *
                //   0.01
                // ).toFixed(2);
            }
            //   不含税
            if (arr[newindex].no_unit_price && arr[newindex].det_quantity) {
                arr[newindex].no_amount_tax = this.toFixed(this.accMul(arr[newindex].no_unit_price, arr[newindex].det_quantity), 2);
                // newData[index].no_amount_tax = (
                //   row.no_unit_price * row.det_quantity
                // ).toFixed(2);
            }
            //含税
            if (arr[newindex].no_unit_price &&
                arr[newindex].det_quantity &&
                reg.test(arr[newindex].tax_rate)) {
                var a = this.accMul(arr[newindex].no_unit_price, arr[newindex].det_quantity);
                var b = 1 + arr[newindex].tax_rate * 0.01;
                arr[newindex].amount_tax = this.toFixed(this.accMul(a, b), 2);
                // newData[index].amount_tax = (
                //   row.no_unit_price *
                //   row.det_quantity *
                //   (1 + row.tax_rate * 0.01)
                // ).toFixed(2);
            }
        }
        //   含税金额
        var newarr2 = [];
        newarr2 = arr.filter(function (item) {
            if (item.amount_tax) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.amount_tax;
        });
        //不含税金额
        var newarr4 = [];
        newarr4 = arr.filter(function (item) {
            if (item.no_amount_tax) {
                return item;
            }
        });
        newarr4 = newarr4.map(function (item) {
            return item.no_amount_tax;
        });
        this.setState({
            materialList: __spreadArray([], arr),
            Inputmoney1: eval(newarr2.join('+')),
            Inputmoney2: eval(newarr4.join('+')),
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
            form.setFieldValue('TestPur', editData);
            form.setExtendFieldValue('TestPur', {
                data: editData,
            });
        }
    },
    fieldRender: function () {
        var _this = this;
        // fix in codepen
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('TestPur');
        var required = form.getFieldProp('SelectPro', 'required');
        var label = form.getFieldProp('TestPur', 'label');
        var tabs = [{ title: '采购申请' }, { title: '材料总计划' }];
        var onSelect = function (selectedKeys, info) {
            var arr = _this.state.materialList;
            var newindex = _this.state.checkindex;
            arr[newindex].typename = info.node.title;
            _this.setState({ showElem2: 'none', materialList: __spreadArray([], arr) });
            var treedata = { type: selectedKeys[0], number: '10', page: '1' };
            _this.setState({
                allData: treedata,
            });
            _this.asyncSetFieldProps(treedata, 2);
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
                    _this.setState({
                        allData: newpage,
                    });
                    _this.asyncSetFieldProps(newpage, 2);
                } },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_mobile_1.List, null, this.state.checkData.map(function (item, index) {
                        return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.checkClick.bind(_this, item), key: index, multipleLine: true },
                            item.name,
                            "/ ",
                            item.detailed_money));
                    }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_mobile_1.List, null, this.state.checkData.map(function (item, index) {
                        return (react_1.default.createElement(antd_mobile_1.List.Item, { onClick: _this.checkClick.bind(_this, item), key: index, multipleLine: true },
                            item.name,
                            "/ ",
                            item.project_name));
                    }))))));
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
                            react_1.default.createElement("label", { className: "m-field-view-label" }, "\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"),
                            react_1.default.createElement("div", { className: "m-field-view-value" },
                                react_1.default.createElement("span", null, hanmoney)))),
                    react_1.default.createElement("div", { className: "field-wrapper" },
                        react_1.default.createElement("div", { className: "m-field-view" },
                            react_1.default.createElement("label", { className: "m-field-view-label" }, "\u4E0D\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"),
                            react_1.default.createElement("div", { className: "m-field-view-value" },
                                react_1.default.createElement("span", null, nomoney)))))));
        }
        return (react_1.default.createElement("div", { className: "CorpHouse_class_m" },
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
                                            _this.state.materialList.length > 0 ? (react_1.default.createElement("div", { className: "dele_item", onClick: _this.deleteItem.bind(_this, index, item) }, "\u5220\u9664")) : (react_1.default.createElement("div", null))),
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
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, type: "text", className: "ant-input m-mobile-inner-input", value: item.name, placeholder: "\u8BF7\u9009\u62E9", onFocus: _this.onOpenChange.bind(_this, index), onChange: function (e) {
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
                                                                        react_1.default.createElement("span", null, "\u6570\u91CF"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { value: item.det_quantity, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('det_quantity', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u4E0D\u542B\u7A0E\u5355\u4EF7(\u5143)"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { clear: true, value: item.no_unit_price, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('no_unit_price', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u542B\u7A0E\u5355\u4EF7(\u5143)"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { clear: true, value: item.unit_price, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('unit_price', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u7A0E\u7387(%)"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { clear: true, value: item.tax_rate, placeholder: "\u8BF7\u8F93\u5165", onChange: function (e) {
                                                                                    return _this.onInputchange('tax_rate', index, e);
                                                                                } }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u7A0E\u989D(\u5143)"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, clear: true, value: item.tax_amount, placeholder: "\u81EA\u52A8\u8BA1\u7B97" }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u4E0D\u542B\u7A0E\u91D1\u989D(\u5143)"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, clear: true, value: item.no_amount_tax, placeholder: "\u81EA\u52A8\u8BA1\u7B97" }))))))))),
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("div", { className: "field-wrapper" },
                                                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                                                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                                                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                                                react_1.default.createElement("div", { className: "m-field-head" },
                                                                    react_1.default.createElement("div", { className: "m-field-label" },
                                                                        react_1.default.createElement("span", null, "\u542B\u7A0E\u91D1\u989D(\u5143)"))),
                                                                react_1.default.createElement("div", { className: "m-field-box" },
                                                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, clear: true, value: item.amount_tax, placeholder: "\u81EA\u52A8\u8BA1\u7B97" }))))))))))))));
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
                                        react_1.default.createElement("span", null, "\u4E0D\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"))),
                                react_1.default.createElement("div", { className: "m-field-box" },
                                    react_1.default.createElement("div", { className: "m-field-content left" },
                                        react_1.default.createElement("div", { className: "input-wrapper" },
                                            react_1.default.createElement(antd_mobile_1.InputItem, { editable: false, value: this.state.Inputmoney2, placeholder: "\u81EA\u52A8\u8BA1\u7B97", readOnly: true })))))))),
                react_1.default.createElement("div", { className: "field-wrapper" },
                    react_1.default.createElement("div", { className: "m-group m-group-mobile" },
                        react_1.default.createElement("div", { className: "m-field-wrapper" },
                            react_1.default.createElement("div", { className: "m-field m-field-mobile m-select-field" },
                                react_1.default.createElement("div", { className: "m-field-head" },
                                    react_1.default.createElement("div", { className: "m-field-label" },
                                        react_1.default.createElement("span", null, "\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"))),
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
