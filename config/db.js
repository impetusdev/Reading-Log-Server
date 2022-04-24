const mongoose = require("mongoose");

//TODO: put in the correct password
var uri = "mongodb+srv://LarryDev:<password>@cluster0.esyq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options).then(() => {
        console.log("Database connection established!");
    },
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });