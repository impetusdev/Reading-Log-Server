const rank = require("../api/helpers/ranking");
const expect = require("chai").expect;

describe("Word Ranking System", function() {
    it('should return an integer rank for the input "the"', function() {
        const wordRank = rank("the", 1);
        expect(wordRank).to.equal(1);
    });
});