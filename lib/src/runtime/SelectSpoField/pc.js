"use strict";
// 选择项目
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
//     form.setFieldValue('SelectSpo', e.target.value);
//   },
//   fieldRender() {
//     const { form } = this.props;
//     const field = form.getFieldInstance('SelectSpo');
//     const label = form.getFieldProp('SelectSpo', 'label');
//     const placeholder = form.getFieldProp('SelectSpo', 'placeholders');
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
var Column = antd_4.Table.Column;
require("./pc.less");
var mycolumns = [
    {
        title: '结算名称',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
            react_1.default.createElement("span", null, record.name))); },
    },
    {
        title: '结算金额',
        dataIndex: 'reply_money',
    },
    {
        title: '责任人',
        dataIndex: 't3',
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
                    //   toggleEdit();   //onchange事件 输入一次失去焦点
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
            react_1.default.createElement(antd_4.InputNumber, { className: "editable-cell-value-inputNumber", ref: inputRef, onPressEnter: save, onBlur: save, min: 1, placeholder: "\u8BF7\u8F93\u5165" }))) : (react_1.default.createElement("div", { className: "editable-cell-value-wrap", style: { paddingRight: 24 }, onClick: toggleEdit }, children));
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
        var form = this.props.form;
        return {
            detdate: 'a1',
            detailname: '',
            Inputvalue: form.getFieldInstance('SelectSpo').getValue() || '',
            //   Inputvalue: '123',
            current_page: '',
            total2: '',
            allData: {
                type: '0',
                number: '10',
                page: '1',
                name: '',
                project_name: '',
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
        // form.setFieldValue('SelectSpo', e.target.value);
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
        this.setState({
            dataSource: dataSource.filter(function (item) { return item.id !== row.id; }),
        });
    },
    handleAdd: function () {
        var form = this.props.form;
        var value = form.getFieldValue('Autopro');
        if (value) {
            var newvalue = this.state.allData;
            newvalue.name = '';
            newvalue.type = 0;
            newvalue.page = 1;
            newvalue.project_name = value;
            newvalue.rk_id = ['a'];
            this.setState({
                allData: newvalue,
                isModalVisible: true,
            });
            this.asyncSetFieldProps(newvalue);
        }
        else {
            antd_4.notification.open({
                message: '请先选择项目',
            });
        }
    },
    handleSave: function (row) {
        var newData = __spreadArray([], this.state.dataSource);
        var index = newData.findIndex(function (item) { return row.id === item.id; });
        var item = newData[index];
        newData.splice(index, 1, __assign(__assign({}, item), row));
        console.log(newData);
        console.log(index);
        console.log(item);
        if (row.num2) {
            newData[index].num3 = row.num1 * row.num2;
        }
        this.setState({ dataSource: newData });
    },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var SelectSpoField = form.getFieldInstance('SelectSpo');
        // const leaveReasonField = form.getFieldInstance('leaveReason');
        var key = SelectSpoField.getProp('id');
        // const value = SelectSpoField.getValue();
        var value = '1';
        // const extendValue = SelectSpoField.getExtendValue();
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
            console.log(JSON.parse(res.dataList[0].value));
            // this.state.listData = find(
            //   res.dataList,
            //   item => item.bizAlias === 'SelectSpo',
            // );
            // this.state.listData = res.dataList[0].value;
            // this.setState({
            //   listData: res.dataList[0].value,
            // });
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
            // console.log(JSON.parse(newarr));
            // console.log(this.state.listData);
        });
    },
    rowClick: function (record, rowkey) {
        var form = this.props.form;
        console.log(record);
        this.setState({ Inputvalue: record.name, isModalVisible: false }, function () {
            form.setFieldValue('Jiesmoney', record.detailed_money);
            form.setExtendFieldValue('Jiesmoney', record.detailed_money);
            form.setFieldValue('SelectSpo', record.name);
            form.setExtendFieldValue('SelectSpo', {
                data: record,
            });
        });
        // form.getFormData().then(res => {
        //   debugger
        // })
        // console.log(`formData: ${.}`);
        // const newData = [...this.state.dataSource];
        // const index = newData.findIndex(
        //   item => this.state.currentEditId === item.key,
        // );
        // const currentKey = newData[index].key;
        // newData[index] = record;
        // newData[index].key = currentKey;
        // this.setState({ dataSource: newData });
        // this.setState({ isModalVisible: false });
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
        // this.state.dataSource;
        // this.state.Inputmoney1;
        // this.state.Inputmoney2;
    },
    fieldRender: function () {
        var _this = this;
        var _a = this.props, form = _a.form, runtimeProps = _a.runtimeProps;
        var viewMode = runtimeProps.viewMode;
        var field = form.getFieldInstance('SelectSpo');
        var label = form.getFieldProp('SelectSpo', 'label');
        var required = form.getFieldProp('SelectSpo', 'required');
        var placeholder = form.getFieldProp('SelectSpo', 'placeholder');
        var _b = this.state, dataSource = _b.dataSource, selectedRowKeys = _b.selectedRowKeys;
        // const treeData = [
        //   {
        //     title: 'parent 0',
        //     key: '0-0',
        //     children: [
        //       { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        //       { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
        //     ],
        //   },
        //   {
        //     title: 'parent 1',
        //     key: '0-1',
        //     children: [
        //       { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        //       { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
        //     ],
        //   },
        // ];
        var etColumns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '类型',
                dataIndex: 'type',
            },
            {
                title: '规格',
                dataIndex: 'size',
            },
            {
                title: '数量',
                dataIndex: 'num1',
                editable: true,
            },
            {
                title: '单价',
                dataIndex: 'num2',
                editable: true,
            },
            {
                title: '金额',
                dataIndex: 'num3',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: function (_, record) {
                    return _this.state.dataSource.length >= 1 ? (react_1.default.createElement(antd_4.Popconfirm, { title: "\u786E\u5B9A\u5220\u9664?", cancelText: "\u53D6\u6D88", okText: "\u786E\u5B9A", onConfirm: function () { return _this.handleDelete(record); } },
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
                var form = _this.props.form;
                var dtar = '';
                var newData = __spreadArray([], selectedRows);
                if (newData.length > 0) {
                    newData = newData.map(function (item) {
                        return Object.assign(item, {
                            num: 1,
                        });
                    });
                }
                if (_this.state.detdate === 'a1') {
                    dtar = newData[0].name;
                }
                console.log('======' + JSON.stringify(newData));
                _this.setState({ currentSelectData: newData, detailname: dtar });
                //   Jiesmoney;
                form.setFieldValue('SelectSpo', dtar);
                form.setExtendFieldValue('SelectSpo', {
                    data: dtar,
                });
                form.setFieldValue('Jiesmoney', newData[0].detailed_money);
                form.setExtendFieldValue('Jiesmoney', newData[0].detailed_money);
                _this.setState({ selectedRowKeys: selectedRowKeys });
            },
        };
        // 详情页
        //详情
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _c = value.detailname, detailname = _c === void 0 ? '' : _c;
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", { style: { marginTop: '10px' } },
                    " ",
                    value)));
        }
        return (react_1.default.createElement("div", { className: "SelectSpoField_class" },
            ' ',
            react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                react_1.default.createElement("div", { className: "label" },
                    required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                    ' ',
                    label),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_4.Input, { readOnly: true, value: this.state.detailname, onClick: this.handleAdd, placeholder: "\u8BF7\u9009\u62E9\u5408\u540C" })),
                react_1.default.createElement(antd_4.Modal, { title: "\u9009\u62E9\u5408\u540C", width: 1000, visible: this.state.isModalVisible, footer: [
                        react_1.default.createElement(antd_4.Button, { key: "back", onClick: this.handleCancel }, "\u8FD4\u56DE"),
                        react_1.default.createElement(antd_4.Button, { key: "submit", type: "primary", loading: this.state.loading, onClick: this.handleOk }, "\u786E\u5B9A"),
                    ], onCancel: this.handleCancel },
                    react_1.default.createElement(Search, { placeholder: "\u8BF7\u8F93\u5165", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: this.onSearch }),
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, rowSelection: __assign({ type: 'radio' }, rowSelection), rowKey: function (record) { return record.id; }, columns: mycolumns, dataSource: this.state.listData, loading: this.state.loading, pagination: false }),
                    react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total2, hideOnSinglePage: true, className: "pagination", onChange: this.onChangepage })))));
    },
};
exports.default = FormField;
