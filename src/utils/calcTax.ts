import { fpAdd,fpDivide,fpMul,toFixed } from './fpOperations'
import { DataType } from '../types/TestPurField/interface';

const reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;

const calcTaxRate = (row: DataType) => {
    if (reg.test(row.tax_rate)) {
        return Number(row.tax_rate)
    } else {
        if (reg.test(row.no_unit_price) && reg.test(row.unit_price)) {
            let unitPrice = Number(row.unit_price);
            let taxFreeUnitPrice = Number(row.no_unit_price);
            let taxRate = fpDivide(
              fpAdd(unitPrice, 0 - taxFreeUnitPrice),
              taxFreeUnitPrice,
            );
            let taxRateFixed = toFixed(taxRate, 4);
            console.log('fixed Taxrate',taxRateFixed)
            return toFixed(taxRateFixed * 100, 2)
        }
    }
}

const calcTaxAmount = (row: DataType, taxRate = 0) => {
    
}

export {calcTaxRate}