const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    },
},
{ timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;