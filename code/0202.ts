const data = await Deno.readTextFile("./data/0201.txt");
const lines = data.split("\n");
const levels = lines.map((l) => l.split(" ").map(Number));

const isLevelStable = (level: number[]) => {
  const isDecreasing = level[1] < level[0];

  for (let i = 0; i < level.length - 1; i++) {
    const slope = level[i + 1] - level[i];
    const isStillDecreasing = level[i + 1] < level[i];
    const isUnstable = Math.abs(slope) > 3 ||
      slope === 0 ||
      isDecreasing !== isStillDecreasing;

    if (isUnstable) {
      return false;
    }
  }
  return true;
};

const safeLevels = levels.filter((level) => {
  if (isLevelStable(level)) return true;
  for (let i = 0; i < level.length; i++) {
    if (isLevelStable(level.toSpliced(i, 1))) return true;
  }
  return false;
});

console.log(safeLevels.length);
