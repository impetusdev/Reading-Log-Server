const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(textSnippets) => {
    const result = await Promise.all(
        textSnippets.map(async text => {
            let textArr = text.split(' ');

            console.log('search word:', textArr[0]);
            const { rank } = await Word.findOne({ word: textArr[0] });

            console.log('complexity before returning:', rank);
            return { text, complexity: rank };
        })
    )

    console.log('result of map:', result);
    return result;
}

module.exports = rank;