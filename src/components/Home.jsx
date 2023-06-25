import React from "react";
import TitleWriter from "./TitleWriter";
import Button from "./Button";
import $ from "jquery";

function Home() {
  function buttonClickEvent() {
    const pos = $("#project").offset().top;
    const projPos = pos - 100;
    window.scrollTo({
      top: projPos,
      behavior: "smooth",
    });
  }

  return (
    <div className="home" id="home">
      <div className="home-container">
        <div className="home-left">
          <h1 style={{ color: "#fff" }}>Hello!</h1>
          <TitleWriter size={40} />
          <p style={{ color: "#ccc" }}>
            Future Software Developer or Web Developer (Kung papalarin). This
            website contains information about myself and the applications I
            have created. I am a person who loves to explore things, especially
            when it comes to technology.
          </p>
          <Button
            icon={true}
            text="Go to Project"
            buttonClickEvent={buttonClickEvent}
          />
        </div>
        <div className="home-right">
          <img
            src="../assets/img.png"
            draggable="false"
            title="Natalia (Cyber Spectre)"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
