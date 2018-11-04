const Sequelize = require('sequelize');
const connection = require('../dataAccess/Connection');
const meetingModel = require('./MeetingModel');

class AttendeeModel {
    constructor() {
        this.Attendee = connection.sequelize.define('attendee', {
            name: {
                type: Sequelize.STRING,
                notNull: true
            }
        });

        this.setAssociations();
    }

    setAssociations() {
        meetingModel.Meeting.belongsTo(this.Attendee);
        this.Attendee.hasMany(meetingModel.Meeting);
    }

    // ========== CRUD methods ==========

    getAllAttendees() {
        return this.Attendee.findAll();
    };
}

const attendeeModel = new AttendeeModel();
module.exports = attendeeModel;