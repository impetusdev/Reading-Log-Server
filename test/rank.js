const rank = require("../api/helpers/ranking");
const expect = require("chai").expect;

describe("Word Ranking System", function() {
    it('should return an integer rank for the input "the"', async(done) => {
        const wordRank = await rank("the");
        console.log(wordRank);
        expect(wordRank).to.equal(0);
        done();
    });
});