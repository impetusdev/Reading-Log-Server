'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const routes = require('./api/routes/textRoutes'); //importing route
require("./config/db");

// Import API route

const app = express();
routes(app);
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