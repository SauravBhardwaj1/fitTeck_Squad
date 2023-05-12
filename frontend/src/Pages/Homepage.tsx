import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">FitTech Homepage</h1>
      <br />
      <Link to="/login">Login Page</Link>
      <br />
      <Link to="/register">Signup Page</Link>
    </div>
  );
};

export default Homepage;
