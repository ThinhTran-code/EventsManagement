const express = require("express");
const router = express.Router();
const {
    createUser,
    findAllUser,
    findUserById,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", findAllUser);
router.get("/:id", findUserById);
router.put("/:id", updateUser);
router.delete(":id", deleteUser);
module.exports = router;
