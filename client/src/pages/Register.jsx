import React, { useState } from "react";
import axios from "axios";
import { MdTravelExplore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        "/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );

      const { data } = response;

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Sign up successful");
        navigate("/login");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
    <div className="mt-36 flex flex-col justify-center items-center w-full">
      <div className="text-center flex flex-col justify-center items-center font-qs font-bold tracking-wider text-2xl mb-6">
        <h2 className="flex flex-col items-center text-brand text-xl mb-2">
          {" "}
          <MdTravelExplore size={40} /> GoWithSoph
        </h2>
        <p className="text-lg text-text ">Register for an account</p>
      </div>
      <form
        className="flex flex-col justify-center items-center font-qs w-full mb-6"
        onSubmit={registerUser}
      >
        <label htmlFor="name"></label>
        <input
          className="py-2 px-4 mb-4 border-2 border-border rounded-lg w-6/12 lg:w-4/12"
          name="name"
          type="text"
          placeholder="enter your name..."
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="email"></label>
        <input
          className="py-2 px-4 mb-4 border-2 border-border rounded-lg w-6/12 lg:w-4/12"
          name="email"
          type="text"
          placeholder="enter your email..."
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password"></label>
        <input
          className="py-2 px-4 mb-4 border-2 border-border rounded-lg w-6/12 lg:w-4/12"
          name="password"
          type="password"
          placeholder="enter your password..."
          value={data.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-2 px-2 mb-4 bg-brand text-bg capitalize rounded-lg w-6/12 lg:w-4/12"
        >
          {isLoading ? (
            <div className="flex justify-center items-center ">
              <p className="text-bg mr-4 font-italic">Registering Account</p>
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-brand animate-spin dark:text-gray-600 fill-bg"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <p>Create Account</p>
          )}
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
