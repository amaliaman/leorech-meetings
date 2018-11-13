const express = require('express');
const router = express.Router();

const departmentModel = require('../models/DepartmentModel');

// Get all departments
router.get('/', async (req, res) => {
    const departments = await departmentModel.getDepartments();
    res.json(departments);
});

// Create a new department
router.post('/', async (req, res) => {
    const { name } = req.body;
    const newDepartment = await departmentModel.createDepartment(name);
    res.status(201).json(newDepartment);
});

// Delete a department
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const affectedRows = await departmentModel.deleteDepartment(id);
    if (affectedRows === 1) {
        res.status(204).send();
    }
    else {
        throw new Error('Error deleting department');
    }
});

// Update a department
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const affectedRows = await departmentModel.updateDepartment(id, name);
    if (affectedRows[0] === 1) {
        res.status(204).send();
    }
    else {
        throw Error('Error updating department');
    }
});

module.exports = router;