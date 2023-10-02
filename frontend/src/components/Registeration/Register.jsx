import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "student",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform form validation
  //   const validationErrors = validateForm(formData);
  //   if (Object.keys(validationErrors).length === 0) {
  //     // Validation passed; you can submit the form or perform registration logic here
  //     console.log("Form submitted with data:", formData);
  //   } else {
  //     // Validation failed; set the errors state to display error messages
  //     setErrors(validationErrors);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Validation passed; send the data to the server
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          // Optionally, you can redirect the user or perform other actions upon successful submission.
        } else {
          console.error("Form submission failed");
          // Handle the error, such as displaying an error message to the user.
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    } else {
      // Validation failed; set the errors state to display error messages
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Basic validation examples (customize as needed)
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // You can use a regular expression or a library like validator.js for more robust email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
