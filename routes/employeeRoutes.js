const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");


// CREATE Employee
router.post("/", async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.json(employee);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


// READ all employees
router.get("/", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});


// READ single employee
router.get("/:id", async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
});


// UPDATE employee
router.put("/:id", async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(employee);
});


// DELETE employee
router.delete("/:id", async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee Deleted" });
});

module.exports = router;
