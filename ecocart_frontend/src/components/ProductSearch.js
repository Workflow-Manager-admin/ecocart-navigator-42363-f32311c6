import React, { useState } from 'react';
import { mockProductSearch, mockGreenerAlternatives } from '../mockData';

// PUBLIC_INTERFACE
function ProductSearch({ onResults, greenMode }) {
  const [query, setQuery] = useState('');
  const [source, setSource] = useState('amazon');
  const [loading, setLoading] = useState(false);

  // PUBLIC_INTERFACE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API hook for demonstration. Replace with real API.
    const results = mockProductSearch(query, source);

    let alternatives = [];
    if (greenMode) {
      alternatives = mockGreenerAlternatives(query, source);
    }

    setLoading(false);
    onResults(results, alternatives);
  };

  return (
    <form className="product-search" onSubmit={handleSubmit}>
      <input
        className="product-input"
        type="text"
        placeholder="Search for products (e.g., 'toothbrush', 'coffee mug')"
        value={query}
        onChange={e => setQuery(e.target.value)}
        required
        aria-label="Search products"
      />
      <select
        className="product-source"
        value={source}
        onChange={e => setSource(e.target.value)}
        aria-label="Select product source"
      >
        <option value="amazon">Amazon</option>
        <option value="flipkart">Flipkart</option>
      </select>
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default ProductSearch;
