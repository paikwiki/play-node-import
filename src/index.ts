import fs from "fs";

(() => {
  const aliasImport = fs.readFileSync(
    "./dist/index-namespace-import.js",
    "utf8"
  );
  const namedImport = fs.readFileSync("./dist/index-named-import.js", "utf8");

  console.log(`./dist/index-namespace-import.js\t${aliasImport.length}`);
  console.log(`./dist/index-named-import.js\t\t${namedImport.length}`);
})();
