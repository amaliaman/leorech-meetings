const Sequelize = require('sequelize');
const connection = require('../dataAccess/Connection');

class AttendeeModel {
    constructor() {
        this.Attendee = connection.sequelize.define('attendee', {
            name: {
                type: Sequelize.STRING,
                notNull: true
            }
        });
    }

    // ========== CRUD methods ==========

    getAllAttendees() {
        return this.Attendee.findAll();
    };

    createAttendee(name) {
        return this.Attendee.create({ name });
    }

    deleteAttendee(id) {
        return this.Attendee.destroy({ where: { id } });
    }

    updateAttendee(id, name) {
        return this.Attendee.update({ name }, { where: { id } });
    }
}

const attendeeModel = new AttendeeModel();
module.exports = attendeeModel;