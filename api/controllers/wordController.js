const Word = require("../models/word");

exports.listAllWords = (_, res) => {
    Word.find({}, (err, word) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(word);
    });
};
exports.listWord = (req, res) => {
    Word.findOne({ word: req.params.word }, (err, word) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(word);
    });
};