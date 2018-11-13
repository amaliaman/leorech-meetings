const express = require('express');
const router = express.Router();

const attendeeModel = require('../models/AttendeeModel');

// Get all attendees
router.get('/', async (req, res) => {
    const attendees = await attendeeModel.getAllAttendees();
    res.json(attendees);
});

// Create a new attendee
router.post('/', async (req, res) => {
    const { name } = req.body;
    const newAttendee = await attendeeModel.createAttendee(name);
    res.status(201).json(newAttendee);
});

// Delete an attendee
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const affectedRows = await attendeeModel.deleteAttendee(id);
    if (affectedRows === 1) {
        res.status(204).send();
    }
    else {
        throw new Error('Error deleting attendee');
    }
});

// Update an attendee
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const affectedRows = await attendeeModel.updateAttendee(id, name);
    if (affectedRows[0] === 1) {
        res.status(204).send();
    }
    else {
        throw Error('Error updating attendee');
    }
});
module.exports = router;