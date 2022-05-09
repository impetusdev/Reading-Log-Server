const User = require('../models/user');

// @desc Register
// @route POST /register
// @access Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}

module.exports = {
    registerUser,
}