import React from "react";
import "./LoginForm.css";
import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(user);
  return (
    <div className="form-container wrapper">
      <form className="form-content wrapper" onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <div className="input-box wrapper">
          <input
            type="text"
            placeholder="Username"
            id="username"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </div>
        <div className="input-box wrapper">
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </div>

        <div className="remember-box wrapper">
          <label>
            <input type="checkbox" />
            Remember me?
          </label>
          <a href="#">Forget password</a>
        </div>

        <button type="submit">Login</button>

        <div className="register">
          <p>
            Don't have an account?
            <a className="register-link" href="#">
              Register now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
