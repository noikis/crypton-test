"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function holesNumber(nums) {
    // Split numbers
    var numbersAsStr = nums.map(function (num) { return num.toString().split(""); });
    var result = [];
    for (var _i = 0, numbersAsStr_1 = numbersAsStr; _i < numbersAsStr_1.length; _i++) {
        var numsAsStr = numbersAsStr_1[_i];
        var holes = 0;
        // Check  holes
        for (var _a = 0, numsAsStr_1 = numsAsStr; _a < numsAsStr_1.length; _a++) {
            var numAsStr = numsAsStr_1[_a];
            if (["4", "6", "9", "0"].includes(numAsStr)) {
                holes = holes + 1;
            }
            else if (numAsStr === "8") {
                holes = holes + 2;
            }
        }
        var numWithHoles = {
            number: Number(numsAsStr.join("")),
            holes: holes,
        };
        result.push(numWithHoles);
    }
    return result.sort(function (a, b) { return a.holes - b.holes; });
}
exports.default = holesNumber;
// Test 3
console.log("\n Test 3 => numbers of holes: ");
console.log(holesNumber([1, 6, 480, 80, 62, 3]));
