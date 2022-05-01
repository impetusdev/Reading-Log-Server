const expect = require("chai").expect;
const { convertToPlainWords } = require('../api/helpers/ranking');

describe("Word Ranking System", function() {
    it('should convert plain word to an array', () => {
        expect(convertToPlainWords('hello')).to.deep.equal(['hello']);
    });

    it('should remove commas and full stops', () => {
        expect(convertToPlainWords('hello,.')).to.deep.equal(['hello']);
    });

    it('should convert uppercase to lower', () => {
        expect(convertToPlainWords('Hello')).to.deep.equal(['hello']);
    });

    it('should remove all single quotes', () => {
        expect(convertToPlainWords("hello'")).to.deep.equal(['hello']);
    });

    it('should remove numbers', () => {
        expect(convertToPlainWords('hello9')).to.deep.equal(['hello']);
    });

    it('should keep spaces', () => {
        expect(convertToPlainWords('hello it is a beautiful day')).to.deep.equal(['hello', 'it', 'is', 'a', 'beautiful', 'day']);
        ','
    });

});