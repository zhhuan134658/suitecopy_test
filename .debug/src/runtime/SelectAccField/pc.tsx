// 选择项目
// import React from 'react';
// import { Input } from 'antd';
// import { IFormField } from '../../types';

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
//     form.setFieldValue('SelectAcc', e.target.value);
//   },

//   fieldRender() {
//     const { form } = this.props;
//     const field = form.getFieldInstance('SelectAcc');
//     const label = form.getFieldProp('SelectAcc', 'label');
//     const placeholder = form.getFieldProp('SelectAcc', 'placeholders');

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
import { Pagination } from 'antd';
import { Tree } from 'antd';
const { DirectoryTree } = Tree;
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  Table,
  Tooltip,
  notification,
  Modal,
  Input,
  InputNumber,
  Button,
  Popconfirm,
  Form,
} from 'antd';
const { Search } = Input;
import { IFormField } from '../../types';
const { Column } = Table;
import { FormInstance } from 'antd/lib/form';

import './pc.less';
const mycolumns = [
  {
    title: '账户名称',
    dataIndex: 'accountname',
    render: (_, record: any) => (
      <Tooltip placement="topLeft" title={record.accountname}>
        <span>{record.accountname}</span>
      </Tooltip>
    ),
  },
  {
    title: '账号',
    dataIndex: 'accountnumber',
    render: (_, record: any) => (
      <Tooltip placement="topLeft" title={record.accountnumber}>
        <span>{record.accountnumber}</span>
      </Tooltip>
    ),
  },
  {
    title: '开户行',
    dataIndex: 'bankofdeposit',
    render: (_, record: any) => (
      <Tooltip placement="topLeft" title={record.bankofdeposit}>
        <span>{record.bankofdeposit}</span>
      </Tooltip>
    ),
  },
];
interface ISwapFormField extends IFormField {
  //   handleChange: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  //   handleTableChange: () => void;
}
const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  id: number;
  key: string;
  name: string;
  size: string;
  type: string;
  num1: number;
  num2: number;
  num3: number;
}

interface EditableRowProps {
  index: number;
}

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

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
  handleChange: (record: Item) => void;
}

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
  // const inputRef = useRef(null);
  const inputRef = useRef<Input>(null);
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
      //   toggleEdit();   //onchange事件 输入一次失去焦点
      handleSave({ ...record, ...values });
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
          min={1}
          placeholder="请输入"
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
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

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  id: any;
  num2: any;
  num1: any;
  key: React.Key;
  name: string;
  size: string;
  type: string;
}

interface EditableTableState {
  dataSource: DataType[];
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

/**
 * 自定义控件运行态 PC 视图
 */
const FormField: ISwapFormField = {
  getInitialState() {
    const { form } = this.props;

    return {
      Inputvalue: form.getFieldInstance('SelectAcc').getValue() || '',
      //   Inputvalue: '123',

      current_page: '', //当前页
      total2: '',
      allData: { type: '0', number: '10', page: '1', name: '' },
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
  fieldDidMount() {
    // const newdate = this.state.allData;
    // this.asyncSetFieldProps(newdate);
  },
  onSearch(value) {
    console.log(value);
    const newvalue = this.state.allData;
    newvalue.accountname = value;
    newvalue.type = 0;
    newvalue.page = 1;
    this.setState({
      allData: newvalue,
    });
    this.asyncSetFieldProps(newvalue);
  },
  onChangepage(page) {
    const newpage = this.state.allData;
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
  handleChange(row: DataType) {
    // const inputRef = useRef<Input>(null);
    // const { form } = this.props;
    // form.setFieldValue('SelectAcc', e.target.value);
    // document.getElementsByClassName('ptID').blur();
    // inputRef.current!.focus();
    this.setState({ currentEditId: row.key });
    // this.setState({ isModalVisible: true });
  },

  handleCancel() {
    this.setState({ isModalVisible: false });
    this.setState({ selectedRowKeys: [] });
  },
  handleDelete(row) {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.id !== row.id),
    });
  },

  handleAdd() {
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
    // const { form } = this.props;
    // const Pro_name = form.getFieldValue('Autotoupro');
    // const Pro_name2 = form.getFieldValue('Autopro');
    // const Pro_name3 = form.getFieldValue('Selectbaopro');
    // if (!Pro_name && !Pro_name2 && !Pro_name3) {
    //   return notification.open({
    //     message: '请先选择项目',
    //   });
    // }
    const newdate = this.state.allData;

    this.asyncSetFieldProps(newdate);
    this.setState({
      isModalVisible: true,
    });
  },

  handleSave(row: DataType) {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    console.log(newData);
    console.log(index);
    console.log(item);

    if (row.num2) {
      newData[index].num3 = row.num1 * row.num2;
    }

    this.setState({ dataSource: newData });
  },
  asyncSetFieldProps(vlauedata) {
    const { form, spi } = this.props;
    const Pro_name = form.getFieldValue('Autopro');
    vlauedata.project_name = Pro_name;
    const SelectAccField = form.getFieldInstance('SelectAcc');

    // const leaveReasonField = form.getFieldInstance('leaveReason');
    const key = SelectAccField.getProp('id');
    // const value = SelectAccField.getValue();
    const value = '1';

    // const extendValue = SelectAccField.getExtendValue();
    const bizAsyncData = [
      {
        key,
        bizAlias: 'SelectAcc',
        extendValue: vlauedata,
        value,
      },
    ];

    // 入参和返回参考套件数据刷新集成接口文档

    spi
      .refreshData({
        modifiedBizAlias: ['SelectAcc'], // spi接口要改动的是leaveReason的属性值
        bizAsyncData,
      })
      .then(res => {
        // this.state.listData = find(
        //   res.dataList,
        //   item => item.bizAlias === 'SelectAcc',
        // );

        // this.state.listData = res.dataList[0].value;

        // this.setState({
        //   listData: res.dataList[0].value,
        // });
        let newarr;
        //   表格数据
        try {
          newarr = JSON.parse(res.dataList[0].value).data;
        } catch (e) {}
        this.setState({
          listData: [...newarr],
          current_page: JSON.parse(res.dataList[0].value).page,
          total2: JSON.parse(res.dataList[0].value).count,
        });

        // console.log(JSON.parse(newarr));
        // console.log(this.state.listData);
      });
  },
  rowClick(this, record, rowkey) {
    const { form } = this.props;
    console.log(record);
    form.setFieldValue('Inputvalue', record.accountname);
    form.setExtendFieldValue('Inputvalue', record.accountname);
    form.setFieldValue('Inputvalue1', record.accountnumber);
    form.setFieldValue('Inputvalue2', record.bankofdeposit);
    form.setExtendFieldValue('Inputvalue1', record.accountnumber);
    form.setExtendFieldValue('Inputvalue2', record.bankofdeposit);
    this.setState(
      {
        Inputvalue: record.accountname,
        isModalVisible: false,
      },
      () => {
        form.setFieldValue('SelectAcc', record.accountname);
        form.setExtendFieldValue('SelectAcc', {
          data: record.accountname,
        });
        console.log('sssss', form);
      },
    );

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
  handleOk() {
    const newData = [...this.state.dataSource];
    const cData = [...this.state.currentSelectData];
    let lData = [];
    if (cData.length > 0) {
      cData.forEach(element => {
        newData.push(element);
      });
    }
    lData = this.unique(newData);
    console.log('pp+' + JSON.stringify(lData));
    this.setState({ dataSource: lData });
    this.setState({ isModalVisible: false });
    this.setState({ selectedRowKeys: [] });
  },
  dupRemoval(arr) {
    //arr是传入的数组
    var nn = [...arr];
    let obj = {};
    let peon = nn.reduce((cur, next) => {
      //根据 属性scac + 属性disPlayName 判断去重
      obj[next.name + next.unit + next.size]
        ? ''
        : (obj[next.name + next.unit + next.size] = true && cur.push(next));
      return cur;
    }, []); //设置cur默认类型为数组，并且初始值为空的数组
    console.log(peon);
    return peon;
  },
  unique(arr) {
    const res = new Map();
    return arr.filter(arr => !res.has(arr.id) && res.set(arr.id, 1));
  },
  fieldRender() {
    const { form, runtimeProps } = this.props;
    const { viewMode } = runtimeProps;
    const field = form.getFieldInstance('SelectAcc');
    const label = form.getFieldProp('SelectAcc', 'label');
    const required = form.getFieldProp('SelectAcc', 'required');
    const placeholder = form.getFieldProp('SelectAcc', 'placeholder');
    const { dataSource, selectedRowKeys } = this.state;

    const etColumns = [
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
        render: (_, record: any) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              cancelText="取消"
              okText="确定"
              title="确定删除?"
              onConfirm={() => this.handleDelete(record)}
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
          handleSave: this.handleSave,
          handleChange: this.handleChange,
        }),
      };
    });

    const onSelect = (keys: React.Key[], info: any) => {
      console.log('Trigger Select', keys, info);
      const treedata = { type: keys[0], number: '10', page: '1' };
      this.setState({
        allData: treedata,
      });
      this.asyncSetFieldProps(treedata);
    };

    const onExpand = () => {
      console.log('Trigger Expand');
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(
        //   `selectedRowKeys: ${selectedRowKeys}`,
        //   'selectedRows: ',
        //   selectedRows,
        // );
        let newData = [...selectedRows];
        if (newData.length > 0) {
          newData = newData.map(item => {
            return Object.assign(item, {
              num: 1,
            });
          });
        }
        console.log('======' + JSON.stringify(newData));
        this.setState({ currentSelectData: newData });
        this.setState({ selectedRowKeys });
      },
    };

    // 详情页
    if (viewMode) {
      const value = field.getValue();
      const { data = '' } = value;
      return (
        <div className="field-wrapper">
          <div className="label">{label}</div>
          {/* {data} */}
          <div style={{ marginTop: '10px' }}> {value}</div>
        </div>
      );
    }

    return (
      <div className="SelectAccField_class">
        {' '}
        <div className="pc-custom-field-wrap">
          <div className="label">
            {required ? (
              <span style={{ color: '#ea6d5c' }}>*</span>
            ) : (
              <span style={{ color: '#fff' }}>*</span>
            )}{' '}
            {label}
          </div>
          {/* {field.getProp('viewMode') ? (
          field.getValue()
            ) :
                (
          <Input
            id="ptID"
            placeholder={placeholder}
            onFocus={this.handleChange}
            value={this.state.leaveLongVal}
          />
        )} */}
          <div>
            <Input
              readOnly
              value={this.state.Inputvalue}
              onClick={this.handleAdd}
              placeholder="请选择账户"
            />
          </div>

          <Modal
            title="选择账户"
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
            <Search
              placeholder="请输入"
              allowClear
              enterButton="搜索"
              size="large"
              onSearch={this.onSearch}
            />
            <Table
              scroll={{ x: '1500px' }}
              onRow={record => {
                return {
                  onClick: this.rowClick.bind(this, record),
                };
              }}
              rowKey={record => record.id}
              columns={mycolumns}
              dataSource={this.state.listData}
              loading={this.state.loading}
              pagination={false}
            ></Table>
            <Pagination
              defaultCurrent={1}
              total={this.state.total2}
              hideOnSinglePage={true}
              className="pagination"
              onChange={this.onChangepage}
            />
          </Modal>
        </div>
      </div>
    );
  },
};

export default FormField;