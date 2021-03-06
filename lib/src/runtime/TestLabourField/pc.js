"use strict";
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
//  * ???????????????????????? PC ??????
//  */
// const FormField: ISwapFormField = {
//   handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { form } = this.props;
//     form.setFieldValue('TestLabour', e.target.value);
//   },
//   fieldRender() {
//     const { form } = this.props;
//     const field = form.getFieldInstance('TestLabour');
//     const label = form.getFieldProp('TestLabour', 'label');
//     const placeholder = form.getFieldProp('TestLabour', 'placeholders');
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
var TabPane = antd_4.Tabs.TabPane;
require("./pc.less");
var mycolumns = [
    {
        title: '????????????',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
            react_1.default.createElement("span", null, record.name))); },
    },
    {
        title: '????????????/??????',
        dataIndex: 'extend_first',
    },
    {
        title: '????????????',
        dataIndex: 'reply_money',
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
                    toggleEdit(); //onchange?????? ????????????????????????
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
            react_1.default.createElement(antd_4.InputNumber, { className: "editable-cell-value-inputNumber", ref: inputRef, onPressEnter: save, onBlur: save, min: 0, step: "0.01", placeholder: "\u8BF7\u8F93\u5165" }))) : (react_1.default.createElement("div", { className: "editable-cell-value-wrap", style: { paddingRight: 24 }, onClick: toggleEdit }, children));
        // childNode = (
        //   <Form.Item
        //     style={{ margin: 0 }}
        //     name={dataIndex}
        //     rules={[
        //       {
        //         required: true,
        //         message: `${title} ????????????`,
        //       },
        //     ]}
        //   >
        //     <InputNumber
        //       ref={inputRef}
        //       onChange={save}
        //       onBlur={save}
        //       placeholder="?????????"
        //     />
        //   </Form.Item>
        // );
    }
    return react_1.default.createElement("td", __assign({}, restProps), childNode);
};
/**
 * ???????????????????????? PC ??????
 */
var FormField = {
    getInitialState: function () {
        return {
            defaultActiveKey: 'a',
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
    /** ?????????????????????????????? */
    fieldDidMount: function () {
        // const newdate = this.state.allData;
        // this.asyncSetFieldProps(newdate);
    },
    onSearch: function (value) {
        console.log(value);
        var newvalue = this.state.allData;
        newvalue.name = value;
        newvalue.page = 1;
        newvalue.rk_id = [];
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
    onChangepagetree: function (page) {
        var newpage = this.state.allData;
        newpage.page = page;
        newpage.rk_id = ['-1'];
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
        // form.setFieldValue('TestLabour', e.target.value);
        // document.getElementsByClassName('ptID').blur();
        // inputRef.current!.focus();
        this.setState({ currentEditId: row.key });
        // this.setState({ isModalVisible: true });
    },
    handleCancel: function () {
        this.setState({ isModalVisible: false });
        this.setState({ selectedRowKeys: [] });
    },
    handleCanceltree: function () {
        this.setState({ isModalVisibletree: false });
        this.setState({ selectedRowKeys: [] });
    },
    handleDelete: function (row) {
        var dataSource = __spreadArray([], this.state.dataSource);
        console.log(row);
        if (row.tax_money) {
            var newvalue = this.state.Inputmoney1;
            this.setState({
                Inputmoney1: (newvalue - row.tax_money).toFixed(2),
            });
            console.log('ssks');
        }
        if (row.notax_money) {
            var newvalue2 = this.state.Inputmoney2;
            this.setState({
                Inputmoney2: (newvalue2 - row.notax_money).toFixed(2),
            });
            console.log('ssks');
        }
        this.setState({
            dataSource: dataSource.filter(function (item) { return item.id !== row.id; }),
        });
    },
    newhandleAdd: function () {
        var form = this.props.form;
        var Pro_name = form.getFieldValue('Autopro');
        if (!Pro_name) {
            return antd_4.notification.open({
                message: '??????????????????',
            });
        }
        var newddd = this.state.defaultActiveKey;
        console.log(newddd);
        this.setState({ dstatus: '1' });
        var newpage = {
            rk_id: [newddd],
            number: '10',
            page: 1,
            name: '',
            project_name: Pro_name,
        };
        this.setState({
            allData: newpage,
        });
        this.asyncSetFieldProps(newpage);
        this.setState({
            isModalVisible: true,
        });
    },
    handleAdd: function () {
        this.setState({ dstatus: '2' });
        console.log(this.state.allData);
        var newpage = {
            rk_id: ['-1'],
            number: '10',
            page: 1,
            name: '',
        };
        this.asyncSetFieldProps(newpage);
        this.setState({
            isModalVisibletree: true,
        });
    },
    handleSave: function (row) {
        var form = this.props.form;
        var newData = __spreadArray([], this.state.dataSource);
        var index = newData.findIndex(function (item) { return row.id === item.id; });
        var item = newData[index];
        newData.splice(index, 1, __assign(__assign({}, item), row));
        if (row.rk_number) {
            newData[index].tax_money = row.rk_number * row.tax_price;
        }
        if (row.tax_rate) {
            newData[index].notax_price = (row.tax_money *
                row.tax_rate *
                0.01).toFixed(2);
            newData[index].notax_money = (row.tax_money *
                (100 - row.tax_rate) *
                0.01).toFixed(2);
        }
        this.setState({
            dataSource: newData,
        });
        // console.log('sss', newarr2);
        console.log(newData);
        // ??????????????????;
        var newarr1 = __spreadArray([], this.state.dataSource);
        var newarr2 = [];
        newarr2 = newarr1.filter(function (item) {
            if (item.tax_money) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.tax_money;
        });
        this.setState({
            Inputmoney1: eval(newarr2.join('+')).toFixed(2),
        });
        // ?????????????????????;
        var newarr3 = __spreadArray([], this.state.dataSource);
        var newarr4 = [];
        newarr4 = newarr3.filter(function (item) {
            if (item.notax_money) {
                return item;
            }
        });
        newarr4 = newarr4.map(function (item) {
            return item.notax_money;
        });
        this.setState({
            Inputmoney2: eval(newarr4.join('+')).toFixed(2),
        });
        console.log('sss', eval(newarr3.join('+')).toFixed(2));
    },
    asyncSetFieldProps: function (vlauedata) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var TestLabourField = form.getFieldInstance('TestLabour');
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        var key = TestLabourField.getProp('id');
        var value = '1';
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestLabour',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // ?????????????????????????????????????????????????????????
        spi
            .refreshData({
            modifiedBizAlias: ['TestLabour'],
            bizAsyncData: bizAsyncData,
        })
            .then(function (res) {
            console.log(JSON.parse(res.dataList[0].value));
            //   ????????????
            var newarr;
            //   ????????????
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            //   ???????????????
            var newtarr = JSON.parse(res.dataList[0].extendValue);
            var newtarr1 = [
                {
                    title: '????????????',
                    key: '0',
                    children: newtarr,
                },
            ];
            _this.setState({
                treeData: __spreadArray([], newtarr1),
                current_page: JSON.parse(res.dataList[0].value).page,
                total3: JSON.parse(res.dataList[0].value).count,
            });
            var checked = _this.state.currentSelectDataid;
            var dstatus = _this.state.dstatus;
            if (dstatus === '2') {
                var newssarr = __spreadArray([], newarr);
                _this.setState({
                    treelistData: newssarr,
                });
                // ??????????????????;
                var newarr2 = [];
                newarr2 = newssarr.filter(function (item) {
                    if (item.tax_money) {
                        return item;
                    }
                });
                newarr2 = newarr2.map(function (item) {
                    return item.tax_money;
                });
                _this.setState({
                    Inputmoney1: eval(newarr2.join('+')).toFixed(2),
                });
                // ?????????????????????;
                var newarr4 = [];
                newarr4 = newssarr.filter(function (item) {
                    if (item.notax_money) {
                        return item;
                    }
                });
                newarr4 = newarr4.map(function (item) {
                    return item.notax_money;
                });
                _this.setState({
                    Inputmoney2: eval(newarr4.join('+')).toFixed(2),
                });
            }
            else if (dstatus === '1') {
                _this.setState({
                    listData: __spreadArray([], newarr),
                    current_page: JSON.parse(res.dataList[0].value).page,
                    total2: JSON.parse(res.dataList[0].value).count,
                });
            }
            else if (dstatus === '3') {
                _this.setState({
                    dataSource: __spreadArray([], newarr),
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
        this.setState({ dataSource: newData, isModalVisible: false });
    },
    handleOktree: function () {
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
        this.setState({ isModalVisibletree: false });
        this.setState({ selectedRowKeys: [] });
    },
    handleOk: function () {
        this.setState({ dstatus: '3' });
        console.log(this.state.detdate);
        var cDataid = __spreadArray([], this.state.currentSelectDataid);
        this.setState({
            isModalVisible: false,
        });
        this.setState({ selectedRowKeys: [] });
    },
    dupRemoval: function (arr) {
        //arr??????????????????
        var nn = __spreadArray([], arr);
        var obj = {};
        var peon = nn.reduce(function (cur, next) {
            //?????? ??????scac + ??????disPlayName ????????????
            obj[next.name + next.unit + next.size]
                ? ''
                : (obj[next.name + next.unit + next.size] = true && cur.push(next));
            return cur;
        }, []); //??????cur??????????????????????????????????????????????????????
        console.log(peon);
        return peon;
    },
    unique: function (arr) {
        var res = new Map();
        return arr.filter(function (arr) { return !res.has(arr.id) && res.set(arr.id, 1); });
    },
    fieldDidUpdate: function () {
        if (!this.props.runtimeProps.viewMode) {
            console.log('????????????fieldDidUpdate');
            var detailname = this.state.detailname;
            var form = this.props.form;
            form.setFieldValue('TestLabour', detailname);
            form.setExtendFieldValue('TestLabour', {
                data: detailname,
            });
        }
        // this.state.dataSource;
        // this.state.Inputmoney1;
        // this.state.Inputmoney2;
    },
    fieldRender: function () {
        var _this = this;
        var form = this.props.form;
        var field = form.getFieldInstance('TestLabour');
        var label = form.getFieldProp('TestLabour', 'label');
        var placeholder = form.getFieldProp('TestLabour', 'placeholder');
        var required = form.getFieldProp('TestLabour', 'required');
        var _a = this.state, dataSource = _a.dataSource, selectedRowKeys = _a.selectedRowKeys;
        var deColumns = [
            {
                title: '????????????',
                dataIndex: 'name',
            },
            {
                title: '??????',
                dataIndex: 'unit',
            },
            {
                title: '????????????',
                dataIndex: 'size',
            },
            {
                title: '????????????',
                dataIndex: 'rk_number',
            },
            {
                title: '????????????',
                dataIndex: 'tax_price',
            },
            {
                title: '??????(%)',
                dataIndex: 'tax_rate',
            },
            {
                title: '??????',
                dataIndex: 'notax_price',
            },
            {
                title: '????????????',
                dataIndex: 'tax_money',
            },
            {
                title: '???????????????',
                dataIndex: 'notax_money',
            },
        ];
        var etColumns = [
            {
                title: '????????????',
                dataIndex: 'name',
                width: 100,
                key: 'name',
                fixed: 'left',
            },
            {
                title: '??????',
                dataIndex: 'unit',
                width: 100,
                key: 'unit',
                fixed: 'left',
            },
            {
                title: '????????????',
                dataIndex: 'size',
                width: 100,
                key: 'size',
                fixed: 'left',
            },
            {
                title: '????????????',
                dataIndex: 'rk_number',
                editable: true,
            },
            {
                title: '????????????',
                dataIndex: 'tax_price',
                editable: true,
            },
            {
                title: '??????(%)',
                dataIndex: 'tax_rate',
                editable: true,
            },
            {
                title: '??????',
                dataIndex: 'notax_price',
            },
            {
                title: '????????????',
                dataIndex: 'tax_money',
            },
            {
                title: '???????????????',
                dataIndex: 'notax_money',
            },
            {
                title: '??????',
                dataIndex: 'operation',
                key: 'operation',
                fixed: 'right',
                width: 100,
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
        var Tabschange = function (key) {
            console.log(key);
            var newpage = {
                defaultActiveKey: key,
                rk_id: [key],
                number: '10',
                page: 1,
                name: '',
            };
            _this.setState({
                allData: newpage,
                detdate: key + '1',
            });
            _this.asyncSetFieldProps(newpage);
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
                if (_this.state.detdate === 'a1') {
                    dtar = '?????????????????????-' + newData[0].name;
                }
                else if (_this.state.detdate === 'b1') {
                    dtar = '??????????????????-' + newData[0].name;
                }
                else if (_this.state.detdate === 'c1') {
                    dtar = '?????????????????????-' + newData[0].name;
                }
                else if (_this.state.detdate === 'd1') {
                    dtar = '?????????????????? -' + newData[0].name;
                }
                else if (_this.state.detdate === 'e1') {
                    dtar = '????????????-' + newData[0].name;
                }
                console.log('111111111' + newData);
                var form = _this.props.form;
                form.setFieldValue('LabourField', newData[0].contract_name);
                form.setFieldValue('Selectjia', newData[0].team);
                _this.setState({
                    currentSelectData: newData,
                    currentSelectDataid: newDataid,
                    detailname: dtar,
                });
                _this.setState({ selectedRowKeys: selectedRowKeys });
            },
        };
        //??????
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", { style: { marginTop: '10px' } },
                    " ",
                    value)));
        }
        return (react_1.default.createElement("div", { className: "TestLabourField_class" },
            react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "label", style: { marginTop: '10px' } },
                        required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                        react_1.default.createElement("div", null, label)),
                    react_1.default.createElement(antd_4.Input, { onClick: this.newhandleAdd, readOnly: true, value: this.state.detailname, placeholder: "\u8BF7\u9009\u62E9" })),
                react_1.default.createElement(antd_4.Modal, { title: "\u5173\u8054", width: 1000, visible: this.state.isModalVisible, footer: [
                        react_1.default.createElement(antd_4.Button, { key: "back", onClick: this.handleCancel }, "\u8FD4\u56DE"),
                        react_1.default.createElement(antd_4.Button, { key: "submit", type: "primary", loading: this.state.loading, onClick: this.handleOk }, "\u786E\u5B9A"),
                    ], onCancel: this.handleCancel },
                    react_1.default.createElement(antd_4.Tabs, { className: "Tabs_class", defaultActiveKey: "a", centered: true, onChange: Tabschange },
                        react_1.default.createElement(TabPane, { tab: "\u52B3\u52A1\u8FDB\u5EA6\u6B3E\u7ED3\u7B97", key: "a" }),
                        react_1.default.createElement(TabPane, { tab: "\u52B3\u52A1\u5B8C\u5DE5\u7ED3\u7B97", key: "b" }),
                        react_1.default.createElement(TabPane, { tab: "\u52B3\u52A1\u8D28\u4FDD\u91D1\u7ED3\u7B97", key: "c" }),
                        react_1.default.createElement(TabPane, { tab: "\u96F6\u661F\u52B3\u52A1\u7ED3\u7B97", key: "d" }),
                        react_1.default.createElement(TabPane, { tab: "\u52B3\u52A1\u5408\u540C", key: "e" })),
                    react_1.default.createElement(Search, { placeholder: "\u8BF7\u8F93\u5165", allowClear: true, enterButton: "\u641C\u7D22", size: "large", onSearch: this.onSearch }),
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, rowSelection: __assign({ type: 'radio' }, rowSelection), rowKey: function (record) { return record.id; }, columns: mycolumns, dataSource: this.state.listData, loading: this.state.loading, pagination: false }),
                    react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total2, hideOnSinglePage: true, className: "pagination", onChange: this.onChangepage })))));
    },
};
exports.default = FormField;
