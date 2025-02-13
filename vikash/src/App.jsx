import React from 'react'
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './admin/index'
import Navbar from './comp/navbar'
import Booking from './admin/booking'
import Add from './admin/NewProperty'
import Review from './admin/review'
import View from './admin/view'
import Payments from './admin/payments'

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:5000";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/NewProperty" element={<Add />} />
          <Route path="/view1" element={<View />} />
          <Route path="/review" element={<Review />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
    </Router>
  )
}
export default App;