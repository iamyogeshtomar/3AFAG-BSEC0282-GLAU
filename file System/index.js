const fs = require(`node:fs`);

const word = `This is latest dummy data`;

const appendedData = ` This makes append`;

// async function fileWrite(data) {
//   try {
//     await fs.writeFile(`sample.txt`, data, {
//       encoding: "utf-8",
//       flag: `a`,
//     });
//     console.log(`File written successfully!!!`);
//   } catch (error) {
//     console.log(error);
//   }
// }

fs.writeFile(`message.txt`, word, (err) => {
  if (err) {
    throw err;
  }
  console.log(`File written successfully!!!`);
});

// fileWrite(appendedData);
