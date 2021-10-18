import React from "react";
import SwapDemoSuite from "@/src/runtime/mobile";
import createReactClass from "create-react-class";
import SelectProField from "./SelectProField/mobile";
import SelectDepositField from "./SelectDepositField/mobile";
import SelectHeField from "./SelectHeField/mobile";
import SelectRelatedField from "./SelectRelatedField/mobile";
import SelectHeshouField from "./SelectHeshouField/mobile";
import SelectLeaseField from "./SelectLeaseField/mobile";
import SelectZuField from "./SelectZuField/mobile";
import SelectFenField from "./SelectFenField/mobile";
import SelectConField from "./SelectConField/mobile";
import SelectLaoField from "./SelectLaoField/mobile";
import SelectSpoField from "./SelectSpoField/mobile";
import SelecTickeField from "./SelecTickeField/mobile";
import TestMaterField from "./TestMaterField/mobile";
import TestCollectionField from "./TestCollectionField/mobile";
import TestLabourField from "./TestLabourField/mobile";
import TestSubconField from "./TestSubconField/mobile";
import TestRegistField from "./TestRegistField/mobile";
import SelectAccField from "./SelectAccField/mobile";
import CorpSupplierField from "./CorpSupplierField/mobile";
import CorpSupplieryiField from "./CorpSupplieryiField/mobile";
import CorpHouseField from "./CorpHouseField/mobile";
import TestDestinationField from "./TestDestinationField/mobile";
import PositionDesField from "./PositionDesField/mobile";
import TestBiddingField from "./TestBiddingField/mobile";
import TestPlanField from "./TestPlanField/mobile";
import TestOrderField from "./TestOrderField/mobile";
import TestSheField from "./TestSheField/mobile";
import TestMaterialField from "./TestMaterialField/mobile";
import TestApplicationField from "./TestApplicationField/mobile";
import TestSetField from "./TestSetField/mobile";
import TestPurField from "./TestPurField/mobile";
import TestCinField from "./TestCinField/mobile";
import TestOutField from "./TestOutField/mobile";
import TestCunField from "./TestCunField/mobile";
import TestLeaseField from "./TestLeaseField/mobile";
import TestLeconField from "./TestLeconField/mobile";
import TestMachineryField from "./TestMachineryField/mobile";
import TestDemandField from "./TestDemandField/mobile";
import TestInspecField from "./TestInspecField/mobile";
import TestMainField from "./TestMainField/mobile";
import TestOliField from "./TestOliField/mobile";
import TestScienceField from "./TestScienceField/mobile";
import TestOpeningField from "./TestOpeningField/mobile";

const Suite = createReactClass({
  mixins: [SwapDemoSuite],
  componentWillMount() {
    this.suiteWillMount && this.suiteWillMount();
  },
  componentDidMount() {
    this.suiteDidMount && this.suiteDidMount();
  },
  componentDidUpdate() {
    this.suiteDidUpdate && this.suiteDidUpdate();
  },
  render() {
    if (this.suiteRender) {
      return this.suiteRender();
    }

    return (
      <div className="mobile-runtime-wrap">
        <div>
          {this.props.form.getFields().map(field => {
            if (field.props.commonBizType === 'SelectPro') {
              return <SelectProField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectDeposit') {
              return <SelectDepositField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectHe') {
              return <SelectHeField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectRelated') {
              return <SelectRelatedField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectHeshou') {
              return <SelectHeshouField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectLease') {
              return <SelectLeaseField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectZu') {
              return <SelectZuField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectFen') {
              return <SelectFenField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectCon') {
              return <SelectConField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectLao') {
              return <SelectLaoField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectSpo') {
              return <SelectSpoField {...this.props} />;
            }
if (field.props.commonBizType === 'SelecTicke') {
              return <SelecTickeField {...this.props} />;
            }
if (field.props.commonBizType === 'TestMater') {
              return <TestMaterField {...this.props} />;
            }
if (field.props.commonBizType === 'TestCollection') {
              return <TestCollectionField {...this.props} />;
            }
if (field.props.commonBizType === 'TestLabour') {
              return <TestLabourField {...this.props} />;
            }
if (field.props.commonBizType === 'TestSubcon') {
              return <TestSubconField {...this.props} />;
            }
if (field.props.commonBizType === 'TestRegist') {
              return <TestRegistField {...this.props} />;
            }
if (field.props.commonBizType === 'SelectAcc') {
              return <SelectAccField {...this.props} />;
            }
if (field.props.commonBizType === 'CorpSupplier') {
              return <CorpSupplierField {...this.props} />;
            }
if (field.props.commonBizType === 'CorpSupplieryi') {
              return <CorpSupplieryiField {...this.props} />;
            }
if (field.props.commonBizType === 'CorpHouse') {
              return <CorpHouseField {...this.props} />;
            }
if (field.props.commonBizType === 'TestDestination') {
              return <TestDestinationField {...this.props} />;
            }
if (field.props.commonBizType === 'PositionDes') {
              return <PositionDesField {...this.props} />;
            }
if (field.props.commonBizType === 'TestBidding') {
              return <TestBiddingField {...this.props} />;
            }
if (field.props.commonBizType === 'TestPlan') {
              return <TestPlanField {...this.props} />;
            }
if (field.props.commonBizType === 'TestOrder') {
              return <TestOrderField {...this.props} />;
            }
if (field.props.commonBizType === 'TestShe') {
              return <TestSheField {...this.props} />;
            }
if (field.props.commonBizType === 'TestMaterial') {
              return <TestMaterialField {...this.props} />;
            }
if (field.props.commonBizType === 'TestApplication') {
              return <TestApplicationField {...this.props} />;
            }
if (field.props.commonBizType === 'TestSet') {
              return <TestSetField {...this.props} />;
            }
if (field.props.commonBizType === 'TestPur') {
              return <TestPurField {...this.props} />;
            }
if (field.props.commonBizType === 'TestCin') {
              return <TestCinField {...this.props} />;
            }
if (field.props.commonBizType === 'TestOut') {
              return <TestOutField {...this.props} />;
            }
if (field.props.commonBizType === 'TestCun') {
              return <TestCunField {...this.props} />;
            }
if (field.props.commonBizType === 'TestLease') {
              return <TestLeaseField {...this.props} />;
            }
if (field.props.commonBizType === 'TestLecon') {
              return <TestLeconField {...this.props} />;
            }
if (field.props.commonBizType === 'TestMachinery') {
              return <TestMachineryField {...this.props} />;
            }
if (field.props.commonBizType === 'TestDemand') {
              return <TestDemandField {...this.props} />;
            }
if (field.props.commonBizType === 'TestInspec') {
              return <TestInspecField {...this.props} />;
            }
if (field.props.commonBizType === 'TestMain') {
              return <TestMainField {...this.props} />;
            }
if (field.props.commonBizType === 'TestOli') {
              return <TestOliField {...this.props} />;
            }
if (field.props.commonBizType === 'TestScience') {
              return <TestScienceField {...this.props} />;
            }
if (field.props.commonBizType === 'TestOpening') {
              return <TestOpeningField {...this.props} />;
            }
            return field.renderComponent();
          })}
        </div>
      </div>
    );
  },
});

export default Suite;