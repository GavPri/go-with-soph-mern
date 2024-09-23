import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const data = await axios.post(
        "/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="mt-12">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={registerUser}
      >
        <label htmlFor="name"></label>
        <input
          name="name"
          type="text"
          placeholder="enter your name..."
          value={data.name}
          onChange={handleChange}
        />
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
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
