import React from "react";

function CustomButton({ text, color, clickEvent }) {
  return (
    <div
      onClick={clickEvent}
      style={{ backgroundColor: color }}
      className="customButton"
    >
      {text}
    </div>
  );
}

export default CustomButton;
