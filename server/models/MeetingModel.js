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
            reportDate: {
                type: Sequelize.DATE
            }
        });

        this.setAssociations();
    }

    setAssociations() {
        this.Meeting.belongsTo(attendeeModel.Attendee);
        // attendeeModel.Attendee.hasOne(this.Meeting);

        this.Meeting.belongsTo(departmentModel.Department);
        // departmentModel.Department.hasOne(this.Meeting);
    }

    // ========== CRUD methods ==========

    getAllMeetings() {
        return this.Meeting
            .findAll({
                include: [
                    { model: attendeeModel.Attendee, attributes: ['name'] },
                    { model: departmentModel.Department, attributes: ['name'] }
                ],
                // raw: true
            });
    };

    async createMeeting(patient, therapist, reportDate, departmentId, attendeeId) {
        try {
            const newMeeting = await this.Meeting.create({ patient, therapist, reportDate });
            await newMeeting.setDepartment(await departmentModel.Department.findByPk(departmentId));
            await newMeeting.setAttendee(await attendeeModel.Attendee.findByPk(attendeeId));
            return newMeeting;
        }
        catch (err) { throw err; }
    }
}

const meetingModel = new MeetingModel();
module.exports = meetingModel;