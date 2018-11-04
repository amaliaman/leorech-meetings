const express = require('express');
const router = express.Router();

const attendeeModel = require('../models/AttendeeModel');

// Get all attendees
router.get('/', async (req, res) => {
    try {
        const attendees = await attendeeModel.getAllAttendees();
        res.json(attendees);
    }
    catch (err) { throw err; }
});

module.exports = router;