import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <div>
        <h2>It's time for popcorn! Find your next movie Here.</h2>
      </div>
    </div>
  );
}
