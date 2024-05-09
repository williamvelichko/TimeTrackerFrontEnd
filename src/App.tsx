import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Register from "./pages/Register/Register";
import TimeTracker from "./pages/TimeTracker/TimeTracker";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App vh-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/timeTracker" element={<TimeTracker />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
