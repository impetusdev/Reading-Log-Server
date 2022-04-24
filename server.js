'use strict'

const express = require('express');
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3000;

// use bodyParse middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.listen(port, function() {
    console.log(`Server running on port:${port}!`)
});