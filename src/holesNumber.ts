interface NumWithHoles {
  number: number;
  holes: number;
}

export default function holesNumber(nums: number[]): NumWithHoles[] {
  // Split numbers
  const numbersAsStr = nums.map((num) => num.toString().split(""));
  let result = [] as NumWithHoles[];

  for (const numsAsStr of numbersAsStr) {
    let holes = 0;

    // Check  holes
    for (let numAsStr of numsAsStr) {
      if (["4", "6", "9", "0"].includes(numAsStr)) {
        holes = holes + 1;
      } else if (numAsStr === "8") {
        holes = holes + 2;
      }
    }

    const numWithHoles: NumWithHoles = {
      number: Number(numsAsStr.join("")),
      holes,
    };

    result.push(numWithHoles);
  }

  return result.sort((a, b) => a.holes - b.holes);
}

// Test 3
console.log("\n Test 3 => numbers of holes: ");
console.log(holesNumber([1, 6, 480, 80, 62, 3]));
