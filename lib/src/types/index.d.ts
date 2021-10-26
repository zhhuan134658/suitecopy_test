import React from 'react';
import { IValidationRule } from './Validator';
export interface IFieldData {
    value?: any;
    extendValue?: any;
}
interface ISchema {
    componentName: string;
    props: {
        id: string;
        bizAlias?: string;
        label: string;
        required: boolean;
        placeholder: string;
    };
}
interface IForm {
    getFieldInstance: (bizAlias: string) => IFieldInstance;
    getFieldValue: (bizAlias: string) => any;
    setFieldValue: (bizAlias: string, value: any) => void;
    getFieldExtendValue: (bizAlias: string) => any;
    setFieldExtendValue: (bizAlias: string, extendValue: any) => void;
    onFieldValueChange: (bizAlias: string, fn: (value?: any) => void) => void;
    onFieldExtendValueChange: (bizAlias: string, fn: (extendValue?: any) => void) => void;
    setFieldProp: (bizAlias: string, propName: string, propValue: any) => void;
    getFieldProp: (bizAlias: string, propName: string) => any;
    getFieldProps: (bizAlias: string) => any;
    validate: () => {
        valid: boolean;
        message: string;
    };
    getFormData: () => any;
    getFields: () => IFieldInstance[];
    getFormSchema: () => ISchema[];
    getSuiteProps: () => any;
    getSuiteProp: (propName: string) => any;
}
export interface IProps {
    form: IForm;
    spi: {
        [key: string]: <T>(params: {
            [key: string]: any;
        }) => Promise<T>;
    };
}
export interface IFieldInstance {
    renderComponent: (opts?: {
        index?: number;
    }) => any;
    getValue: () => any;
    getExtendValue: () => any;
    setExtendValue: (extendValue: any) => void;
    setValue: (value: any, extra?: {
        silent: boolean;
    }) => void;
    setProp: (propName: string, propValue: any) => void;
    getProp: (propName: string) => any;
    onExtendValueChange: (fn: (extendValue?: any, FieldStore?: IFieldInstance, scopeContext?: IContext) => void) => () => void;
    show: () => void;
    hide: () => void;
    onValueChange: (fn: (value?: any, FieldStore?: IFieldInstance, scopeContext?: IContext, etra?: any) => void) => () => void;
    addValidator: (fieldValidation?: IValidationRule | string) => void;
    removeValidator: (fieldValidation?: IValidationRule | string) => void;
}
export interface IContext {
    getFieldByProp: (propName: string, propValue: any) => IFieldInstance | undefined;
    getFieldByBizAlias: (bizAlias: any) => IFieldInstance | undefined;
    getFieldById: (id: string) => IFieldInstance | undefined;
    getFieldsByComponentName: (componentName: string) => IFieldInstance[];
}
export interface ISuiteRuntime {
    props?: IProps;
    suiteWillMount?: () => void;
    suiteDidMount?: () => void;
    suiteDidUpdate?: () => void;
    suiteRender?: () => React.ReactElement;
}
export interface IFormField {
    props?: IProps;
    fieldWillMount?: () => void;
    fieldDidMount?: () => void;
    fieldDidUpdate?: () => void;
    fieldRender?: () => React.ReactElement;
    getInitialState?: () => any;
    asyncSetFieldProps?: (valueData: any) => void;
    methods?: () => any;
}
export interface ISuiteDesignerSetter {
    props?: IProps;
    setterWillMount?: () => void;
    setterDidMount?: () => void;
    setterDidUpdate?: () => void;
    setterRender?: () => React.ReactElement;
    getSuiteProps?: () => any;
    setSuiteProps?: (props: any) => any;
    getFieldProps?: (bizAlias: string) => string;
    setFieldProps?: (bizAlias: string, props: any) => void;
    getAllFieldProps?: () => any;
    setAllFieldProps?: (children: any) => any;
}
export {};
