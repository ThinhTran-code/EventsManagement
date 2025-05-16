const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    console.log("Role before saving:", this.role);
    try {
        // Chỉ hash mật khẩu nếu nó được sửa đổi hoặc nếu là user mới
        if (this.isModified("password")) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        console.log("IsAdmin before saving:", this.isAdmin);
        // Set isAdmin = true nếu role là 'admin'
        if (this.role === "admin") {
            this.isAdmin = true;
        }
        console.log("IsAdmin after saving:", this.isAdmin);
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("User", userSchema, "users");
