const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;
const connectionDB = require("./config/database");
const Guest = require("./models/guests");
const Event = require("./models/events");
const User = require("./models/users");
const Service = require("./models/services");
const Payment = require("./models/payments");
const Review = require("./models/reviews");
const eventRoute = require("./routes/eventRoute");
require("dotenv").config();
connectionDB();
app.use(express.json());
app.use("/events", eventRoute);
app.listen(PORT, () => {
    console.log(`Server runing on PORT ${PORT} `);
});
