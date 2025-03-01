const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;
const connectionDB = require("./config/database");
require("dotenv").config();
connectionDB();
app.listen(PORT, () => {
    console.log(`Server runing on PORT ${PORT} `);
});
