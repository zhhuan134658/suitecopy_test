"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var antd_2 = require("antd");
var DirectoryTree = antd_2.Tree.DirectoryTree;
var antd_3 = require("antd");
var icons_1 = require("@ant-design/icons");
var Header = antd_3.Layout.Header, Footer = antd_3.Layout.Footer, Sider = antd_3.Layout.Sider, Content = antd_3.Layout.Content;
var react_1 = __importStar(require("react"));
var antd_4 = require("antd");
var Search = antd_4.Input.Search;
var Option = antd_4.Select.Option;
var Column = antd_4.Table.Column;
var TabPane = antd_4.Tabs.TabPane;
var fpOperations_1 = require("../../utils/fpOperations");
var calcTax_1 = require("../../utils/calcTax");
require("./pc.less");
var arrayHandle_1 = require("../../utils/arrayHandle");
var purchaseColumns = [
    {
        title: '采购主题',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
            react_1.default.createElement("span", null, record.name))); },
    },
    {
        title: '采购金额',
        dataIndex: 'detailed_money',
    },
];
var projectColumns = [
    {
        title: '计划主题',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
            react_1.default.createElement("span", null, record.name))); },
    },
    {
        title: '项目名称',
        dataIndex: 'project_name',
    },
];
var purchaseItemColumns = [
    {
        title: '物品名称',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
            react_1.default.createElement("span", null, record.name))); },
    },
    {
        title: '物品类型',
        dataIndex: 'type_name',
    },
    {
        title: '单位',
        dataIndex: 'unit',
    },
    {
        title: '规格型号',
        dataIndex: 'size',
    },
];
var EditableContext = react_1.default.createContext(null);
var EditableRow = function (_a) {
    var index = _a.index, props = __rest(_a, ["index"]);
    var form = antd_4.Form.useForm()[0];
    return (react_1.default.createElement(antd_4.Form, { form: form, component: false },
        react_1.default.createElement(EditableContext.Provider, { value: form },
            react_1.default.createElement("tr", __assign({}, props)))));
};
var EditableCell = function (_a) {
    var title = _a.title, editable = _a.editable, children = _a.children, dataIndex = _a.dataIndex, record = _a.record, handleSave = _a.handleSave, handleChange = _a.handleChange, restProps = __rest(_a, ["title", "editable", "children", "dataIndex", "record", "handleSave", "handleChange"]);
    var _b = react_1.useState(false), editing = _b[0], setEditing = _b[1];
    var inputRef = react_1.useRef(null);
    var form = react_1.useContext(EditableContext);
    react_1.useEffect(function () {
        if (editing) {
            //   inputRef.current!.change();
            inputRef.current.focus();
        }
    }, [editing]);
    var toggleEdit = function () {
        var _a;
        setEditing(!editing);
        form.setFieldsValue((_a = {}, _a[dataIndex] = record[dataIndex], _a));
    };
    var save = function () { return __awaiter(void 0, void 0, void 0, function () {
        var values, errInfo_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, form.validateFields()];
                case 1:
                    values = _a.sent();
                    toggleEdit(); //onchange事件 输入一次失去焦点
                    handleSave(__assign(__assign({}, record), values), values);
                    return [3 /*break*/, 3];
                case 2:
                    errInfo_1 = _a.sent();
                    console.log('11Save failed:', errInfo_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //   const focusSave = () => {
    //     handleChange({ ...record });
    //   };
    var childNode = children;
    if (editable) {
        childNode = editing ? (react_1.default.createElement(antd_4.Form.Item, { style: { margin: 0 }, name: dataIndex },
            react_1.default.createElement(antd_4.InputNumber, { className: "editable-cell-value-inputNumber", ref: inputRef, onPressEnter: save, onBlur: save, max: Number.MAX_SAFE_INTEGER, min: 0, step: "0.01", placeholder: "\u8BF7\u8F93\u5165", bordered: false, controls: false }))) : (react_1.default.createElement("div", { className: "editable-cell-value-wrap", onClick: toggleEdit }, children));
    }
    return react_1.default.createElement("td", __assign({}, restProps), childNode);
};
/**
 * 自定义控件运行态 PC 视图
 */
var FormField = {
    getInitialState: function () {
        return {
            defaultActiveKey: 'a',
            value: undefined,
            msgdata: '',
            newOptine: [],
            visibleModal: false,
            detdate: 'a1',
            dstatus: '1',
            detailname: '',
            Inputmoney2: '',
            Inputmoney1: '',
            current_page: '',
            total2: '',
            allData: {
                rk_id: ['a'],
                number: '10',
                page: '1',
                name: '',
            },
            isModalVisible: false,
            isModalVisibletree: false,
            listData: [],
            treeData: [],
            pagination: {
                current: 1,
                pageSize: 10,
            },
            loading: false,
            leaveLongVal: '',
            //   dataSource: [],
            dataSource: [],
            count: 1,
            currentEditId: 0,
            currentSelectData: [],
            currentSelectDataid: [],
            selectedRowKeys: [],
        };
    },
    /** 控件首次渲染完成之后 */
    fieldDidMount: function () {
        // const newdate = this.state.allData;
        // this.asyncSetFieldProps(newdate);
    },
    methods: function () {
        var _this = this;
        return {
            newAdd: function () {
                _this.setState({
                    visibleModal: true,
                });
            },
            handleNewCancel: function () {
                _this.setState({
                    visibleModal: false,
                });
            },
            handleNewOk: function (values) {
                console.log(values);
                this.setState({
                    visibleModal: false,
                });
            },
            onSearch: function (value) {
                console.log(value);
                var newvalue = _this.state.allData;
                newvalue.name = value;
                newvalue.page = 1;
                newvalue.rk_id = ['-1'];
                _this.setState({
                    allData: newvalue,
                });
                _this.asyncSetFieldProps(newvalue);
            },
            onChangePage: function (page) {
                var newPage = _this.state.allData;
                newPage.page = page;
                _this.setState({
                    allData: newPage,
                });
                _this.asyncSetFieldProps(newPage);
            },
            onChangePageTree: function (page) {
                var newpage = this.state.allData;
                newpage.page = page;
                newpage.rk_id = ['-1'];
                console.log(newpage);
                _this.setState({
                    allData: newpage,
                });
                _this.asyncSetFieldProps(newpage);
            },
            handleChange: function (row) {
                _this.setState({ currentEditId: row.key });
            },
            handleCancelTree: function () {
                _this.setState({ isModalVisibletree: false });
                _this.setState({ selectedRowKeys: [] });
            },
            handleDelete: function (row) {
                var dataSource = __spreadArray([], _this.state.dataSource);
                console.log('deleteRow', row);
                var arr = dataSource.filter(function (item) { return item.id !== row.id; });
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
                console.log('deleteLog', newarr2, newarr4);
                var inputMoney1Data = null;
                if (eval(newarr2.join('+'))) {
                    inputMoney1Data = fpOperations_1.toFixed(eval(newarr2.join('+')), 2);
                }
                var inputMoney2Data = null;
                if (eval(newarr4.join('+'))) {
                    inputMoney2Data = fpOperations_1.toFixed(eval(newarr4.join('+')), 2);
                }
                _this.setState({
                    dataSource: arr,
                    Inputmoney1: inputMoney1Data,
                    Inputmoney2: inputMoney2Data,
                });
            },
            newhandleAdd: function () {
                var form = _this.props.form;
                var Pro_name = form.getFieldValue('Autopro');
                // if (!Pro_name) {
                //   return notification.open({
                //     message: '请先选择项目',
                //   });
                // }
                var newddd = _this.state.defaultActiveKey;
                console.log(newddd);
                _this.setState({ dstatus: '1' });
                var newpage = {
                    rk_id: [newddd],
                    number: '10',
                    page: 1,
                    name: '',
                };
                _this.setState({
                    allData: newpage,
                });
                _this.asyncSetFieldProps(newpage);
                _this.setState({
                    isModalVisible: true,
                });
            },
            handleAdd: function () {
                var form = _this.props.form;
                var Pro_name = form.getFieldValue('Autopro');
                if (!Pro_name) {
                    return antd_4.notification.open({
                        message: '请先选择项目',
                    });
                }
                _this.setState({ dstatus: '2' });
                console.log(_this.state.allData);
                var newpage = {
                    rk_id: ['-1'],
                    number: '10',
                    page: 1,
                    name: '',
                };
                _this.asyncSetFieldProps(newpage);
                _this.setState({
                    isModalVisibletree: true,
                });
            },
            handleSave: function (row, values) {
                var form = _this.props.form;
                var newData = __spreadArray([], _this.state.dataSource);
                var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                var index = newData.findIndex(function (item) { return row.id === item.id; });
                var item = newData[index];
                newData.splice(index, 1, __assign(__assign({}, item), row));
                console.log('123', row, Object.keys(values)[0]);
                //计算
                if (!reg.test(row.tax_rate)) {
                    //税率必须手动输入
                    return _this.setState({
                        dataSource: newData,
                    });
                }
                switch (Object.keys(values)[0]) {
                    case 'no_unit_price': //不含税单价
                        if (reg.test(row.no_unit_price)) {
                            if (reg.test(row.tax_rate)) {
                                var a = 1 + Number(row.tax_rate) * 0.01;
                                newData[index].unit_price = fpOperations_1.toFixed(fpOperations_1.fpMul(Number(row.no_unit_price), a), 2);
                            }
                            else if (reg.test(row.unit_price)) {
                                newData[index].tax_rate = calcTax_1.calcTaxRate(row);
                            }
                        }
                        else if (row.no_unit_price == null &&
                            reg.test(row.tax_rate) &&
                            row.unit_price) {
                            var a = 1 + row.tax_rate * 0.01;
                            newData[index].no_unit_price = fpOperations_1.toFixed(fpOperations_1.fpDivide(row.unit_price, a), 2);
                        }
                        break;
                    case 'unit_price':
                        //含税单价
                        if (reg.test(row.unit_price)) {
                            if (reg.test(row.tax_rate)) {
                                var a = 1 + row.tax_rate * 0.01;
                                newData[index].no_unit_price = fpOperations_1.toFixed(fpOperations_1.fpDivide(row.unit_price, a), 2);
                                //   newData[index].no_unit_price = (
                                //     row.unit_price /
                                //     (1 + row.tax_rate * 0.01)
                                //   ).toFixed(2);
                            }
                            else if (reg.test(row.no_unit_price)) {
                                var taxRate = calcTax_1.calcTaxRate(row);
                                newData[index].tax_rate = taxRate;
                                if (reg.test(row.det_quantity)) {
                                    var a = fpOperations_1.fpMul(row.no_unit_price, row.det_quantity);
                                    var b = fpOperations_1.fpMul(taxRate, 0.01);
                                    newData[index].tax_amount = fpOperations_1.toFixed(fpOperations_1.fpMul(a, b), 2);
                                }
                            }
                        }
                        else if (row.unit_price == null &&
                            reg.test(row.tax_rate) &&
                            row.no_unit_price) {
                            var a = 1 + row.tax_rate * 0.01;
                            newData[index].unit_price = fpOperations_1.toFixed(fpOperations_1.fpMul(row.no_unit_price, a), 2);
                            //   newData[index].unit_price = (
                            //     row.no_unit_price *
                            //     (1 + row.tax_rate * 0.01)
                            //   ).toFixed(2);
                        }
                        if (row.unit_price && row.det_quantity) {
                            //   newData[index].amount_tax = (
                            //     row.unit_price * row.det_quantity
                            //   ).toFixed(2);
                            newData[index].amount_tax = fpOperations_1.toFixed(fpOperations_1.fpMul(row.unit_price, row.det_quantity), 2);
                        }
                        //不含税金额
                        if (row.unit_price && row.det_quantity && reg.test(row.tax_rate)) {
                            var a = 1 + row.tax_rate * 0.01;
                            var b = fpOperations_1.fpMul(row.unit_price, row.det_quantity);
                            newData[index].no_amount_tax = fpOperations_1.toFixed(fpOperations_1.fpDivide(b, a), 2);
                            var c = row.unit_price * row.det_quantity;
                            var d = 1 + row.tax_rate * 0.01;
                            var e = fpOperations_1.fpDivide(c, d);
                            var f = row.tax_rate * 0.01;
                            newData[index].tax_amount = fpOperations_1.toFixed(fpOperations_1.fpMul(e, f), 2);
                        }
                        break;
                    case 'tax_rate':
                        if (row.no_unit_price && !reg.test(row.unit_price)) {
                            newData[index].unit_price = fpOperations_1.toFixed(row.no_unit_price * (1 + row.tax_rate * 0.01), 2);
                        }
                        else if (!reg.test(row.no_unit_price) && row.unit_price) {
                            newData[index].no_unit_price = fpOperations_1.toFixed(row.unit_price / (1 + row.tax_rate * 0.01), 2);
                            newData[index].amount_tax = fpOperations_1.toFixed(row.unit_price * row.det_quantity, 2);
                            newData[index].no_amount_tax = fpOperations_1.toFixed((row.unit_price * row.det_quantity) / (1 + row.tax_rate * 0.01), 2);
                            newData[index].tax_amount = fpOperations_1.toFixed(newData[index].amount_tax - newData[index].no_amount_tax, 2);
                        }
                        else if (row.no_unit_price && row.unit_price) {
                            var a = 1 + row.tax_rate * 0.01;
                            newData[index].unit_price = fpOperations_1.toFixed(fpOperations_1.fpMul(row.no_unit_price, a), 2);
                        }
                        if (reg.test(row.no_unit_price) &&
                            reg.test(row.det_quantity) &&
                            reg.test(row.tax_rate)) {
                            var a = fpOperations_1.fpMul(row.no_unit_price, row.det_quantity);
                            var b = fpOperations_1.fpMul(row.tax_rate, 0.01);
                            newData[index].tax_amount = fpOperations_1.toFixed(fpOperations_1.fpMul(a, b), 2);
                            var c = fpOperations_1.fpMul(row.no_unit_price, row.det_quantity);
                            var d = 1 + row.tax_rate * 0.01;
                            newData[index].amount_tax = fpOperations_1.toFixed(fpOperations_1.fpMul(c, d), 2);
                        }
                        break;
                    default:
                        break;
                }
                //税额
                if (Object.keys(values)[0] != 'unit_price') {
                    if (row.no_unit_price && row.det_quantity && reg.test(row.tax_rate)) {
                        var a = fpOperations_1.fpMul(row.no_unit_price, row.det_quantity);
                        var b = fpOperations_1.fpMul(row.tax_rate, 0.01);
                        newData[index].tax_amount = fpOperations_1.toFixed(fpOperations_1.fpMul(a, b), 2);
                    }
                    //   不含税
                    if (row.no_unit_price && row.det_quantity) {
                        newData[index].no_amount_tax = fpOperations_1.toFixed(fpOperations_1.fpMul(row.no_unit_price, row.det_quantity), 2);
                    }
                    //含税
                    if (row.no_unit_price && row.det_quantity && reg.test(row.tax_rate)) {
                        var a = fpOperations_1.fpMul(row.no_unit_price, row.det_quantity);
                        var b = 1 + row.tax_rate * 0.01;
                        newData[index].amount_tax = fpOperations_1.toFixed(fpOperations_1.fpMul(a, b), 2);
                    }
                }
                _this.setState({
                    dataSource: newData,
                });
                console.log(newData);
                // 含税金额合计;
                var newarr1 = __spreadArray([], _this.state.dataSource);
                var newarr2 = [];
                newarr2 = newarr1.filter(function (item) {
                    if (item.amount_tax) {
                        return item;
                    }
                });
                newarr2 = newarr2.map(function (item) {
                    return item.amount_tax;
                });
                _this.setState({
                    Inputmoney1: eval(newarr2.join('+'))
                        ? fpOperations_1.toFixed(eval(newarr2.join('+')), 2)
                        : null,
                });
                // 不含税金额合计;
                var newarr3 = __spreadArray([], _this.state.dataSource);
                var newarr4 = [];
                newarr4 = newarr3.filter(function (item) {
                    if (item.no_amount_tax) {
                        return item;
                    }
                });
                newarr4 = newarr4.map(function (item) {
                    return item.no_amount_tax;
                });
                _this.setState({
                    Inputmoney2: eval(newarr4.join('+'))
                        ? fpOperations_1.toFixed(eval(newarr4.join('+')), 2)
                        : null,
                });
            },
            rowClick: function (record, rowkey) {
                var form = _this.props.form;
                var newData = __spreadArray([], _this.state.dataSource);
                var index = newData.findIndex(function (item) { return _this.state.currentEditId === item.key; });
                var currentKey = newData[index].key;
                newData[index] = record;
                newData[index].key = currentKey;
                _this.setState({ dataSource: newData, isModalVisible: false });
            },
            handleOktree: function () {
                var newData = __spreadArray([], _this.state.dataSource);
                var cData = __spreadArray([], _this.state.currentSelectData);
                var lData = [];
                if (cData.length > 0) {
                    cData.forEach(function (element) {
                        newData.push(element);
                    });
                }
                lData = arrayHandle_1.reduceAndRemoveDuplicate(newData);
                var testData = arrayHandle_1.removeDuplicate(newData);
                console.log('remove duplicate', testData);
                console.log('pp+' + JSON.stringify(lData));
                _this.setState({ dataSource: lData });
                _this.setState({ isModalVisibletree: false });
                _this.setState({ selectedRowKeys: [] });
            },
        };
    },
    //   onSearch(value: any) {
    //     console.log(value);
    //     const newvalue = this.state.allData;
    //     newvalue.name = value;
    //     newvalue.page = 1;
    //     newvalue.rk_id = ['-1'];
    //     this.setState({
    //       allData: newvalue,
    //     });
    //     this.asyncSetFieldProps(newvalue);
    //   },
    //   onChangepage(page: any) {
    //     const newpage = this.state.allData;
    //     newpage.page = page;
    //     console.log(newpage);
    //     this.setState({
    //       allData: newpage,
    //     });
    //     this.asyncSetFieldProps(newpage);
    //     // this.getData(page);
    //     // this.setState({
    //     //   loading: true,
    //     // });
    //   },
    //   onChangepagetree(page: any) {
    //     const newpage = this.state.allData;
    //     newpage.page = page;
    //     newpage.rk_id = ['-1'];
    //     console.log(newpage);
    //     this.setState({
    //       allData: newpage,
    //     });
    //     this.asyncSetFieldProps(newpage);
    //   },
    //   handleChange(row: DataType) {
    //     this.setState({ currentEditId: row.key });
    //   },
    //   handleCancel() {
    //     this.setState({ isModalVisible: false });
    //     this.setState({ selectedRowKeys: [] });
    //   },
    //   handleCanceltree() {
    //     this.setState({ isModalVisibletree: false });
    //     this.setState({ selectedRowKeys: [] });
    //   },
    asyncSetFieldProps: function (valueData) {
        var _this_1 = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        valueData.project_name = Pro_name;
        var TestPurField = form.getFieldInstance('TestPur');
        var key = TestPurField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestPur',
                extendValue: valueData,
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
            var newarr;
            //   表格数据
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            //   树状图数据
            var newtarr = JSON.parse(res.dataList[0].extendValue);
            var newtarr1 = [
                {
                    title: '物资类型',
                    key: '0',
                    children: newtarr,
                },
            ];
            _this_1.setState({
                treeData: __spreadArray([], newtarr1),
                current_page: JSON.parse(res.dataList[0].value).page,
                total3: JSON.parse(res.dataList[0].value).count,
            });
            var checked = _this_1.state.currentSelectDataid;
            var dstatus = _this_1.state.dstatus;
            if (dstatus === '2') {
                var newssarr = __spreadArray([], newarr);
                _this_1.setState({
                    treelistData: newssarr,
                });
                // 含税金额合计;
                var newarr2 = [];
                newarr2 = newssarr.filter(function (item) {
                    if (item.amount_tax) {
                        return item;
                    }
                });
                newarr2 = newarr2.map(function (item) {
                    return item.amount_tax;
                });
                _this_1.setState({
                    Inputmoney1: eval(newarr2.join('+'))
                        ? fpOperations_1.toFixed(eval(newarr2.join('+')), 2)
                        : null,
                });
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
                _this_1.setState({
                    Inputmoney2: eval(newarr4.join('+'))
                        ? fpOperations_1.toFixed(eval(newarr4.join('+')), 2)
                        : null,
                });
            }
            else if (dstatus === '1') {
                _this_1.setState({
                    listData: __spreadArray([], newarr),
                    current_page: JSON.parse(res.dataList[0].value).page,
                    total2: JSON.parse(res.dataList[0].value).count,
                });
            }
            else if (dstatus === '3') {
                // 含税金额合计;
                var newssarr = __spreadArray([], newarr);
                var newarr2 = [];
                newarr2 = newssarr.filter(function (item) {
                    if (item.amount_tax) {
                        return item;
                    }
                });
                newarr2 = newarr2.map(function (item) {
                    return item.amount_tax;
                });
                _this_1.setState({
                    Inputmoney1: eval(newarr2.join('+'))
                        ? fpOperations_1.toFixed(eval(newarr2.join('+')), 2)
                        : null,
                });
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
                _this_1.setState({
                    Inputmoney2: eval(newarr4.join('+'))
                        ? fpOperations_1.toFixed(eval(newarr4.join('+')), 2)
                        : null,
                });
                _this_1.setState({
                    dataSource: __spreadArray([], newarr),
                });
            }
            if (_this_1.state.msgdata == '1') {
                antd_4.notification.open({
                    message: JSON.parse(res.dataList[0].value).msg,
                });
                _this_1.setState({
                    msgdata: '0',
                });
            }
        });
    },
    handleOk: function () {
        this.setState({ dstatus: '3' });
        console.log(this.state.detdate);
        var cDataid = __spreadArray([], this.state.currentSelectDataid);
        var newdate = this.state.allData;
        newdate.rk_id = __spreadArray([this.state.detdate], cDataid);
        console.log(newdate);
        this.asyncSetFieldProps(newdate);
        this.setState({
            isModalVisible: false,
        });
        this.setState({ selectedRowKeys: [] });
    },
    handleCancel: function () {
        this.setState({ isModalVisible: false });
        this.setState({ selectedRowKeys: [] });
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
            editData.detailname = this.state.detailname;
            editData.detailedData = this.state.dataSource;
            var form = this.props.form;
            form.setFieldValue('TestPur', editData);
            form.setExtendFieldValue('TestPur', {
                data: editData,
            });
        }
    },
    fieldRender: function () {
        var _this_1 = this;
        var form = this.props.form;
        var field = form.getFieldInstance('TestPur');
        var label = form.getFieldProp('TestPur', 'label');
        var placeholder = form.getFieldProp('TestPur', 'placeholder');
        var required = form.getFieldProp('TestPur', 'required');
        var _a = this.state, dataSource = _a.dataSource, selectedRowKeys = _a.selectedRowKeys;
        var deColumns = [
            {
                title: '物资名称',
                dataIndex: 'name',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
                    react_1.default.createElement("span", null, record.name))); },
            },
            {
                title: '单位',
                dataIndex: 'unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit },
                    react_1.default.createElement("span", null, record.unit))); },
            },
            {
                title: '规格型号',
                dataIndex: 'size',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.size },
                    react_1.default.createElement("span", null, record.size))); },
            },
            {
                title: '数量',
                dataIndex: 'det_quantity',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.det_quantity },
                    react_1.default.createElement("span", null, record.det_quantity))); },
            },
            {
                title: '不含税单价(元)',
                dataIndex: 'no_unit_price',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.no_unit_price },
                    react_1.default.createElement("span", null, record.no_unit_price))); },
            },
            {
                title: '含税单价(元)',
                dataIndex: 'unit_price',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit_price },
                    react_1.default.createElement("span", null, record.unit_price))); },
            },
            {
                title: '税率(%)',
                dataIndex: 'tax_rate',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.tax_rate },
                    react_1.default.createElement("span", null, record.tax_rate))); },
            },
            {
                title: '税额(元)',
                dataIndex: 'tax_amount',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.tax_amount },
                    react_1.default.createElement("span", null, record.tax_amount))); },
            },
            {
                title: '不含税金额(元)',
                dataIndex: 'no_amount_tax',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.no_amount_tax },
                    react_1.default.createElement("span", null, record.no_amount_tax))); },
            },
            {
                title: '含税金额(元)',
                dataIndex: 'amount_tax',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.amount_tax },
                    react_1.default.createElement("span", null, record.amount_tax))); },
            },
        ];
        var etColumns = [
            {
                title: '物资名称',
                dataIndex: 'name',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
                    react_1.default.createElement("span", null, record.name))); },
            },
            {
                title: '单位',
                dataIndex: 'unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit },
                    react_1.default.createElement("span", null, record.unit))); },
            },
            {
                title: '规格型号',
                dataIndex: 'size',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.size },
                    react_1.default.createElement("span", null, record.size))); },
            },
            {
                title: '数量',
                dataIndex: 'det_quantity',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.det_quantity },
                    react_1.default.createElement("span", null, record.det_quantity))); },
            },
            {
                title: '不含税单价(元)',
                dataIndex: 'no_unit_price',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.no_unit_price },
                    react_1.default.createElement("span", null, record.no_unit_price))); },
            },
            {
                // title: '含税单价(元)',
                title: (react_1.default.createElement("div", null,
                    "\u542B\u7A0E\u5355\u4EF7(\u5143)",
                    react_1.default.createElement(antd_4.Tooltip, { placement: "top", title: react_1.default.createElement("div", null,
                            react_1.default.createElement("span", null, "\u542B\u7A0E\u5355\u4EF7=\u4E0D\u542B\u7A0E\u5355\u4EF7*\uFF081+\u7A0E\u7387\uFF09")) },
                        react_1.default.createElement(icons_1.QuestionCircleOutlined, null)))),
                dataIndex: 'unit_price',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit_price },
                    react_1.default.createElement("span", null, record.unit_price))); },
            },
            {
                title: '税率(%)',
                dataIndex: 'tax_rate',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.tax_rate },
                    react_1.default.createElement("span", null, record.tax_rate))); },
            },
            {
                title: '税额(元)',
                dataIndex: 'tax_amount',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.tax_amount },
                    react_1.default.createElement("span", null, record.tax_amount))); },
            },
            {
                title: '不含税金额(元)',
                dataIndex: 'no_amount_tax',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.no_amount_tax },
                    react_1.default.createElement("span", null, record.no_amount_tax))); },
            },
            {
                title: '含税金额(元)',
                dataIndex: 'amount_tax',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.amount_tax },
                    react_1.default.createElement("span", null, record.amount_tax))); },
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: function (_, record) {
                    return _this_1.state.dataSource.length >= 1 ? (react_1.default.createElement(antd_4.Popconfirm, { title: "\u786E\u5B9A\u5220\u9664?", onConfirm: function () { return _this_1.methods().handleDelete(record); } },
                        react_1.default.createElement("a", null, "\u5220\u9664"))) : null;
                },
            },
        ];
        var components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        var columns = etColumns.map(function (col) {
            if (!col.editable) {
                return col;
            }
            return __assign(__assign({}, col), { onCell: function (record) { return ({
                    record: record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: _this_1.methods().handleSave,
                    handleChange: _this_1.methods().handleChange,
                }); } });
        });
        var onSelect = function (keys, info) {
            console.log('Trigger Select', keys, info);
            var treedata = {
                type: keys[0],
                number: '10',
                page: '1',
                rk_id: ['-1'],
            };
            _this_1.setState({
                allData: treedata,
            });
            _this_1.asyncSetFieldProps(treedata);
        };
        var onExpand = function () {
            console.log('Trigger Expand');
        };
        var Tabschange = function (key) {
            console.log(key);
            var newpage = {
                rk_id: [key],
                number: '10',
                page: 1,
                name: '',
            };
            _this_1.setState({
                defaultActiveKey: key,
                allData: newpage,
                detdate: key + '1',
            });
            _this_1.asyncSetFieldProps(newpage);
        };
        var rowSelection = {
            selectedRowKeys: selectedRowKeys,
            onChange: function (selectedRowKeys, selectedRows) {
                // console.log(
                //   `selectedRowKeys: ${selectedRowKeys}`,
                //   'selectedRows: ',
                //   selectedRows,
                // );
                var dtar = '';
                var newData = __spreadArray([], selectedRows);
                var newDataid = [];
                if (newData.length > 0) {
                    newData = newData.map(function (item) {
                        return Object.assign(item, {
                            num: 1,
                        });
                    });
                    newDataid = newData.map(function (item) {
                        return item.id;
                    });
                }
                console.log('======' + JSON.stringify(newDataid));
                if (_this_1.state.detdate === 'a1') {
                    dtar = '采购申请-' + newData[0].name;
                }
                else if (_this_1.state.detdate === 'b1') {
                    dtar = '材料总计划-' + newData[0].name;
                }
                _this_1.setState({
                    currentSelectData: newData,
                    currentSelectDataid: newDataid,
                    detailname: dtar,
                });
                _this_1.setState({ selectedRowKeys: selectedRowKeys });
            },
        };
        var Options = this.state.newOptine.map(function (station) { return (react_1.default.createElement(Option, { key: station.key, value: station.title }, station.title)); });
        var onFinish = function (values) {
            _this_1.setState({
                msgdata: '1',
            });
            console.log('Success:', values);
            //   const [form] = Form.useForm();
            var newdate = _this_1.state.allData;
            newdate.wz_add = values;
            _this_1.asyncSetFieldProps(newdate);
            _this_1.setState({
                visibleModal: false,
            });
            //   form.resetFields();
        };
        var onFinishFailed = function (errorInfo) {
            console.log('Failed:', errorInfo);
        };
        var onChangetree = function (value) {
            console.log(value);
            _this_1.setState({ value: value });
        };
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _b = value.detailname, detailname = _b === void 0 ? '' : _b, _c = value.nomoney, nomoney = _c === void 0 ? '' : _c, _d = value.hanmoney, hanmoney = _d === void 0 ? '' : _d, _e = value.detailedData, detailedData = _e === void 0 ? [] : _e;
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", null, detailname),
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: value instanceof Array ? value : detailedData, columns: deColumns, pagination: false })),
                react_1.default.createElement("div", { className: "label" }, "\u4E0D\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"),
                react_1.default.createElement("div", null, nomoney),
                react_1.default.createElement("div", { className: "label" }, "\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"),
                react_1.default.createElement("div", null, hanmoney)));
        }
        return (react_1.default.createElement("div", { className: "TestPurField_class" },
            ' ',
            react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "label" },
                        required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                        label),
                    react_1.default.createElement(antd_4.Input, { onClick: this.methods().newhandleAdd, readOnly: true, value: this.state.detailname, placeholder: "\u8BF7\u9009\u62E9" })),
                react_1.default.createElement("div", { style: { marginTop: '10px' } },
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: dataSource, columns: columns, pagination: false }),
                    react_1.default.createElement(antd_4.Button, { onClick: this.methods().handleAdd, type: "primary", style: { marginBottom: 16, marginTop: 16 } }, "\u6DFB\u52A0\u660E\u7EC6"),
                    react_1.default.createElement("div", { className: "label", style: { marginTop: '10px' } }, "\u4E0D\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(antd_4.Input, { readOnly: true, value: this.state.Inputmoney2, placeholder: "\u81EA\u52A8\u8BA1\u7B97" })),
                    react_1.default.createElement("div", { className: "label", style: { marginTop: '10px' } }, "\u542B\u7A0E\u91D1\u989D\u5408\u8BA1(\u5143)"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(antd_4.Input, { readOnly: true, value: this.state.Inputmoney1, placeholder: "\u81EA\u52A8\u8BA1\u7B97" }))),
                react_1.default.createElement(antd_4.Modal, { title: "\u5173\u8054", width: 1000, visible: this.state.isModalVisible, footer: [
                        react_1.default.createElement(antd_4.Button, { key: "back", onClick: this.handleCancel }, "\u8FD4\u56DE"),
                        react_1.default.createElement(antd_4.Button, { key: "submit", type: "primary", loading: this.state.loading, onClick: this.handleOk }, "\u786E\u5B9A"),
                    ], onCancel: this.handleCancel },
                    react_1.default.createElement(antd_4.Tabs, { className: "Tabs_class", defaultActiveKey: "a", centered: true, onChange: Tabschange },
                        react_1.default.createElement(TabPane, { tab: "\u91C7\u8D2D\u7533\u8BF7", key: "a" },
                            react_1.default.createElement(Search, { placeholder: "\u8BF7\u8F93\u5165", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: this.methods().onSearch }),
                            react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, rowSelection: __assign({ type: 'radio' }, rowSelection), rowKey: function (record) { return record.id; }, columns: purchaseColumns, dataSource: this.state.listData, loading: this.state.loading, pagination: false }),
                            react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total2, hideOnSinglePage: true, className: "pagination", onChange: this.methods().onChangepage })),
                        react_1.default.createElement(TabPane, { tab: "\u6750\u6599\u603B\u8BA1\u5212", key: "b" },
                            react_1.default.createElement(Search, { placeholder: "\u8BF7\u8F93\u5165", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: this.methods().onSearch }),
                            react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, rowSelection: __assign({ type: 'radio' }, rowSelection), rowKey: function (record) { return record.id; }, columns: projectColumns, dataSource: this.state.listData, loading: this.state.loading, pagination: false }),
                            react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total2, hideOnSinglePage: true, className: "pagination", onChange: this.methods().onChangePage })))),
                react_1.default.createElement(antd_4.Modal, { title: "\u9009\u62E9\u7269\u8D44", width: 1000, visible: this.state.isModalVisibletree, footer: [
                        react_1.default.createElement(antd_4.Button, { key: "back", onClick: this.methods().handleCancelTree }, "\u8FD4\u56DE"),
                        react_1.default.createElement(antd_4.Button, { key: "submit", type: "primary", loading: this.state.loading, onClick: this.methods().handleOktree }, "\u786E\u5B9A"),
                    ], onCancel: this.methods().handleCancelTree },
                    react_1.default.createElement(antd_3.Layout, null,
                        react_1.default.createElement(Sider, { className: "newside_new" },
                            react_1.default.createElement(antd_2.Tree, { defaultExpandedKeys: ['0'], blockNode: true, onSelect: onSelect, onExpand: onExpand, treeData: this.state.treeData })),
                        react_1.default.createElement(Content, null,
                            react_1.default.createElement("div", { className: "header_tab_class" },
                                react_1.default.createElement(Search, { placeholder: "\u8BF7\u8F93\u5165", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: this.methods().onSearch }),
                                react_1.default.createElement(antd_4.Button, { onClick: this.methods().newAdd, size: "large", type: "primary" }, "\u65B0\u589E")),
                            react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, rowSelection: __assign({ type: 'checkbox' }, rowSelection), rowKey: function (record) { return record.id; }, columns: purchaseItemColumns, dataSource: this.state.treelistData, loading: this.state.loading, pagination: false }),
                            react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total3, hideOnSinglePage: true, className: "pagination", onChange: this.methods().onChangePageTree })))),
                react_1.default.createElement(antd_4.Modal, { className: "newModal_class", onCancel: this.methods().handleNewCancel, visible: this.state.visibleModal, width: 1000, title: "\u65B0\u589E" },
                    react_1.default.createElement(antd_4.Form, { initialValues: { remember: true }, layout: "vertical", onFinish: onFinish, onFinishFailed: onFinishFailed },
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u7269\u54C1\u540D\u79F0", name: "name", rules: [{ required: true, message: '请填写单位名称' }] },
                            react_1.default.createElement(antd_4.Input, { placeholder: "\u8BF7\u586B\u5199\u5355\u4F4D\u540D\u79F0" })),
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u5355\u4F4D", name: "unit", rules: [{ required: true, message: '请填写单位名称' }] },
                            react_1.default.createElement(antd_4.Input, { placeholder: "\u8BF7\u586B\u5199\u5355\u4F4D\u540D\u79F0" })),
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u89C4\u683C\u578B\u53F7", name: "size", rules: [{ required: true, message: '请填写单位名称' }] },
                            react_1.default.createElement(antd_4.Input, { placeholder: "\u8BF7\u586B\u5199\u5355\u4F4D\u540D\u79F0" })),
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u7269\u54C1\u7C7B\u578B", name: "type", rules: [{ required: true, message: '请填写单位名称' }] },
                            react_1.default.createElement(antd_4.TreeSelect, { style: { width: '100%' }, value: this.state.value, dropdownStyle: { maxHeight: 400, overflow: 'auto' }, treeData: this.state.treeData, placeholder: "\u8BF7\u9009\u62E9", treeDefaultExpandAll: true, onChange: onChangetree })),
                        react_1.default.createElement(antd_4.Form.Item, { className: "newForm" },
                            react_1.default.createElement(antd_4.Button, { type: "primary", htmlType: "submit" }, "\u786E\u8BA4"),
                            react_1.default.createElement(antd_4.Button, { type: "primary", onClick: this.methods().handleNewCancel }, "\u53D6\u6D88")))))));
    },
};
exports.default = FormField;
