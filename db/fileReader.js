const csv = require('csv-parser');
const { get } = require('express/lib/response');
const fs = require('fs');
var words = [];

const getWords = () => {
    let i = 0;
    return new Promise((resolve, reject) => {
        fs.createReadStream('db/data.csv')
            .pipe(csv())
            .on('error', error => {

            })
            .on('data', (row) => {
                i++;
                rank = Math.floor(i / 3333);
                const { word, count: frequency } = row // destructuring to get the "count" as "frequency"

                words.push({ word, frequency, rank });
            })
            .on('end', () => {
                resolve(words);
            });
    });
}

module.exports = getWords;