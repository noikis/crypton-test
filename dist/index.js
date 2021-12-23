"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getStatistics_1 = require("./getStatistics");
var holesNumber_1 = __importDefault(require("./holesNumber"));
var rearrangment_1 = __importDefault(require("./rearrangment"));
// Test 1
console.log("\n Test 1 => get Statistics: ");
console.log((0, getStatistics_1.getStatistics)(getStatistics_1.testMarks));
// Test 2
console.log("\n Test 2 => All possible rearrangment of a list of numbers: ex N = 5 ");
console.log((0, rearrangment_1.default)(5));
// Test 3
console.log("\n Test 3 => numbers of holes: ");
console.log((0, holesNumber_1.default)([1, 6, 480, 80, 62, 3]));
