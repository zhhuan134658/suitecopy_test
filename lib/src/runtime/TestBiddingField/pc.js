"use strict";
//物资招标申请
// import React from 'react';
// import { Input } from 'antd';
// import { IFormField } from '../../types';
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
// import './pc.less';
// interface ISwapFormField extends IFormField {
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
// /**
//  * 自定义控件运行态 PC 视图
//  */
// const FormField: ISwapFormField = {
//   handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { form } = this.props;
//     form.setFieldValue('TestBidding', e.target.value);
//   },
//   fieldRender() {
//     const { form } = this.props;
//     const field = form.getFieldInstance('TestBidding');
//     const label = form.getFieldProp('TestBidding', 'label');
//     const placeholder = form.getFieldProp('TestBidding', 'placeholders');
//     return (
//       <div className="pc-custom-field-wrap">
//         <div className="label">{label}</div>
//         {field.getProp('viewMode') ? (
//           field.getValue()
//         ) : (
//           <Input placeholder={placeholder} onChange={this.handleChange} />
//         )}
//       </div>
//     );
//   },
// };
// export default Fo,rmField;
var antd_1 = require("antd");
var antd_2 = require("antd");
var DirectoryTree = antd_2.Tree.DirectoryTree;
var antd_3 = require("antd");
var Header = antd_3.Layout.Header, Footer = antd_3.Layout.Footer, Sider = antd_3.Layout.Sider, Content = antd_3.Layout.Content;
var react_1 = __importStar(require("react"));
var antd_4 = require("antd");
var Search = antd_4.Input.Search;
var Option = antd_4.Select.Option;
var Column = antd_4.Table.Column;
require("./pc.less");
var mycolumns = [
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
        title: '含税单价（元）',
        dataIndex: 'tax_price',
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
    // const inputRef = useRef(null);
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
                    handleSave(__assign(__assign({}, record), values));
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
            react_1.default.createElement(antd_4.Input, { className: "editable-cell-value-inputNumber", ref: inputRef, onPressEnter: save, onBlur: save, min: 0, placeholder: "\u8BF7\u8F93\u5165" }))) : (react_1.default.createElement("div", { className: "editable-cell-value-wrap", style: { paddingRight: 24 }, onClick: toggleEdit }, children));
        // childNode = (
        //   <Form.Item
        //     style={{ margin: 0 }}
        //     name={dataIndex}
        //     rules={[
        //       {
        //         required: true,
        //         message: `${title} 不能为空`,
        //       },
        //     ]}
        //   >
        //     <InputNumber
        //       ref={inputRef}
        //       onChange={save}
        //       onBlur={save}
        //       placeholder="请输入"
        //     />
        //   </Form.Item>
        // );
    }
    return react_1.default.createElement("td", __assign({}, restProps), childNode);
};
/**
 * 自定义控件运行态 PC 视图
 */
var FormField = {
    getInitialState: function () {
        return {
            tabledata: [
                {
                    type_name: '水泥',
                    type: '84',
                    id: '93',
                    input_tax_rate: '0',
                    unit: '18',
                    size: '18',
                    name: '表格18',
                    corp_id: 'dingea47c602975497f935c2f4657eb6378f',
                    status: '1',
                    num: 1,
                },
                {
                    candidate_list: '6',
                    corp_id: 'dingea47c602975497f935c2f4657eb6378f',
                    id: '73',
                    input_tax_rate: '0',
                    name: '3333',
                    num: 1,
                    number: '2',
                    purchase_address: '5',
                    purchase_riqi: '4',
                    purchase_unit: '3',
                    size: '44',
                    status: '1',
                    type: '84',
                    type_name: '水泥',
                    unit: '444',
                },
            ],
            value: undefined,
            msgdata: '',
            newOptine: [],
            visibleModal: false,
            Inputmoney2: '',
            Inputmoney1: '',
            current_page: '',
            total2: '',
            allData: {
                type: '0',
                number: '10',
                page: '1',
                name: '',
            },
            isModalVisible: false,
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
            selectedRowKeys: [],
        };
    },
    /** 控件首次渲染完成之后 */
    fieldDidMount: function () {
        // const newdate = this.state.allData;
        // this.asyncSetFieldProps(newdate);
    },
    //新增
    newAdd: function () {
        this.setState({
            visibleModal: true,
        });
    },
    //取消
    handlenewCancel: function () {
        this.setState({
            visibleModal: false,
        });
    },
    //确认
    handlenewOk: function (values) {
        console.log(values);
        this.setState({
            visibleModal: false,
        });
    },
    onGenderChange: function (value) {
        console.log(value);
    },
    onGenderChange1: function (value, key) {
        console.log(key);
    },
    onSearch: function (value) {
        console.log(value);
        var newvalue = this.state.allData;
        newvalue.name = value;
        newvalue.type = 0;
        newvalue.page = 1;
        this.setState({
            allData: newvalue,
        });
        this.asyncSetFieldProps(newvalue);
    },
    onChangepage: function (page) {
        var newpage = this.state.allData;
        newpage.page = page;
        console.log(newpage);
        this.setState({
            allData: newpage,
        });
        this.asyncSetFieldProps(newpage);
        // this.getData(page);
        // this.setState({
        //   loading: true,
        // });
    },
    handleChange: function (row) {
        // const inputRef = useRef<Input>(null);
        // const { form } = this.props;
        // form.setFieldValue('TestBidding', e.target.value);
        // document.getElementsByClassName('ptID').blur();
        // inputRef.current!.focus();
        this.setState({ currentEditId: row.key });
        // this.setState({ isModalVisible: true });
    },
    handleCancel: function () {
        this.setState({ isModalVisible: false });
        this.setState({ selectedRowKeys: [] });
    },
    handleDelete: function (row) {
        var dataSource = __spreadArray([], this.state.dataSource);
        console.log(row);
        this.setState({
            dataSource: dataSource.filter(function (item) { return item.id !== row.id; }),
        });
    },
    handleAdd: function () {
        // const { count, dataSource } = this.state;
        // const newData: DataType = {
        //   key: count,
        //   name: '请选择物资',
        //   age: '',
        //   address: '',
        // };
        // this.setState({
        //   dataSource: [...dataSource, newData],
        //   count: count + 1,
        // });
        var form = this.props.form;
        var Pro_name = form.getFieldValue('Autopro');
        // if (!Pro_name) {
        //   return notification.open({
        //     message: '请先选择项目',
        //   });
        // }
        var newdate = this.state.allData;
        this.asyncSetFieldProps(newdate);
        this.setState({
            isModalVisible: true,
        });
    },
    handleSave: function (row) {
        var form = this.props.form;
        var newData = __spreadArray([], this.state.dataSource);
        var index = newData.findIndex(function (item) { return row.id === item.id; });
        var item = newData[index];
        newData.splice(index, 1, __assign(__assign({}, item), row));
        this.setState({
            dataSource: newData,
        });
        // console.log('sss', newarr2);
        console.log(newData);
        this.setState({ dataSource: newData, isModalVisible: false }, function () {
            form.setFieldValue('TestBidding', newData);
            form.setExtendFieldValue('TestBidding', {
                data: newData,
            });
        });
    },
    //   handleSave(row: DataType) {
    //     const newData = [...this.state.dataSource];
    //     const index = newData.findIndex(item => row.id === item.id);
    //     const item = newData[index];
    //     newData.splice(index, 1, {
    //       ...item,
    //       ...row,
    //     });
    //     console.log(newData);
    //     console.log(index);
    //     console.log(item);
    //     if (row.num2) {
    //       newData[index].num3 = row.num1 * row.num2;
    //     }
    //     this.setState({ dataSource: newData });
    //     },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var TestBiddingField = form.getFieldInstance('TestBidding');
        // const leaveReasonField = form.getFieldInstance('leaveReason');
        var key = TestBiddingField.getProp('id');
        // const value = TestBiddingField.getValue();
        var value = '1';
        // const extendValue = TestBiddingField.getExtendValue();
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestBidding',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // 入参和返回参考套件数据刷新集成接口文档
        spi
            .refreshData({
            modifiedBizAlias: ['TestBidding'],
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
                current_page: JSON.parse(res.dataList[0].value).page,
                total2: JSON.parse(res.dataList[0].value).count,
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
            if (_this.state.msgdata == '1') {
                antd_4.notification.open({
                    message: JSON.parse(res.dataList[0].value).msg,
                });
                _this.setState({
                    msgdata: '0',
                });
            }
            // console.log(JSON.parse(newarr));
            // console.log(this.state.listData);
        });
    },
    rowClick: function (record, rowkey) {
        var _this = this;
        var form = this.props.form;
        var newData = __spreadArray([], this.state.dataSource);
        var index = newData.findIndex(function (item) { return _this.state.currentEditId === item.key; });
        var currentKey = newData[index].key;
        newData[index] = record;
        newData[index].key = currentKey;
        // this.setState({ dataSource: newData });
        // this.setState({ isModalVisible: false });
        this.setState({ dataSource: newData, isModalVisible: false }, function () {
            form.setFieldValue('TestBidding', record);
            form.setExtendFieldValue('TestBidding', {
                record: record,
                Inputmoney1: _this.state.Inputmoney1,
                Inputmoney2: _this.state.Inputmoney2,
            });
        });
    },
    handleOk: function () {
        var newData = __spreadArray([], this.state.dataSource);
        var cData = __spreadArray([], this.state.currentSelectData);
        var lData = [];
        if (cData.length > 0) {
            cData.forEach(function (element) {
                newData.push(element);
            });
        }
        lData = this.unique(newData);
        console.log('pp+' + JSON.stringify(lData));
        this.setState({ dataSource: lData });
        this.setState({ isModalVisible: false });
        this.setState({ selectedRowKeys: [] });
    },
    dupRemoval: function (arr) {
        //arr是传入的数组
        var nn = __spreadArray([], arr);
        var obj = {};
        var peon = nn.reduce(function (cur, next) {
            //根据 属性scac + 属性disPlayName 判断去重
            obj[next.name + next.unit + next.size]
                ? ''
                : (obj[next.name + next.unit + next.size] = true && cur.push(next));
            return cur;
        }, []); //设置cur默认类型为数组，并且初始值为空的数组
        console.log(peon);
        return peon;
    },
    unique: function (arr) {
        var res = new Map();
        return arr.filter(function (arr) { return !res.has(arr.id) && res.set(arr.id, 1); });
    },
    fieldDidUpdate: function () {
        if (!this.props.runtimeProps.viewMode) {
            var editData = {
                detailedData: [], //物资明细
            };
            editData.detailedData = this.state.dataSource;
            var form = this.props.form;
            form.setFieldValue('TestBidding', editData);
            form.setExtendFieldValue('TestBidding', {
                data: editData,
            });
        }
    },
    timeChange: function (record, index, name, date, dateString) {
        var newData = __spreadArray([], this.state.dataSource);
        newData[index][name] = dateString;
        console.log(record, index, name, date, dateString, newData);
        this.setState({ dataSource: __spreadArray([], newData) });
    },
    fieldRender: function () {
        var _this = this;
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('TestBidding');
        var required = form.getFieldProp('TestBidding', 'required');
        var label = form.getFieldProp('TestBidding', 'label');
        var placeholder = form.getFieldProp('TestBidding', 'placeholder');
        var _b = this.state, dataSource = _b.dataSource, selectedRowKeys = _b.selectedRowKeys;
        var deColumns = [
            {
                title: '物资名称',
                dataIndex: 'name',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
                    react_1.default.createElement("span", null, record.name))); },
            },
            {
                title: '规格型号',
                dataIndex: 'size',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.size },
                    react_1.default.createElement("span", null, record.size))); },
            },
            {
                title: '单位',
                dataIndex: 'unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit },
                    react_1.default.createElement("span", null, record.unit))); },
            },
            {
                title: '估算数量',
                dataIndex: 'number',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.number },
                    react_1.default.createElement("span", null, record.number))); },
            },
            {
                title: '物资采购单位',
                dataIndex: 'purchase_unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.purchase_unit },
                    react_1.default.createElement("span", null, record.purchase_unit))); },
            },
            {
                title: '采购日期',
                dataIndex: 'purchase_riqi',
                width: 200,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.purchase_riqi },
                    react_1.default.createElement("span", null, record.purchase_riqi))); },
            },
            {
                title: '采购地点',
                dataIndex: 'purchase_address',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.purchase_address },
                    react_1.default.createElement("span", null, record.purchase_address))); },
            },
            {
                title: '候选供应商名单',
                dataIndex: 'candidate_list',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.candidate_list },
                    react_1.default.createElement("span", null, record.candidate_list))); },
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
                title: '规格型号',
                dataIndex: 'size',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.size },
                    react_1.default.createElement("span", null, record.size))); },
            },
            {
                title: '单位',
                dataIndex: 'unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit },
                    react_1.default.createElement("span", null, record.unit))); },
            },
            {
                title: '估算数量',
                dataIndex: 'number',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.number },
                    react_1.default.createElement("span", null, record.number))); },
            },
            {
                title: '物资采购单位',
                dataIndex: 'purchase_unit',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.purchase_unit },
                    react_1.default.createElement("span", null, record.purchase_unit))); },
            },
            //   {
            //     title: '采购日期',
            //     dataIndex: 'purchase_riqi',
            //     editable: true,
            //   },
            {
                title: '采购日期',
                dataIndex: 'purchase_riqi',
                key: 'purchase_riqi',
                width: 200,
                render: function (text, record, index) {
                    return (react_1.default.createElement(antd_4.DatePicker, { format: "YYYY-MM-DD", placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F", onChange: _this.timeChange.bind(_this, record, index, 'purchase_riqi') }));
                },
            },
            {
                title: '采购地点',
                dataIndex: 'purchase_address',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.purchase_address },
                    react_1.default.createElement("span", null, record.purchase_address))); },
            },
            {
                title: '候选供应商名单',
                dataIndex: 'candidate_list',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.candidate_list },
                    react_1.default.createElement("span", null, record.candidate_list))); },
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: function (_, record) {
                    return _this.state.dataSource.length >= 1 ? (react_1.default.createElement(antd_4.Popconfirm, { cancelText: "\u53D6\u6D88", okText: "\u786E\u5B9A", title: "\u786E\u5B9A\u5220\u9664?", onConfirm: function () { return _this.handleDelete(record); } },
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
                    handleSave: _this.handleSave,
                    handleChange: _this.handleChange,
                }); } });
        });
        var onSelect = function (keys, info) {
            console.log('Trigger Select', keys, info);
            var treedata = { type: keys[0], number: '10', page: '1' };
            _this.setState({
                allData: treedata,
            });
            _this.asyncSetFieldProps(treedata);
        };
        var onExpand = function () {
            console.log('Trigger Expand');
        };
        var rowSelection = {
            selectedRowKeys: selectedRowKeys,
            onChange: function (selectedRowKeys, selectedRows) {
                // console.log(
                //   `selectedRowKeys: ${selectedRowKeys}`,
                //   'selectedRows: ',
                //   selectedRows,
                // );
                var newData = __spreadArray([], selectedRows);
                if (newData.length > 0) {
                    newData = newData.map(function (item) {
                        return Object.assign(item, {
                            num: 1,
                        });
                    });
                }
                console.log('======' + JSON.stringify(newData));
                _this.setState({ currentSelectData: newData });
                _this.setState({ selectedRowKeys: selectedRowKeys });
            },
        };
        var Options = this.state.newOptine.map(function (station) { return (react_1.default.createElement(Option, { key: station.key, value: station.title }, station.title)); });
        var onFinish = function (values) {
            _this.setState({
                msgdata: '1',
            });
            console.log('Success:', values);
            //   const [form] = Form.useForm();
            var newdate = _this.state.allData;
            newdate.wz_add = values;
            _this.asyncSetFieldProps(newdate);
            _this.setState({
                visibleModal: false,
            });
            //   form.resetFields();
        };
        var onFinishFailed = function (errorInfo) {
            console.log('Failed:', errorInfo);
        };
        var onChangetree = function (value) {
            console.log(value);
            _this.setState({ value: value });
        };
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _c = value.detailedData, detailedData = _c === void 0 ? [] : _c;
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, components: components, bordered: true, dataSource: value instanceof Array ? value : detailedData, columns: deColumns, pagination: false }))));
        }
        return (react_1.default.createElement("div", { className: "TestBiddingField_class" },
            react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: dataSource, columns: columns, pagination: false }),
                    react_1.default.createElement(antd_4.Button, { onClick: this.handleAdd, type: "primary", style: { marginBottom: 16, marginTop: 16 } }, "\u6DFB\u52A0\u660E\u7EC6")),
                react_1.default.createElement(antd_4.Modal, { title: "\u9009\u62E9\u7269\u54C1", width: 1000, visible: this.state.isModalVisible, footer: [
                        react_1.default.createElement(antd_4.Button, { key: "back", onClick: this.handleCancel }, "\u8FD4\u56DE"),
                        react_1.default.createElement(antd_4.Button, { key: "submit", type: "primary", loading: this.state.loading, onClick: this.handleOk }, "\u786E\u5B9A"),
                    ], onCancel: this.handleCancel },
                    react_1.default.createElement(antd_3.Layout, null,
                        react_1.default.createElement(Sider, { className: "newside_new" },
                            react_1.default.createElement(antd_2.Tree, { defaultExpandedKeys: ['0'], blockNode: true, onSelect: onSelect, onExpand: onExpand, treeData: this.state.treeData })),
                        react_1.default.createElement(Content, null,
                            react_1.default.createElement("div", { className: "header_tab_class" },
                                react_1.default.createElement(Search, { placeholder: "\u8BF7\u8F93\u5165", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: this.onSearch }),
                                react_1.default.createElement(antd_4.Button, { onClick: this.newAdd, size: "large", type: "primary" }, "\u65B0\u589E")),
                            react_1.default.createElement(antd_4.Table, { scroll: { x: '1300px' }, rowSelection: __assign({ type: 'checkbox' }, rowSelection), rowKey: function (record) { return record.id; }, columns: mycolumns, dataSource: this.state.listData, loading: this.state.loading, pagination: false }),
                            react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total2, hideOnSinglePage: true, className: "pagination", onChange: this.onChangepage })))),
                react_1.default.createElement(antd_4.Modal, { className: "newModal_class", onCancel: this.handlenewCancel, visible: this.state.visibleModal, width: 1000, title: "\u65B0\u589E" },
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
                            react_1.default.createElement(antd_4.Button, { type: "primary", onClick: this.handlenewCancel }, "\u53D6\u6D88")))))));
    },
};
exports.default = FormField;
