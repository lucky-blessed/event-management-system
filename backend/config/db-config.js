const mongoose = require('mongoose');
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (rror) {
        console.log('Error connecting to MongoDB:', error);
    }
}

module.exports = { connectMongoDB };