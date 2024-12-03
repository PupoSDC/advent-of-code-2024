const data = await Deno.readTextFile("./data/0301.txt");

const sum = data
    .matchAll(/mul\(\d+,\d+\)/gm)
    .map(m => m[0].toString().matchAll(/\d+/gm).map(Number).toArray())
    .reduce((s, v) => s + (v[0] * v[1]), 0);


console.log(sum);