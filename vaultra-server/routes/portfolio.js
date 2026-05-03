const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.json({
        total: 52340,
        idle: 18200,
        assets: [
            { symbol: "USDC", value: 22000 },
            { symbol: "ETH", value: 18000 },
            { symbol: "BTC", value: 12000 },
        ],
    });
});

module.exports = router;