// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import StockRemained from './StockRemained';
// import UpdateStock from './UpdateStock';
// import RemoveStock from './RemoveStock';
// import BookingsControl from './BookingControl';
// import DeliveryUpdates from './DeliveryUpdates';
// import MonthlyEarnings from './MonthlyEarnings';

// const App = () => (
//   <Router>
//     <div id="root">
//       <Navbar />
//       <Sidebar />
//       <div className="main-content">
//         <Routes>
//           <Route path="/stock-remained" element={<StockRemained />} />
//           <Route path="/update-stock" element={<UpdateStock />} />
//           <Route path="/remove-stock" element={<RemoveStock />} />
//           <Route path="/bookings-control" element={<BookingsControl />} />
//           <Route path="/delivery-updates" element={<DeliveryUpdates />} />
//           <Route path="/monthly-earnings" element={<MonthlyEarnings />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   </Router>
// );

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import StockRemained from './StockRemained';
import UpdateStock from './UpdateStock';
import RemoveStock from './RemoveStock';
import BookingsControl from './BookingControl';
import DeliveryUpdates from './DeliveryUpdates';
import MonthlyEarnings from './MonthlyEarnings';
// import Services from './Services'; // Import the Services component

const App = () => (
  <Router>
    <div id="root">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/stock-remained" />} /> {/* Set default route */}
          <Route path="/stock-remained" element={<StockRemained />} />
          <Route path="/update-stock" element={<UpdateStock />} />
          <Route path="/remove-stock" element={<RemoveStock />} />
          <Route path="/bookings-control" element={<BookingsControl />} />
          <Route path="/delivery-updates" element={<DeliveryUpdates />} />
          <Route path="/monthly-earnings" element={<MonthlyEarnings />} />
          {/* <Route path="/services" element={<Services />} /> Add Services route */}
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
