const express = require('express');
const { connectMongoDB } = require('./config/db-config');

const app = express();
require('dotenv').config();

connectMongoDB();

app.use(express.json());
app.use("/api/users", require("./routes/users-route"))

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Express & Node Server is running on port ${port}`);
});