interface Student {
  name: string;
  avgMark: number;
}

interface Statistics {
  avgMark: number;
  highestMark: string;
  lowestMark: string;
}

export const testMarks: Student[] = [
  {
    name: "Vasya",
    avgMark: 3.75,
  },
  {
    name: "Lena",
    avgMark: 4.89,
  },
];

export function getStatistics(marks: Student[]): Statistics {
  const scores: number[] = marks.map((mark) => mark.avgMark);

  const avgMark =
    scores.reduce((acc, current) => acc + current, 0) / scores.length;

  const highestMark = marks.find(
    (mark) => mark.avgMark === Math.max(...scores)
  ).name;

  const lowestMark = marks.find(
    (mark) => mark.avgMark === Math.min(...scores)
  ).name;

  return {
    avgMark,
    highestMark,
    lowestMark,
  };
}

console.log("\n Test 1 => get Statistics: ");
console.log(getStatistics(testMarks));
