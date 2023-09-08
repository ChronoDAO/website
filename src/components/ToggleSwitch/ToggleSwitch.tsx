import './ToggleSwitch.scss';

const SwitchButton: React.FC<{ isChecked: boolean; onToggle: () => void }> = ({
  isChecked,
  onToggle,
}) => {
  const handleToggle = () => {

    if (isChecked) {
      window.scrollTo(0, 0);
    }

    onToggle();
  };

  return (
    <div>
      <p className='toggle__p'>{isChecked ? 'Version courte' : 'Version longue'}</p>
      <label className={`switch-button ${isChecked ? 'checked' : ''}`}>
        <div className="switch-outer">
          <input id="switch" type="checkbox" checked={isChecked} onChange={handleToggle} />
          <div className="button">
            <span className="button-toggle"></span>
            <span className="button-indicator"></span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SwitchButton;

