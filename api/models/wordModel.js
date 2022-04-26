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
        type: integer,
    },
    rank: {
        type: integer,
    }
});


module.exports = mongoose.model("wordModel", WordSchema);