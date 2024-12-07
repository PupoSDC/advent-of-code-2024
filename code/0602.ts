const data = await Deno.readTextFile("./data/0601.txt");
const allMaps = data
    .split("")
    .map((l, i, arr) => {
        const newArr = [...arr];
        if (l === ".") newArr[i] = "O";
        return newArr.join("");
    })
    .filter((l) => l.includes("O"))
    .map((l) => l.replace("O", "#").split("\n").map((s) => s.split("")));
    

let loops = 0;
for (let i = 0; i < allMaps.length; i++) {
    console.log(`map ${i + 1} / ${allMaps.length}`);

    const map = allMaps[i];
    let iterations = 0;
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
      x > 0 && x < map[0].length &&
      iterations < 1E6
    ) {
      if (map[y][x] !== "X") xCount++;
      map[y][x] = "X";
      iterations++;
    
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
    
    if (iterations === 1E6) loops++;
}


console.log(loops);