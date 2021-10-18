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
var DirectoryTree = antd_1.Tree.DirectoryTree;
var antd_2 = require("antd");
var Header = antd_2.Layout.Header, Footer = antd_2.Layout.Footer, Sider = antd_2.Layout.Sider, Content = antd_2.Layout.Content;
var react_1 = __importStar(require("react"));
var antd_3 = require("antd");
var Search = antd_3.Input.Search;
var Option = antd_3.Select.Option;
var Column = antd_3.Table.Column;
require("./pc.less");
var mycolumns = [
    {
        title: '物品名称',
        dataIndex: 'name',
        render: function (_, record) { return (react_1.default.createElement(antd_3.Tooltip, { placement: "topLeft", title: record.name },
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
    var form = antd_3.Form.useForm()[0];
    return (react_1.default.createElement(antd_3.Form, { form: form, component: false },
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
        childNode = editing ? (react_1.default.createElement(antd_3.Form.Item, { style: { margin: 0 }, name: dataIndex },
            react_1.default.createElement(antd_3.Input, { className: "editable-cell-value-inputNumber", ref: inputRef, onPressEnter: save, onBlur: save, placeholder: "\u8BF7\u8F93\u5165" }))) : (react_1.default.createElement("div", { className: "editable-cell-value-wrap", style: { paddingRight: 24 }, onClick: toggleEdit }, children));
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
            newopin: [],
            maxnum: 0,
            Optionlist: [],
            petty_sele: '否',
            Numbervalue1: 0,
            Numbervalue2: '',
            Numbervalue3: '',
            Numbervalue5: '',
            isShow: false,
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
            count: 0,
            currentEditId: 0,
            currentSelectData: [],
            selectedRowKeys: [],
        };
    },
    /** 控件首次渲染完成之后 */
    fieldDidMount: function () { },
    SelectChange: function (value, record) {
        record.ke_name = value;
        var newData = __spreadArray([], this.state.dataSource);
        var index = newData.findIndex(function (item) { return record.key === item.key; });
        var item = newData[index];
        newData.splice(index, 1, __assign(__assign({}, item), record));
        this.setState({
            dataSource: newData,
        });
        console.log(value, record);
    },
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
    onMouseEnter: function () {
        console.log('1234567890987654321234567');
        var form = this.props.form;
        var Pro_name = form.getFieldValue('Autopro');
        if (!Pro_name) {
            return antd_3.notification.open({
                duration: 2,
                message: '请先选择项目',
            });
        }
        var newopin = [
            { name: '是', id: '1' },
            { name: '否', id: '2' },
        ];
        this.setState({
            newopin: newopin,
        });
    },
    handleChange: function (value) {
        console.log("selected " + value);
        var form = this.props.form;
        var Pro_name = form.getFieldValue('Autopro');
        if (value === '1') {
            this.setState({
                isShow: true,
                petty_sele: '是',
            });
            var newdate = this.state.allData;
            newdate.rk_id = ['是'];
            this.asyncSetFieldProps(newdate, '11');
        }
        else {
            this.setState({
                isShow: false,
                petty_sele: '否',
            });
        }
        // if (!Pro_name) {
        //   return notification.open({
        //     message: '请先选择项目',
        //   });
        // }
    },
    handleCancel: function () {
        this.setState({ isModalVisible: false });
        this.setState({ selectedRowKeys: [] });
    },
    handleDelete: function (row) {
        var dataSource = __spreadArray([], this.state.dataSource);
        console.log(row);
        this.setState({
            dataSource: dataSource.filter(function (item) { return item.key !== row.key; }),
        });
        if (row.money) {
            var newvalue = this.state.Inputmoney1;
            this.setState({
                Inputmoney1: (newvalue - row.money).toFixed(2),
            });
        }
    },
    handleAdd: function () {
        var newdate = this.state.allData;
        newdate.rk_id = ['a'];
        this.asyncSetFieldProps(newdate, '12');
        var form = this.props.form;
        var Pro_name = form.getFieldValue('Autopro');
        // if (!Pro_name) {
        //   return notification.open({
        //     message: '请先选择项目',
        //   });
        // }
        var _a = this.state, count = _a.count, dataSource = _a.dataSource;
        var newData = {
            key: count,
            ke_name: '',
            money: '',
            remarks: '',
        };
        this.setState({
            dataSource: __spreadArray(__spreadArray([], dataSource), [newData]),
            count: count + 1,
        });
    },
    handleSave: function (row) {
        console.log('表格数据：', row);
        var form = this.props.form;
        var newData = __spreadArray([], this.state.dataSource);
        var index = newData.findIndex(function (item) { return row.key === item.key; });
        var item = newData[index];
        newData.splice(index, 1, __assign(__assign({}, item), row));
        this.setState({
            dataSource: newData,
        });
        // console.log('sss', newarr2);
        console.log(newData);
        // 含税金额合计;
        var newarr1 = __spreadArray([], this.state.dataSource);
        var newarr2 = [];
        newarr2 = newarr1.filter(function (item) {
            if (item.money) {
                return item;
            }
        });
        newarr2 = newarr2.map(function (item) {
            return item.money;
        });
        var joindata = eval(newarr2.join('+')).toFixed(2);
        this.setState({
            Inputmoney1: joindata,
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
    asyncSetFieldProps: function (vlauedata, type) {
        var _this = this;
        var _a = this.props, form = _a.form, spi = _a.spi;
        var Pro_name = form.getFieldValue('Autopro');
        vlauedata.project_name = Pro_name;
        // vlauedata.petty_sele = this.state.petty_sele;
        // vlauedata.petty_yu = this.state.Numbervalue1;
        // vlauedata.project_name = this.state.Numbervalue2;
        var TestExpeField = form.getFieldInstance('TestExpe');
        // const leaveReasonField = form.getFieldInstance('leaveReason');
        var key = TestExpeField.getProp('id');
        // const value = TestExpeField.getValue();
        var value = '1';
        // const extendValue = TestExpeField.getExtendValue();
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
            var newarr;
            //   表格数据
            try {
                newarr = JSON.parse(res.dataList[0].value).data;
            }
            catch (e) { }
            // this.menusTree = menuId;
            if (type == '12') {
                _this.setState({
                    Optionlist: newarr,
                });
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
            // console.log(JSON.parse(newarr));
            // console.log(this.state.listData);
        });
    },
    onNumbervalue2Change: function (val) {
        console.log(val);
        var number1 = this.state.maxnum;
        var number2 = this.state.Inputmoney1;
        if (number1 > number2) {
            if (val > this.state.Inputmoney1) {
                var aa = this.state.Inputmoney1;
                var bb = Number(aa) - Number(this.state.maxnum);
                this.setState({
                    Numbervalue2: this.state.Inputmoney1,
                    Numbervalue5: bb.toFixed(2),
                });
            }
            else {
                var aa = this.state.Inputmoney1;
                var bb = aa - val;
                this.setState({
                    Numbervalue2: val.toFixed(2),
                    Numbervalue5: bb.toFixed(2),
                });
            }
        }
        else {
            if (val > this.state.maxnum) {
                var aa = this.state.Inputmoney1;
                var bb = aa - this.state.maxnum;
                this.setState({
                    Numbervalue2: this.state.maxnum.toFixed(2),
                    Numbervalue5: bb.toFixed(2),
                });
            }
            else {
                var aa = this.state.Inputmoney1;
                var bb = aa - val;
                this.setState({
                    Numbervalue2: val.toFixed(2),
                    Numbervalue5: bb.toFixed(2),
                });
            }
        }
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
            form.setFieldValue('TestExpe', record);
            form.setExtendFieldValue('TestExpe', {
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
    //   onChangenum2(value) {
    //     console.log(value);
    //     const aaadata = this.state.Numbervalue1;
    //     this.setState({
    //       Numbervalue1: value,
    //       Numbervalue2: value - aaadata,
    //     });
    //   },
    onChangenum: function (value) {
        console.log(value);
        var aaadata = this.state.Inputmoney1;
        this.setState({
            Numbervalue1: value,
            Numbervalue2: (aaadata - value).toFixed(2),
        });
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
            editData.detailedData = this.state.dataSource;
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
        var form = this.props.form;
        // const { form } = this.props;
        var Pro_name = form.getFieldValue('Autopro');
        var field = form.getFieldInstance('TestExpe');
        var label = form.getFieldProp('TestExpe', 'label');
        var placeholder = form.getFieldProp('TestExpe', 'placeholder');
        var required = form.getFieldProp('TestExpe', 'required');
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
                title: '费用科目',
                dataIndex: 'ke_name',
                render: function (_, record) { return (react_1.default.createElement(antd_3.Tooltip, { placement: "topLeft", title: record.ke_name },
                    react_1.default.createElement("span", null, record.ke_name))); },
            },
            {
                title: '金额',
                dataIndex: 'money',
                render: function (_, record) { return (react_1.default.createElement(antd_3.Tooltip, { placement: "topLeft", title: record.money },
                    react_1.default.createElement("span", null, record.money))); },
            },
            {
                title: '备注',
                dataIndex: 'remarks',
                render: function (_, record) { return (react_1.default.createElement(antd_3.Tooltip, { placement: "topLeft", title: record.remarks },
                    react_1.default.createElement("span", null, record.remarks))); },
            },
        ];
        var etColumns = [
            {
                title: '费用科目',
                dataIndex: 'ke_name',
                render: function (text, record, index) { return (react_1.default.createElement(antd_3.Cascader, { options: _this.state.Optionlist, onChange: function (value) { return _this.SelectChange(value, record); }, placeholder: "\u8BF7\u9009\u62E9" })
                //   <Select
                //     onChange={value => this.SelectChange(value, record)}
                //     style={{ width: 120 }}
                //   >
                //     {this.state.Optionlist.map((item, index) => {
                //       return <Option value={item}>{item}</Option>;
                //     })}
                //   </Select>
                ); },
            },
            {
                title: '金额',
                dataIndex: 'money',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_3.Tooltip, { placement: "topLeft", title: record.money },
                    react_1.default.createElement("span", null, record.money))); },
            },
            {
                title: '备注',
                dataIndex: 'remarks',
                editable: true,
                render: function (_, record) { return (react_1.default.createElement(antd_3.Tooltip, { placement: "topLeft", title: record.remarks },
                    react_1.default.createElement("span", null, record.remarks))); },
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: function (_, record) {
                    return _this.state.dataSource.length >= 1 ? (react_1.default.createElement(antd_3.Popconfirm, { title: "\u786E\u5B9A\u5220\u9664?", onConfirm: function () { return _this.handleDelete(record); } },
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
            var _b = value.hanmoney, hanmoney = _b === void 0 ? '' : _b, _c = value.detailedData, detailedData = _c === void 0 ? [] : _c, _d = value.petty_sele, petty_sele = _d === void 0 ? '' : _d, _e = value.Numbervalue1, Numbervalue1 = _e === void 0 ? '' : _e, _f = value.Numbervalue2, Numbervalue2 = _f === void 0 ? '' : _f, _g = value.Numbervalue3, Numbervalue3 = _g === void 0 ? '' : _g, _h = value.Numbervalue4, Numbervalue4 = _h === void 0 ? '' : _h, _j = value.Numbervalue5, Numbervalue5 = _j === void 0 ? '' : _j;
            return (react_1.default.createElement("div", { className: "field-wrapper" },
                react_1.default.createElement("div", { className: "label" }, "\u62A5\u9500\u5408\u8BA1"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, hanmoney),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u62A5\u9500\u660E\u7EC6"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_3.Table, { scroll: { x: '1000px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: value instanceof Array ? value : detailedData, columns: deColumns, pagination: false })),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5907\u7528\u91D1\u62B5\u6263"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, petty_sele),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5907\u7528\u91D1\u4F59\u989D"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, Numbervalue1),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u672C\u6B21\u62B5\u6263\u91D1\u989D"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, Numbervalue2),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5BA1\u6279\u4E2D\u7684\u8D39\u7528\u62A5\u9500\u62B5\u6263"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, Numbervalue3),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5BA1\u6279\u4E2D\u7684\u5F52\u8FD8"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, Numbervalue4),
                react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u8D22\u52A1\u5E94\u652F\u4ED8\u91D1\u989D"),
                react_1.default.createElement("div", { style: { marginTop: '10px' } }, Numbervalue5)));
        }
        return (react_1.default.createElement("div", { className: "TestExpeField_class" },
            react_1.default.createElement("div", { className: "pc-custom-field-wrap" },
                react_1.default.createElement("div", { className: "label" },
                    required ? (react_1.default.createElement("span", { style: { color: '#ea6d5c' } }, "*")) : (react_1.default.createElement("span", { style: { color: '#fff' } }, "*")),
                    label),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(antd_3.Table, { scroll: { x: '1000px' }, components: components, rowClassName: function () { return 'editable-row'; }, bordered: true, dataSource: dataSource, columns: columns, pagination: false }),
                    react_1.default.createElement(antd_3.Button, { onClick: this.handleAdd, type: "primary", style: { marginBottom: 16, marginTop: 16 } }, "\u6DFB\u52A0\u660E\u7EC6"),
                    react_1.default.createElement("div", { className: "label" }, "\u62A5\u9500\u5408\u8BA1"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(antd_3.InputNumber, { readOnly: true, value: this.state.Inputmoney1, placeholder: "\u62A5\u9500\u5408\u8BA1" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "label", style: { marginTop: '10px' } }, "\u5907\u7528\u91D1\u62B5\u6263"),
                            react_1.default.createElement(antd_3.Select, { defaultValue: "\u5426", style: { width: 200 }, onFocus: this.onMouseEnter, onChange: this.handleChange }, this.state.newopin.map(function (item) { return (react_1.default.createElement(antd_3.Select.Option, { key: item.id, value: item.id }, item.name)); })))),
                    react_1.default.createElement("div", null, this.state.isShow ? (react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5907\u7528\u91D1\u4F59\u989D"),
                        react_1.default.createElement(antd_3.InputNumber, { readOnly: true, style: { width: 200 }, min: 0, value: this.state.Numbervalue1 }),
                        react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5BA1\u6279\u4E2D\u7684\u8D39\u7528\u62A5\u9500\u62B5\u6263"),
                        react_1.default.createElement(antd_3.InputNumber, { readOnly: true, style: { width: 200 }, min: 0, value: this.state.Numbervalue3 }),
                        react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u5BA1\u6279\u4E2D\u7684\u5F52\u8FD8"),
                        react_1.default.createElement(antd_3.InputNumber, { readOnly: true, style: { width: 200 }, min: 0, value: this.state.Numbervalue4 }),
                        react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u672C\u6B21\u62B5\u6263\u91D1\u989D"),
                        react_1.default.createElement(antd_3.InputNumber
                        //   max={this.state.maxnum}
                        , { 
                            //   max={this.state.maxnum}
                            style: { width: 200 }, value: this.state.Numbervalue2, onChange: this.onNumbervalue2Change }),
                        react_1.default.createElement("div", { style: { marginTop: '10px' }, className: "label" }, "\u8D22\u52A1\u5E94\u652F\u4ED8\u91D1\u989D"),
                        react_1.default.createElement(antd_3.InputNumber, { readOnly: true, style: { width: 200 }, value: this.state.Numbervalue5 }))) : null)))));
    },
};
exports.default = FormField;
