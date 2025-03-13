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
//Hash password before saving
userSchema.pre("save", async function (next) {
    try {
        //chi hash password neu no duoc sua doi hoac tao password moi
        if (!this.isModified("password")) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("User", userSchema);
