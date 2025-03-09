const express = require("express");
const router = express.Router();
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
module.exports = router;
