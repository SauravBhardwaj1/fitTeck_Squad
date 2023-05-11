import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
