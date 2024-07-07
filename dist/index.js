"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
(() => {
    const aliasImport = fs_1.default.readFileSync("./dist/index-namespace-import.js", "utf8");
    const namedImport = fs_1.default.readFileSync("./dist/index-named-import.js", "utf8");
    console.log(`./dist/index-namespace-import.js\t${aliasImport.length}`);
    console.log(`./dist/index-named-import.js\t\t${namedImport.length}`);
})();
