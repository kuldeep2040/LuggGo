import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Your footer component
import Home from "./pages/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import HeroSection from "./components/HeroSection";
const TicketSalesPage: React.FC = () => {
  return (
    <Router>
      <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<HeroSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default TicketSalesPage;
