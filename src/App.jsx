import Background from "./components/Background";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import "./app.css";
import SkillContainer from "./components/SkillContainer";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Popup from "./components/Popup";
import PopupVideo from "./components/PopupVideo";
import Footer from "./components/Footer";

export default function App() {
  const [hide, setHide] = useState(false);
  const [popup, setPopup] = useState(false);
  const [videoData, setVideoData] = useState({});
  const [video, setVideo] = useState(false);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    window.setTimeout(() => {
      setHide(!hide);
    }, 2000);
  }, []);

  function popupEvent(data) {
    setPopup(true);
    setPopupData(data);
  }

  function popupVideoEvent(data) {
    setVideo(true);
    setVideoData(data);
  }

  function popupVideoCloseEvent() {
    setVideo(false);
  }

  function closeEvent() {
    setPopup(false);
  }

  const data = (
    <div className="App">
      <Header />
      <Home />
      <About />
      <SkillContainer />
      <Project openEvent={popupEvent} openVideoEvent={popupVideoEvent} />
      <Footer />
    </div>
  );

  return (
    <div>
      <Loader hide={hide} />
      <Background />
      <Popup open={popup} data={popup && popupData} closeEvent={closeEvent} />
      <PopupVideo
        open={video}
        data={videoData}
        closeEvent={popupVideoCloseEvent}
      />
      {hide && data}
    </div>
  );
}
