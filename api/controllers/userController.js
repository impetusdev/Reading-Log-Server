const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const User = require('../models/user');
require('dotenv').config()

// @desc Register
// @route POST /register
// @access Public
// TODO: extract all of the validation logic into helper files.

const loginUser = asyncHandler(async(req, res) => {
    // get the req
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(`User password is: ${user.password}`);
    if (user && (await bcrypt.compare(password, user.password))) {

        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        res.status(400)
        throw new Error('Username or password is incorrect');
    }
})

const registerUser = asyncHandler(async(req, res) => {
    const { username, email, password } = req.body;
    // checks if all data fields have come through
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
        // check if user exists. 

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username,
            email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const getMe = asyncHandler(async(req, res) => {
    res.json({ message: 'Get Current User' });
})

// generate JWT
const generateToken = (id) => {
    console.log('hello')
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

module.exports = {
    loginUser,
    registerUser,
    getMe
}