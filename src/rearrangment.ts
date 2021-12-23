import fs from "fs";

export default function rearrangment(N: number): number {
  let content = "";
  let lines = 0;
  let nums = generateNum(N);
  const filename = "./rearrange_numbers.txt";

  const rearrange = (nums: number[], left: number, right: number) => {
    if (left == right) {
      content += `${nums.join("")} \n`;
      lines++;
    } else {
      for (let i = left; i <= right; i++) {
        [nums[left], nums[i]] = [nums[i], nums[left]]; // swap

        rearrange(nums, left + 1, right);

        [nums[left], nums[i]] = [nums[i], nums[left]];
      }
    }
  };

  rearrange(nums, 0, nums.length - 1);

  fs.writeFile(filename, content, async (err) => {
    if (err) throw err;
  });

  return lines;
}

// generate an array of number with zeros
// ex: N = 5 => 0000012345
function generateNum(N: number): number[] {
  const arrOfNums = Array.from({ length: N }, (_, i) => i + 1);
  const arrZeros = new Array(N).fill(0);
  return [...arrZeros, ...arrOfNums];
}

const linesInFile = rearrangment(2);
console.log(linesInFile);
