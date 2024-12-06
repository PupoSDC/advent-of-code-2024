const data = await Deno.readTextFile("./data/0600.txt");
const map = data.split("\n").map((s) => s.split(""));

let x: number = 0;
let y: number = 0;
let loopCount: number = 0;
let dir: "UP" | "LEFT" | "RIGHT" | "DOWN" = "UP";

map.forEach((line, _y) => {
  line.forEach((entry, _x) => {
    if (entry === "^") {
      x = _x;
      y = _y;
      dir === "UP";
    }
  });
});

while (
  y > 0 && y < map.length &&
  x > 0 && x < map[0].length
) {
  map[y][x] = dir;

  if (dir === "UP" && map[y - 1]?.[x] === "#") {
    dir = "RIGHT";
    continue;
  }
  if (dir === "RIGHT" && map[y]?.[x + 1] === "#") {
    dir = "DOWN";
    continue;
  }
  if (dir === "DOWN" && map[y + 1]?.[x] === "#") {
    dir = "LEFT";
    continue;
  }
  if (dir === "LEFT" && map[y]?.[x - 1] === "#") {
    dir = "UP";
    continue;
  }

  if (dir === "UP") {
    if (map[y][x] === "RIGHT") loopCount++;
    map[y][x] = "UP";
    y--;
    continue;
  }
  if (dir === "RIGHT") {
    x++;
    if (map[y][x] === "DOWN") loopCount++;
    map[y][x] = "RIGHT";
    continue;
  }
  if (dir === "DOWN") {
    if (map[y][x] === "LEFT") loopCount++;
    map[y][x] = "DOWN";
    y++;
    continue;
  }
  if (dir === "LEFT") {
    if (map[y][x] === "UP") loopCount++;
    map[y][x] = "LEFT";
    x--;
    continue;
  }
}

console.log(loopCount);
// console.log(map.map(l => l.join("")).join("\n"));
