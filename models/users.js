const mongoose = require("mongoose");
const { Schema } = mongoose; // Import Schema
// Cho nay dang khuyen nghi dung new Schema thay vi mongoose.Schema
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});
module.exports = mongoose.model("User", userSchema);
