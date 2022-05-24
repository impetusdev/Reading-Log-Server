'use strict';
// TODO: separate these routes using router
//TODO: make these protected routes

const { protect } = require('../middleware/authMiddleware');


module.exports = function(app) {
    const textList = require('../controllers/textController');
    const wordList = require('../controllers/wordController');
    const user = require('../controllers/userController.js');
    const reading = require('../controllers/readingController');

    app.route("/text")
        .get(textList.listAllText)
        .post(textList.createNewText);

    app.route("/text/:id")
        .put(textList.updateText)
        .delete(textList.deleteText);

    // WORDS
    app.route("/word")
        .get(wordList.listAllWords);

    app.route("/word/:word")
        .get(wordList.listWord);

    //USERS
    app.route("/login")
        .post(user.loginUser);

    app.route("/register")
        .post(user.registerUser);

    app.route("/me")
        .get(protect, user.getMe); // putting in a second function here allows for middleware, specifically the authenticationMiddleware


    // READINGS
    app.route("/reading")
        .get(reading.listAllReadings)
        .post(reading.createReading);
}