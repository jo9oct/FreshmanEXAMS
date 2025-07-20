import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Ensure the path is correct

const UserLogin: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  // Add user-login-page class to body on mount
  useEffect(() => {
    document.body.classList.add("user-login-page");
    return () => {
      document.body.classList.remove("user-login-page");
    };
  }, []);

  const handleToggle = (e: React.MouseEvent, isRegister: boolean) => {
    e.preventDefault();
    setIsRegistering(isRegister);
  };

  return (
    <div className={`wrapper ${isRegistering ? "active" : ""}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="register-Link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={(e) => handleToggle(e, true)}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="btn">
            Register
          </button>

          <div className="register-Link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={(e) => handleToggle(e, false)}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
