const express = require("express");
const router = express.Router();
const { generatePlan } = require("../services/ai");

router.post("/", async (req, res) => {
    const { message, portfolio } = req.body;

    const reply = await generatePlan(portfolio, message);

    res.json({ reply });
});

module.exports = router;