import React, { useEffect, useState } from "react";
import "./style.css";
import "animate.css";

function Loader({ hide }) {
  return (
    <div className={`loader-container ${hide ? "hide" : ""}`}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
