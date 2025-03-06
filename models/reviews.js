const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, min: 1, max: 5 }, // Xếp hạng (1-5 sao)
    comment: String,
    reviewDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
