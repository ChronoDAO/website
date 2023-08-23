import  { useState, useRef, useEffect } from 'react';
import './BanneGame.scss';

function BannerGame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

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
    <header className="v-header container">
      <div className="fullscreen-video-wrap">
        <video ref={videoRef} src='/videos/OFFICIAL BIG TIME MARKETPLACE TEASER TRAILER.mp4' autoPlay loop controls />
        <button className={`control-button pause-button ${isPlaying ? 'playing' : 'paused'}`} onClick={togglePlay}></button>
        <button className="scroll-button" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          Scroll Down &#10227;
        </button>
        <button className={`control-button sound-button ${isMuted ? 'muted' : 'unmuted'}`} onClick={toggleMute}></button>
      </div>
    </header>
  );
}

export default BannerGame;
