// import React from 'react';
// import './DeliveryUpdates.css';

// const mockData = [
//   { id: 1, customer: 'John Doe', email: 'john@example.com', price: '$120', status: 'Delivered' },
//   { id: 2, customer: 'Jane Smith', email: 'jane@example.com', price: '$85', status: 'Pending' },
//   { id: 3, customer: 'Alice Johnson', email: 'alice@example.com', price: '$60', status: 'Cancelled' },
//   { id: 4, customer: 'Bob Brown', email: 'bob@example.com', price: '$200', status: 'Delivered' }
// ];

// const DeliveryUpdates = () => (
//   <div className="container">
//     <h1>Delivery Updates</h1>
//     <div className="cards-container">
//       <div className="card">
//         <h2>Total Sales</h2>
//         <p>$405</p>
//       </div>
//       <div className="card">
//         <h2>Total Orders</h2>
//         <p>4</p>
//       </div>
//     </div>
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Customer Name</th>
//             <th>Email ID</th>
//             <th>Price</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mockData.map(order => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.customer}</td>
//               <td>{order.email}</td>
//               <td>{order.price}</td>
//               <td>{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// export default DeliveryUpdates;

import React from 'react';
import './DeliveryUpdates.css';
import { FaDollarSign, FaBoxes } from 'react-icons/fa'; // Importing icons

const mockData = [
  { id: 1, customer: 'John Doe', email: 'john@example.com', price: '$120', status: 'Delivered' },
  { id: 2, customer: 'Jane Smith', email: 'jane@example.com', price: '$85', status: 'Pending' },
  { id: 3, customer: 'Alice Johnson', email: 'alice@example.com', price: '$60', status: 'Cancelled' },
  { id: 4, customer: 'Bob Brown', email: 'bob@example.com', price: '$200', status: 'Delivered' }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'green';
    case 'Cancelled':
      return 'red';
    case 'Pending':
      return 'orange';
    default:
      return 'grey';
  }
};

const DeliveryUpdates = () => (
  <div className="container">
    <h1>Delivery Updates</h1>
    <div className="cards-container">
      <div className="card">
        <FaDollarSign className="card-icon" />
        <h2>Total Sales</h2>
        <p>$405</p>
      </div>
      <div className="card">
        <FaBoxes className="card-icon" />
        <h2>Total Orders</h2>
        <p>4</p>
      </div>
    </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Email ID</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.email}</td>
              <td>{order.price}</td>
              <td style={{ color: getStatusColor(order.status) }}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DeliveryUpdates;

