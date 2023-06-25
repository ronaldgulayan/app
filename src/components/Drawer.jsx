import React from "react";

function Drawer({ open, closeDrawerEvent }) {
  return (
    <div className={`drawer ${open && "open"}`}>
      <a onClick={closeDrawerEvent} href="#home">
        Home
      </a>
      <a onClick={closeDrawerEvent} href="#about">
        About
      </a>
      <a onClick={closeDrawerEvent} href="#project">
        Project
      </a>
    </div>
  );
}

export default Drawer;
