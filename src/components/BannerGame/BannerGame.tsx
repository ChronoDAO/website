import { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute, FaArrowDown } from 'react-icons/fa';
import "./BannerGame.scss";

interface BannerGameProps {
  videoSource: string;
}

function BannerGame({ videoSource }: BannerGameProps) {
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

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

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
        <video ref={videoRef} src={videoSource} autoPlay muted loop />
        <div className="controls__wrapper">
          <button
            className={`control-button pause-button round-button ${
              isPlaying ? "playing" : "paused"
            }`}
            onClick={togglePlay}
          >
            {isPlaying ? <FaPause className="custom-icon" /> : <FaPlay className="custom-icon" />}
          </button>

          <button
            className={`control-button round-button`}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <FaArrowDown className="custom-icon" />
          </button>

          <button
            className={`control-button sound-button round-button ${
              isMuted ? "muted" : "unmuted"
            }`}
            onClick={toggleMute}
          >
            {isMuted ? <FaVolumeMute className="custom-icon" /> : <FaVolumeUp className="custom-icon" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default BannerGame;
