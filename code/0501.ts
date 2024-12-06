const data = await Deno.readTextFile("./data/0501.txt");
const [unparsedRules, unparsedUpdates] = data.split("\n\n");

const updates = unparsedUpdates.split("\n").map((l) =>
  l.split(",").map(Number)
);
const rules = unparsedRules.split("\n").map((l) => l.split("|").map(Number));

const validUpdates = updates.filter((update) => {
  return rules.every((rule) => {
    const aIndex = update.findIndex((v) => v === rule[0]);
    const bIndex = update.findIndex((v) => v === rule[1]);
    if (aIndex === -1) return true;
    if (bIndex === -1) return true;
    if (bIndex > aIndex) return true;
    return false;
  });
});

const middlePages = validUpdates.map((update) => {
  if (update.length % 2 === 0) {
    return update[Math.ceil(update.length / 2)];
  } else {
    return update[Math.floor(update.length / 2)];
  }
});

const sum = middlePages.reduce((s, v) => s + v);

console.log(sum);
