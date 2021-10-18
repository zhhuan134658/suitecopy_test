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
var mobile_1 = __importDefault(require("../src/runtime/mobile"));
var create_react_class_1 = __importDefault(require("create-react-class"));
var mobile_2 = __importDefault(require("./SelectProField/mobile"));
var mobile_3 = __importDefault(require("./SelectProtwoField/mobile"));
var mobile_4 = __importDefault(require("./SelectTbproField/mobile"));
var mobile_5 = __importDefault(require("./SelectDepositField/mobile"));
var mobile_6 = __importDefault(require("./SelectHeField/mobile"));
var mobile_7 = __importDefault(require("./SelectRelatedField/mobile"));
var mobile_8 = __importDefault(require("./SelectHeshouField/mobile"));
var mobile_9 = __importDefault(require("./SelectLeaseField/mobile"));
var mobile_10 = __importDefault(require("./SelectZuField/mobile"));
var mobile_11 = __importDefault(require("./SelectFenField/mobile"));
var mobile_12 = __importDefault(require("./SelectConField/mobile"));
var mobile_13 = __importDefault(require("./SelectjiaField/mobile"));
var mobile_14 = __importDefault(require("./SelectLaoField/mobile"));
var mobile_15 = __importDefault(require("./SelectSpoField/mobile"));
var mobile_16 = __importDefault(require("./SelecTickeField/mobile"));
var mobile_17 = __importDefault(require("./SelecTickefaField/mobile"));
var mobile_18 = __importDefault(require("./TestMaterField/mobile"));
var mobile_19 = __importDefault(require("./TestCollectionField/mobile"));
var mobile_20 = __importDefault(require("./TestLabourField/mobile"));
var mobile_21 = __importDefault(require("./TestSubconField/mobile"));
var mobile_22 = __importDefault(require("./TestRegistField/mobile"));
var mobile_23 = __importDefault(require("./SelectAccField/mobile"));
var mobile_24 = __importDefault(require("./CorpSupplierField/mobile"));
var mobile_25 = __importDefault(require("./CorpSupplieryiField/mobile"));
var mobile_26 = __importDefault(require("./CorpHouseField/mobile"));
var mobile_27 = __importDefault(require("./PositionDesField/mobile"));
var mobile_28 = __importDefault(require("./TestBiddingField/mobile"));
var mobile_29 = __importDefault(require("./TestPlanField/mobile"));
var mobile_30 = __importDefault(require("./TestOrderField/mobile"));
var mobile_31 = __importDefault(require("./TestOrdernewField/mobile"));
var mobile_32 = __importDefault(require("./TestSheField/mobile"));
var mobile_33 = __importDefault(require("./TestMaterialField/mobile"));
var mobile_34 = __importDefault(require("./TestApplicationField/mobile"));
var mobile_35 = __importDefault(require("./TestSetField/mobile"));
var mobile_36 = __importDefault(require("./TestPurField/mobile"));
var mobile_37 = __importDefault(require("./TestExpeField/mobile"));
var mobile_38 = __importDefault(require("./TestCinField/mobile"));
var mobile_39 = __importDefault(require("./TestOutField/mobile"));
var mobile_40 = __importDefault(require("./TestCunField/mobile"));
var mobile_41 = __importDefault(require("./TestLeaseField/mobile"));
var mobile_42 = __importDefault(require("./TestLeconField/mobile"));
var mobile_43 = __importDefault(require("./TestMachineryField/mobile"));
var mobile_44 = __importDefault(require("./TestDemandField/mobile"));
var mobile_45 = __importDefault(require("./TestInspecField/mobile"));
var mobile_46 = __importDefault(require("./TestMainField/mobile"));
var mobile_47 = __importDefault(require("./TestOliField/mobile"));
var mobile_48 = __importDefault(require("./TestScienceField/mobile"));
var mobile_49 = __importDefault(require("./TestOpeningField/mobile"));
var mobile_50 = __importDefault(require("./AntdUploadFiled/mobile"));
if (!window.SuiteCommonField) {
    window.SuiteCommonField = {};
}
if (window.location.href.indexOf('/mobile/') > -1) {
    window.SuiteCommonField['isv.zhukuai.warehousing'] = {
        SelectProField: mobile_2.default,
        SelectProtwoField: mobile_3.default,
        SelectTbproField: mobile_4.default,
        SelectDepositField: mobile_5.default,
        SelectHeField: mobile_6.default,
        SelectRelatedField: mobile_7.default,
        SelectHeshouField: mobile_8.default,
        SelectLeaseField: mobile_9.default,
        SelectZuField: mobile_10.default,
        SelectFenField: mobile_11.default,
        SelectConField: mobile_12.default,
        SelectjiaField: mobile_13.default,
        SelectLaoField: mobile_14.default,
        SelectSpoField: mobile_15.default,
        SelecTickeField: mobile_16.default,
        SelecTickefaField: mobile_17.default,
        TestMaterField: mobile_18.default,
        TestCollectionField: mobile_19.default,
        TestLabourField: mobile_20.default,
        TestSubconField: mobile_21.default,
        TestRegistField: mobile_22.default,
        SelectAccField: mobile_23.default,
        CorpSupplierField: mobile_24.default,
        CorpSupplieryiField: mobile_25.default,
        CorpHouseField: mobile_26.default,
        PositionDesField: mobile_27.default,
        TestBiddingField: mobile_28.default,
        TestPlanField: mobile_29.default,
        TestOrderField: mobile_30.default,
        TestOrdernewField: mobile_31.default,
        TestSheField: mobile_32.default,
        TestMaterialField: mobile_33.default,
        TestApplicationField: mobile_34.default,
        TestSetField: mobile_35.default,
        TestPurField: mobile_36.default,
        TestExpeField: mobile_37.default,
        TestCinField: mobile_38.default,
        TestOutField: mobile_39.default,
        TestCunField: mobile_40.default,
        TestLeaseField: mobile_41.default,
        TestLeconField: mobile_42.default,
        TestMachineryField: mobile_43.default,
        TestDemandField: mobile_44.default,
        TestInspecField: mobile_45.default,
        TestMainField: mobile_46.default,
        TestOliField: mobile_47.default,
        TestScienceField: mobile_48.default,
        TestOpeningField: mobile_49.default,
        AntdUploadFiled: mobile_50.default
    };
}
var Suite = create_react_class_1.default({
    mixins: [mobile_1.default],
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
        return (react_1.default.createElement("div", { className: "mobile-runtime-wrap" },
            react_1.default.createElement("div", null, this.props.form.getFields().map(function (field) {
                if (field.props.commonBizType === 'SelectProField' || field.props.commonBizType === 'SelectPro') {
                    return react_1.default.createElement(mobile_2.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectProtwoField' || field.props.commonBizType === 'SelectProtwo') {
                    return react_1.default.createElement(mobile_3.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectTbproField' || field.props.commonBizType === 'SelectTbpro') {
                    return react_1.default.createElement(mobile_4.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectDepositField' || field.props.commonBizType === 'SelectDeposit') {
                    return react_1.default.createElement(mobile_5.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectHeField' || field.props.commonBizType === 'SelectHe') {
                    return react_1.default.createElement(mobile_6.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectRelatedField' || field.props.commonBizType === 'SelectRelated') {
                    return react_1.default.createElement(mobile_7.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectHeshouField' || field.props.commonBizType === 'SelectHeshou') {
                    return react_1.default.createElement(mobile_8.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectLeaseField' || field.props.commonBizType === 'SelectLease') {
                    return react_1.default.createElement(mobile_9.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectZuField' || field.props.commonBizType === 'SelectZu') {
                    return react_1.default.createElement(mobile_10.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectFenField' || field.props.commonBizType === 'SelectFen') {
                    return react_1.default.createElement(mobile_11.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectConField' || field.props.commonBizType === 'SelectCon') {
                    return react_1.default.createElement(mobile_12.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectjiaField' || field.props.commonBizType === 'Selectjia') {
                    return react_1.default.createElement(mobile_13.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectLaoField' || field.props.commonBizType === 'SelectLao') {
                    return react_1.default.createElement(mobile_14.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectSpoField' || field.props.commonBizType === 'SelectSpo') {
                    return react_1.default.createElement(mobile_15.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelecTickeField' || field.props.commonBizType === 'SelecTicke') {
                    return react_1.default.createElement(mobile_16.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelecTickefaField' || field.props.commonBizType === 'SelecTickefa') {
                    return react_1.default.createElement(mobile_17.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMaterField' || field.props.commonBizType === 'TestMater') {
                    return react_1.default.createElement(mobile_18.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestCollectionField' || field.props.commonBizType === 'TestCollection') {
                    return react_1.default.createElement(mobile_19.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestLabourField' || field.props.commonBizType === 'TestLabour') {
                    return react_1.default.createElement(mobile_20.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestSubconField' || field.props.commonBizType === 'TestSubcon') {
                    return react_1.default.createElement(mobile_21.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestRegistField' || field.props.commonBizType === 'TestRegist') {
                    return react_1.default.createElement(mobile_22.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'SelectAccField' || field.props.commonBizType === 'SelectAcc') {
                    return react_1.default.createElement(mobile_23.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'CorpSupplierField' || field.props.commonBizType === 'CorpSupplier') {
                    return react_1.default.createElement(mobile_24.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'CorpSupplieryiField' || field.props.commonBizType === 'CorpSupplieryi') {
                    return react_1.default.createElement(mobile_25.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'CorpHouseField' || field.props.commonBizType === 'CorpHouse') {
                    return react_1.default.createElement(mobile_26.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'PositionDesField' || field.props.commonBizType === 'PositionDes') {
                    return react_1.default.createElement(mobile_27.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestBiddingField' || field.props.commonBizType === 'TestBidding') {
                    return react_1.default.createElement(mobile_28.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestPlanField' || field.props.commonBizType === 'TestPlan') {
                    return react_1.default.createElement(mobile_29.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOrderField' || field.props.commonBizType === 'TestOrder') {
                    return react_1.default.createElement(mobile_30.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOrdernewField' || field.props.commonBizType === 'TestOrdernew') {
                    return react_1.default.createElement(mobile_31.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestSheField' || field.props.commonBizType === 'TestShe') {
                    return react_1.default.createElement(mobile_32.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMaterialField' || field.props.commonBizType === 'TestMaterial') {
                    return react_1.default.createElement(mobile_33.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestApplicationField' || field.props.commonBizType === 'TestApplication') {
                    return react_1.default.createElement(mobile_34.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestSetField' || field.props.commonBizType === 'TestSet') {
                    return react_1.default.createElement(mobile_35.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestPurField' || field.props.commonBizType === 'TestPur') {
                    return react_1.default.createElement(mobile_36.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestExpeField' || field.props.commonBizType === 'TestExpe') {
                    return react_1.default.createElement(mobile_37.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestCinField' || field.props.commonBizType === 'TestCin') {
                    return react_1.default.createElement(mobile_38.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOutField' || field.props.commonBizType === 'TestOut') {
                    return react_1.default.createElement(mobile_39.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestCunField' || field.props.commonBizType === 'TestCun') {
                    return react_1.default.createElement(mobile_40.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestLeaseField' || field.props.commonBizType === 'TestLease') {
                    return react_1.default.createElement(mobile_41.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestLeconField' || field.props.commonBizType === 'TestLecon') {
                    return react_1.default.createElement(mobile_42.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMachineryField' || field.props.commonBizType === 'TestMachinery') {
                    return react_1.default.createElement(mobile_43.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestDemandField' || field.props.commonBizType === 'TestDemand') {
                    return react_1.default.createElement(mobile_44.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestInspecField' || field.props.commonBizType === 'TestInspec') {
                    return react_1.default.createElement(mobile_45.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestMainField' || field.props.commonBizType === 'TestMain') {
                    return react_1.default.createElement(mobile_46.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOliField' || field.props.commonBizType === 'TestOli') {
                    return react_1.default.createElement(mobile_47.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestScienceField' || field.props.commonBizType === 'TestScience') {
                    return react_1.default.createElement(mobile_48.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'TestOpeningField' || field.props.commonBizType === 'TestOpening') {
                    return react_1.default.createElement(mobile_49.default, __assign({}, _this.props));
                }
                if (field.props.commonBizType === 'AntdUploadFiled' || field.props.commonBizType === 'AntdUpload') {
                    return react_1.default.createElement(mobile_50.default, __assign({}, _this.props));
                }
                return field.renderComponent();
            }))));
    },
});
exports.default = Suite;
