const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

router.post("/", async (req, res) => {

    try {

        const contact = new Contact(req.body);

        await contact.save();

        res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

module.exports = router;