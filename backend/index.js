// Import necessary libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors");
const {FormData} =require("./models/model1");
const { connectToDatabase } = require("./DB/dbconnect"); // Import the connectToDatabase function



// Create an Express.js app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// function call to connect the database
connectToDatabase();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Create a route to handle form submissions
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



// this is for the student certificates data
// dev write your code here


//this is for username and password for login page


// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
