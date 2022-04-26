const expect = require("chai").expect;

describe("Mocha & Chai test", function() {
    it("should return true", function() {
        expect('text').to.equal("text")
    })
})