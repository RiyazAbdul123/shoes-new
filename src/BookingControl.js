import React, { useEffect, useState } from 'react';
import './BookingControl.css';
import CardComponent from './CardComponent';

const BookingsControl = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://mrv1.indianwelfarefoundation.org.in/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTrackDelivery = (id) => {
    // Implement track delivery logic here
    console.log('Tracking delivery for product ID:', id);
  };

  const handleManageDelivery = (id) => {
    // Implement manage delivery status logic here
    console.log('Managing delivery status for product ID:', id);
  };

  return (
    <div className="container">
      <h1>Bookings Control</h1>
      <div>
        {products.map(product => (
          <CardComponent
            key={product.id}
            product={product}
            onTrackDelivery={handleTrackDelivery}
            onManageDelivery={handleManageDelivery}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingsControl;
