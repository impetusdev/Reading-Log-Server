const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(textSnippets) => {
    const result = await Promise.all(
        textSnippets.map(async text => {
            const words = text.split(' ')

            const complexityObjs = await Word.find({
                word: {
                    $in: words
                }
            });

            const complexity = complexityObjs.reduce((prev, curr) => prev + curr.rank, 0);
            return { text, complexity };
        })
    )

    console.log('result of map:', result);
    return result;
}

module.exports = rank;