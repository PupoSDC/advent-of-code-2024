const data = await Deno.readTextFile("./data/0101.txt");
const lines = data.split("\n");
const numbers = lines.map(l => l.split("   ").map(Number));

const listA = numbers.map(l => l[0]).toSorted();
const listB = numbers.map(l => l[1]).toSorted();


const distances = listA.map((a, i) => Math.abs(a - listB[i]));
const totalDistance =  distances.reduce((v, s) => v + s);

console.log(totalDistance);