import { Pagination } from 'antd';
import { Tree } from 'antd';
const { DirectoryTree } = Tree;
import { Layout } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  TreeSelect,
  Select,
  Tabs,
  notification,
  Table,
  Tooltip,
  Modal,
  Input,
  InputNumber,
  Button,
  Popconfirm,
  Form,
} from 'antd';
const { Search } = Input;
const { Option } = Select;
const { Column } = Table;
import { FormInstance } from 'antd/lib/form';
const { TabPane } = Tabs;

import { fpDivide, fpMul, toFixed } from '../../utils/fpOperations';
import { calcTaxRate } from '../../utils/calcTax';
import {
  DataType,
  EditableCellProps,
  ISwapFormField,
  EditableRowProps,
} from '../../types/TestPurField/interface';

import './pc.less';
import {
  reduceAndRemoveDuplicate,
  removeDuplicate,
} from '../../utils/arrayHandle';
const purchaseColumns = [
  {
    title: '采购主题',
    dataIndex: 'name',
    render: (_: any, record: any) => (
      <Tooltip placement="topLeft" title={record.name}>
        <span>{record.name}</span>
      </Tooltip>
    ),
  },
  {
    title: '采购金额',
    dataIndex: 'detailed_money',
  },
];
const projectColumns = [
  {
    title: '计划主题',
    dataIndex: 'name',
    render: (_: any, record: any) => (
      <Tooltip placement="topLeft" title={record.name}>
        <span>{record.name}</span>
      </Tooltip>
    ),
  },
  {
    title: '项目名称',
    dataIndex: 'project_name',
  },
];
const purchaseItemColumns = [
  {
    title: '物品名称',
    dataIndex: 'name',
    render: (_: any, record: any) => (
      <Tooltip placement="topLeft" title={record.name}>
        <span>{record.name}</span>
      </Tooltip>
    ),
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

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  handleChange,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      //   inputRef.current!.change();
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit(); //onchange事件 输入一次失去焦点
      handleSave({ ...record, ...values }, values);
    } catch (errInfo) {
      console.log('11Save failed:', errInfo);
    }
  };

  //   const focusSave = () => {
  //     handleChange({ ...record });
  //   };
  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item style={{ margin: 0 }} name={dataIndex}>
        {/*    */}
        {/*   */}
        {/* <Input ref={inputRef} /> */}

        <InputNumber
          className="editable-cell-value-inputNumber"
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
          max={Number.MAX_SAFE_INTEGER}
          min={0}
          step="0.01"
          placeholder="请输入"
          bordered={false}
          controls={false}
        />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

/**
 * 自定义控件运行态 PC 视图
 */
const FormField: ISwapFormField = {
  getInitialState() {
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
      current_page: '', //当前页
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
  fieldDidMount() {
    // const newdate = this.state.allData;
    // this.asyncSetFieldProps(newdate);
  }, //新增

  methods() {
    let _this = this;
    return {
      newAdd() {
        _this.setState({
          visibleModal: true,
        });
      },
      handleNewCancel() {
        _this.setState({
          visibleModal: false,
        });
      },
      handleNewOk(values: any) {
        console.log(values);
        this.setState({
          visibleModal: false,
        });
      },
      onSearch(value: any) {
        console.log(value);
        const newvalue = _this.state.allData;
        newvalue.name = value;

        newvalue.page = 1;
        newvalue.rk_id = ['-1'];
        _this.setState({
          allData: newvalue,
        });
        _this.asyncSetFieldProps(newvalue);
      },
      onChangePage(page: any) {
        const newPage = _this.state.allData;
        newPage.page = page;
        _this.setState({
          allData: newPage,
        });
        _this.asyncSetFieldProps(newPage);
      },
      onChangePageTree(page: any) {
        const newpage = this.state.allData;
        newpage.page = page;
        newpage.rk_id = ['-1'];
        console.log(newpage);
        _this.setState({
          allData: newpage,
        });
        _this.asyncSetFieldProps(newpage);
      },
      handleChange(row: DataType) {
        _this.setState({ currentEditId: row.key });
      },
      handleCancelTree() {
        _this.setState({ isModalVisibletree: false });
        _this.setState({ selectedRowKeys: [] });
      },
      handleDelete(row: DataType) {
        const dataSource = [..._this.state.dataSource];
        console.log('deleteRow', row);
        const arr = dataSource.filter(item => item.id !== row.id);
        //   含税金额
        let newarr2 = [];

        newarr2 = arr.filter(item => {
          if (item.amount_tax) {
            return item;
          }
        });
        newarr2 = newarr2.map(item => {
          return item.amount_tax;
        });
        //不含税金额
        let newarr4 = [];

        newarr4 = arr.filter(item => {
          if (item.no_amount_tax) {
            return item;
          }
        });
        newarr4 = newarr4.map(item => {
          return item.no_amount_tax;
        });
        console.log('deleteLog', newarr2, newarr4);
        let inputMoney1Data = null;
        if (eval(newarr2.join('+'))) {
          inputMoney1Data = toFixed(eval(newarr2.join('+')), 2);
        }
        let inputMoney2Data = null;
        if (eval(newarr4.join('+'))) {
          inputMoney2Data = toFixed(eval(newarr4.join('+')), 2);
        }

        _this.setState({
          dataSource: arr,
          Inputmoney1: inputMoney1Data,
          Inputmoney2: inputMoney2Data,
        });
      },
      newhandleAdd() {
        const { form } = _this.props;
        const Pro_name = form.getFieldValue('Autopro');
        // if (!Pro_name) {
        //   return notification.open({
        //     message: '请先选择项目',
        //   });
        // }
        const newddd = _this.state.defaultActiveKey;
        console.log(newddd);
        _this.setState({ dstatus: '1' });
        let newpage = {
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
      handleAdd() {
        const { form } = _this.props;
        const Pro_name = form.getFieldValue('Autopro');
        if (!Pro_name) {
          return notification.open({
            message: '请先选择项目',
          });
        }
        _this.setState({ dstatus: '2' });
        console.log(_this.state.allData);
        let newpage = {
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
      handleSave(row: DataType, values: {}) {
        const { form } = _this.props;
        const newData = [..._this.state.dataSource];
        const reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
        const index = newData.findIndex(item => row.id === item.id);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
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
                let a = 1 + Number(row.tax_rate) * 0.01;
                newData[index].unit_price = toFixed(
                  fpMul(Number(row.no_unit_price), a),
                  2,
                );
              } else if (reg.test(row.unit_price)) {
                newData[index].tax_rate = calcTaxRate(row);
              }
            } else if (
              row.no_unit_price == null &&
              reg.test(row.tax_rate) &&
              row.unit_price
            ) {
              let a = 1 + row.tax_rate * 0.01;
              newData[index].no_unit_price = toFixed(
                fpDivide(row.unit_price, a),
                2,
              );
            }
            break;
          case 'unit_price':
            //含税单价
            if (reg.test(row.unit_price)) {
              if (reg.test(row.tax_rate)) {
                let a = 1 + row.tax_rate * 0.01;
                newData[index].no_unit_price = toFixed(
                  fpDivide(row.unit_price, a),
                  2,
                );
                //   newData[index].no_unit_price = (
                //     row.unit_price /
                //     (1 + row.tax_rate * 0.01)
                //   ).toFixed(2);
              } else if (reg.test(row.no_unit_price)) {
                const taxRate = calcTaxRate(row);
                newData[index].tax_rate = taxRate;
                if (reg.test(row.det_quantity)) {
                  let a = fpMul(row.no_unit_price, row.det_quantity);
                  let b = fpMul(taxRate, 0.01);
                  newData[index].tax_amount = toFixed(fpMul(a, b), 2);
                }
              }
            } else if (
              row.unit_price == null &&
              reg.test(row.tax_rate) &&
              row.no_unit_price
            ) {
              let a = 1 + row.tax_rate * 0.01;
              newData[index].unit_price = toFixed(
                fpMul(row.no_unit_price, a),
                2,
              );
              //   newData[index].unit_price = (
              //     row.no_unit_price *
              //     (1 + row.tax_rate * 0.01)
              //   ).toFixed(2);
            }
            if (row.unit_price && row.det_quantity) {
              //   newData[index].amount_tax = (
              //     row.unit_price * row.det_quantity
              //   ).toFixed(2);
              newData[index].amount_tax = toFixed(
                fpMul(row.unit_price, row.det_quantity),
                2,
              );
            }

            //不含税金额
            if (row.unit_price && row.det_quantity && reg.test(row.tax_rate)) {
              let a = 1 + row.tax_rate * 0.01;
              let b = fpMul(row.unit_price, row.det_quantity);

              newData[index].no_amount_tax = toFixed(fpDivide(b, a), 2);

              let c = row.unit_price * row.det_quantity;
              let d = 1 + row.tax_rate * 0.01;
              let e = fpDivide(c, d);
              let f = row.tax_rate * 0.01;
              newData[index].tax_amount = toFixed(fpMul(e, f), 2);
            }

            break;
          case 'tax_rate':
            if (row.no_unit_price && !reg.test(row.unit_price)) {
              newData[index].unit_price = toFixed(
                row.no_unit_price * (1 + row.tax_rate * 0.01),
                2,
              );
            } else if (!reg.test(row.no_unit_price) && row.unit_price) {
              newData[index].no_unit_price = toFixed(
                row.unit_price / (1 + row.tax_rate * 0.01),
                2,
              );

              newData[index].amount_tax = toFixed(
                row.unit_price * row.det_quantity,
                2,
              );
              newData[index].no_amount_tax = toFixed(
                (row.unit_price * row.det_quantity) / (1 + row.tax_rate * 0.01),
                2,
              );
              newData[index].tax_amount = toFixed(
                newData[index].amount_tax - newData[index].no_amount_tax,
                2,
              );
            } else if (row.no_unit_price && row.unit_price) {
              let a = 1 + row.tax_rate * 0.01;
              newData[index].unit_price = toFixed(
                fpMul(row.no_unit_price, a),
                2,
              );
            }
            if (
              reg.test(row.no_unit_price) &&
              reg.test(row.det_quantity) &&
              reg.test(row.tax_rate)
            ) {
              let a = fpMul(row.no_unit_price, row.det_quantity);
              let b = fpMul(row.tax_rate, 0.01);
              newData[index].tax_amount = toFixed(fpMul(a, b), 2);
              let c = fpMul(row.no_unit_price, row.det_quantity);
              let d = 1 + row.tax_rate * 0.01;
              newData[index].amount_tax = toFixed(fpMul(c, d), 2);
            }

            break;
          default:
            break;
        }

        //税额
        if (Object.keys(values)[0] != 'unit_price') {
          if (row.no_unit_price && row.det_quantity && reg.test(row.tax_rate)) {
            let a = fpMul(row.no_unit_price, row.det_quantity);
            let b = fpMul(row.tax_rate, 0.01);
            newData[index].tax_amount = toFixed(fpMul(a, b), 2);
          }
          //   不含税
          if (row.no_unit_price && row.det_quantity) {
            newData[index].no_amount_tax = toFixed(
              fpMul(row.no_unit_price, row.det_quantity),
              2,
            );
          }
          //含税
          if (row.no_unit_price && row.det_quantity && reg.test(row.tax_rate)) {
            let a = fpMul(row.no_unit_price, row.det_quantity);
            let b = 1 + row.tax_rate * 0.01;

            newData[index].amount_tax = toFixed(fpMul(a, b), 2);
          }
        }

        _this.setState({
          dataSource: newData,
        });
        console.log(newData);
        // 含税金额合计;
        const newarr1 = [..._this.state.dataSource];
        let newarr2 = [];

        newarr2 = newarr1.filter(item => {
          if (item.amount_tax) {
            return item;
          }
        });
        newarr2 = newarr2.map(item => {
          return item.amount_tax;
        });

        _this.setState({
          Inputmoney1: eval(newarr2.join('+'))
            ? toFixed(eval(newarr2.join('+')), 2)
            : null,
        });
        // 不含税金额合计;
        const newarr3 = [..._this.state.dataSource];
        let newarr4 = [];

        newarr4 = newarr3.filter(item => {
          if (item.no_amount_tax) {
            return item;
          }
        });
        newarr4 = newarr4.map(item => {
          return item.no_amount_tax;
        });

        _this.setState({
          Inputmoney2: eval(newarr4.join('+'))
            ? toFixed(eval(newarr4.join('+')), 2)
            : null,
        });
      },
      rowClick(record: any, rowkey: any) {
        const { form } = _this.props;
        const newData = [..._this.state.dataSource];
        const index = newData.findIndex(
          item => _this.state.currentEditId === item.key,
        );
        const currentKey = newData[index].key;
        newData[index] = record;
        newData[index].key = currentKey;
        _this.setState({ dataSource: newData, isModalVisible: false });
      },
      handleOktree() {
        const newData = [..._this.state.dataSource];
        const cData = [..._this.state.currentSelectData];
        let lData = [];
        if (cData.length > 0) {
          cData.forEach(element => {
            newData.push(element);
          });
        }
        lData = reduceAndRemoveDuplicate(newData);
        let testData = removeDuplicate(newData);
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

  asyncSetFieldProps(valueData: { project_name: any }) {
    const { form, spi } = this.props;
    const Pro_name = form.getFieldValue('Autopro');
    valueData.project_name = Pro_name;
    const TestPurField = form.getFieldInstance('TestPur');

    const key = TestPurField.getProp('id');
    const value = '1';

    const bizAsyncData = [
      {
        key,
        bizAlias: 'TestPur',
        extendValue: valueData,
        value,
      },
    ];

    // 入参和返回参考套件数据刷新集成接口文档

    spi
      .refreshData({
        modifiedBizAlias: ['TestPur'], // spi接口要改动的是leaveReason的属性值
        bizAsyncData,
      })
      .then((res: { dataList: any[] }) => {
        let newarr: any;
        //   表格数据
        try {
          newarr = JSON.parse(res.dataList[0].value).data;
        } catch (e) {}
        //   树状图数据
        const newtarr = JSON.parse(res.dataList[0].extendValue);
        const newtarr1 = [
          {
            title: '物资类型',
            key: '0',
            children: newtarr,
          },
        ];
        this.setState({
          treeData: [...newtarr1],
          current_page: JSON.parse(res.dataList[0].value).page,
          total3: JSON.parse(res.dataList[0].value).count,
        });
        const checked = this.state.currentSelectDataid;
        const dstatus = this.state.dstatus;
        if (dstatus === '2') {
          const newssarr = [...newarr];
          this.setState({
            treelistData: newssarr,
          });
          // 含税金额合计;

          let newarr2 = [];

          newarr2 = newssarr.filter(item => {
            if (item.amount_tax) {
              return item;
            }
          });
          newarr2 = newarr2.map(item => {
            return item.amount_tax;
          });

          this.setState({
            Inputmoney1: eval(newarr2.join('+'))
              ? toFixed(eval(newarr2.join('+')), 2)
              : null,
          });
          // 不含税金额合计;

          let newarr4 = [];

          newarr4 = newssarr.filter(item => {
            if (item.no_amount_tax) {
              return item;
            }
          });
          newarr4 = newarr4.map(item => {
            return item.no_amount_tax;
          });

          this.setState({
            Inputmoney2: eval(newarr4.join('+'))
              ? toFixed(eval(newarr4.join('+')), 2)
              : null,
          });
        } else if (dstatus === '1') {
          this.setState({
            listData: [...newarr],
            current_page: JSON.parse(res.dataList[0].value).page,
            total2: JSON.parse(res.dataList[0].value).count,
          });
        } else if (dstatus === '3') {
          // 含税金额合计;
          const newssarr = [...newarr];
          let newarr2 = [];

          newarr2 = newssarr.filter(item => {
            if (item.amount_tax) {
              return item;
            }
          });
          newarr2 = newarr2.map(item => {
            return item.amount_tax;
          });

          this.setState({
            Inputmoney1: eval(newarr2.join('+'))
              ? toFixed(eval(newarr2.join('+')), 2)
              : null,
          });
          // 不含税金额合计;

          let newarr4 = [];

          newarr4 = newssarr.filter(item => {
            if (item.no_amount_tax) {
              return item;
            }
          });
          newarr4 = newarr4.map(item => {
            return item.no_amount_tax;
          });

          this.setState({
            Inputmoney2: eval(newarr4.join('+'))
              ? toFixed(eval(newarr4.join('+')), 2)
              : null,
          });
          this.setState({
            dataSource: [...newarr],
          });
        }
        if (this.state.msgdata == '1') {
          notification.open({
            message: JSON.parse(res.dataList[0].value).msg,
          });
          this.setState({
            msgdata: '0',
          });
        }
      });
  },
  handleOk() {
    this.setState({ dstatus: '3' });
    console.log(this.state.detdate);
    const cDataid = [...this.state.currentSelectDataid];
    const newdate = this.state.allData;
    newdate.rk_id = [this.state.detdate, ...cDataid];
    console.log(newdate);

    this.asyncSetFieldProps(newdate);

    this.setState({
      isModalVisible: false,
    });
    this.setState({ selectedRowKeys: [] });
  },
  handleCancel() {
    this.setState({ isModalVisible: false });
    this.setState({ selectedRowKeys: [] });
  },

  fieldDidUpdate() {
    if (!this.props.runtimeProps.viewMode) {
      console.log('发起页：fieldDidUpdate');
      let editData = {
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
      const { form } = this.props;
      form.setFieldValue('TestPur', editData);
      form.setExtendFieldValue('TestPur', {
        data: editData,
      });
    }
  },
  fieldRender() {
    const { form } = this.props;
    const field = form.getFieldInstance('TestPur');
    const label = form.getFieldProp('TestPur', 'label');
    const placeholder = form.getFieldProp('TestPur', 'placeholder');
    const required = form.getFieldProp('TestPur', 'required');
    const { dataSource, selectedRowKeys } = this.state;
    const deColumns = [
      {
        title: '物资名称',
        dataIndex: 'name',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.name}>
            <span>{record.name}</span>
          </Tooltip>
        ),
      },
      {
        title: '单位',
        dataIndex: 'unit',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.unit}>
            <span>{record.unit}</span>
          </Tooltip>
        ),
      },
      {
        title: '规格型号',
        dataIndex: 'size',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.size}>
            <span>{record.size}</span>
          </Tooltip>
        ),
      },
      {
        title: '数量',
        dataIndex: 'det_quantity',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.det_quantity}>
            <span>{record.det_quantity}</span>
          </Tooltip>
        ),
      },
      {
        title: '不含税单价(元)',
        dataIndex: 'no_unit_price',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.no_unit_price}>
            <span>{record.no_unit_price}</span>
          </Tooltip>
        ),
      },
      {
        title: '含税单价(元)',
        dataIndex: 'unit_price',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.unit_price}>
            <span>{record.unit_price}</span>
          </Tooltip>
        ),
      },
      {
        title: '税率(%)',
        dataIndex: 'tax_rate',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.tax_rate}>
            <span>{record.tax_rate}</span>
          </Tooltip>
        ),
      },

      {
        title: '税额(元)',
        dataIndex: 'tax_amount',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.tax_amount}>
            <span>{record.tax_amount}</span>
          </Tooltip>
        ),
      },
      {
        title: '不含税金额(元)',
        dataIndex: 'no_amount_tax',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.no_amount_tax}>
            <span>{record.no_amount_tax}</span>
          </Tooltip>
        ),
      },
      {
        title: '含税金额(元)',
        dataIndex: 'amount_tax',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.amount_tax}>
            <span>{record.amount_tax}</span>
          </Tooltip>
        ),
      },
    ];
    const etColumns = [
      {
        title: '物资名称',
        dataIndex: 'name',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.name}>
            <span>{record.name}</span>
          </Tooltip>
        ),
      },
      {
        title: '单位',
        dataIndex: 'unit',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.unit}>
            <span>{record.unit}</span>
          </Tooltip>
        ),
      },
      {
        title: '规格型号',
        dataIndex: 'size',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.size}>
            <span>{record.size}</span>
          </Tooltip>
        ),
      },
      {
        title: '数量',
        dataIndex: 'det_quantity',
        editable: true,
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.det_quantity}>
            <span>{record.det_quantity}</span>
          </Tooltip>
        ),
      },
      {
        title: '不含税单价(元)',
        dataIndex: 'no_unit_price',
        editable: true,
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.no_unit_price}>
            <span>{record.no_unit_price}</span>
          </Tooltip>
        ),
      },
      {
        // title: '含税单价(元)',
        title: (
          <div>
            含税单价(元)
            <Tooltip
              placement="top"
              title={
                <div>
                  <span>含税单价=不含税单价*（1+税率）</span>
                </div>
              }
            >
              　<QuestionCircleOutlined />　
              {/* <a-icon type="info-circle" /> */}
            </Tooltip>
          </div>
        ),
        dataIndex: 'unit_price',
        editable: true,
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.unit_price}>
            <span>{record.unit_price}</span>
          </Tooltip>
        ),
      },
      {
        title: '税率(%)',
        dataIndex: 'tax_rate',
        editable: true,
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.tax_rate}>
            <span>{record.tax_rate}</span>
          </Tooltip>
        ),
      },

      {
        title: '税额(元)',
        dataIndex: 'tax_amount',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.tax_amount}>
            <span>{record.tax_amount}</span>
          </Tooltip>
        ),
      },
      {
        title: '不含税金额(元)',
        dataIndex: 'no_amount_tax',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.no_amount_tax}>
            <span>{record.no_amount_tax}</span>
          </Tooltip>
        ),
      },
      {
        title: '含税金额(元)',
        dataIndex: 'amount_tax',
        render: (_: any, record: any) => (
          <Tooltip placement="topLeft" title={record.amount_tax}>
            <span>{record.amount_tax}</span>
          </Tooltip>
        ),
      },

      {
        title: '操作',
        dataIndex: 'operation',

        render: (_: any, record: any) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="确定删除?"
              onConfirm={() => this.methods().handleDelete(record)}
            >
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ];
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = etColumns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.methods().handleSave,
          handleChange: this.methods().handleChange,
        }),
      };
    });

    const onSelect = (keys: React.Key[], info: any) => {
      console.log('Trigger Select', keys, info);
      const treedata = {
        type: keys[0],
        number: '10',
        page: '1',
        rk_id: ['-1'],
      };
      this.setState({
        allData: treedata,
      });
      this.asyncSetFieldProps(treedata);
    };

    const onExpand = () => {
      console.log('Trigger Expand');
    };
    const Tabschange = (key: string) => {
      console.log(key);

      let newpage = {
        rk_id: [key],
        number: '10',
        page: 1,
        name: '',
      };
      this.setState({
        defaultActiveKey: key,
        allData: newpage,
        detdate: key + '1',
      });
      this.asyncSetFieldProps(newpage);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        // console.log(
        //   `selectedRowKeys: ${selectedRowKeys}`,
        //   'selectedRows: ',
        //   selectedRows,
        // );
        let dtar = '';
        let newData = [...selectedRows];
        let newDataid = [];
        if (newData.length > 0) {
          newData = newData.map(item => {
            return Object.assign(item, {
              num: 1,
            });
          });
          newDataid = newData.map(item => {
            return item.id;
          });
        }
        console.log('======' + JSON.stringify(newDataid));
        if (this.state.detdate === 'a1') {
          dtar = '采购申请-' + newData[0].name;
        } else if (this.state.detdate === 'b1') {
          dtar = '材料总计划-' + newData[0].name;
        }

        this.setState({
          currentSelectData: newData,
          currentSelectDataid: newDataid,
          detailname: dtar,
        });
        this.setState({ selectedRowKeys });
      },
    };
    let Options = this.state.newOptine.map((station: any) => (
      <Option key={station.key} value={station.title}>
        {station.title}
      </Option>
    ));
    const onFinish = (values: any) => {
      this.setState({
        msgdata: '1',
      });
      console.log('Success:', values);
      //   const [form] = Form.useForm();
      const newdate = this.state.allData;
      newdate.wz_add = values;
      this.asyncSetFieldProps(newdate);
      this.setState({
        visibleModal: false,
      });

      //   form.resetFields();
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const onChangetree = (value: any) => {
      console.log(value);
      this.setState({ value });
    };
    //详情
    if (this.props.runtimeProps.viewMode) {
      const value = field.getValue();
      const {
        detailname = '',
        nomoney = '',
        hanmoney = '',
        detailedData = [],
      } = value;
      return (
        <div className="field-wrapper">
          <div className="label">{label}</div>
          <div>{detailname}</div>

          <div className="label">{label}</div>

          {/* <div>
            {detailedData.map(item => {
              return <div>{item.toString()}</div>;
            })}
          </div> */}
          <div>
            <Table
              scroll={{ x: '1500px' }}
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={value instanceof Array ? value : detailedData}
              columns={deColumns}
              pagination={false}
            />
          </div>
          <div className="label">不含税金额合计(元)</div>
          <div>{nomoney}</div>
          <div className="label">含税金额合计(元)</div>
          <div>{hanmoney}</div>
        </div>
      );
    }
    return (
      <div className="TestPurField_class">
        {' '}
        <div className="pc-custom-field-wrap">
          <div>
            <div className="label">
              {required ? (
                <span style={{ color: '#ea6d5c' }}>*</span>
              ) : (
                <span style={{ color: '#fff' }}>*</span>
              )}
              {label}
            </div>
            <Input
              onClick={this.methods().newhandleAdd}
              readOnly
              value={this.state.detailname}
              placeholder="请选择"
            />
          </div>
          {/* <div className="label">{label}</div> */}
          {/* {field.getProp('viewMode') ? (
          field.getValue()
            ) :
                (
          <Input
            id="ptID"
            placeholder={placeholder}
            onFocus={this.methods().handleChange}
            value={this.state.leaveLongVal}
          />
        )} */}
          {/* {field?.props?.viewMode ? (
          field.getValue()
        ) : (
          <Input placeholder={placeholder} onChange={this.methods().handleChange} />
        )} */}
          <div style={{ marginTop: '10px' }}>
            <Table
              scroll={{ x: '1500px' }}
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns as ColumnTypes}
              pagination={false}
            />
            <Button
              onClick={this.methods().handleAdd}
              type="primary"
              style={{ marginBottom: 16, marginTop: 16 }}
            >
              添加明细
            </Button>
            <div className="label" style={{ marginTop: '10px' }}>
              不含税金额合计(元)
            </div>
            <div>
              <Input
                readOnly
                value={this.state.Inputmoney2}
                placeholder="自动计算"
              />
            </div>
            <div className="label" style={{ marginTop: '10px' }}>
              含税金额合计(元)
            </div>
            <div>
              <Input
                readOnly
                value={this.state.Inputmoney1}
                placeholder="自动计算"
              />
            </div>
          </div>

          <Modal
            title="关联"
            width={1000}
            visible={this.state.isModalVisible}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                返回
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={this.state.loading}
                onClick={this.handleOk}
              >
                确定
              </Button>,
            ]}
            onCancel={this.handleCancel}
          >
            <Tabs
              className="Tabs_class"
              defaultActiveKey="a"
              centered
              onChange={Tabschange}
            >
              <TabPane tab="采购申请" key="a">
                <Search
                  placeholder="请输入"
                  allowClear
                  enterButton="搜索"
                  size="large"
                  onSearch={this.methods().onSearch}
                />
                <Table
                  scroll={{ x: '1500px' }}
                  rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                  }}
                  rowKey={record => record.id}
                  columns={purchaseColumns}
                  dataSource={this.state.listData}
                  loading={this.state.loading}
                  pagination={false}
                ></Table>
                <Pagination
                  defaultCurrent={1}
                  total={this.state.total2}
                  hideOnSinglePage={true}
                  className="pagination"
                  onChange={this.methods().onChangepage}
                />
              </TabPane>
              <TabPane tab="材料总计划" key="b">
                <Search
                  placeholder="请输入"
                  allowClear
                  enterButton="搜索"
                  size="large"
                  onSearch={this.methods().onSearch}
                />
                <Table
                  scroll={{ x: '1500px' }}
                  rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                  }}
                  rowKey={record => record.id}
                  columns={projectColumns}
                  dataSource={this.state.listData}
                  loading={this.state.loading}
                  pagination={false}
                ></Table>
                <Pagination
                  defaultCurrent={1}
                  total={this.state.total2}
                  hideOnSinglePage={true}
                  className="pagination"
                  onChange={this.methods().onChangePage}
                />
              </TabPane>
            </Tabs>
          </Modal>
          {/* 树形 */}

          <Modal
            title="选择物资"
            width={1000}
            visible={this.state.isModalVisibletree}
            footer={[
              <Button key="back" onClick={this.methods().handleCancelTree}>
                返回
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={this.state.loading}
                onClick={this.methods().handleOktree}
              >
                确定
              </Button>,
            ]}
            onCancel={this.methods().handleCancelTree}
          >
            <Layout>
              <Sider className="newside_new">
                <Tree
                  defaultExpandedKeys={['0']}
                  blockNode
                  onSelect={onSelect}
                  onExpand={onExpand}
                  treeData={this.state.treeData}
                />
              </Sider>
              <Content>
                <div className="header_tab_class">
                  <Search
                    placeholder="请输入"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    onSearch={this.methods().onSearch}
                  />
                  <Button
                    onClick={this.methods().newAdd}
                    size="large"
                    type="primary"
                  >
                    新增
                  </Button>
                </div>
                <Table
                  scroll={{ x: '1500px' }}
                  rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                  rowKey={record => record.id}
                  columns={purchaseItemColumns}
                  dataSource={this.state.treelistData}
                  loading={this.state.loading}
                  pagination={false}
                ></Table>
                <Pagination
                  defaultCurrent={1}
                  total={this.state.total3}
                  hideOnSinglePage={true}
                  className="pagination"
                  onChange={this.methods().onChangePageTree}
                />
              </Content>
            </Layout>
          </Modal>
          {/* 新增个 */}
          <Modal
            className="newModal_class"
            onCancel={this.methods().handleNewCancel}
            visible={this.state.visibleModal}
            width={1000}
            title="新增"
          >
            <Form
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="物品名称"
                name="name"
                rules={[{ required: true, message: '请填写单位名称' }]}
              >
                <Input placeholder="请填写单位名称" />
              </Form.Item>
              <Form.Item
                label="单位"
                name="unit"
                rules={[{ required: true, message: '请填写单位名称' }]}
              >
                <Input placeholder="请填写单位名称" />
              </Form.Item>
              <Form.Item
                label="规格型号"
                name="size"
                rules={[{ required: true, message: '请填写单位名称' }]}
              >
                <Input placeholder="请填写单位名称" />
              </Form.Item>
              <Form.Item
                label="物品类型"
                name="type"
                rules={[{ required: true, message: '请填写单位名称' }]}
              >
                <TreeSelect
                  style={{ width: '100%' }}
                  value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={this.state.treeData}
                  placeholder="请选择"
                  treeDefaultExpandAll
                  onChange={onChangetree}
                />
              </Form.Item>

              <Form.Item className="newForm">
                <Button type="primary" htmlType="submit">
                  确认
                </Button>
                <Button type="primary" onClick={this.methods().handleNewCancel}>
                  取消
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    );
  },
};

export default FormField;
