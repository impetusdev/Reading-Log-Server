const text = require("body-parser/lib/types/text");
const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(snippets) => {
    return result = await Promise.all(
        snippets.map(async snippet => {
            const words = removeNonLetterChars(snippet.text).split(' ');
            const wordCount = words.length;


            const complexityObjs = await Word.find({
                word: {
                    $in: words // finds all Word entries that match any of the words
                }
            });

            // sums the complexity value from each word
            const complexity = calcComplexity(complexityObjs, wordCount);
            return {...snippet, complexity, wordCount }; // adds the complexity field to the snippet
        }))
}

// converts to lowercase & removes all non letter characters
const removeNonLetterChars = (textSnippet) => {
    //TODO: consider fixing the cases where a single apostrophe mark would for possessive etc would break("that's" should be converted to "that"). 
    return textSnippet.toLowerCase().replace(/[^a-z ]/g, '');
}

// sums the rank field of all complexityObjs then divides by the wordCount
const calcComplexity = (complexityObjs, wordCount) => {
    return complexityObjs.reduce((prev, curr) => prev + curr.rank, 0) / wordCount;
}

module.exports = { rank, removeNonLetterChars, calcComplexity };