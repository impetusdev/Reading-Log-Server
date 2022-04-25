'use strict';

module.exports = function(app) {
    let textList = require('../controllers/textController');

    app.route("/text")
        .get(textList.listAllText)
        .post(textList.createNewText);

    app.route("/text/:id")
        .put(textList.updateText)
        .delete(textList.deleteText);
}