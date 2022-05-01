const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(textSnippets) => {
    const result = await Promise.all(
        textSnippets.map(async text => {
            let words = text.split(' ')

            console.log(words);
            const complexityObjs = await Word.find({
                word: {
                    $in: words
                }
            });

            console.log(complexityObjs);
            // TODO: with this array reduce down to a single value. 

            const complexity = complexityObjs.reduce((prev, curr) => prev + curr.rank, 0);
            console.log(complexity);
            return { text, complexity };
        })
    )

    console.log('result of map:', result);
    return result;
}

module.exports = rank;