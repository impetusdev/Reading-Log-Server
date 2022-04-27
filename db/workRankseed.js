const mongoose = require('mongoose');

const Word = require('../api/models/wordModel');
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


////////////////////////
//CSV parsing for data//
////////////////////////

// perform the calculation of seeing how complex the values are. 
// TODO: access the csv file measuring word frequency

const seedDB = async() => {
    const words = await getWords();

    await Word.deleteMany({});
    await Word.insertMany({ word: 'hello' });
    console.log(`You have seeded ${words.length} text snippets`);
}

seedDB().then(() => {
    mongoose.connection.close();
});