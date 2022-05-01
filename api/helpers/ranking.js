const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(snippets) => {
    const result = await Promise.all(
        snippets.map(async snippet => {
            const words = snippet.text.split(' ')

            const complexityObjs = await Word.find({
                word: {
                    $in: words
                }
            });

            const complexity = complexityObjs.reduce((prev, curr) => prev + curr.rank, 0);
            return {...snippet, complexity };
        })
    )

    console.log('result of map:', result);
    return result;
}

module.exports = rank;