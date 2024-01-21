const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  subject: {
    type:String,
    required:true,
  },
  gender:{
    type: String,
    enum:["Male", "Female", "Other"],
    required:true,
  }
}, {timestamps:true})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = {
  Teacher
}