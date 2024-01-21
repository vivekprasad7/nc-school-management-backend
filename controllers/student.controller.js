const Student = require("../models/student.model.js");

const addStudent = async (studentData) => {
  try {
    const newStudent = new Student(studentData);

    const savedStudent = await newStudent.save();

    if (savedStudent) {
      console.log("Student added successfully", savedStudent);
      return savedStudent;
    } else {
      console.log("Unable to add student to DB");
    }
  } catch (error) {
    console.error("Error while adding Student", error.message);
  }
};

const getStudents = async () => {
  try {
    const allStudents = await Student.find();

    console.log("Students Fetched Successfully From DB", allStudents);

    return allStudents;
  } catch (error) {
    console.error("Error while fetching Students from database", error.message);
  }
};

const updateStudent = async (studentId, studentToBeUpdated) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      studentToBeUpdated,
    );
    if (updatedStudent) {
      console.log("Student Updated Successfully", updatedStudent);
      return updatedStudent;
    } else {
      console.log("Unable to update Student");
    }
  } catch (error) {
    console.error("Error while updating the Student",  error.message);
  }
};

const deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (deletedStudent) {
      console.log("Student Deleted Successfully", deletedStudent);
      return deletedStudent;
    } else {
      console.log("Unable to delete Student");
    }
  } catch (error) {
    console.error("Error while deleting the Student", error);
  }
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
