import fs from "fs";

(() => {
  const namespaceImport = fs.readFileSync(
    "./dist/index-namespace-import.js",
    "utf8"
  );
  const namedImport = fs.readFileSync("./dist/index-named-import.js", "utf8");

  console.log(`./dist/index-namespace-import.js\t${namespaceImport.length}`);
  console.log(`./dist/index-named-import.js\t\t${namedImport.length}`);
})();
