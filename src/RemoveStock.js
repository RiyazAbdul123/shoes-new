// import React from 'react';
// import './RemoveStock.css';

// const RemoveStock = () => (
//   <div className="container">
//     <h1>Remove Stock</h1>
//     <p>This is the Remove Stock page.</p>
//   </div>
// );

// export default RemoveStock;
import React, { useState, useEffect } from 'react';
import './RemoveStock.css';

const RemoveStock = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [removeQuantity, setRemoveQuantity] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleRemoveQuantityChange = (e) => {
    setRemoveQuantity(e.target.value);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const foundProduct = products.find(product => {
      if (searchType === 'name') {
        return product.productName.toLowerCase() === query;
      } else if (searchType === 'id') {
        return product.productId === query;
      }
      return false;
    });
    setSelectedProduct(foundProduct);
  };

  const handleRemoveStock = () => {
    if (selectedProduct && removeQuantity > 0) {
      const updatedQuantity = selectedProduct.productQuantity - parseInt(removeQuantity, 10);
      if (updatedQuantity >= 0) {
        const updatedProduct = { ...selectedProduct, productQuantity: updatedQuantity };

        // Update the product list
        const updatedProducts = products.map(product =>
          product.productId === selectedProduct.productId ? updatedProduct : product
        );
        setProducts(updatedProducts);

        // Update the API (assuming there's an endpoint to update product)
        fetch(`/api/products/${selectedProduct.productId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Product updated:', data);
            setSelectedProduct(updatedProduct);
            setRemoveQuantity('');
          })
          .catch(error => console.error('Error updating product:', error));
      } else {
        alert('Cannot remove more than available quantity');
      }
    } else {
      alert('Please enter a valid quantity');
    }
  };

  return (
    <div className="container">
      <h1>Remove Stock</h1>
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
        <button onClick={handleSearch}>Search</button>
      </div>

      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.productName}</h2>
          <p>ID: {selectedProduct.productId}</p>
          <p>Category: {selectedProduct.productCategory}</p>
          <p>Price: ${selectedProduct.productPrice}</p>
          <p>Quantity: {selectedProduct.productQuantity}</p>
          <p>{selectedProduct.productDescription}</p>

          <div className="remove-stock-controls">
            <input
              type="number"
              className="remove-quantity"
              placeholder="Quantity to remove"
              value={removeQuantity}
              onChange={handleRemoveQuantityChange}
            />
            <button onClick={handleRemoveStock}>Remove Stock</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveStock;
