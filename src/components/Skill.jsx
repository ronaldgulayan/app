import { useEffect, useState } from "react";
import $ from "jquery";

function Skill({ text, value }) {
  const [rangeValue, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const skillPos = $("#skill").offset().top;
      if (scrollPosition > skillPos - 200) {
        setValue(value);
      } else {
        setValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="skill-container">
      <div className="skill-header">
        <p>{text}</p>
        <p>{rangeValue}%</p>
      </div>
      <div className="range">
        <div
          className="value"
          style={{
            width: rangeValue + "%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
