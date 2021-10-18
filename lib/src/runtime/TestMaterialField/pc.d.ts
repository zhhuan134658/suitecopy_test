import { IFormField } from '../../types';
import './pc.less';
interface ISwapFormField extends IFormField {
    handleOk: () => void;
    handleCancel: () => void;
    formDataWatch: () => void;
}
/**
 * 自定义控件运行态 PC 视图
 */
declare const FormField: ISwapFormField;
export default FormField;
