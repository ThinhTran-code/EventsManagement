const mongoose = require("mongoose");
const { Schema } = mongoose;
const eventSchema = mongoose.Schema({
    requestId: { type: Schema.Types.ObjectId, ref: "Request" },
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: String,
    guests: [{ type: Schema.Types.ObjectId, ref: "Guest" }],
    photos: [{ type: String }],
    videos: [{ type: String }],
    maxParticipants: [{ type: String }], // So luong toi da nguoi tham du event
});
module.exports = mongoose.model("Event", eventSchema);
