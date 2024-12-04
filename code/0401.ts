const data = await Deno.readTextFile("./data/0401.txt");
const area = data.split("\n").map(l => l.split(""));

let xmasCounter = 0;
for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area.length; x++) {
        // UP
        const up = 
            area[x]?.[y] + 
            area[x]?.[y + 1] + 
            area[x]?.[y + 2] + 
            area[x]?.[y + 3];
        if (up === "XMAS") xmasCounter++;

        // down
        const down = 
            area[x]?.[y] + 
            area[x]?.[y - 1] + 
            area[x]?.[y - 2] + 
            area[x]?.[y - 3];
        if (down === "XMAS") xmasCounter++;

        // left
        const left = 
            area[x]?.[y] + 
            area[x + 1]?.[y] + 
            area[x + 2]?.[y] + 
            area[x + 3]?.[y];
        if (left === "XMAS") xmasCounter++;

        // right
        const right = 
            area[x]?.[y] + 
            area[x - 1]?.[y] + 
            area[x - 2]?.[y] + 
            area[x - 3]?.[y];
        if (right === "XMAS") xmasCounter++;

        // up-left
        const upLeft = 
            area[x]?.[y] + 
            area[x + 1]?.[y + 1] + 
            area[x + 2]?.[y + 2] + 
            area[x + 3]?.[y + 3];
        if (upLeft === "XMAS") xmasCounter++;

        // up-right
        const upRight = 
            area[x]?.[y] + 
            area[x - 1]?.[y + 1] + 
            area[x - 2]?.[y + 2] + 
            area[x - 3]?.[y + 3];
        if (upRight === "XMAS") xmasCounter++;

        // down-left
        const downLeft = 
            area[x]?.[y] + 
            area[x + 1]?.[y - 1] + 
            area[x + 2]?.[y - 2] + 
            area[x + 3]?.[y - 3];
        if (downLeft === "XMAS") xmasCounter++;

        // down-right
        const downRight = 
            area[x]?.[y] + 
            area[x - 1]?.[y - 1] + 
            area[x - 2]?.[y - 2] + 
            area[x - 3]?.[y - 3];
        if (downRight === "XMAS") xmasCounter++;

    }
}

console.log(xmasCounter);