'use strict';

const mongoose = require("mongoose");

//declare schema and assign a Schema class
const Schema = mongoose.Schema;

// Create Schema Instance called TextSchema and add properties
const TextSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    wordCount: {
        type: Number,

    },
    complexity: {
        type: Number,
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("textModel", TextSchema);