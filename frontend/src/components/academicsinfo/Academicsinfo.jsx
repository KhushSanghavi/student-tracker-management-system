import React, { useState } from "react";
import axios from "axios";


function Academicsinfo() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    rollNo: "",
    competitionsImage: null,
    projectpresentationsImage: null,
    paperPresentationsImage: null,
    onlineCourseImage: null,
    copyrightImage: null,
    internshipImage: null,
    certificationImage: null,
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("studentClass", formData.studentClass);
      formDataToSend.append("rollNo", formData.rollNo);
      formDataToSend.append("competitionsImage", formData.competitionsImage);
      formDataToSend.append("projectpresentationsImage", formData.projectpresentationsImage);
      formDataToSend.append("paperPresentationsImage", formData.paperPresentationsImage);
      formDataToSend.append("onlineCourseImage", formData.onlineCourseImage);
      formDataToSend.append("copyrightImage", formData.copyrightImage);
      formDataToSend.append("internshipImage", formData.internshipImage);
      formDataToSend.append("certificationImage", formData.certificationImage);

      await axios.post("http://localhost:5000/api/addStudentData", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Student data added successfully!");
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code
        console.error("Server error:", error.response.data);
        alert("An error occurred on the server.");
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received from the server.");
        alert("No response received from the server.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
        alert("An error occurred.");
      }
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Class</label>
          <input
            type="text"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Roll No.</label>
          <input
            type="Number"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image upload fields */}
        <div>
          <label>Participate/Organize competitions (Technical/Non-technical)</label>
          <input
            type="file"
            name="competitionsImage"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Project Presentations Image</label>
          <input
            type="file"
            name="projectpresentationsImage"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Paper Presentations Image</label>
          <input
            type="file"
            name="paperPresentationsImage"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Online Course Image</label>
          <input
            type="file"
            name="onlineCourseImage"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Copyright Image</label>
          <input
            type="file"
            name="copyrightImage"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Internship Image</label>
          <input
            type="file"
            name="internshipImage"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Certification Image</label>
          <input
            type="file"
            name="certificationImage"
            onChange={handleChange}
          />
        </div>

        {/* Add similar input elements for other image uploads */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Academicsinfo;
