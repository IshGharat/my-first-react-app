import React from "react";
import { Link } from "react-router-dom";
import "../home.css";

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="/registry">Click here to go to registry</Link>
    </div>
  );
}

export default Home;
