const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
    createEvent,
    findAllEvent,
    searchEventById,
    updateEvent,
    deleteEvent,
} = require("../controllers/event.contoller");
router.post("/", createEvent);
router.get("/", findAllEvent);
router.get("/:id", searchEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.delete("/:id", authMiddleware);
module.exports = router;
