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

// Create a meeting
router.post('/', async (req, res) => {
    try {
        const { patient, therapist, reportDate, departmentId, attendeeId } = req.body;
        const newMeeting = await meetingModel.createMeeting(patient, therapist, reportDate, departmentId, attendeeId);
        res.json(newMeeting);
    }
    catch (err) { throw err; }
});

module.exports = router;