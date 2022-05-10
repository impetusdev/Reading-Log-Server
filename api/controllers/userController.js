const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const User = require('../models/user');
// @desc Register
// @route POST /register
// @access Public
// TODO: extract all of the validation logic into helper files.

const loginUser = asyncHandler(async(req, res) => {
    res.json({ message: 'Logib User' });
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
            email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

const getMe = asyncHandler(async(req, res) => {
    res.json({ message: 'Get Current User' });
})

module.exports = {
    loginUser,
    registerUser,
    getMe
}