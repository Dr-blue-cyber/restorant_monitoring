const fs = require("fs");
const csv = require("csv-parser");

const csvData = [];
console.log("suraj")
const generate = async () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream("../timezone.csv")
      .pipe(csv())
      .on("data", function (row) {
        csvData.push(row);
      })
      .on("error", function (error) {
        console.log(error.message);
        reject(error);
      })
      .on("end", function () {
        console.log("finished");
        resolve(csvData);
      });
  });
};

// Export the csvData once it's ready
module.exports = async function () {
  return await generate();
};
