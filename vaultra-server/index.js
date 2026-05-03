require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chat = require("./routes/chat");
const portfolio = require("./routes/portfolio");
const rebalance = require("./routes/rebalance");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chat);
app.use("/portfolio", portfolio);
app.use("/rebalance", rebalance);

app.listen(4000, () => {
    console.log("Vaultra server running on port 4000");
});