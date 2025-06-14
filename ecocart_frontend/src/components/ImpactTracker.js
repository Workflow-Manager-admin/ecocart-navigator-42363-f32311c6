import React from 'react';

// PUBLIC_INTERFACE
function ImpactTracker({ totalCO2Saved }) {
  return (
    <div className="impact-tracker" title="Your total CO₂ saved using EcoCart">
      <span className="impact-title">🌍 CO₂ Saved:</span>
      <span className="impact-value">{totalCO2Saved.toFixed(1)} kg</span>
    </div>
  );
}

export default ImpactTracker;
