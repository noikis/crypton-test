import { testMarks, getStatistics } from "./getStatistics";
import holeNumbers from "./holesNumber";

// Test 1
console.log("\n Test 1 => get Statistics: ");
console.log(getStatistics(testMarks));

// Test 2
console.log("\n Test 2 => numbers of holes: ");
console.log(holeNumbers([1, 6, 480, 80, 62, 3]));
