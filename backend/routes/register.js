const express = require("express");
const { Router } = express;

const router = Router();

// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();
// const port = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/mydatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Define your Mongoose models and schemas for different user types
// const Student = mongoose.model(
//   "Student",
//   new mongoose.Schema({ name: String })
// );
// const Mentor = mongoose.model("Mentor", new mongoose.Schema({ name: String }));
// const Admin = mongoose.model("Admin", new mongoose.Schema({ name: String }));

// // Define your POST route to handle registration
// app.post("/api/register", async (req, res) => {
//   try {
//     const { username, email, password, userType } = req.body;

//     let user;

//     // Depending on the userType, create and save the user in the appropriate collection
//     if (userType === "student") {
//       user = new Student({ name: username });
//     } else if (userType === "mentor") {
//       user = new Mentor({ name: username });
//     } else if (userType === "admin") {
//       user = new Admin({ name: username });
//     } else {
//       return res.status(400).json({ message: "Invalid user type" });
//     }

//     // Save the user to the appropriate collection
//     await user.save();

//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

module.exports = router;
