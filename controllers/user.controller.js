const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
    const { username, password, email, role } = req.body;

    try {
        console.log("Received data:", req.body);

        let user = await User.findOne({ username });
        // Kiểm tra xem người dùng đã tồn tại chưa
        if (user) {
            console.log("User already exists: ", user);
            return res.status(400).json({ msg: "User already exists" });
        }

        // Tạo người dùng mới
        user = new User({
            username,
            email,
            role,
            password,
        });

        console.log("New user created:", user);

        await user.save();

        // Tạo JWT
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" },
            (err, token) => {
                if (err) {
                    console.error("JWT signing error:", err);
                    throw err;
                }
                res.status(201).json({ token });
            }
        );
    } catch (err) {
        console.error("Registration error:", err.message);
        res.status(500).json({ msg: "Server error" });
    }
};

// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Tạo JWT
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        // Tạo JWT và trả token
        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" },
            (err, token) => {
                if (err) {
                    console.error("JWT signing error:", err);
                    return res.status(500).json({ msg: "Server error" });
                }
                res.json({ token }); // Gửi token cho client
            }
        );
    } catch (err) {
        console.error("Login error:", err.message); // Log lỗi
        res.status(500).json({ msg: "Server error" });
    }
};

// Lấy tất cả người dùng
exports.findAllUser = async (req, res) => {
    try {
        const users = await User.find().select("-password").exec(); // Exclude password
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
};

// Tìm người dùng theo ID
exports.findUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select("-password")
            .exec(); // Exclude password
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
};

// Cập nhật người dùng
exports.updateUser = async (req, res) => {
    try {
        // Find user by ID
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        // Update user properties
        if (req.body.username) {
            user.username = req.body.username;
        }
        if (req.body.email) {
            user.email = req.body.email;
        }
        if (req.body.role) {
            user.role = req.body.role;
        }
        if (req.body.password) {
            user.password = await bcrypt.hash(req.body.password, 10);
        }

        // Save the updated user
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }
        res.json({ message: "Delete successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
};
