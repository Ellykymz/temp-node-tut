const { error } = require("console");
const { createReadStream } = require("fs");

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream("./content/big-file.txt");

stream.on("data", (data) => {
  console.log(data);
});

stream.on("error", (error) => {
  console.log(error);
});
