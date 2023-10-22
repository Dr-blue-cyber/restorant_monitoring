const fs = require("fs");
const csv = require('csv-parser')

const csvData = []

const generate = async () => {
    return new Promise((resolve, rejcet) => {
        fs.createReadStream('../../menu_hours.csv')
            .pipe(csv())
            .on("data", (row) => {
                csvData.push(row)
            })
            .on('error', (error) => {
                console.log(error);
                reject(error);
            })
            .on("end", () => {
                console.log("finished");
                resolve(csvData)
            });
    });

};


module.exports = async ()=>{
    return await generate();
}