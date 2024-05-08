import React from "react";
import Home from "./components/Home.js";
import Calendar from "./components/Calendar.js";
import Phone from "./components/Phone.js";
import Stord from "./components/Stord.js";
import Beaches from "./components/Beaches.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Phone" element={<Phone />} />
        <Route path="/Stord" element={<Stord />} />
        <Route path="/Beaches" element={<Beaches />} />
      </Routes>
    </Router>
  );
}

export default App;
