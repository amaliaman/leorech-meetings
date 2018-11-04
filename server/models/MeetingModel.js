const Sequelize = require('sequelize');
const connection = require('../dataAccess/Connection');

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
    }
}

const meetingModel = new MeetingModel();
module.exports = meetingModel;