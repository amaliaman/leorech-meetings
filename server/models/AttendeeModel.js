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
        return this.Attendee.findAll({ order: ['createdAt'] });
    };

    createAttendee(name) {
        return this.Attendee.create({ name });
    }

    deleteAttendee(id) {
        return this.Attendee.destroy({ where: { id } });
    }

    async updateAttendee(id, name) {
        const attendee = await this.Attendee.findByPk(id);
        return attendee.update({ name });
    }
}

const attendeeModel = new AttendeeModel();
module.exports = attendeeModel;