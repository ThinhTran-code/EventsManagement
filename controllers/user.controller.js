const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
    const { username, password, email, role } = req.body; // Thêm email và role (nếu cần)

    try {
        // Check if user already exists
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Create new user
        user = new User({
            username,
            email,
            role,
            password: await bcrypt.hash(password, 10), // Hash password
        });

        await user.save();

        // Create JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
            (err, token) => {
                if (err) throw err;
                res.status(201).json({ token }); // Send token to client
            }
        );
    } catch (err) {
        console.error(err.message); // Log error
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

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Create JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
            (err, token) => {
                if (err) throw err;
                res.json({ token }); // Send token to client
            }
        );
    } catch (err) {
        console.error(err.message); // Log error
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
