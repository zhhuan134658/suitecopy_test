"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTaxRate = void 0;
var fpOperations_1 = require("./fpOperations");
var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
var calcTaxRate = function (row) {
    if (reg.test(row.tax_rate)) {
        return Number(row.tax_rate);
    }
    else {
        if (reg.test(row.no_unit_price) && reg.test(row.unit_price)) {
            var unitPrice = Number(row.unit_price);
            var taxFreeUnitPrice = Number(row.no_unit_price);
            var taxRate = fpOperations_1.fpDivide(fpOperations_1.fpAdd(unitPrice, 0 - taxFreeUnitPrice), taxFreeUnitPrice);
            var taxRateFixed = fpOperations_1.toFixed(taxRate, 4);
            console.log('fixed Taxrate', taxRateFixed);
            return fpOperations_1.toFixed(taxRateFixed * 100, 2);
        }
    }
};
exports.calcTaxRate = calcTaxRate;
var calcTaxAmount = function (row, taxRate) {
    if (taxRate === void 0) { taxRate = 0; }
};
