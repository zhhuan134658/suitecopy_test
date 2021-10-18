import React from "react";
import SwapDemoSuite from "@/src/runtime/pc";
import createReactClass from "create-react-class";
import SelectProField from "./SelectProField/pc";
import SelectDepositField from "./SelectDepositField/pc";
import SelectHeField from "./SelectHeField/pc";
import SelectRelatedField from "./SelectRelatedField/pc";
import SelectHeshouField from "./SelectHeshouField/pc";
import SelectLeaseField from "./SelectLeaseField/pc";
import SelectZuField from "./SelectZuField/pc";
import SelectFenField from "./SelectFenField/pc";
import SelectConField from "./SelectConField/pc";
import SelectLaoField from "./SelectLaoField/pc";
import SelectSpoField from "./SelectSpoField/pc";
import SelecTickeField from "./SelecTickeField/pc";
import TestMaterField from "./TestMaterField/pc";
import TestCollectionField from "./TestCollectionField/pc";
import TestLabourField from "./TestLabourField/pc";
import TestSubconField from "./TestSubconField/pc";
import TestRegistField from "./TestRegistField/pc";
import SelectAccField from "./SelectAccField/pc";
import CorpSupplierField from "./CorpSupplierField/pc";
import CorpSupplieryiField from "./CorpSupplieryiField/pc";
import CorpHouseField from "./CorpHouseField/pc";
import TestDestinationField from "./TestDestinationField/pc";
import PositionDesField from "./PositionDesField/pc";
import TestBiddingField from "./TestBiddingField/pc";
import TestPlanField from "./TestPlanField/pc";
import TestOrderField from "./TestOrderField/pc";
import TestSheField from "./TestSheField/pc";
import TestMaterialField from "./TestMaterialField/pc";
import TestApplicationField from "./TestApplicationField/pc";
import TestSetField from "./TestSetField/pc";
import TestPurField from "./TestPurField/pc";
import TestCinField from "./TestCinField/pc";
import TestOutField from "./TestOutField/pc";
import TestCunField from "./TestCunField/pc";
import TestLeaseField from "./TestLeaseField/pc";
import TestLeconField from "./TestLeconField/pc";
import TestMachineryField from "./TestMachineryField/pc";
import TestDemandField from "./TestDemandField/pc";
import TestInspecField from "./TestInspecField/pc";
import TestMainField from "./TestMainField/pc";
import TestOliField from "./TestOliField/pc";
import TestScienceField from "./TestScienceField/pc";
import TestOpeningField from "./TestOpeningField/pc";

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
      <div className="pc-runtime-wrap">
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