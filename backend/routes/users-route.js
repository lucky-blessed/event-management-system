const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { error } = require('console');

// User registration
router.post("/register", async (req, res) => {
    try {
        const userExists = await userSchema.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({ message: "User already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        await User.create(req.body);
        return res.status(201).json({ message: "User registered successfully." });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// User login
router.post("/login", async (req, res) => {
    try {

        // Check if user exist
        const user = await user.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }

        // Check if the password is correct
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        if (!validatePassword) {
            return res.status(400).json({ message: "Invalid password." })
        }

        // Create and sign in token
        const token = jwt.sign({ _id: user - _id }, process.env.JWT_SECRET_KEY);
        return res.status(200).json({ token, message: "Login successful." });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})



module.exports = router;