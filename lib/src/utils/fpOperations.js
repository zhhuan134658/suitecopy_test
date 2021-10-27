"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFixed = exports.fpMul = exports.fpDivide = exports.fpAdd = void 0;
var fpMul = function (num1, num2) {
    var m = 0, s1 = num1.toString(), s2 = num2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) { }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) { }
    return ((Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, m));
};
exports.fpMul = fpMul;
var fpAdd = function (num1, num2) {
    var r1, r2, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    // return (num1*m+num2*m)/m;
    return Math.round(num1 * m + num2 * m) / m;
};
exports.fpAdd = fpAdd;
var fpDivide = function (num1, num2) {
    var t1, t2, r1, r2;
    try {
        t1 = num1.toString().split('.')[1].length;
    }
    catch (e) {
        t1 = 0;
    }
    try {
        t2 = num2.toString().split('.')[1].length;
    }
    catch (e) {
        t2 = 0;
    }
    r1 = Number(num1.toString().replace('.', ''));
    r2 = Number(num2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
};
exports.fpDivide = fpDivide;
var toFixed = function (digits, bits) {
    return Math.round(digits * Math.pow(10, bits)) / Math.pow(10, bits);
};
exports.toFixed = toFixed;
