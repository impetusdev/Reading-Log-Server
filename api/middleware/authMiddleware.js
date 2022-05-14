// this middleware should setup the get me controller method to run for every private route.
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

const protect = asyncHandler(async(req, res, next) => {
    // checks the headers to see if the jwt token is sent through. 
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // checks if authorization header exists and is passed with the word "Bearer"
        try {
            // get the token from the header. 
            token = req.headers.authorization.split(' ')[1]; // where 1 is the token and 0 is "Bearer"

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password') // select here excludes the password 

            next()
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
})

module.exports = { protect };