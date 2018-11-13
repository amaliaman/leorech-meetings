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

    /**
     * Query meetings
     * @param {number} pageSize - Amount of meetings to return, optional (if not provided - return all meetings)
     * @return {Array} The list of meetings that match the query
     */
    getMeetings(pageSize) {
        return this.Meeting
            .findAll({
                include: [
                    { model: attendeeModel.Attendee, attributes: ['name'] },
                    { model: departmentModel.Department, attributes: ['name'] }
                ],
                limit: pageSize ? pageSize : null,
                order: [['reportDate', 'DESC']]
            });
    };

    /**
     * Create a new meeting
     * @param {string} patient - The patient's name
     * @param {string} therapist - The therapist's name ////////////// USER ID
     * @param {Date} reportDate - The date/time the reporting was made
     * @param {number} departmentId - The department's ID in the DB
     * @param {number} attendeeId - The attendee's ID in the DB
     * @return {Object} The newly created meeting object
     */
    async createMeeting(patient, therapist, reportDate, departmentId, attendeeId) {
        const newMeeting = await this.Meeting.create({ patient, therapist, reportDate });
        await newMeeting.setDepartment(await departmentModel.Department.findByPk(departmentId));
        await newMeeting.setAttendee(await attendeeModel.Attendee.findByPk(attendeeId));
        return this.Meeting.findByPk(newMeeting.id, {
            include: [
                { model: attendeeModel.Attendee, attributes: ['name'] },
                { model: departmentModel.Department, attributes: ['name'] }
            ]
        });
    }
}

const meetingModel = new MeetingModel();
module.exports = meetingModel;