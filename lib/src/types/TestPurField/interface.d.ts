/// <reference types="react" />
import { IFormField } from "..";
interface DataType {
    unit_price: any;
    id: any;
    det_quantity: any;
    no_unit_price: any;
    tax_rate: any;
    amount_tax: any;
    key: React.Key;
    name: string;
    size: string;
    type: string;
}
interface Item {
    id: number;
    key: string;
    name: string;
    size: string;
    type: string;
    num1: number;
    num2: number;
    num3: number;
}
interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item, value: any) => void;
    handleChange: (record: Item) => void;
}
interface ISwapFormField extends IFormField {
    handleOk: (value?: any) => void;
    handleCancel: () => void;
    onInputChange?: (types: any, index: number, e: any) => any;
}
interface EditableRowProps {
    index: number;
}
export { DataType, Item, EditableCellProps, ISwapFormField, EditableRowProps };
