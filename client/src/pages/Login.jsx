import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setIsLoading(true);
      const { response } = await axios.post(
        "/login",
        { email, password },
        { withCredentials: true }
      );

      const { data } = response;

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "", password: "" });
        navigate("/home");
      }
    } catch (error) {
      console.log({
        error: '"An error occurred during login. Please try again."',
      });
    } finally {
      setIsLoading(false);
    }
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
          type="password"
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
