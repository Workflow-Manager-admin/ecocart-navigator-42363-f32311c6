import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductSearch from './components/ProductSearch';
import ProductList from './components/ProductList';
import ImpactTracker from './components/ImpactTracker';
import GreenModeToggle from './components/GreenModeToggle';
import BadgeCollection from './components/BadgeCollection';

const MOCK_USER = {
  name: "Eco Shopper",
  badges: ["First Green Choice", "Amazon Detox", "CO2 Saver"],
  totalCO2Saved: 16.7,
};

function App() {
  const [greenMode, setGreenMode] = useState(true);
  const [products, setProducts] = useState([]); // List of searched products (with eco analysis)
  const [alternatives, setAlternatives] = useState([]); // Greener alternatives

  // PUBLIC_INTERFACE
  const handleSearch = (productResults, alternativeResults) => {
    setProducts(productResults);
    setAlternatives(alternativeResults || []);
  };

  // PUBLIC_INTERFACE
  const handleToggleGreenMode = () => {
    setGreenMode((prev) => !prev);
  };

  return (
    <div className={`app${greenMode ? ' green' : ''}`}>
      <Navbar user={MOCK_USER} />
      <main className="container main-section">
        <div className="dashboard-header">
          <GreenModeToggle enabled={greenMode} onToggle={handleToggleGreenMode} />
          <ImpactTracker totalCO2Saved={MOCK_USER.totalCO2Saved} />
        </div>
        <ProductSearch onResults={handleSearch} greenMode={greenMode} />
        <ProductList
          products={products}
          alternatives={alternatives}
        />
        <BadgeCollection badges={MOCK_USER.badges} />
      </main>
      <footer className="footer">
        <div>EcoCart Navigator &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

export default App;
