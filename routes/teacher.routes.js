const express = require("express");
const {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller.js");

const teacherRouter = express.Router();

teacherRouter.get("/", async (req, res) => {
  try {
    const teachers = await getTeachers();
    res
      .status(200)
      .json({ message: "Teachers Retrieved Successfully", teachers });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve teachers from database", error });
  }
});

teacherRouter.post("/", async (req, res) => {
  try {
    const { teacherData } = req.body;
    const addedTeacher = await addTeacher(teacherData);
    if (addedTeacher) {
      res
        .status(200)
        .json({ message: "Teacher added successfully", addedTeacher });
    } else {
      res.status(404).json({ message: "Failed to Add Teacher to Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while adding Teacher to DB", error });
  }
});

teacherRouter.post("/:teacherId", async (req, res) => {
  try {
    const { teacherData } = req.body;
    const teacherId = req.params.teacherId;
    const updatedTeacher = await updateTeacher(teacherId, teacherData);
    if (updatedTeacher) {
      res
        .status(200)
        .json({ message: "Teacher updated successfully", updatedTeacher });
    } else {
      res.status(404).json({ message: "Failed to Update Teacher to Db" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while Updating Teacher", error });
  }
});

teacherRouter.delete("/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const deletedTeacher = await deleteTeacher(teacherId);
    if (deletedTeacher) {
      res
        .status(200)
        .json({ message: "Teacher deleted successfully", deletedTeacher });
    } else {
      res.status(404).json({ message: "Failed to Delete Teacher in Db" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting Teacher to DB", error });
  }
});

module.exports = teacherRouter;
