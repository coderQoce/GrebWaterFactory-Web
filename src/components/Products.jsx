import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Bottled Water',
      description: 'Premium quality water in convenient 500ml and 1L bottles. Perfect for daily hydration and on-the-go refreshment.',
      icon: (
        <svg viewBox="0 0 24 24" className="product-icon">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
            fill="currentColor" />
        </svg>
      ),
      features: ['500ml & 1L sizes', 'BPA-free bottles', 'Recyclable packaging']
    },
    {
      id: 2,
      title: 'Sachet Water',
      description: 'Affordable and convenient water sachets for quick hydration. Ideal for events, offices, and large gatherings.',
      icon: (
        <svg viewBox="0 0 24 24" className="product-icon">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l3.59-3.59L17 12l-5 5z"
            fill="currentColor" />
        </svg>
      ),
      features: ['250ml sachets', 'Cost-effective', 'Easy storage']
    },
    {
      id: 3,
      title: 'Bulk Supply',
      description: 'Large-scale water solutions for businesses, events, and institutions. Custom packages available.',
      icon: (
        <svg viewBox="0 0 24 24" className="product-icon">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"
            fill="currentColor" />
        </svg>
      ),
      features: ['5L & 20L containers', 'Delivery service', 'Volume discounts']
    },
    {
      id: 4,
      title: 'Home Delivery',
      description: 'Regular subscription service delivering fresh water to your doorstep. Never run out of pure water again.',
      icon: (
        <svg viewBox="0 0 24 24" className="product-icon">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="currentColor" />
        </svg>
      ),
      features: ['Weekly delivery', 'Flexible scheduling', 'Subscription plans']
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Products</h2>
          <div className="section-divider center"></div>
          <p className="section-subtitle">
            Discover our range of premium water products designed to meet every need
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className="product-card">
              <div className="card-icon">
                {product.icon}
              </div>
              <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-description">{product.description}</p>
                <ul className="card-features">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <svg viewBox="0 0 24 24" className="check-icon">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--primary)" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary card-btn">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
