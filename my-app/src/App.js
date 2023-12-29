import React from "react";
import Home from "./components/Home.js";
import Calendar from "./components/Calendar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
