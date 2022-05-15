const Text = require("../models/text");
const { rank } = require('../helpers/ranking');

listAllText = (_, res) => {
    Text.find({}, (err, text) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(text);
    });
};

createNewText = async(req, res) => {
    let ranked = await rank([req.body]);

    Text.insertMany(ranked, (err, text) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(text);
    })
};

updateText = (req, res) => {
    Text.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, text) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(text);
    });
};


deleteText = (req, res) => {
    Text.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json({ message: "Text was successfully deleted" });
    })
};

module.exports = {
    listAllText,
    createNewText,
    updateText,
    deleteText
}