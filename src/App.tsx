import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "@/routes/Login";
import Drivers from "@/routes/Drivers";
import Dashboard from "@/routes/Dashboard";
import RideBookings from "@/routes/Bookings";

import AppLayout from "@/components/AppLayout";

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />}>
        {/* Protected routes */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ride-bookings" element={<RideBookings />} />
        <Route path="/drivers" element={<Drivers />} />
        {/* //404 pages */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
