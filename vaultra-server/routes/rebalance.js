const express = require("express");
const router = express.Router();
const { execute } = require("../services/executor");

router.post("/", async (req, res) => {
    const { plan } = req.body;

    const tx = await execute(plan);

    res.json({ success: true, tx });
});

module.exports = router;