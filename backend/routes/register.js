const express = require("express");
const { Router } = express;

const router = Router();

const { Student, Mentor, Admin } = require("../models/model3");

// Define your POST route to handle registration
router.post("/", async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;

    let user;

    // Depending on the userType, create and save the user in the appropriate collection
    if (userType === "student") {
      user = new Student({ name: username });
    } else if (userType === "mentor") {
      user = new Mentor({ name: username });
    } else if (userType === "admin") {
      user = new Admin({ name: username });
    } else {
      return res.status(400).json({ message: "Invalid user type" });
    }

    // Save the user to the appropriate collection
    await user.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
