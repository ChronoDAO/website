import { useState, useRef, useEffect } from "react";
import "./BannerGame.scss";

interface BannerGameProps {
  videoSource: string; 
}

function BannerGame({videoSource} :BannerGameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.matchMedia("(min-width: 800px)").matches);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video && video.paused) {
      video.play();
    } else if (video) {
      video.pause();
    }
    setIsPlaying(!video?.paused);
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <header className={isWideScreen ? `v-header container` : "v-header"}>
      <div className="fullscreen-video-wrap">
        <video
          ref={videoRef}
          src={videoSource}
          autoPlay
          muted
          loop
        />
        <div className="controls__wrapper">
          <button
            className={`control-button pause-button ${
              isPlaying ? "playing" : "paused"
            }`}
            onClick={togglePlay}
          ></button>
          <button
            className="control-button"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            Scroll Down &#10227;
          </button>
          <button
            className={`control-button sound-button ${
              isMuted ? "muted" : "unmuted"
            }`}
            onClick={toggleMute}
          ></button>
        </div>
      </div>
    </header>
  );
}

export default BannerGame;
