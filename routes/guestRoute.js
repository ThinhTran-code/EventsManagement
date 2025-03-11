const express = require("express");
const router = express.Router();
const {
    createGuest,
    findAllGuest,
    getGuestById,
    updateGuest,
    deleteGuest,
} = require("../controllers/guest.controller");
router.post("/", createGuest);
router.get("/", findAllGuest);
router.get("/:id", getGuestById);
router.put("/:id", updateGuest);
router.delete("/:id", deleteGuest);

module.exports = router;
