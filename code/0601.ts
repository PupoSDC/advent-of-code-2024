const data = await Deno.readTextFile("./data/0601.txt");
const map = data.split("\n").map((s) => s.split(""));

let x: number = 0;
let y: number = 0;
let xCount: number = 0;
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
  if (map[y][x] !== "X") xCount++;
  map[y][x] = "X";

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
    y--;
    continue;
  }
  if (dir === "RIGHT") {
    x++;
    continue;
  }
  if (dir === "DOWN") {
    y++;
    continue;
  }
  if (dir === "LEFT") {
    x--;
    continue;
  }
}

console.log(xCount);
