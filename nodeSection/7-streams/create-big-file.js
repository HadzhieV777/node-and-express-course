const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `This file is big o_o count: {${i}}\n`, {
    flag: "a",
  });
}
