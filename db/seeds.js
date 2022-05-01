const mongoose = require('mongoose');

const Text = require('../api/models/text');
const Word = require('../api/models/word');
const rank = require('../api/helpers/ranking');
const getWords = require('./fileReader');

let uri = `mongodb+srv://LarryDev:${process.env.MONGO_ATLAS_LARRYDEV_PASSWORD}@cluster0.esyq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};



const textSnippets = [
    'hello world',
    'second seed'
];

mongoose.connect(uri, options).then(() => {
        console.log("Database connection established!");

        seedDB().then(() => {
            mongoose.connection.close();
        });
    },
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });


//TODO: figure out why this seed seems to run before the actual mongoose connection. 
const seedDB = async() => {
    //TODO: figure out how to get this line performing first. 
    const textWithComplexity = await rank(textSnippets)
    console.log('textOBj with complexity:', textWithComplexity);

    await Text.deleteMany({});
    await Text.insertMany(textWithComplexity);

    console.log(`You have seeded ${textWithComplexity.length} text snippets`);
}