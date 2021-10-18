import { IFormField } from '../../types';
import './pc.less';
interface ISwapFormField<P, S> extends IFormField {
    handleChange: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    formDataWatch: () => void;
    setState<K extends keyof S>(state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null), callback?: () => void): void;
}
/**
 * 自定义控件运行态 PC 视图
 */
declare const FormField: ISwapFormField;
export default FormField;
