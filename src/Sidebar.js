import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/stock-remained" className="sidebar-link">Stock Remained</Link>
    <Link to="/update-stock" className="sidebar-link">Update Stock</Link>
    <Link to="/remove-stock" className="sidebar-link">Remove Stock</Link>
    <Link to="/bookings-control" className="sidebar-link">Bookings Control</Link>
    <Link to="/delivery-updates" className="sidebar-link">Delivery Updates</Link>
    <Link to="/monthly-earnings" className="sidebar-link">Monthly Earnings</Link>
  </div>
);

export default Sidebar;
