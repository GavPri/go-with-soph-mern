import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const loginUser = (e) => {
    e.preventDefault();
    axios.get("/");
  };
  return (
    <div className="mt-12">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={loginUser}
      >
        <label htmlFor="email"></label>
        <input
          name="email"
          type="text"
          placeholder="enter your email..."
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password"></label>
        <input
          name="password"
          type="text"
          placeholder="enter your password..."
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
