const mongoose = require("mongoose");
const { Schema } = mongoose;
const tableSchema = mongoose.Schema({
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    tableName: String,
    capacity: Number,
    guestIds: [{ type: Schema.Types.ObjectId, ref: "Guest" }],
});
module.exports = mongoose.model("Table", tableSchema);
