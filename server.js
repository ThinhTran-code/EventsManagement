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
require("dotenv").config();
connectionDB();

app.listen(PORT, () => {
    console.log(`Server runing on PORT ${PORT} `);
});
