// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => (
//   <div className="sidebar">
//     <Link to="/stock-remained" className="sidebar-link">Stock Remained</Link>
//     <Link to="/update-stock" className="sidebar-link">Update Stock</Link>
//     <Link to="/remove-stock" className="sidebar-link">Remove Stock</Link>
//     <Link to="/bookings-control" className="sidebar-link">Bookings Control</Link>
//     <Link to="/delivery-updates" className="sidebar-link">Delivery Updates</Link>
//     <Link to="/monthly-earnings" className="sidebar-link">Monthly Earnings</Link>
//   </div>
// );

// export default Sidebar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => (
//   <div className="sidebar">
//     <Link to="/stock-remained" className="sidebar-link">Stock Remained</Link>
//     <Link to="/update-stock" className="sidebar-link">Update Stock</Link>
//     <Link to="/remove-stock" className="sidebar-link">Remove Stock</Link>
//     <Link to="/bookings-control" className="sidebar-link">Bookings Control</Link>
//     <Link to="/delivery-updates" className="sidebar-link">Delivery Updates</Link>
//     <Link to="/monthly-earnings" className="sidebar-link">Monthly Earnings</Link>
//     <Link to="/services" className="sidebar-link">Services</Link> {/* Added Services link */}
//   </div>
// );

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaEdit, FaTrash, FaCalendarAlt, FaTruck, FaDollarSign, FaServicestack } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/stock-remained" className="sidebar-link">
      <FaBox className="sidebar-icon" />
      Stock Remained
    </Link>
    <Link to="/update-stock" className="sidebar-link">
      <FaEdit className="sidebar-icon" />
      Update Stock
    </Link>
    <Link to="/remove-stock" className="sidebar-link">
      <FaTrash className="sidebar-icon" />
      Remove Stock
    </Link>
    <Link to="/bookings-control" className="sidebar-link">
      <FaCalendarAlt className="sidebar-icon" />
      Bookings Control
    </Link>
    <Link to="/delivery-updates" className="sidebar-link">
      <FaTruck className="sidebar-icon" />
      Delivery Updates
    </Link>
    <Link to="/monthly-earnings" className="sidebar-link">
      <FaDollarSign className="sidebar-icon" />
      Monthly Earnings
    </Link>
    <Link to="/services" className="sidebar-link">
      <FaServicestack className="sidebar-icon" />
      Services
    </Link>
  </div>
);

export default Sidebar;
