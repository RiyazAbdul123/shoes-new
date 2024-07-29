
import React, { useState, useEffect } from 'react';
import './UpdateStock.css';

const UpdateStock = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/data.txt')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleProductChange = (e) => {
    const productId = e.target.value;
    const product = products.find(p => p.id === parseInt(productId));
    setSelectedProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({
      ...selectedProduct,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      // Collect form data
    };
  
    try {
      const response = await fetch('http://localhost:5000/update-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Product updated successfully');
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="update-stock-container">
      <h1>Update Stock</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor="product-select">Select Product:</label>
          <select id="product-select" onChange={handleProductChange}>
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>

        {selectedProduct && (
          <>
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={selectedProduct.productName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productCategory">Category:</label>
              <input
                type="text"
                id="productCategory"
                name="productCategory"
                value={selectedProduct.productCategory}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productPrice">Price:</label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                value={selectedProduct.productPrice}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productQuantity">Quantity:</label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                value={selectedProduct.productQuantity}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productDescription">Description:</label>
              <textarea
                id="productDescription"
                name="productDescription"
                value={selectedProduct.productDescription}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productSizes">Sizes:</label>
              <input
                type="text"
                id="productSizes"
                name="productSizes"
                value={selectedProduct.productSizes}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="frontView">Front View URL:</label>
              <input
                type="text"
                id="frontView"
                name="frontView"
                value={selectedProduct.productImageUrl1}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sideView">Side View URL:</label>
              <input
                type="text"
                id="sideView"
                name="sideView"
                value={selectedProduct.productImageUrl2}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="topView">Top View URL:</label>
              <input
                type="text"
                id="topView"
                name="topView"
                value={selectedProduct.productImageUrl3}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="backView">Back View URL:</label>
              <input
                type="text"
                id="backView"
                name="backView"
                value={selectedProduct.productImageUrl4}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="detailedView">Detailed View URL:</label>
              <input
                type="text"
                id="detailedView"
                name="detailedView"
                value={selectedProduct.productImageUrl5}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="angle1">Angle 1 URL:</label>
              <input
                type="text"
                id="angle1"
                name="angle1"
                value={selectedProduct.productImageUrl6}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="angle2">Angle 2 URL:</label>
              <input
                type="text"
                id="angle2"
                name="angle2"
                value={selectedProduct.productImageUrl7 || ''}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="submit-button">Update Product</button>
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateStock;
