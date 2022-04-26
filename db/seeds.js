const mongoose = require('mongoose');

const Text = require('../api/models/textModel');
const Rank = require('../api/models/rankModel');
const rank = require('../api/helpers/ranking')

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
];

// perform the calculation of seeing how complex the values are. 


const seedDB = async() => {
    await Text.deleteMany({});
    //TODO: make a helper function that performs the calculation of text complexity
    await Text.insertMany(seedText);

    console.log(`You have seeded ${seedText.length} text snippets`);
}


seedDB().then(() => {
    mongoose.connection.close();
});