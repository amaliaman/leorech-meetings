const express = require('express');
const router = express.Router();

const departmentModel = require('../models/DepartmentModel');

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await departmentModel.getAllDepartments();
        res.json(departments);
    }
    catch (err) { throw err; }
});

module.exports = router;