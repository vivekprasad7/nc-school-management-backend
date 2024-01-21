const Teacher = require("../models/teacher.model.js");

const addTeacher = async (teacherData) => {
  try {
    const newTeacher = new Teacher(teacherData);
    const savedTeacher = await newTeacher.save();

    if (savedTeacher) {
      console.log("Teacher added successfully:", savedTeacher);
      return savedTeacher;
    } else {
      console.log("Unable to add teacher to DB");
    }
  } catch (error) {
    console.error("Error while adding Teacher:", error.message);
  }
};

const getTeachers = async () => {
  try {
    const allTeachers = await Teacher.find();
    console.log("Teachers fetched successfully from DB:", allTeachers);
    return allTeachers;
  } catch (error) {
    console.error(
      "Error while fetching Teachers from database:",
      error.message,
    );
  }
};

const updateTeacher = async (teacherId, teacherToBeUpdated) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      teacherToBeUpdated,
    );

    if (updatedTeacher) {
      console.log("Teacher updated successfully:", updatedTeacher);
      return updatedTeacher;
    } else {
      console.log("Unable to update Teacher");
    }
  } catch (error) {
    console.error("Error while updating the Teacher:", error.message);
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);

    if (deletedTeacher) {
      console.log("Teacher deleted successfully:", deletedTeacher);
      return deletedTeacher;
    } else {
      console.log("Unable to delete Teacher");
    }
  } catch (error) {
    console.error("Error while deleting the Teacher:", error.message);
  }
};

module.exports = {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
