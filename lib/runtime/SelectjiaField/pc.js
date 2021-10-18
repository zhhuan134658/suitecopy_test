"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pc_1 = __importDefault(require("../../src/runtime/SelectjiaField/pc"));
var create_react_class_1 = __importDefault(require("create-react-class"));
var Field = create_react_class_1.default({
    mixins: [pc_1.default],
    componentWillMount: function () {
        this.fieldWillMount && this.fieldWillMount();
    },
    componentDidMount: function () {
        this.fieldDidMount && this.fieldDidMount();
    },
    componentDidUpdate: function () {
        this.fieldDidUpdate && this.fieldDidUpdate();
    },
    render: function () {
        if (this.fieldRender) {
            return this.fieldRender();
        }
        return null;
    },
});
exports.default = Field;
