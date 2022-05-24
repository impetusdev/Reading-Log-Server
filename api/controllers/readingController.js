const Reading = require("../models/reading")

listAllReadings = (_, res) => {
    Reading.find({}, (err, readings) => {

        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(readings);
    })
}

createReading = (req, res) => {
    const body = req.body

    const reading = Reading.create({
        ...body
    })

    console.log(reading);
    res.status(200).json(body);
}

getReading = (req, res) => {
    // check if the passage is one you have completed. 

    // getting the current user, from node.js 
    // then perform a custom get request. 
}

module.exports = { listAllReadings, createReading };