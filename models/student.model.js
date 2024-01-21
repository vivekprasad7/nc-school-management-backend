const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  age: {
    type:Number,
    required:true,
  },
  grade:{
    type: String,
    enum: ["A", "B", "C", "D", "E"],
    required:true,
  },
  gender:{
    type: String,
    enum:["Male", "Female", "Other"],
    required:true,
  },
  attendance:{
    type:Number,
    min:0,
    max:100,
    required:true,
  },
  marks:{
    type:Number,
    required:true,
  },
  class:{
    type: String,
    enum: ["First","Second","Third","Fourth","Fifth"],
    required:true,
  }, 
}, {timestamps:true})

const Student = mongoose.model('Student', studentSchema)

module.exports = {
  Student
}