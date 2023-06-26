import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        &#169; All Right Reserved By <b>| Ron</b>
      </p>
      <div className="footer-icons">
        <a href="https://github.com/ronaldgulayan" target="_blank">
          <img src="/public/icons/github.png" alt="icon" />
        </a>
        <a href="https://www.facebook.com/ronald.gulayan/" target="_blank">
          <img src="/public/icons/facebook.png" alt="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
