import React, { useState, useEffect } from "react";
import axios from "axios";

function TeachersDataAcademicsInfo()  {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the Express.js server
    axios.get("http://localhost:5000/api/display-student-data")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Display Student Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>Participate/Organize competitions </th>
            <th>Project Presentation </th>
            <th>Paper Presentations </th>
            <th>Online Course </th>
            <th>Copyright </th>
            <th>Internship </th>
            <th>Certification </th>
            {/* Add headers for other fields as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.studentClass}</td>
              <td>{student.rollNo}</td>
              <td><a href={student.competitionsImage} target="_blank" rel="noopener noreferrer">Competitions</a></td>
              <td><a href={student.projectpresentationsImage} target="_blank" rel="noopener noreferrer"> Project Presentations</a></td>
              <td><a href={student.paperPresentationsImage} target="_blank" rel="noopener noreferrer">Paper Presentations </a></td>
              <td><a href={student.onlineCourseImage} target="_blank" rel="noopener noreferrer">Online Course </a></td>
              <td><a href={student.copyrightImage} target="_blank" rel="noopener noreferrer">Copyright </a></td>
              <td><a href={student.internshipImage} target="_blank" rel="noopener noreferrer">Internship </a></td>
              <td><a href={student.certificationImage} target="_blank" rel="noopener noreferrer">Certification </a></td>
              {/* Add cells for other fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeachersDataAcademicsInfo
