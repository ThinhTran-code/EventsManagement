const mongoose = require("mongoose");
const { Schema } = mongoose;
const eventSchema = mongoose.Schema({
    requestId: { type: Schema.Types.ObjectId, ref: "Request" },
    coupleName: String,
    date: Date,
    location: String,
    description: String,
    guests: [{ type: Schema.Types.ObjectId, ref: "Guest" }],
    tables: [{ type: Schema.Types.ObjectId, ref: "Table" }],
    photos: [{ type: String }],
    videos: [{ type: String }],
});
module.exports = mongoose.model("Event", eventSchema);
