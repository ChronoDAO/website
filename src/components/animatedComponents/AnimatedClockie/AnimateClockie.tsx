import './AnimateClockie.scss';
import GifClockie from '/videos/Clockie.gif';

function AnimateClockie() {
  return (
    <div className="animate-clockie-container">
      <img src={GifClockie} alt="Clockie GIF" />
    </div>
  );
}

export default AnimateClockie;