const data = await Deno.readTextFile("./data/0301.txt");

const matches = data
    .matchAll(/mul\(\d+,\d+\)|do\(\)|don't\(\)/gm)
    .toArray();

let isValid = true;

const validMatches : string[] = [];
for (const match of matches) {
    if (match[0] === "do()") {
        isValid = true;
        continue;
    }
    if (match[0] === "don't()") {
        isValid = false;
        continue;
    }
    if (!isValid) continue;
    validMatches.push(match[0]);
}

const sum = validMatches
    .map(m => m.matchAll(/\d+/gm).map(Number).toArray())
    .reduce((s, v) => s + (v[0] * v[1]), 0);


console.log(sum);