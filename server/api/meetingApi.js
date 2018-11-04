const express = require('express');
const router = express.Router();

const meetingModel = require('../models/MeetingModel');

// Get all departments
router.get('/', async (req, res) => {
    try {
        const meetings = await meetingModel.getAllMeetings();
        res.json(meetings);
    }
    catch (err) { throw err; }
});

module.exports = router;