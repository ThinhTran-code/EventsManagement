const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/admin");
const {
    createEvent,
    findAllEvent,
    searchEventById,
    updateEvent,
    deleteEvent,
} = require("../controllers/event.controller"); // Sửa chính tả controller

// Tạo sự kiện (cần xác thực)
router.post("/", authMiddleware, adminMiddleware, createEvent);

// Lấy tất cả sự kiện
router.get("/", findAllEvent);

// Tìm sự kiện theo ID
router.get("/:id", searchEventById);

// Cập nhật sự kiện (cần xác thực)
router.put("/:id", authMiddleware, adminMiddleware, updateEvent);

// Xóa sự kiện (cần xác thực)
router.delete("/:id", authMiddleware, adminMiddleware, deleteEvent);

module.exports = router;
