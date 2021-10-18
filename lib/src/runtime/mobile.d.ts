import { ISuiteRuntime } from '../types';
import './pc.less';
interface ISwapDemoSuite extends ISuiteRuntime {
    formDataLinkagehandler: () => void;
    asyncSetFieldProps: () => void;
    formDataWatch: () => void;
}
declare const SwapDemoSuite: ISwapDemoSuite;
export default SwapDemoSuite;
