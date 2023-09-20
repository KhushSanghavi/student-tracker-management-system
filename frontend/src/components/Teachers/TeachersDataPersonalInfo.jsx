import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library

const TeachersDataPersonalInfo = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use Axios to make the GET request
    axios.get('http://localhost:5000/api/display-form')
      .then((response) => {
        setFormData(response.data); // Set data directly
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run this effect only once


  return (
    <div>
      <h1>Teachers will see students form data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
            <th>Class</th>
              <th>Roll No</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Father Name</th>
              <th>Father Email</th>
              <th>Father Mobile Number</th>
              <th>Father Qualification</th>
              <th>Father Designation</th>
              <th>Father Working Place</th>
              <th>Mother Name</th>
              <th>Mother Email</th>
              <th>Mother Mobile Number</th>
              <th>Mother Qualification</th>
              <th>Mother Designation</th>
              <th>Mother Working Place</th>
              {/* Add more table headers for other fields as needed */}
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.class}</td>
                <td>{data.rollNo}</td>
                <td>{data.fullName}</td>
                <td>{data.address}</td>
                <td>{data.email}</td>
                <td>{data.mobileNumber}</td>
                <td>{data.fatherName}</td>
                <td>{data.fatherEmail}</td>
                <td>{data.fatherMobileNumber}</td>
                <td>{data.fatherQualification}</td>
                <td>{data.fatherDesignation}</td>
                <td>{data.fatherWorkingPlace}</td>
                <td>{data.motherName}</td>
                <td>{data.motherEmail}</td>
                <td>{data.motherMobileNumber}</td>
                <td>{data.motherQualification}</td>
                <td>{data.motherDesignation}</td>
                <td>{data.motherWorkingPlace}</td>
                {/* Add more table cells for other fields as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeachersDataPersonalInfo;
