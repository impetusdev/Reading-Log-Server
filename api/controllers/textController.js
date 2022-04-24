const Text = require("../models/textModel");

exports.listAllText = (req, res) => {
    Text.find({}, (err, text) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(text);
    });
};

exports.createNewText = (req, res) => {
    let newText = new Text(req.body);
    newText.save((err, text) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(text);
    });
};

exports.updateText = (req, res) => {
    Text.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, text) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(text);
    });
};


exports.deleteText = (req, res) => {
    Text.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).json({ message: "Text was successfully deleted" });
    })
};