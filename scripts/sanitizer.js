const fs = require("fs");

const file = process.argv[2];
const fileContent = fs.readFileSync(file);
const words = fileContent.toString().split("\n");

const sanitized = words
  .map((word) =>
    word
      .toLocaleLowerCase()
      .normalize("NFC")
      .replace(/\(.*?\)/g, "")
      .replace(/[.,'"]/g, "")
      .trim()
      .replace(/[ _+!@#$%^&*=]/g, "-")
  )
  .filter((word) => word.length > 3)
  .filter((word) => word.split("-").length <= 2);

fs.writeFileSync(file, sanitized.join("\n"));
