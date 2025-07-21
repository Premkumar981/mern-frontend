import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
export default function Login() {
  const {user, setUser} = useContext(AppContext);
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, user);
      setUser(result.data);
      Navigate("/");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <div className="login-container">
  <div className="login-box">
    <h2 className="login-title">Login</h2>
    {error && <p className="login-error">{error}</p>}
    <p>
      <input
        type="text"
        placeholder="Email Address"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="login-input"
      />
    </p>
    <p>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="login-input"
      />
    </p>
    <p>
      <button onClick={handleSubmit} className="login-button">Submit</button>
    </p>
    <hr className="login-divider" />
    <p className="login-link">
      <Link to="/register">Create Account</Link>
    </p>
  </div>
</div>

  );
}