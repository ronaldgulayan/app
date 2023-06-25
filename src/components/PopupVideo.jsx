import React, { useRef } from "react";

const noVideoDesign = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function PopupVideo({ open, closeEvent, data = { title, video_url } }) {
  const videoRef = useRef(null);
  function popupCloseEventHandler() {
    closeEvent();
    if (!data.video_url) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }
  return (
    <div className={`popup-video-container ${open && "open"}`}>
      <div className="popup-video">
        <div className="popup-video-header">
          <h3>{data.title}</h3>
          <button onClick={popupCloseEventHandler}>&#10005;</button>
        </div>
        <div className="popup-video-content">
          {data.video_url ? (
            <video ref={videoRef} src={data.video_url} controls />
          ) : (
            <div style={noVideoDesign}>No Video Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopupVideo;
