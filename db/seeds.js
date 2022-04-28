const mongoose = require('mongoose');

const Text = require('../api/models/textModel');
const Word = require('../api/models/wordModel');
const rank = require('../api/helpers/ranking');
const getWords = require('./fileReader');

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


////////////////////////
//CSV parsing for data//
////////////////////////

// perform the calculation of seeing how complex the values are. 
// TODO: access the csv file measuring word frequency

const seedDB = async() => {
    const words = await getWords();

    await Text.deleteMany({});
    await Text.insertMany(seedText);
    console.log(`You have seeded ${seedText.length} text snippets`);
    //TODO: make a helper function that performs the calculation of text complexity

    await Word.deleteMany({});
    // await Word.insertMany(words);
    await Word.insertMany({ word: 'hello' });
    console.log(`You have seeded ${words.length} text snippets`);
}

seedDB().then(() => {
    mongoose.connection.close();
});