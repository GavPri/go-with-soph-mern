import React, { useState } from "react";
import axios from "axios";
import { MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";

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
    <div className="mt-24">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="flex flex-col items-center text-brand text-xl mb-2">
          {" "}
          <MdTravelExplore size={40} /> GoWithSoph
        </h2>
        <p className="text-lg text-text mb-4">Register for an account</p>
      </div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={registerUser}
      >
        <label htmlFor="name"></label>
        <input
          className="py-2 px-4 mb-2 border-2 border-text rounded-lg w-6/12"
          name="name"
          type="text"
          placeholder="enter your name..."
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="email"></label>
        <input
          className="py-2 px-4 mb-2 border-2 border-text rounded-lg w-6/12"
          name="email"
          type="text"
          placeholder="enter your email..."
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password"></label>
        <input
          className="py-2 px-4 mb-2 border-2 border-text rounded-lg w-6/12"
          name="password"
          type="password"
          placeholder="enter your password..."
          value={data.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-2 px-2 mb-4 bg-brand text-bg capitalize rounded-lg w-6/12"
        >
          submit
        </button>
        <p className="text-text">
          Already have an account?{" "}
          <Link className="text-accentSecondary" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
