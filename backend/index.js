const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer"); // For handling file uploads
const path = require("path");
const mongoose = require("mongoose");
const { FormData } = require("./models/model1");
const { connectToDatabase } = require("./DB/dbconnect"); // Import the connectToDatabase function
const Student = require("./models/model2");

// Create an Express.js app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Function call to connect to the database
connectToDatabase();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Set up Multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage });

// Handle form submission for student data
app.post(
  "/api/addStudentData",
  upload.fields([
    { name: "competitionsImage", maxCount: 1 },
    { name: "projectpresentationsImage", maxCount: 1 },
    { name: "paperPresentationsImage", maxCount: 1 },
    { name: "onlineCourseImage", maxCount: 1 },
    { name: "copyrightImage", maxCount: 1 },
    { name: "internshipImage", maxCount: 1 },
    { name: "certificationImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, studentClass, rollNo } = req.body;

      if (!studentClass) {
        return res.status(400).json({ error: "studentClass is required" });
      }

      const student = new Student({
        name,
        studentClass,
        rollNo,
      });

      // Save uploaded images as buffers
      const saveImagePromises = Object.keys(req.files).map(
        async (fieldName) => {
          const file = req.files[fieldName][0];
          student[fieldName] = file.buffer; // Store the file buffer in the document
        }
      );

      await Promise.all(saveImagePromises);

      await student.save();

      res.status(200).json({ message: "Student data added successfully!" });
    } catch (error) {
      console.error("Error adding student data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while adding student data" });
    }
  }
);


// route to handle academics form
// In your Express.js server code
app.get('/api/display-student-data', async (req, res) => {
  try {
    // Fetch student data from MongoDB using your Student model
    const students = await Student.find({}, 'name studentClass rollNo competitionsImage projectpresentationsImage paperPresentationsImage onlineCourseImage copyrightImage internshipImage certificationImage');

    // Map the students data to include base64 certificate URLs
    const studentsWithBase64Images = students.map((student) => {
      return {
        _id: student._id,
        name: student.name,
        studentClass: student.studentClass,
        rollNo: student.rollNo,
        // Add base64 URLs for certificate images
        competitionsImage: student.competitionsImage ? `data:image/jpeg;base64,${student.competitionsImage.toString("base64")}` : null,
        projectpresentationsImage: student.projectpresentationsImage ? `data:image/jpeg;base64,${student.projectpresentationsImage.toString("base64")}` : null,
        paperPresentationsImage: student.paperPresentationsImage ? `data:image/jpeg;base64,${student.paperPresentationsImage.toString("base64")}` : null,
        onlineCourseImage: student.onlineCourseImage ? `data:image/jpeg;base64,${student.onlineCourseImage.toString("base64")}` : null,
        copyrightImage: student.copyrightImage ? `data:image/jpeg;base64,${student.copyrightImage.toString("base64")}` : null,
        internshipImage: student.internshipImage ? `data:image/jpeg;base64,${student.internshipImage.toString("base64")}` : null,
        certificationImage: student.certificationImage ? `data:image/jpeg;base64,${student.certificationImage.toString("base64")}` : null,
      };
    });

    res.json(studentsWithBase64Images); // Send the data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching student data' });
  }
});





// Route to handle form submissions for general data
app.post("/api/submit-form", async (req, res) => {
  try {
    // Create a new document based on the FormData model
    const formData = new FormData(req.body);
    // Save the document to the database using async/await
    await formData.save();
    res.status(200).send("Form data saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving form data to the database");
  }
});

// Route to fetch data from MongoDB and display it in a table
// Route to fetch data from MongoDB and send it as JSON
app.get("/api/display-form", async (req, res) => {
  try {
    // Fetch data from MongoDB using your FormData model
    const formData = await FormData.find();

    // Send the data as JSON
    res.status(200).json(formData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data from the database");
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
