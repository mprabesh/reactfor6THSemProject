import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import axios from "axios";

function LoginForm() {
  let history = useHistory();
  const [values, setValues] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleClick = (e) => {
    // console.log(values);
    e.preventDefault();
    axios
      .post(`http://localhost:1234/login`, { values })
      .then((res) => {
        console.log(res.data);
        const damn = res.data.isAuth;
        localStorage.setItem("status", damn);
        localStorage.setItem("Name", res.data.Name);
        localStorage.setItem("token", res.data.token);

        const d = localStorage.getItem("status");
        if (d) {
          history.push("./home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <form>
        <input
          type="text"
          name="email"
          value={values.name}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={values.Question}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
