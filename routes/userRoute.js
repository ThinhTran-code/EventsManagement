const express = require("express");
const router = express.Router();
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
router.get("/", findAllUser);

// Get user by ID
router.get("/:id", findUserById);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

module.exports = router;
