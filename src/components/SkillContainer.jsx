import React, { useEffect, useState } from "react";
import Skill from "./Skill";

function SkillContainer() {
  return (
    <div id="skill">
      <h1>
        MY <b>SKILLS</b>
      </h1>
      <div className="skill-main-container">
        <Skill text="HTML" value={80} />
        <Skill text="CSS" value={90} />
        <Skill text="JAVASCRIPT" value={70} />
        <Skill text="PHP" value={50} />
        <Skill text="JQUERY" value={40} />
        <Skill text="REACT" value={30} />
        <Skill text="JAVA" value={70} />
        <Skill text="C#" value={70} />
        <Skill text="PYTHON" value={50} />
        <Skill text="FIGMA" value={50} />
      </div>
    </div>
  );
}

export default SkillContainer;
