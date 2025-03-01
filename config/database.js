const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Cho phep doc cac bien moi truong tu env

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Connected to MongoDB failed");
        process.exit(1);
    }
};
module.exports = connectionDB;
