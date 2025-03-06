const mongoose = require("mongoose");
const { Schema } = mongoose;
const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    category: String, //Loai dich vu (Trang tri, am thanh, anh sang)
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
});
module.exports = mongoose.model("Service", serviceSchema);
