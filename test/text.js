const expect = require("chai").expect;
const { removeNonLetterChars, calcComplexity } = require('../api/helpers/ranking');

describe("Word Ranking System", function() {
    it('should convert plain word to an array', () => {
        expect(removeNonLetterChars('hello')).to.equal('hello');
    });

    it('should remove commas and full stops', () => {
        expect(removeNonLetterChars('hello,.')).to.equal('hello');
    });

    it('should convert uppercase to lower', () => {
        expect(removeNonLetterChars('Hello')).to.equal('hello');
    });

    it('should remove all single quotes', () => {
        expect(removeNonLetterChars("hello'")).to.equal('hello');
    });

    it('should remove numbers', () => {
        expect(removeNonLetterChars('hello9')).to.equal('hello');
    });

    it('should keep spaces', () => {
        expect(removeNonLetterChars('hello it is a beautiful day')).to.equal('hello it is a beautiful day');
        ','
    });
});

describe("Calculating complexity", function() {
    it('sum, then average the complexity', () => {
        const words = [{ word: 'hello', rank: 1 }, { word: 'there', rank: 2 }, { word: 'well', rank: 3 }];
        expect(calcComplexity(words, 3)).to.equal(2);
    });
});