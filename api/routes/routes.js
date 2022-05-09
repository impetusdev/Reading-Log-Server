'use strict';


// TODO: separate these routes using router

module.exports = function(app) {
    const textList = require('../controllers/textController');
    const wordList = require('../controllers/wordController');
    const { register } = require('../controllers/userController.js');

    app.route("/text")
        .get(textList.listAllText)
        .post(textList.createNewText);

    app.route("/text/:id")
        .put(textList.updateText)
        .delete(textList.deleteText);

    app.route("/word")
        .get(wordList.listAllWords);

    app.route("/word/:word")
        .get(wordList.listWord);

    app.route("/register")
        .post(register)
}