const express = require('express');
const router = express.Router();

const meetingModel = require('../models/MeetingModel');

// Get all meetings
// router.get('/', async (req, res) => {
//     try {
//         const meetings = await meetingModel.getMeetings();
//         res.json(meetings);
//     }
//     catch (err) { throw err; }
// });

// Get latest meetings
router.post('/latest', async (req, res) => {
    try {
        const { pageSize } = req.body;
        const meetings = await meetingModel.getMeetings(pageSize);
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