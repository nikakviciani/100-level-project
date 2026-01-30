// File: Login.jsx
import React, { useState } from "react";

export default function Login({ setIsLoggedIn, setPage }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.username !== form.username || user.password !== form.password) {
      setError("Wrong username or password");
      return;
    }

    // ✅ set login
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true); // ✅ navbar re-render
    setPage("home");      // go to main page
  };

  return (
    <div className="content auth">
      <h1>Login/აქაუნთში შესვლა</h1>
      {error && <p className="error">{error}</p>}
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
