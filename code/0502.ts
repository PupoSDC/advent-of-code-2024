const data = await Deno.readTextFile("./data/0500.txt");
const [unparsedRules, unparsedUpdates] = data.split("\n\n");

const updates = unparsedUpdates.split("\n").map((l) =>
  l.split(",").map(Number)
);
const rules = unparsedRules.split("\n").map((l) => l.split("|").map(Number));

const invalidUpdates = updates.filter((update) => {
  return !rules.every((rule) => {
    const aIndex = update.findIndex((v) => v === rule[0]);
    const bIndex = update.findIndex((v) => v === rule[1]);
    if (aIndex === -1) return true;
    if (bIndex === -1) return true;
    if (bIndex > aIndex) return true;
    return false;
  });
});

console.log(invalidUpdates);

const middlePages = invalidUpdates.map((update) => {
  if (update.length % 2 === 0) {
    return update[Math.ceil(update.length / 2)];
  } else {
    return update[Math.floor(update.length / 2)];
  }
});

const sum = middlePages.reduce((s, v) => s + v);

console.log(sum);
