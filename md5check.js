#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const lineReader = require("line-reader");
const md5File = require("md5-file");

const args = process.argv.slice(2);
if (!args[0]) {
  console.log("Usage: md5check [file(s)]");
}
args.forEach(function (file) {
  checkFile(file);
});

function checkFile(file) {
  console.log("Checking MD5 sums in file " + file);
  if (!fs.existsSync(file)) {
    console.log("File does not exist!");
    return;
  }
  const folder = path.dirname(file) + "/";
  lineReader.eachLine(file, (line) => {
    if (line.startsWith(";")) return; // ignore comments

    const [sum, file] = line.split(/\s+/);
    const fullPath = folder + file.replace("*", "").replaceAll("\\", "/");

    process.stdout.write(`Checking file: ${fullPath}... `);
    const hash = md5File.sync(fullPath);
    if (sum === hash) {
      console.log("\x1b[32m%s\x1b[0m", "Passed");
    } else {
      console.log("\x1b[31m%s\x1b[0m", "Failed!");
    }
  });
}
