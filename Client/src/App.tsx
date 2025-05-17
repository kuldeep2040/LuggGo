import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Your footer component
import Home from "./pages/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FindStoragePage from "./pages/FindStoragePage";
const TicketSalesPage: React.FC = () => {
  return (
    <Router>
      <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element=  {<TermsOfService />} />
            <Route path="/find-storage" element={<FindStoragePage />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default TicketSalesPage;
