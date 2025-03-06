const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    // Cho nay dang khuyen nghi dung new Schema thay vi mongoose.Schema
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    role: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
});
module.exports = mongoose.model("User", userSchema);
