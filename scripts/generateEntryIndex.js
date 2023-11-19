import fs from "fs";

async function generateDefaultIndexFile() {
  const exportEntries = fs.readdirSync("./svg", { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name)
    .map((directory) => `export * from "./${directory}";`);
  fs.writeFileSync("./svg/index.ts", exportEntries.join("\n"));
}

generateDefaultIndexFile();