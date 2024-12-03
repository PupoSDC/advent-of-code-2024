const data = await Deno.readTextFile("./data/0201.txt");
const lines = data.split("\n");
const levels = lines.map(l => l.split(" ").map(Number));

const safeLevels = levels.filter((level) => {
    const isDecreasing = level[1] < level[0];
    for (let i = 0; i < level.length - 1; i++) {
        const slope = level[i + 1] - level[i];
        const isStillDecreasing = level[i + 1] < level[i];
        if (
            Math.abs(slope) > 3 || 
            slope === 0 ||
            isDecreasing !== isStillDecreasing
        ) return false;
    }
    return true;
});

console.log(safeLevels.length);