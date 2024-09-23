import React from "react";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-12">
      <form
        action=""
        className="flex flex-col justify-center items-center"
        onSubmit={loginUser}
      >
        <label htmlFor="email"></label>
        <input type="text" placeholder="enter your email..." />
        <label htmlFor="password"></label>
        <input type="text" placeholder="enter your password..." />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
