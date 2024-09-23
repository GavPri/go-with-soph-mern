import React, { useState } from "react";

const Register = () => {

  const [data, setData] = useState({
    name: '', 
    email: '',
    password: '',
  })

  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-12">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={registerUser}
      >
        <label htmlFor="name"></label>
        <input type="text" placeholder="enter your name..." />
        <label htmlFor="email"></label>
        <input type="text" placeholder="enter your email..." />
        <label htmlFor="password"></label>
        <input type="text" placeholder="enter your password..." />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
