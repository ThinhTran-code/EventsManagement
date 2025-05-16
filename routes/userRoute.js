const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/admin");
const authMiddleware = require("../middleware/authMiddleware");
const {
    register,
    login,
    findAllUser,
    findUserById,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Get all users
router.get("/", authMiddleware, adminMiddleware, findAllUser);

// Get user by ID
router.get("/:id", authMiddleware, adminMiddleware, findUserById);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

module.exports = router;
