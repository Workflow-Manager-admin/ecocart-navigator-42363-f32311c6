import React from 'react';

// PUBLIC_INTERFACE
function GreenModeToggle({ enabled, onToggle }) {
  return (
    <div className="green-toggle">
      <span style={{marginRight:12}}>Green Mode</span>
      <label className="green-switch">
        <input type="checkbox" checked={enabled} onChange={onToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default GreenModeToggle;
