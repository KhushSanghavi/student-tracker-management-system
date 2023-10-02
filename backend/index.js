const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDatabase } = require("./DB/dbconnect"); // Import the connectToDatabase function

const displayForm = require("./routes/displayForm");
const register = require("./routes/register");
const academicForm = require("./routes/academicForm");
const displayAcademicForm = require("./routes/displayAcademicForm");
const personalInfoForm = require("./routes/personalForm");

// Create an Express.js app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

app.use("/api/display-form", displayForm);
app.use("/api/register", register);
app.use("/api/addStudentData", academicForm);
app.use("/api/display-student-data", displayAcademicForm);
app.use("/api/submit-form", personalInfoForm);

// Start the Express.js server
app.listen(port, () => {
  try {
    connectToDatabase();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
