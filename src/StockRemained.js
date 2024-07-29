
import React, { useState, useEffect } from 'react';
import './StockRemained.css';
import placeholderImage from './placeholder.jpeg'; // Add a placeholder image in your project

const StockRemained = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('name'); // Add a search type state

  useEffect(() => {
    fetch('/data.txt')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase();
    if (searchType === 'name') {
      return product.productName.toLowerCase().includes(query);
    } else if (searchType === 'id') {
      return product.productId.toLowerCase().includes(query);
    }
    return false;
  });

  return (
    <div className="container">
      <h1>Stock Remained</h1>
      <div className="search-controls">
        <select className="search-type" value={searchType} onChange={handleSearchTypeChange}>
          <option value="name">Search by Name</option>
          <option value="id">Search by ID</option>
        </select>
        <input
          type="text"
          className="search-bar"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    product.productImageUrl1,
    product.productImageUrl2,
    product.productImageUrl3,
    product.productImageUrl4,
    product.productImageUrl5,
    product.productImageUrl6,
  ].filter(url => url !== null);

  const handleImageError = (e) => {
    e.target.src = placeholderImage;
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="product-card">
      <div className="image-slider">
        <button className="prev-button" onClick={prevImage}>&#10094;</button>
        <img
          src={images[currentImageIndex]}
          alt={product.productName}
          className="product-image"
          onError={handleImageError}
        />
        <button className="next-button" onClick={nextImage}>&#10095;</button>
      </div>
      <div className="product-details">
        <h2>{product.productName}</h2>
        <p>ID: {product.productId}</p> {/* Display product ID */}
        <p>Category: {product.productCategory}</p>
        <p>Price: ${product.productPrice}</p>
        <p>Quantity: {product.productQuantity}</p>
        <p>{product.productDescription}</p>
      </div>
    </div>
  );
};

export default StockRemained;
