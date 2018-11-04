const Sequelize = require('sequelize');
const connection = require('../dataAccess/Connection');
const departmentModel = require('./DepartmentModel');
const attendeeModel = require('./AttendeeModel');

class MeetingModel {
    constructor() {
        this.Meeting = connection.sequelize.define('meeting', {
            patient: {
                type: Sequelize.STRING,
                notNull: true
            },
            ////////////////////////// TODO: should be user ID
            therapist: {
                type: Sequelize.STRING,
                notNull: true
            },
            timestamp: {
                type: Sequelize.DATE
            }
        });

        this.setAssociations();

    }
    setAssociations() {
        this.Meeting.belongsTo(attendeeModel.Attendee);
        attendeeModel.Attendee.hasMany(this.Meeting);

        this.Meeting.belongsTo(departmentModel.Department);
        departmentModel.Department.hasMany(this.Meeting);
    }

    // ========== CRUD methods ==========

    getAllMeetings() {
        return this.Meeting
            .findAll({
                include: [
                    { model: attendeeModel.Attendee, attributes: ['name'] },
                    { model: departmentModel.Department, attributes: ['name'] }
                ],
                attributes: ['id', 'patient', 'therapist', 'timestamp'],
                // raw: true
            });
    };
}

const meetingModel = new MeetingModel();
module.exports = meetingModel;