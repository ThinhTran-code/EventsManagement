const express = require("express");
const router = express.Router();
const {
    createPayment,
    getPaymentById,
    getAllPayments,
    getPaymentsByEventId,
    updatePayment,
    deletePayment,
} = require("../controllers/payment.controller");
router.post("/", createPayment);
router.get("/:id", getPaymentById);
router.get("/", getAllPayments);
router.get("/event/:eventId", getPaymentsByEventId);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);
module.exports = router;
