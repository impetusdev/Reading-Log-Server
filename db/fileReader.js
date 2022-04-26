const csv = require('csv-parser');
const fs = require('fs');

const getWords = () => {
    const words = [];
    fs.createReadStream('db/data.csv')
        .pipe(csv())
        .on('data', (row) => {
            words.push(row)
        })
        .on('end', () => {
            return words;
        });
}

module.exports = getWords;