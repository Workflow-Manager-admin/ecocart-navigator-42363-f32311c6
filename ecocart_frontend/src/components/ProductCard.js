import React from 'react';

// PUBLIC_INTERFACE
function ProductCard({ product, highlightEco }) {
  return (
    <div className={`product-card${highlightEco ? ' eco' : ''}`}>
      <img
        className="product-img"
        src={product.img || 'https://via.placeholder.com/96'}
        alt={product.name}
        loading="lazy"
      />
      <div className="product-main-info">
        <div className="product-title">{product.name}</div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">{product.price}</div>
        <div className="eco-score">
          {product.ecoScore
            ? <>
                <span
                  className={`badge-eco${highlightEco ? ' best' : ''}`}
                  title={`Eco Score: ${product.ecoScore}`}
                >
                  {highlightEco ? "💚 Eco Best" : "Eco "+product.ecoScore}
                </span>
                {product.badges?.length ? (
                  <span className="card-badges">
                    {product.badges.map((b, i) => (
                      <span className="mini-badge" key={i} title={b}>{b}</span>
                    ))}
                  </span>
                ) : null}
                <span className="carbon-impact">
                  {product.carbonImpact != null && (
                    <>
                      <span className="carbon-label">CO₂:</span>
                      <span className="carbon-value">{product.carbonImpact} kg</span>
                    </>
                  )}
                </span>
              </>
            : <span className="eco-score-na">Eco score N/A</span>}
        </div>
      </div>
      <a className="shop-btn" href={product.link} target="_blank" rel="noopener noreferrer">View</a>
    </div>
  );
}

export default ProductCard;
