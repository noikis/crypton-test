"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatistics = exports.testMarks = void 0;
exports.testMarks = [
    {
        name: "Vasya",
        avgMark: 3.75,
    },
    {
        name: "Lena",
        avgMark: 4.89,
    },
];
function getStatistics(marks) {
    var scores = marks.map(function (mark) { return mark.avgMark; });
    var avgMark = scores.reduce(function (acc, current) { return acc + current; }, 0) / scores.length;
    var highestMark = marks.find(function (mark) { return mark.avgMark === Math.max.apply(Math, scores); }).name;
    var lowestMark = marks.find(function (mark) { return mark.avgMark === Math.min.apply(Math, scores); }).name;
    return {
        avgMark: avgMark,
        highestMark: highestMark,
        lowestMark: lowestMark,
    };
}
exports.getStatistics = getStatistics;
console.log("\n Test 1 => get Statistics: ");
console.log(getStatistics(exports.testMarks));
