const mongoose = require("mongoose");
const guestSchema = mongoose.Schema({
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    name: String,
    phone: String,
    email: String,
    address: String,
    relationship: String,
    attendance: { type: Boolean, default: false },
    tableId: { type: Schema.Types.ObjectId, ref: "Table", nullable: true },
});
module.exports = mongoose.model("Guest", guestSchema);
