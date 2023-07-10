const { readFile, writeFile } = require("fs").promises;
// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFileSync = util.promisify(readFile);
// const writeFileSync = util.promisify(writeFile);

const start = async () => {
  // try {
  //   const first = await readFileSync("./content/first.txt", "utf-8");
  //   const second = await readFileSync("./content/second.txt", "utf-8");

  //   await writeFileSync(
  //     "./content/result-mind-grenade.txt",
  //     `THIS IS AWESOME: ${first} ${second}`,
  //     { flag: "a" }
  //   );
  //   console.log(first, second);
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
