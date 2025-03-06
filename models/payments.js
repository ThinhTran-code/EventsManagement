const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    amount: Number,
    paymentDate: Date,
    paymentMethod: String, // Phương thức thanh toán
    status: { type: String, enum: ["pending", "paid", "cancelled"] },
});

module.exports = mongoose.model("Payment", paymentSchema);
