import React from "react";
import "./style.css";

function ProjectItem({ data = {}, openEvent, openVideoEvent }) {
  return (
    <div className="project-item">
      <img
        src={data.img_url ? data.img_url : data.images[0]}
        draggable="false"
      />
      <div className="project-item-hover">
        <h1>
          {data.title.length > 30
            ? data.title.substring(0, 30) + "..."
            : data.title}
        </h1>
        <p>
          {data.description
            ? data.description.length > 70
              ? data.description.substring(0, 70) + "..."
              : data.description
            : "No Description"}
        </p>
        <div>
          <button onClick={() => openEvent(data)}>SHOW MORE</button>
          {data.video_url && (
            <button onClick={() => openVideoEvent(data)}>SHOW VIDEO</button>
          )}
        </div>
        <h4 className="lang">{data.language}</h4>
      </div>
    </div>
  );
}

export default ProjectItem;
