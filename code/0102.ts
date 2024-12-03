const data = await Deno.readTextFile("./data/0101.txt");
const lines = data.split("\n");
const numbers = lines.map(l => l.split("   ").map(Number));

const listA = numbers.map(l => l[0]).toSorted();
const listB = numbers.map(l => l[1]).toSorted();

const mapB = listB.reduce<Record<number, number>>((s, v) => {
    s[v] ??= 0;
    s[v]++;
    return s
}, {});

const similarityScores = listA.map((a) => (mapB[a] ?? 0) * a);
const totalSimilarity = similarityScores.reduce((s, v) => s + v);

console.log(totalSimilarity);