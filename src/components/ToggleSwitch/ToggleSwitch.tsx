import React from 'react';
import './ToggleSwitch.scss';

interface SwitchButtonProps {
  isChecked: boolean;
  onToggle: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isChecked, onToggle }) => {
  const handleToggle = () => {
    window.scrollTo(0, 0);
    onToggle();
  };

  return (
    <div className="switch-container">
      <div className="version-container">
        <p className="version-text">{isChecked ? 'Version courte' : 'Version longue'}</p>
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default SwitchButton;
