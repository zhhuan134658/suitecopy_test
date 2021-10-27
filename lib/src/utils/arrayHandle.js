"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceAndRemoveDuplicate = exports.removeDuplicate = void 0;
var removeDuplicate = function (array) {
    var set = new Set(array);
    var duplicateFreeArray = __spreadArray([], set);
    return duplicateFreeArray;
};
exports.removeDuplicate = removeDuplicate;
var uniqueArray = function (array) {
    var res = new Map();
    return array.filter(function (array) { return !res.has(array.id) && res.set(array.id, 1); });
};
var reduceAndRemoveDuplicate = function (arr) {
    var nn = __spreadArray([], arr);
    var obj = {};
    var peon = nn.reduce(function (cur, next) {
        //根据 属性scac + 属性disPlayName 判断去重
        obj[next.name + next.unit + next.size]
            ? ''
            : (obj[next.name + next.unit + next.size] = true && cur.push(next));
        return cur;
    }, []); //设置cur默认类型为数组，并且初始值为空的数组
    console.log(peon);
    return peon;
};
exports.reduceAndRemoveDuplicate = reduceAndRemoveDuplicate;
