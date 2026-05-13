const express = require("express");
const router = express.Router();

const Feedback = require("../models/feedback");

router.post("/", async (req, res) => {

    try {

        const feedback = new Feedback(req.body);

        await feedback.save();

        res.status(201).json({
            message: "Feedback Added"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

router.get("/", async (req, res) => {

    const feedbacks =
    await Feedback.find().sort({ createdAt: -1 });

    res.json(feedbacks);

});

module.exports = router;