import { ISuiteDesignerSetter } from '../../../types';
import './style.less';
interface ISuiteSetterDemo extends ISuiteDesignerSetter {
    handleChange: (checked: boolean) => void;
}
declare const SuiteSetterDemo: ISuiteSetterDemo;
export default SuiteSetterDemo;
