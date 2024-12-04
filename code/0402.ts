const data = await Deno.readTextFile("./data/0401.txt");
const area = data.split("\n").map(l => l.split(""));

let xmasCounter = 0;
for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area.length; x++) {
        if (area[x]?.[y] !== "A") continue;

        if (!(
            (
                area[x - 1]?.[y - 1] === "M" &&
                area[x + 1]?.[y + 1] === "S" 
            ) ||
            (
                area[x - 1]?.[y - 1] === "S" &&
                area[x + 1]?.[y + 1] === "M" 
            ) 
        )) continue;

        if (!(
            (
                area[x + 1]?.[y - 1] === "M" &&
                area[x - 1]?.[y + 1] === "S" 
            ) ||
            (
                area[x + 1]?.[y - 1] === "S" &&
                area[x - 1]?.[y + 1] === "M" 
            ) 
        )) continue;

        xmasCounter++;
    }
}

console.log(xmasCounter);