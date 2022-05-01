const Word = require("../models/word");

// Inputing the word get it's ranking difficuly
const rank = async(textSnippets) => {
    const result = await Promise.all(
        textSnippets.map(async text => {
            let textArr = text.split(' ');

            // TODO: figure out exactly why this for loop is being skipped. 
            const perform = async() => {
                console.log('inside perform')
                let inner_complexity = 0;
                try {
                    // TODO: convert this to a reduce
                    for (let i; i < textArr.length; i++) {
                        console.log('finding:', textArr[i]);

                        //TODO: convert this to a find, with all the words. 
                        await Word.findOne({ text: textArr[i] }, function(err, obj) {
                            if (err) {
                                console.log(err);
                            }
                            console.log('obj:', obj)
                            inner_complexity += obj.rank;
                            console.log('inner_complexity 1:', inner_complexity);
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
                return inner_complexity;
            }
            let complexity = await perform();

            console.log('complexity before returning:', complexity);
            return { text, complexity };
        })
    )

    console.log('result of map:', result);
    return result;
}

module.exports = rank;