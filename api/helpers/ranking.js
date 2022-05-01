const text = require("body-parser/lib/types/text");
const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(snippets) => {
    return result = await Promise.all(
        snippets.map(async snippet => {
            const words = convertToPlainWords(snippet.text)

            const complexityObjs = await Word.find({
                word: {
                    $in: words // finds all Word entries that match any of the words
                }
            });

            // sums the complexity value from each word
            const complexity = complexityObjs.reduce((prev, curr) => prev + curr.rank, 0);
            return {...snippet, complexity }; // adds the complexity field to the snippet
        })
    )
}

//TODO: consider fixing the cases where a single apostrophe mark would for possessive etc would break. 
const convertToPlainWords = (textSnippet) => {
    // converts to lowercase & removes all non letter characters & returns as array of words
    return textSnippet.toLowerCase().replace(/[^a-z ]/g, '').split(' ');
}

module.exports = { rank, convertToPlainWords };