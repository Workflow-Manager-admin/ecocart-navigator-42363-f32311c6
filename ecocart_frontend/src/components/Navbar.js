import React from 'react';

// PUBLIC_INTERFACE
function Navbar({ user }) {
  return (
    <nav className="navbar">
      <span className="logo">
        <span className="logo-symbol" role="img" aria-label="Eco">🌱</span> EcoCart
      </span>
      <span className="user-greeting">Hello, {user.name}!</span>
    </nav>
  );
}

export default Navbar;
