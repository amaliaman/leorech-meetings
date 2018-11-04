const Sequelize = require('sequelize');
const connection = require('../dataAccess/Connection');

class DepartmentModel {
    constructor() {
        this.Department = connection.sequelize.define('department', {
            name: {
                type: Sequelize.STRING,
                notNull: true
            }
        });
    }

    // ========== CRUD methods ==========

    getAllDepartments() {
        return this.Department.findAll();
    };
}

const departmentModel = new DepartmentModel();
module.exports = departmentModel;