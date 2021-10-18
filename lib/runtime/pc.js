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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var pc_1 = __importDefault(require("../src/runtime/pc"));
var create_react_class_1 = __importDefault(require("create-react-class"));
var pc_2 = __importDefault(require("./SelectProField/pc"));
var pc_3 = __importDefault(require("./SelectProtwoField/pc"));
var pc_4 = __importDefault(require("./SelectTbproField/pc"));
var pc_5 = __importDefault(require("./SelectDepositField/pc"));
var pc_6 = __importDefault(require("./SelectHeField/pc"));
var pc_7 = __importDefault(require("./SelectRelatedField/pc"));
var pc_8 = __importDefault(require("./SelectHeshouField/pc"));
var pc_9 = __importDefault(require("./SelectLeaseField/pc"));
var pc_10 = __importDefault(require("./SelectZuField/pc"));
var pc_11 = __importDefault(require("./SelectFenField/pc"));
var pc_12 = __importDefault(require("./SelectConField/pc"));
var pc_13 = __importDefault(require("./SelectjiaField/pc"));
var pc_14 = __importDefault(require("./SelectLaoField/pc"));
var pc_15 = __importDefault(require("./SelectSpoField/pc"));
var pc_16 = __importDefault(require("./SelecTickeField/pc"));
var pc_17 = __importDefault(require("./SelecTickefaField/pc"));
var pc_18 = __importDefault(require("./TestMaterField/pc"));
var pc_19 = __importDefault(require("./TestCollectionField/pc"));
var pc_20 = __importDefault(require("./TestLabourField/pc"));
var pc_21 = __importDefault(require("./TestSubconField/pc"));
var pc_22 = __importDefault(require("./TestRegistField/pc"));
var pc_23 = __importDefault(require("./SelectAccField/pc"));
var pc_24 = __importDefault(require("./CorpSupplierField/pc"));
var pc_25 = __importDefault(require("./CorpSupplieryiField/pc"));
var pc_26 = __importDefault(require("./CorpHouseField/pc"));
var pc_27 = __importDefault(require("./PositionDesField/pc"));
var pc_28 = __importDefault(require("./TestBiddingField/pc"));
var pc_29 = __importDefault(require("./TestPlanField/pc"));
var pc_30 = __importDefault(require("./TestOrderField/pc"));
var pc_31 = __importDefault(require("./TestOrdernewField/pc"));
var pc_32 = __importDefault(require("./TestSheField/pc"));
var pc_33 = __importDefault(require("./TestMaterialField/pc"));
var pc_34 = __importDefault(require("./TestApplicationField/pc"));
var pc_35 = __importDefault(require("./TestSetField/pc"));
var pc_36 = __importDefault(require("./TestPurField/pc"));
var pc_37 = __importDefault(require("./TestExpeField/pc"));
var pc_38 = __importDefault(require("./TestCinField/pc"));
var pc_39 = __importDefault(require("./TestOutField/pc"));
var pc_40 = __importDefault(require("./TestCunField/pc"));
var pc_41 = __importDefault(require("./TestLeaseField/pc"));
var pc_42 = __importDefault(require("./TestLeconField/pc"));
var pc_43 = __importDefault(require("./TestMachineryField/pc"));
var pc_44 = __importDefault(require("./TestDemandField/pc"));
var pc_45 = __importDefault(require("./TestInspecField/pc"));
var pc_46 = __importDefault(require("./TestMainField/pc"));
var pc_47 = __importDefault(require("./TestOliField/pc"));
var pc_48 = __importDefault(require("./TestScienceField/pc"));
var pc_49 = __importDefault(require("./TestOpeningField/pc"));
var pc_50 = __importDefault(require("./AntdUploadFiled/pc"));
if (!window.SuiteCommonField) {
    window.SuiteCommonField = {};
}
if (window.location.href.indexOf('/pc/') > -1) {
    window.SuiteCommonField['isv.zhukuai.warehousing'] = {
        SelectProField: pc_2.default,
        SelectProtwoField: pc_3.default,
        SelectTbproField: pc_4.default,
        SelectDepositField: pc_5.default,
        SelectHeField: pc_6.default,
        SelectRelatedField: pc_7.default,
        SelectHeshouField: pc_8.default,
        SelectLeaseField: pc_9.default,
        SelectZuField: pc_10.default,
        SelectFenField: pc_11.default,
        SelectConField: pc_12.default,
        SelectjiaField: pc_13.default,
        SelectLaoField: pc_14.default,
        SelectSpoField: pc_15.default,
        SelecTickeField: pc_16.default,
        SelecTickefaField: pc_17.default,
        TestMaterField: pc_18.default,
        TestCollectionField: pc_19.default,
        TestLabourField: pc_20.default,
        TestSubconField: pc_21.default,
        TestRegistField: pc_22.default,
        SelectAccField: pc_23.default,
        CorpSupplierField: pc_24.default,
        CorpSupplieryiField: pc_25.default,
        CorpHouseField: pc_26.default,
        PositionDesField: pc_27.default,
        TestBiddingField: pc_28.default,
        TestPlanField: pc_29.default,
        TestOrderField: pc_30.default,
        TestOrdernewField: pc_31.default,
        TestSheField: pc_32.default,
        TestMaterialField: pc_33.default,
        TestApplicationField: pc_34.default,
        TestSetField: pc_35.default,
        TestPurField: pc_36.default,
        TestExpeField: pc_37.default,
        TestCinField: pc_38.default,
        TestOutField: pc_39.default,
        TestCunField: pc_40.default,
        TestLeaseField: pc_41.default,
        TestLeconField: pc_42.default,
        TestMachineryField: pc_43.default,
        TestDemandField: pc_44.default,
        TestInspecField: pc_45.default,
        TestMainField: pc_46.default,
        TestOliField: pc_47.default,
        TestScienceField: pc_48.default,
        TestOpeningField: pc_49.default,
        AntdUploadFiled: pc_50.default
    };
}
var Suite = create_react_class_1.default({
    mixins: [pc_1.default],
    componentWillMount: function () {
        window.SuiteProps = this.props;
        this.suiteWillMount && this.suiteWillMount();
    },
    componentDidMount: function () {
        this.suiteDidMount && this.suiteDidMount();
    },
    componentDidUpdate: function () {
        this.suiteDidUpdate && this.suiteDidUpdate();
    },
    render: function () {
        var _this = this;
        if (this.suiteRender) {
            return this.suiteRender();
        }
        return (react_1.default.createElement("div", { className: "pc-runtime-wrap" },
            react_1.default.createElement("div", null, this.props.form.getFields().map(function (field) {
                if (field.props.commonBizType === 'SelectProField' || field.props.commonBizType === 'SelectPro') {
                    return react_1.default.createElement(pc_2.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectProtwoField' || field.props.commonBizType === 'SelectProtwo') {
                    return react_1.default.createElement(pc_3.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectTbproField' || field.props.commonBizType === 'SelectTbpro') {
                    return react_1.default.createElement(pc_4.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectDepositField' || field.props.commonBizType === 'SelectDeposit') {
                    return react_1.default.createElement(pc_5.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectHeField' || field.props.commonBizType === 'SelectHe') {
                    return react_1.default.createElement(pc_6.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectRelatedField' || field.props.commonBizType === 'SelectRelated') {
                    return react_1.default.createElement(pc_7.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectHeshouField' || field.props.commonBizType === 'SelectHeshou') {
                    return react_1.default.createElement(pc_8.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectLeaseField' || field.props.commonBizType === 'SelectLease') {
                    return react_1.default.createElement(pc_9.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectZuField' || field.props.commonBizType === 'SelectZu') {
                    return react_1.default.createElement(pc_10.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectFenField' || field.props.commonBizType === 'SelectFen') {
                    return react_1.default.createElement(pc_11.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectConField' || field.props.commonBizType === 'SelectCon') {
                    return react_1.default.createElement(pc_12.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectjiaField' || field.props.commonBizType === 'Selectjia') {
                    return react_1.default.createElement(pc_13.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectLaoField' || field.props.commonBizType === 'SelectLao') {
                    return react_1.default.createElement(pc_14.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectSpoField' || field.props.commonBizType === 'SelectSpo') {
                    return react_1.default.createElement(pc_15.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelecTickeField' || field.props.commonBizType === 'SelecTicke') {
                    return react_1.default.createElement(pc_16.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelecTickefaField' || field.props.commonBizType === 'SelecTickefa') {
                    return react_1.default.createElement(pc_17.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMaterField' || field.props.commonBizType === 'TestMater') {
                    return react_1.default.createElement(pc_18.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestCollectionField' || field.props.commonBizType === 'TestCollection') {
                    return react_1.default.createElement(pc_19.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestLabourField' || field.props.commonBizType === 'TestLabour') {
                    return react_1.default.createElement(pc_20.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestSubconField' || field.props.commonBizType === 'TestSubcon') {
                    return react_1.default.createElement(pc_21.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestRegistField' || field.props.commonBizType === 'TestRegist') {
                    return react_1.default.createElement(pc_22.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectAccField' || field.props.commonBizType === 'SelectAcc') {
                    return react_1.default.createElement(pc_23.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'CorpSupplierField' || field.props.commonBizType === 'CorpSupplier') {
                    return react_1.default.createElement(pc_24.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'CorpSupplieryiField' || field.props.commonBizType === 'CorpSupplieryi') {
                    return react_1.default.createElement(pc_25.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'CorpHouseField' || field.props.commonBizType === 'CorpHouse') {
                    return react_1.default.createElement(pc_26.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'PositionDesField' || field.props.commonBizType === 'PositionDes') {
                    return react_1.default.createElement(pc_27.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestBiddingField' || field.props.commonBizType === 'TestBidding') {
                    return react_1.default.createElement(pc_28.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestPlanField' || field.props.commonBizType === 'TestPlan') {
                    return react_1.default.createElement(pc_29.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOrderField' || field.props.commonBizType === 'TestOrder') {
                    return react_1.default.createElement(pc_30.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOrdernewField' || field.props.commonBizType === 'TestOrdernew') {
                    return react_1.default.createElement(pc_31.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestSheField' || field.props.commonBizType === 'TestShe') {
                    return react_1.default.createElement(pc_32.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMaterialField' || field.props.commonBizType === 'TestMaterial') {
                    return react_1.default.createElement(pc_33.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestApplicationField' || field.props.commonBizType === 'TestApplication') {
                    return react_1.default.createElement(pc_34.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestSetField' || field.props.commonBizType === 'TestSet') {
                    return react_1.default.createElement(pc_35.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestPurField' || field.props.commonBizType === 'TestPur') {
                    return react_1.default.createElement(pc_36.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestExpeField' || field.props.commonBizType === 'TestExpe') {
                    return react_1.default.createElement(pc_37.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestCinField' || field.props.commonBizType === 'TestCin') {
                    return react_1.default.createElement(pc_38.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOutField' || field.props.commonBizType === 'TestOut') {
                    return react_1.default.createElement(pc_39.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestCunField' || field.props.commonBizType === 'TestCun') {
                    return react_1.default.createElement(pc_40.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestLeaseField' || field.props.commonBizType === 'TestLease') {
                    return react_1.default.createElement(pc_41.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestLeconField' || field.props.commonBizType === 'TestLecon') {
                    return react_1.default.createElement(pc_42.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMachineryField' || field.props.commonBizType === 'TestMachinery') {
                    return react_1.default.createElement(pc_43.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestDemandField' || field.props.commonBizType === 'TestDemand') {
                    return react_1.default.createElement(pc_44.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestInspecField' || field.props.commonBizType === 'TestInspec') {
                    return react_1.default.createElement(pc_45.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMainField' || field.props.commonBizType === 'TestMain') {
                    return react_1.default.createElement(pc_46.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOliField' || field.props.commonBizType === 'TestOli') {
                    return react_1.default.createElement(pc_47.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestScienceField' || field.props.commonBizType === 'TestScience') {
                    return react_1.default.createElement(pc_48.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOpeningField' || field.props.commonBizType === 'TestOpening') {
                    return react_1.default.createElement(pc_49.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'AntdUploadFiled' || field.props.commonBizType === 'AntdUpload') {
                    return react_1.default.createElement(pc_50.default, __assign({}, _this.props));
                }
                return field.renderComponent();
            }))));
    },
});
exports.default = Suite;
