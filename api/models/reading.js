'use strict';

const mongoose = require("mongoose");

//declare schema and assign a Schema class
const Schema = mongoose.Schema;

// Create Schema Instance called TextSchema and add properties
const ReadingSchema = new Schema({
    time_taken: {
        type: Number,
        required: true
    },
    wpm: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    text: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "textModel"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel"
    }
});

module.exports = mongoose.model("readingModel", ReadingSchema);