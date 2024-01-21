const express = require("express");

const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller.js");

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  try {
    const students = await getStudents();
    res
      .status(200)
      .json({ message: "Students Retrieved Successfully", students: students });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve students from database", error });
  }
});

studentRouter.post("/", async (req, res) => {
  try {
    const { studentData } = req.body;
    const addedStudent = await addStudent(studentData);
    if (addedStudent) {
      res
        .status(200)
        .json({ message: "Student added successfully", addedStudent });
    } else {
      res.status(404).json({ message: "Failed to Add Student to Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while adding Student to DB", error });
  }
});

studentRouter.post("/:studentId", async (req, res) => {
  try {
    const { studentData } = req.body;
    const studentId = req.params.studentId
    const updatedStudent = await updateStudent(studentId, studentData);
    if (updatedStudent) {
      res
        .status(200)
        .json({ message: "Student updated successfully", updatedStudent });
    } else {
      res.status(404).json({ message: "Failed to Update Student to Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while Updating Student", error });
  }
});

studentRouter.delete("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId
    const deletedStudent = await deleteStudent(studentId);
    if (deletedStudent) {
      res
        .status(200)
        .json({ message: "Student deleted successfully", deletedStudent });
    } else {
      res.status(404).json({ message: "Failed to Delete Student in Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting Student to DB", error });
  }
});

module.exports = studentRouter;