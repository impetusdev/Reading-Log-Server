'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require('./api/routes/routes');
require("./config/db");

// Import API route
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));
app.options('*', cors());

// use bodyParse middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, function() {
    console.log(`Server running on port:${port}!`)
});