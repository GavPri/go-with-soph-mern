import React from "react";

const Register = () => {
  return (
    <div className="mt-12 bg-">
      <form className="flex flex-col justify-center items-center">
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
