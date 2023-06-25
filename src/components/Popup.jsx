import React, { useEffect, useState } from "react";
import $ from "jquery";

let x = 0;

function Popup({
  open,
  closeEvent,
  data = { title, description, lang, images, url },
}) {
  function leftEvent() {
    if (x <= 0) return;
    const element = $(".popup-img-wrapper-slider");
    element.css("right", (x -= 100) + "%");
  }

  function rightEvent() {
    if (x >= (data.images.length - 1) * 100) return;
    const element = $(".popup-img-wrapper-slider");
    element.css("right", (x += 100) + "%");
  }

  function closeAndReset() {
    closeEvent();
    const element = $(".popup-img-wrapper-slider");
    x = 0;
    element.css("right", x + "%");
  }

  return (
    <div className={`popup-container ${open && "open"}`}>
      <div className="popup">
        <div className="popup-header">
          <h3>{data.title}</h3>
          <button onClick={closeAndReset}>&#10005;</button>
        </div>
        <div className="popup-content">
          <div className="popup-img-slider left">
            <div className="popup-side-btn" onClick={leftEvent}>
              <div className="popup-img-left"></div>
            </div>
            <div className="popup-side-btn right" onClick={rightEvent}>
              <div className="popup-img-right"></div>
            </div>
            <div className="popup-img-wrapper">
              <div className="popup-img-wrapper-slider">
                {data.images &&
                  data.images.map((img, i) => (
                    <a key={i} href={img} target="_blank">
                      <img src={img} draggable="false" title="Click to show" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
          <h3>{data.language}</h3>
          <div className="description-container">
            <p>{data.description ? data.description : "No Description"}</p>
          </div>
          {data.url && (
            <a href={data.url} className="popup-demo" target="_blank">
              DEMO
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
