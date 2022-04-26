const mongoose = require('mongoose');
const Text = require('../api/models/textModel');

let uri = `mongodb+srv://LarryDev:${process.env.MONGO_ATLAS_LARRYDEV_PASSWORD}@cluster0.esyq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

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

const seedText = [{
        text: 'hello world'
    },
    {
        text: 'second seed'
    }
]

const seedDB = async() => {
    await Text.deleteMany({});
    //TODO: make a helper function that performs the calculation of text complexity
    await Text.insertMany(seedText);
}


seedDB().then(() => {
    mongoose.connection.close();
});