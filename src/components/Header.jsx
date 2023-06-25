import React, { useState } from "react";
import $ from "jquery";
import jQuery from "jquery";
import "animate.css";
import Drawer from "./Drawer";

function Header() {
  const [color, setColor] = useState("");
  const [menu, setMenu] = useState(false);

  jQuery(function () {
    window.onscroll = function () {
      if (window.scrollY <= $("#home").height() / 2) {
        setColor("");
      } else {
        setColor("colored");
      }
    };

    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault();
      const target = $($(this).attr("href"));
      const headerHeight = 90;
      const scrollToPosition = target.offset().top - headerHeight;
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    });
  });

  function menuEvent() {
    setMenu(!menu);
  }

  function closeDrawerEventHandler() {
    setMenu(false);
  }

  return (
    <div className={`header ${color} animate__animated animate__fadeInDown`}>
      <h3 title="Gulayan, Ronald G.">Ron?</h3>
      <ul className="menu-btn">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
      </ul>
      <div className={`menu ${menu && "open"}`} onClick={menuEvent}>
        <div></div>
      </div>
      <Drawer closeDrawerEvent={closeDrawerEventHandler} open={menu} />
    </div>
  );
}

export default Header;
