import React from "react";
import ProjectItem from "./ProjectItem";
import json from "../assets/items.json";

function Project({ openEvent, openVideoEvent }) {
  return (
    <div className="project" id="project">
      <div className="project-container">
        <h1>
          MY <b>PROJECTS</b>
        </h1>
        <div className="grid-container">
          {json.datas.map((data, i) => {
            return (
              <ProjectItem
                key={i}
                data={data}
                openEvent={openEvent}
                openVideoEvent={openVideoEvent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
