import React from 'react';
import ProductCard from './ProductCard';

// PUBLIC_INTERFACE
function ProductList({ products, alternatives }) {
  if (!products.length && !alternatives.length) {
    return null;
  }
  return (
    <section>
      {products.length > 0 && (
        <div>
          <h2 className="section-title">Results</h2>
          <div className="product-list">
            {products.map((p, i) => (
              <ProductCard key={p.id || i} product={p} highlightEco={false} />
            ))}
          </div>
        </div>
      )}
      {alternatives.length > 0 && (
        <div>
          <h2 className="section-title">Greener Alternatives</h2>
          <div className="product-list alt">
            {alternatives.map((p, i) => (
              <ProductCard key={p.id || i} product={p} highlightEco={true} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductList;
