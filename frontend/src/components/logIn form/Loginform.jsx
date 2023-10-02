import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./loginform.modules.css";
import Logo from "../navbar/Logo";
import Name from "../navbar/cllg-title.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Wrapper from "./RegisterAndLoginPage";
function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const location = useLocation();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can handle login logic, e.g., send the data to an API for authentication.
    console.log("Username:", username);
    console.log("Password:", password);

    // Check if the username and password match your criteria for successful login
    if (username === "admin" && password === "password") {
      // Redirect based on the user's previous selection
      if (location.state?.selection === "admin-teacher") {
        navigate("/teacher"); // Use navigate to redirect to the teacher page
      } else if (location.state?.selection === "mentor") {
        navigate("/mentor"); // Use navigate to redirect to the mentor page
      } else if (location.state?.selection === "student") {
        navigate("/student"); // Use navigate to redirect to the student page
      }
    } else {
      // Handle login failure here if needed
      console.log("Login failed");
    }
  };

  return (
    <>
      <nav>
        <Logo />
        <div className="name">
          <img src={Name} alt="name" />
        </div>
      </nav>

      <div className="login">
        <Wrapper>
          <form className="form" onSubmit={handleSubmit}>
            <Logo />
            <div>
              <label className="form" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div>
              <label className="form" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <GoogleOAuthProvider clientId="679749642395-30mmhi9f6ledqhg7mql8q8soe5d25paf.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);

                  console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
            </GoogleOAuthProvider>
            <button type="submit">Submit</button>
          </form>
        </Wrapper>
      </div>
    </>
  );
}

export default Loginform;
