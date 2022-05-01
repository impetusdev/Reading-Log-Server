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



const snippets = [{
        text: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way — in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
        author: "Charles Dickens",
        source: "A Tale of Two Cities"
    },
    {
        text: 'It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.complexity seed',
        author: "Jane Austen",
        source: "Pride and Prejudice"
    },
    {
        text: "Challenge a person's beliefs, and you challenge his dignity, standing, and power. And when those beliefs are based on nothing but faith, they are chronically fragile. No one gets upset about the belief that rocks fall down as opposed to up, because all sane people can see it with their own eyes. Not so for the belief that babies are born with original sin or that God exists in three persons or that Ali is the second-most divinely inspired man after Muhammad. When people organize their lives around these beliefs, and then learn of other people who seem to be doing just fine without them--or worse, who credibly rebut them--they are in danger of looking like fools. Since one cannot defend a belief based on faith by persuading skeptics it is true, the faithful are apt to react to unbelief with rage, and may try to eliminate that affront to everything that makes their lives meaningful.",
        author: "Steven Pinker",
    },
];

// initialisation. 
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


const seedDB = async() => {
    const textWithComplexity = await rank(snippets)

    await Text.deleteMany({});
    await Text.insertMany(textWithComplexity);

    console.log(`You have seeded ${textWithComplexity.length} text snippets`);
}