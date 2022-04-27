'use strict';

const mongoose = require("mongoose");

//declare schema and assign a Schema class
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
    },
    rank: {
        type: Number,
    }
});

module.exports = mongoose.model("wordModel", WordSchema);