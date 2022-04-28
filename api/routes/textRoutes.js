'use strict';

module.exports = function(app) {
    let textList = require('../controllers/textController');
    let wordList = require('../controllers/wordController');

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




}