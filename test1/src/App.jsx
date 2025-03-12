
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AuthPage from "./components/auth/AuthPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// App.jsx

// Admin imports
import Index from "./admin/index";
import Booking from "./admin/booking";
import Add from "./admin/NewProperty";
import Review from "./admin/review";
import View from "./admin/view";
//mport Payments from './admin/payments';
import Reviewform from "./admin/reviewform";
import Edit from "./admin/EditPage";

// Import axios config
import "./axiosConfig";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />

        {/* Protected admin routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/NewProperty"
          element={
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view"
          element={
            <ProtectedRoute>
              <View />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reviewform"
          element={
            <ProtectedRoute>
              <Reviewform />
            </ProtectedRoute>
          }
        />
        <Route
          path="/EditPage/:id"
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
