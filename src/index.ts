import { testMarks, getStatistics } from "./getStatistics";
import holeNumbers from "./holesNumber";
import rearrangment from "./rearrangment";

// Test 1
console.log("\n Test 1 => get Statistics: ");
console.log(getStatistics(testMarks));

// Test 2
console.log(
  "\n Test 2 => All possible rearrangment of a list of numbers: ex N = 5 "
);
console.log(rearrangment(5));

// Test 3
console.log("\n Test 3 => numbers of holes: ");
console.log(holeNumbers([1, 6, 480, 80, 62, 3]));
