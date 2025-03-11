const express = require("express");
const router = express.Router();
const {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
    getServicesByEventId,
} = require("../controllers/service.controller");
router.post("/", createService);
router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.put("/:id", updateService);
router.delete("/:id", deleteService);
router.get("/event/:eventId", getServicesByEventId);
module.exports = router;
