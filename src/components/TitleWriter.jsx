import React from "react";
import "./style.css";

function TitleWriter({ size, color }) {
  return (
    <h1
      className="writter"
      aria-label="Hi! I'm a developer"
      style={{ fontSize: size, color: color }}
    >
      I'm&nbsp;<span className="typewriter"></span>
    </h1>
  );
}

export default TitleWriter;
