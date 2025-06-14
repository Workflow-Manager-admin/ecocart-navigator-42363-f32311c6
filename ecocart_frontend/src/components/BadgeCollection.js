import React from 'react';

// PUBLIC_INTERFACE
function BadgeCollection({ badges }) {
  if (!badges || !badges.length) return null;
  return (
    <div className="badge-collection">
      <div className="badges-label">Your Badges:</div>
      <div className="badges-list">
        {badges.map((badge, idx) => (
          <span className="profile-badge" key={idx}>{badge}</span>
        ))}
      </div>
    </div>
  );
}
export default BadgeCollection;
