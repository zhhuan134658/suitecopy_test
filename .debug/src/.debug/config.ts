export default {
  "isUnique": true,
  "isSuite": true,
  "componentName": "DDBizSuite",
  "category": "suite_test",
  "name": "材料入库",
  "description": "筑快科技材料入库套件开发",
  "icon": "",
  "props": {
    "bizType": "isv.zhukuai.warehousing",
    "bizAlias": "isv.zhukuai.warehousing",
    "extract": true,
    "isThirdSuite": true,
    "hiddenReason": false
  },
  "children": [
    {
      "componentName": "FormRelateField",
      "props": {
        "bizAlias": "relation",
        "id": "test",
        "placeholder": "请填写方式",
        "label": "表单关联",
        "required": false,
        "fields": [
          {
            "componentName": "TextField",
            "props": {
              "id": "请假事由",
              "label": "请假事由",
              "placeholder": "请输入请假事由",
              "required": false
            }
          }
        ],
        "dataSource": {
          "params": {
            "filter": ""
          },
          "target": {
            "appType": 0,
            "appUuid": "",
            "bizType": "",
            "formCode": "PROC-0932431C-DFA8-4EDF-90C9-6857771B8A5C"
          },
          "type": "form"
        }
      }
    },
    {
      "componentName": "MoneyField",
      "props": {
        "bizAlias": "Moneytest",
        "placeholder": "请输入",
        "label": "金额（元）大写",
        "notUpper": "0"
      }
    },
    {
      "componentName": "InnerContactField",
      "props": {
        "bizAlias": "InnerContactmony",
        "placeholder": "请选择",
        "label": "联系人多选",
        "choice": "1"
      }
    },
    {
      "componentName": "InnerContactField",
      "props": {
        "bizAlias": "InnerContactone",
        "placeholder": "请选择",
        "label": "联系人单选",
        "choice": "0"
      }
    },
    {
      "componentName": "DDDateField",
      "props": {
        "bizAlias": "DateFielddate",
        "placeholder": "请选择",
        "format": "yyyy-MM-dd",
        "label": "日期"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "incomeTitle",
        "placeholder": "请输入",
        "required": false,
        "label": "入库主题"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectPro",
        "commonBizType": "SelectPro",
        "required": false,
        "placeholder": "请输入",
        "label": "项目名称"
      }
    },
    {
      "componentName": "DDSelectField",
      "props": {
        "bizAlias": "RadioField",
        "required": false,
        "spread": false,
        "placeholder": "请选择",
        "options": [
          {
            "key": "option_1",
            "value": "投标保证金支出"
          },
          {
            "key": "option_2",
            "value": "履约保证金支出"
          },
          {
            "key": "option_3",
            "value": "劳务分包保证金退回"
          },
          {
            "key": "option_4",
            "value": "专业分包保证金退回"
          },
          {
            "key": "option_5",
            "value": "投标保证金退回"
          },
          {
            "key": "option_6",
            "value": "履约保证金退回"
          },
          {
            "key": "option_7",
            "value": "劳务分包保证金收入"
          },
          {
            "key": "option_8",
            "value": "专业分包保证金收入"
          }
        ],
        "label": "单选框"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectDeposit",
        "commonBizType": "SelectDeposit",
        "required": false,
        "placeholder": "请输入",
        "label": "保证金付款登记-项目"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectHe",
        "commonBizType": "SelectHe",
        "required": false,
        "placeholder": "请输入",
        "label": "合同收款登记"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectRelated",
        "commonBizType": "SelectRelated",
        "required": false,
        "placeholder": "请输入",
        "label": "关联保证金申请"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectHeshou",
        "commonBizType": "SelectHeshou",
        "required": false,
        "placeholder": "请输入",
        "label": "合同收款登记"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectLease",
        "commonBizType": "SelectLease",
        "required": false,
        "placeholder": "请输入",
        "label": "关联租赁计划"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectZu",
        "commonBizType": "SelectZu",
        "required": false,
        "placeholder": "请输入",
        "label": "租赁合同名称"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Zumoney",
        "disabled": true,
        "placeholder": "请输入",
        "label": "租赁合同金额",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectFen",
        "commonBizType": "SelectFen",
        "required": false,
        "placeholder": "请输入",
        "label": "分包合同名称"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Fenmoney",
        "disabled": true,
        "placeholder": "请输入",
        "label": "分包合同金额",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectCon",
        "commonBizType": "SelectCon",
        "required": false,
        "placeholder": "请输入",
        "label": "收入合同名称"
      }
    },
    {
      "componentName": "SelectjiaField",
      "props": {
        "bizAlias": "Selectjia",
        "placeholder": "请输入",
        "label": "甲方"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Conmoney",
        "disabled": true,
        "placeholder": "请输入",
        "label": "收入合同金额",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectLao",
        "commonBizType": "SelectLao",
        "required": false,
        "placeholder": "请输入",
        "label": "劳务合同名称"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "ConLaomoney'",
        "disabled": true,
        "placeholder": "请输入",
        "label": "劳务合同金额",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectSpo",
        "commonBizType": "SelectSpo",
        "required": false,
        "placeholder": "请输入",
        "label": "关联零星劳务结算"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Jiesmoney'",
        "disabled": true,
        "placeholder": "请输入",
        "label": "结算金额",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelecTicke",
        "commonBizType": "SelecTicke",
        "required": false,
        "placeholder": "请输入",
        "label": "收票登记"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestMater",
        "commonBizType": "TestMater",
        "required": false,
        "placeholder": "请输入",
        "label": "材料付款"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Conname'",
        "disabled": true,
        "placeholder": "请输入",
        "label": "合同名称",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestCollection",
        "commonBizType": "TestCollection",
        "required": false,
        "placeholder": "请输入",
        "label": "合同收款登记"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestLabour",
        "commonBizType": "TestLabour",
        "required": false,
        "placeholder": "请输入",
        "label": "关联劳务结算"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestSubcon",
        "commonBizType": "TestSubcon",
        "required": false,
        "placeholder": "请输入",
        "label": "分包付款登记"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestRegist",
        "commonBizType": "TestRegist",
        "required": false,
        "placeholder": "请输入",
        "label": "租赁付款登记"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "SelectAcc",
        "commonBizType": "SelectAcc",
        "required": false,
        "placeholder": "请输入",
        "label": "账户名称"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Inputvalue1",
        "disabled": true,
        "placeholder": "请输入",
        "label": "账号",
        "maxLength": "100"
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Inputvalue2",
        "disabled": true,
        "placeholder": "请输入",
        "label": "开户行",
        "maxLength": "100"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "CorpSupplier",
        "commonBizType": "CorpSupplier",
        "required": false,
        "placeholder": "请输入",
        "label": "供应商"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "CorpSupplieryi",
        "commonBizType": "CorpSupplieryi",
        "required": false,
        "placeholder": "请输入",
        "label": "供应商"
      }
    },
    {
      "componentName": "DDSelectField",
      "props": {
        "bizAlias": "IsAutoOut",
        "required": false,
        "placeholder": "请输入",
        "label": "是否自动出库",
        "options": [
          {
            "key": "1",
            "value": "是"
          },
          {
            "key": "2",
            "value": "否"
          }
        ]
      }
    },
    {
      "componentName": "InnerContactField",
      "props": {
        "bizAlias": "outPeople",
        "placeholder": "请输入",
        "label": "出库人",
        "choice": "0"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "CorpHouse",
        "commonBizType": "CorpHouse",
        "required": false,
        "placeholder": "请输入",
        "label": "库房"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestDestination",
        "commonBizType": "TestDestination",
        "placeholder": "请输入",
        "label": "添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "PositionDes",
        "commonBizType": "PositionDes",
        "placeholder": "请选择",
        "label": "位置"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestBidding",
        "commonBizType": "TestBidding",
        "placeholder": "请输入",
        "label": "物资招标添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestPlan",
        "commonBizType": "TestPlan",
        "placeholder": "请输入",
        "label": "材料总计划添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestOrder",
        "commonBizType": "TestOrder",
        "placeholder": "请输入",
        "label": "采购订单添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestShe",
        "commonBizType": "TestShe",
        "placeholder": "请输入",
        "label": "设备名称"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestMaterial",
        "commonBizType": "TestMaterial",
        "placeholder": "请输入",
        "label": "材料盘点添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestApplication",
        "commonBizType": "TestApplication",
        "placeholder": "请输入",
        "label": "采购申请"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestSet",
        "commonBizType": "TestSet",
        "placeholder": "请输入",
        "label": "材料结算"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestPur",
        "commonBizType": "TestPur",
        "placeholder": "请输入",
        "label": "采购合同"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestCin",
        "commonBizType": "TestCin",
        "placeholder": "请输入",
        "label": "材料入库-明细"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestOut",
        "commonBizType": "TestOut",
        "placeholder": "请输入",
        "label": "材料出库-明细"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestCun",
        "commonBizType": "TestCun",
        "placeholder": "请输入",
        "label": "材料调拨"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestLease",
        "commonBizType": "TestLease",
        "placeholder": "请输入",
        "label": "租赁计划添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestLecon",
        "commonBizType": "TestLecon",
        "placeholder": "请输入",
        "label": "租赁合同添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestMachinery",
        "commonBizType": "TestMachinery",
        "placeholder": "请输入",
        "label": "机械费登记添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestDemand",
        "commonBizType": "TestDemand",
        "placeholder": "请输入",
        "label": "设备需用计划添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestInspec",
        "commonBizType": "TestInspec",
        "placeholder": "请输入",
        "label": "设备检查添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestMain",
        "commonBizType": "TestMain",
        "placeholder": "请输入",
        "label": "设备维保添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestOli",
        "commonBizType": "TestOli",
        "placeholder": "请输入",
        "label": "设备油耗添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestScience",
        "commonBizType": "TestScience",
        "placeholder": "请输入",
        "label": "退库添加物资材料"
      }
    },
    {
      "componentName": "CommonField",
      "props": {
        "bizAlias": "TestOpening",
        "commonBizType": "TestOpening",
        "placeholder": "请输入",
        "label": "库存期初添加物资材料"
      }
    },
    {
      "componentName": "TableField",
      "props": {
        "bizAlias": "SimpleDetails",
        "actionName": "增加明细",
        "statField": [
          {
            "label": "数字输入框",
            "upper": false
          }
        ],
        "label": "明细"
      },
      "children": [
        {
          "componentName": "DDSelectField",
          "props": {
            "bizAlias": "SimpleRa",
            "placeholder": "请选择",
            "options": [
              {
                "key": "option_1",
                "value": "选项1"
              },
              {
                "key": "option_2",
                "value": "选项2"
              }
            ],
            "label": "单选框"
          }
        },
        {
          "componentName": "MoneyField",
          "props": {
            "bizAlias": "SimpleMo",
            "id": "CalculateField_JINE",
            "placeholder": "请输入",
            "label": "金额（元）大写",
            "notUpper": "0"
          }
        },
        {
          "componentName": "TextareaField",
          "props": {
            "bizAlias": "SimpleText",
            "placeholder": "请输入",
            "label": "多行输入框",
            "maxLength": "8000"
          }
        }
      ]
    },
    {
      "componentName": "CalculateField",
      "props": {
        "bizAlias": "TaxMoneyALL",
        "notUpper": "0",
        "placeholder": "自动计算",
        "label": "金额合计",
        "id": "CalculateField_CHENGBEN",
        "formula": [
          {
            "id": "CalculateField_JINE"
          }
        ]
      }
    },
    {
      "componentName": "TableField",
      "props": {
        "bizAlias": "SimpleSporadic",
        "actionName": "增加明细",
        "statField": [
          {
            "label": "数字输入框",
            "upper": false
          }
        ],
        "label": "零星劳务-明细"
      },
      "children": [
        {
          "componentName": "TextareaField",
          "props": {
            "bizAlias": "SporadicText",
            "placeholder": "请输入",
            "label": "施工内容",
            "maxLength": "8000"
          }
        },
        {
          "componentName": "MoneyField",
          "props": {
            "bizAlias": "SporadicMo",
            "placeholder": "请输入",
            "label": "单价",
            "notUpper": "0",
            "id": "MoneyField_MXRKHSD1"
          }
        },
        {
          "componentName": "MoneyField",
          "props": {
            "bizAlias": "SporadicGo",
            "placeholder": "请输入",
            "label": "工程量",
            "notUpper": "0",
            "id": "NumberField_MXRKNM1"
          }
        },
        {
          "componentName": "MoneyField",
          "props": {
            "bizAlias": "SporadicTo",
            "placeholder": "请输入",
            "label": "金额",
            "notUpper": "0",
            "id": "CalculateField_MXRKHSE1",
            "formula": [
              {
                "id": "MoneyField_MXRKHSD1"
              },
              "*",
              {
                "id": "NumberField_MXRKNM1"
              }
            ]
          }
        }
      ]
    },
    {
      "componentName": "CalculateField",
      "props": {
        "bizAlias": "TaxMoneyT",
        "notUpper": "0",
        "placeholder": "自动计算",
        "label": "金额合计",
        "id": "CalculateField_MXRKHSH1",
        "formula": [
          {
            "id": "CalculateField_MXRKHSE1"
          }
        ]
      }
    },
    {
      "componentName": "TableField",
      "props": {
        "bizAlias": "SimpleWage",
        "actionName": "增加明细",
        "statField": [
          {
            "label": "数字输入框",
            "upper": false
          }
        ],
        "label": "自有工人工资发放-明细"
      },
      "children": [
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Wagename",
            "placeholder": "请输入",
            "label": "姓名",
            "maxLength": "100",
            "id": "TextField-JTNAME"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Wagecard",
            "placeholder": "请输入",
            "label": "身份证",
            "maxLength": "100",
            "id": "TextField-JTVARD"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": " ",
            "placeholder": "请输入",
            "label": "应发工资",
            "maxLength": "100",
            "id": "TextField-JTYNAME"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Wagesmonty",
            "placeholder": "请输入",
            "label": "实发工资",
            "maxLength": "100",
            "id": "TextField-JTSNAME"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Wagephone",
            "placeholder": "请输入",
            "label": "联系方式",
            "maxLength": "100",
            "id": "TextField-JTPHONE"
          }
        }
      ]
    },
    {
      "componentName": "CalculateField",
      "props": {
        "bizAlias": "WageMoneyY",
        "notUpper": "0",
        "placeholder": "自动计算",
        "label": "应发工资合计",
        "id": "CalculateField_MXYWAGE",
        "formula": [
          {
            "id": "TextField-JTYNAME"
          }
        ]
      }
    },
    {
      "componentName": "CalculateField",
      "props": {
        "bizAlias": "WageMoneyS",
        "notUpper": "0",
        "placeholder": "自动计算",
        "label": "实发工资合计",
        "id": "CalculateField_MXSWAGE",
        "formula": [
          {
            "id": "TextField-JTSNAME"
          }
        ]
      }
    },
    {
      "componentName": "TableField",
      "props": {
        "bizAlias": "SimpleTeam",
        "actionName": "增加明细",
        "statField": [
          {
            "label": "数字输入框",
            "upper": false
          }
        ],
        "label": "代发班组工资-明细"
      },
      "children": [
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Teamname",
            "placeholder": "请输入",
            "label": "姓名",
            "maxLength": "100"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Teamcard",
            "placeholder": "请输入",
            "label": "身份证",
            "maxLength": "100"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Teammoney",
            "placeholder": "请输入",
            "label": "代发金额",
            "maxLength": "100",
            "id": "CalculateField_YINGFA"
          }
        },
        {
          "componentName": "TextField",
          "props": {
            "bizAlias": "Teamphone",
            "placeholder": "请输入",
            "label": "联系方式",
            "maxLength": "100"
          }
        }
      ]
    },
    {
      "componentName": "CalculateField",
      "props": {
        "bizAlias": "Teamtmoney",
        "notUpper": "0",
        "placeholder": "自动计算",
        "label": "金额合计",
        "id": "CalculateField_TAME",
        "formula": [
          {
            "id": "CalculateField_YINGFA"
          }
        ]
      }
    },
    {
      "componentName": "TextField",
      "props": {
        "bizAlias": "Textest",
        "required": true,
        "placeholder": "请输入",
        "label": "单行输入框"
      }
    }
  ]
};