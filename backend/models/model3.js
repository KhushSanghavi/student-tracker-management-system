// for username and password using login create a schema here

const mongoose = require("mongoose");

// Define your Mongoose models and schemas for different user types
const Student = mongoose.model(
  "Student",
  new mongoose.Schema({ name: String })
);
const Mentor = mongoose.model("Mentor", new mongoose.Schema({ name: String }));
const Admin = mongoose.model("Admin", new mongoose.Schema({ name: String }));

module.exports = {
  Student,
  Mentor,
  Admin,
};
