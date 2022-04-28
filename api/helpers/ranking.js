const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(text) => {
    let textArr = text.split(' ');

    let complexity = 0;

    for (const word of textArr) {
        const hello = Word.find({ word });
        console.log(hello);
    }
}

module.exports = rank;