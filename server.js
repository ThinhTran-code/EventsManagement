const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;
const connectionDB = require("./config/database");
const Guest = require("./models/guests");
const Event = require("./models/events");
const Table = require("./models/tables");
const User = require("./models/users");
require("dotenv").config();
connectionDB();

app.listen(PORT, () => {
    console.log(`Server runing on PORT ${PORT} `);
});
