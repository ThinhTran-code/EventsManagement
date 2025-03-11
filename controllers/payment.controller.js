const Payment = require("../models/payments");
// Tạo thanh toán mới
exports.createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy tất cả thanh toán
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate("eventId").exec(); // Populate eventId
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy thanh toán theo ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id)
            .populate("eventId")
            .exec(); // Populate eventId
        if (!payment) {
            return res.status(404).json({ message: "Payment not found" });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật thanh toán
exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true, // Run validators during update
            }
        )
            .populate("eventId")
            .exec(); // Populate eventId
        if (!payment) {
            return res.status(404).json({ message: "Payment not found" });
        }
        res.json(payment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa thanh toán
exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Payment not found" });
        }
        res.json({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy thanh toán theo eventId
exports.getPaymentsByEventId = async (req, res) => {
    try {
        const payments = await Payment.find({ eventId: req.params.eventId })
            .populate("eventId")
            .exec();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
