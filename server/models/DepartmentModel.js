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

    getDepartments() {
        return this.Department.findAll();
    }

    createDepartment(name) {
        return this.Department.create({ name });
    }

    deleteDepartment(id) {
        return this.Department.destroy({ where: { id } });
    }

    updateDepartment(id, name) {
        return this.Department.update({ name }, { where: { id } });
    }
}

const departmentModel = new DepartmentModel();
module.exports = departmentModel;