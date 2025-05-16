require("dotenv").config(); // Thêm dòng này để tải tệp .env

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const connectionDB = require("./config/database");
const cors = require("cors");
const eventRoute = require("./routes/eventRoute");

const userRoute = require("./routes/userRoute");
app.use(cors());

connectionDB();
app.use(express.json());
app.use("/events", eventRoute);

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server runing on PORT ${PORT} `);
});
