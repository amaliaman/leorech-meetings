const express = require('express');
const router = express.Router();

const meetingModel = require('../models/MeetingModel');

// Get latest meetings
router.post('/latest', async (req, res) => {
    const { pageSize } = req.body;
    const meetings = await meetingModel.getMeetings(pageSize);
    res.json(meetings);
});

// Create a meeting
router.post('/', async (req, res) => {
    const { patient, therapist, reportDate, departmentId, attendeeId } = req.body;
    const newMeeting = await meetingModel.createMeeting(patient, therapist, reportDate, departmentId, attendeeId);
    res.status(201).json(newMeeting);
});

module.exports = router;