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
        return this.Department.findAll({ order: ['createdAt'] });
    }

    createDepartment(name) {
        return this.Department.create({ name });
    }

    deleteDepartment(id) {
        return this.Department.destroy({ where: { id } });
    }

    async updateDepartment(id, name) {
        const department = await this.Department.findByPk(id);
        return department.update({ name });
    }
}

const departmentModel = new DepartmentModel();
module.exports = departmentModel;