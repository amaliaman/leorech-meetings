const Sequelize = require('sequelize');
const connection = require('../dataAccess/Connection');
const meetingModel = require('./MeetingModel');

class DepartmentModel {
    constructor() {
        this.Department = connection.sequelize.define('department', {
            name: {
                type: Sequelize.STRING,
                notNull: true
            }
        });

        this.setAssociations();
    }

    setAssociations() {
        meetingModel.Meeting.belongsTo(this.Department);
        this.Department.hasMany(meetingModel.Meeting);
    }

    // ========== CRUD methods ==========

    getAllDepartments() {
        return this.Department.findAll();
    };
}

const departmentModel = new DepartmentModel();
module.exports = departmentModel;