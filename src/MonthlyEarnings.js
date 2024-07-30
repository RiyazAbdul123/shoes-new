import React from 'react';
import './MonthlyEarnings.css';
import { FaDollarSign, FaCalendarAlt } from 'react-icons/fa'; // Importing icons

const MonthlyEarnings = () => (
  <div className="container">
    <h1>Monthly Earnings</h1>
    <div className="cards-container">
      <div className="card">
        <FaCalendarAlt className="card-icon" />
        <h2>Monthly Earnings</h2>
        <p>$3,200</p>
      </div>
      <div className="card">
        <FaDollarSign className="card-icon" />
        <h2>Total Earnings</h2>
        <p>$25,000</p>
      </div>
    </div>
    <div className="details-container">
      <h2>Monthly Breakdown</h2>
      <ul>
        <li><strong>January:</strong> $2,500</li>
        <li><strong>February:</strong> $2,800</li>
        <li><strong>March:</strong> $3,200</li>
        <li><strong>April:</strong> $3,100</li>
        <li><strong>May:</strong> $2,900</li>
        <li><strong>June:</strong> $2,800</li>
      </ul>
    </div>
  </div>
);

export default MonthlyEarnings;
