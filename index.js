const dotenv = require("dotenv")
dotenv.config({
    path:'./.env'
})

require("./db/db.connect.js")
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const studentRouter = require("./routes/student.routes.js")
const teacherRouter = require("./routes/teacher.routes.js")

const app = express()
const PORT = process.env.port || 5000

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/students", studentRouter)
app.use("/teacher", teacherRouter)


app.get('/', (req, res) => {
  res.send("Hello")
})

app.use( (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({error: "Something went wrong"})
})

app.use( (req, res) => {
  res.status(404).json({error: "Route not found"})
})


app.listen(`${PORT}`, (req, res) => {
  console.log(`Server is running on port: ${PORT}`)
})
