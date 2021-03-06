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
//     form.setFieldValue('TestMain', e.target.value);
//   },
//   fieldRender() {
//     const { form } = this.props;
//     const field = form.getFieldInstance('TestMain');
//     const label = form.getFieldProp('TestMain', 'label');
//     const placeholder = form.getFieldProp('TestMain', 'placeholders');
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
        title: '????????????',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
            react_1.default.createElement("span", null, record.name))); },
    },
    {
        title: '????????????',
        dataIndex: 'type_name',
    },
    {
        title: '??????',
        dataIndex: 'unit',
    },
    {
        title: '?????????????????????',
        dataIndex: 'tax_price',
    },
    {
        title: '????????????',
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
    /** ?????????????????????????????? */
    fieldDidMount: function () {
        // const newdate = this.state.allData;
        // this.asyncSetFieldProps(newdate);
    },
    newAdd: function () {
        this.setState({
            visibleModal: true,
        });
    },
    //??????
    handlenewCancel: function () {
        this.setState({
            visibleModal: false,
        });
    },
    //??????
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
        // form.setFieldValue('TestMain', e.target.value);
        // document.getElementsByClassName('ptID').blur();
        // inputRef.current!.focus();
        this.setState({ currentEditId: row.key });
        // this.setState({ isModalVisible: true });
    },
    handleCancel: function () {
        this.setState({ isModalVisible: false });
        this.setState({ selectedRowKeys: [] });
    },
    //   handleDelete(row) {
    //     const dataSource = [...this.state.dataSource];
    //     console.log(row);
    //     if (row.total_price) {
    //       const newvalue = this.state.Inputmoney1;
    //       this.setState({
    //         Inputmoney1: (newvalue - row.total_price).toFixed(2),
    //       });
    //       console.log('ssks');
    //     }
    //     if (row.total_price) {
    //       const newvalue2 = this.state.Inputmoney2;
    //       this.setState({
    //         Inputmoney2: (newvalue2 - row.total_price).toFixed(2),
    //       });
    //       console.log('ssks');
    //     }
    //     this.setState({
    //       dataSource: dataSource.filter(item => item.id !== row.id),
    //     });
    //   },
    handleDelete: function (row) {
        var dataSource = __spreadArray([], this.state.dataSource);
        var arr = dataSource.filter(function (item) { return item.id !== row.id; });
        //   ????????????
        var newarr2 = [];
        newarr2 = arr.filter(function (item) {
            if (item.total_price) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.total_price;
        });
        this.setState({
            dataSource: arr,
            Inputmoney1: eval(newarr2.join('+')).toFixed(2),
        });
    },
    handleAdd: function () {
        // const { count, dataSource } = this.state;
        // const newData: DataType = {
        //   key: count,
        //   name: '???????????????',
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
        //     message: '??????????????????',
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
        var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
        var index = newData.findIndex(function (item) { return row.id === item.id; });
        var item = newData[index];
        newData.splice(index, 1, __assign(__assign({}, item), row));
        // if (row.material_total && row.person_total) {
        //   newData[index].total_price = row.person_total + row.material_total;
        // } else {
        //   newData[index].total_price = '?????????';
        // }
        if (reg.test(row.material_total) && reg.test(row.person_total)) {
            newData[index].total_price = (Number(row.material_total) + Number(row.person_total)).toFixed(2);
        }
        else {
            newData[index].total_price = '????????????';
        }
        this.setState({
            dataSource: newData,
        });
        // console.log('sss', newarr2);
        console.log(newData);
        // ??????;
        var newarr1 = __spreadArray([], this.state.dataSource);
        var newarr2 = [];
        newarr2 = newarr1.filter(function (item) {
            if (item.total_price) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.total_price;
        });
        this.setState({
            Inputmoney1: eval(newarr2.join('+')).toFixed(2),
        });
        // if (this.state.Inputmoney2) {
        //   console.log('saadasdasdas', this.state.Inputmoney2);
        //   form.setFieldValue('TestMain', newData);
        //   form.setExtendFieldValue('TestMain', {
        //     data: newData,
        //   });
        // }
        // this.setState({ dataSource: newData, isModalVisible: false }, () => {
        //   form.setFieldValue('TestMain', newData);
        //   form.setExtendFieldValue('TestMain', {
        //     data: newData,
        //   });
        // });
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
        var TestMainField = form.getFieldInstance('TestMain');
        // const leaveReasonField = form.getFieldInstance('leaveReason');
        var key = TestMainField.getProp('id');
        // const value = TestMainField.getValue();
        var value = '1';
        // const extendValue = TestMainField.getExtendValue();
        var bizAsyncData = [
            {
                key: key,
                bizAlias: 'TestMain',
                extendValue: vlauedata,
                value: value,
            },
        ];
        // ?????????????????????????????????????????????????????????
        spi
            .refreshData({
            modifiedBizAlias: ['TestMain'],
            bizAsyncData: bizAsyncData,
        })
            .then(function (res) {
            console.log(JSON.parse(res.dataList[0].value));
            // this.state.listData = find(
            //   res.dataList,
            //   item => item.bizAlias === 'TestMain',
            // );
            // this.state.listData = res.dataList[0].value;
            // this.setState({
            //   listData: res.dataList[0].value,
            // });
            //   ????????????
            var newarr;
            //   ????????????
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            _this.setState({
                listData: __spreadArray([], newarr),
                current_page: JSON.parse(res.dataList[0].value).page,
                total2: JSON.parse(res.dataList[0].value).count,
            });
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
        this.setState({ dataSource: newData, isModalVisible: false });
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
            var editData = {
                hanmoney: '',
                nomoney: '',
                detailedData: [], //????????????
            };
            if (this.state.Inputmoney1) {
                editData.hanmoney = this.state.Inputmoney1;
            }
            if (this.state.Inputmoney2) {
                editData.nomoney = this.state.Inputmoney2;
            }
            editData.detailedData = this.state.dataSource;
            var form = this.props.form;
            form.setFieldValue('TestMain', editData);
            form.setExtendFieldValue('TestMain', {
                data: editData,
            });
        }
        // this.state.dataSource;
        // this.state.Inputmoney1;
        // this.state.Inputmoney2;
    },
    fieldRender: function () {
        var _this = this;
        var form = this.props.form;
        var field = form.getFieldInstance('TestMain');
        var label = form.getFieldProp('TestMain', 'label');
        var placeholder = form.getFieldProp('TestMain', 'placeholder');
        var required = form.getFieldProp('TestMain', 'required');
        var _a = this.state, dataSource = _a.dataSource, selectedRowKeys = _a.selectedRowKeys;
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
        var deColumns = [
            {
                title: '????????????',
                dataIndex: 'name',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
                    react_1.default.createElement("span", null, record.name))); },
            },
            {
                title: '??????',
                dataIndex: 'unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit },
                    react_1.default.createElement("span", null, record.unit))); },
            },
            {
                title: '????????????',
                dataIndex: 'size',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.size },
                    react_1.default.createElement("span", null, record.size))); },
            },
            {
                title: '????????????',
                dataIndex: 'content',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.content },
                    react_1.default.createElement("span", null, record.content))); },
            },
            {
                title: '?????????',
                dataIndex: 'hours',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.hours },
                    react_1.default.createElement("span", null, record.hours))); },
            },
            {
                title: '????????????(???)',
                dataIndex: 'person_total',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.person_total },
                    react_1.default.createElement("span", null, record.person_total))); },
            },
            {
                title: '????????????(???)',
                dataIndex: 'material_total',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.material_total },
                    react_1.default.createElement("span", null, record.material_total))); },
            },
            {
                title: '??????(???)',
                dataIndex: 'total_price',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.total_price },
                    react_1.default.createElement("span", null, record.total_price))); },
            },
        ];
        var etColumns = [
            {
                title: '????????????',
                dataIndex: 'name',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.name },
                    react_1.default.createElement("span", null, record.name))); },
            },
            {
                title: '??????',
                dataIndex: 'unit',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.unit },
                    react_1.default.createElement("span", null, record.unit))); },
            },
            {
                title: '????????????',
                dataIndex: 'size',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.size },
                    react_1.default.createElement("span", null, record.size))); },
            },
            {
                title: '????????????',
                dataIndex: 'content',
                render: function (text, record, index) {
                    return react_1.default.createElement(antd_4.Input, { value: text, placeholder: "\u8BF7\u8F93\u5165" });
                },
            },
            {
                title: '?????????',
                dataIndex: 'hours',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.hours },
                    react_1.default.createElement("span", null, record.hours))); },
            },
            {
                title: '????????????(???)',
                dataIndex: 'person_total',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.person_total },
                    react_1.default.createElement("span", null, record.person_total))); },
            },
            {
                title: '????????????(???)',
                dataIndex: 'material_total',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.material_total },
                    react_1.default.createElement("span", null, record.material_total))); },
            },
            {
                title: '??????(???)',
                dataIndex: 'total_price',
                render: function (_, record) { return (react_1.default.createElement(antd_4.Tooltip, { placement: "topLeft", title: record.total_price },
                    react_1.default.createElement("span", null, record.total_price))); },
            },
            {
                title: '??????',
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
        //??????
        if (this.props.runtimeProps.viewMode) {
            var value = field.getValue();
            var _b = value.hanmoney, hanmoney = _b === void 0 ? '' : _b, _c = value.detailedData, detailedData = _c === void 0 ? [] : _c;
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "label" }, "\u5408\u8BA1"),
                react_1.default.createElement("div", null, hanmoney),
                react_1.default.createElement("div", { className: "label" }, label),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: value instanceof Array ? value : detailedData, columns: deColumns, pagination: false }))));
        }
        return (react_1.default.createElement("div", { className: "TestMainField_class" },
            react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                react_1.default.createElement("div", { className: "label" },
                    required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                    label),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: dataSource, columns: columns, pagination: false }),
                    react_1.default.createElement(antd_4.Button, { onClick: this.handleAdd, type: "primary", style: { marginBottom: 16, marginTop: 16 } }, "\u6DFB\u52A0\u660E\u7EC6"),
                    react_1.default.createElement("div", { className: "label" }, "\u5408\u8BA1(\u5143)"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(antd_4.Input, { readOnly: true, value: this.state.Inputmoney1, placeholder: "\u81EA\u52A8\u8BA1\u7B97" }))),
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
                            react_1.default.createElement(antd_4.Table, { scroll: { x: '1500px' }, rowSelection: __assign({ type: 'checkbox' }, rowSelection), rowKey: function (record) { return record.id; }, columns: mycolumns, dataSource: this.state.listData, loading: this.state.loading, pagination: false }),
                            react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: this.state.total2, hideOnSinglePage: true, className: "pagination", onChange: this.onChangepage })))),
                react_1.default.createElement(antd_4.Modal, { className: "newModal_class", onCancel: this.handlenewCancel, visible: this.state.visibleModal, width: 1000, title: "\u65B0\u589E" },
                    react_1.default.createElement(antd_4.Form, { initialValues: { remember: true }, layout: "vertical", onFinish: onFinish, onFinishFailed: onFinishFailed },
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u7269\u54C1\u540D\u79F0", name: "name", rules: [{ required: true, message: '?????????????????????' }] },
                            react_1.default.createElement(antd_4.Input, { placeholder: "\u8BF7\u586B\u5199\u5355\u4F4D\u540D\u79F0" })),
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u5355\u4F4D", name: "unit", rules: [{ required: true, message: '?????????????????????' }] },
                            react_1.default.createElement(antd_4.Input, { placeholder: "\u8BF7\u586B\u5199\u5355\u4F4D\u540D\u79F0" })),
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u89C4\u683C\u578B\u53F7", name: "size", rules: [{ required: true, message: '?????????????????????' }] },
                            react_1.default.createElement(antd_4.Input, { placeholder: "\u8BF7\u586B\u5199\u5355\u4F4D\u540D\u79F0" })),
                        react_1.default.createElement(antd_4.Form.Item, { label: "\u7269\u54C1\u7C7B\u578B", name: "type", rules: [{ required: true, message: '?????????????????????' }] },
                            react_1.default.createElement(antd_4.TreeSelect, { style: { width: '100%' }, value: this.state.value, dropdownStyle: { maxHeight: 400, overflow: 'auto' }, treeData: this.state.treeData, placeholder: "\u8BF7\u9009\u62E9", treeDefaultExpandAll: true, onChange: onChangetree })),
                        react_1.default.createElement(antd_4.Form.Item, { className: "newForm" },
                            react_1.default.createElement(antd_4.Button, { type: "primary", htmlType: "submit" }, "\u786E\u8BA4"),
                            react_1.default.createElement(antd_4.Button, { type: "primary", onClick: this.handlenewCancel }, "\u53D6\u6D88")))))));
    },
};
exports.default = FormField;
