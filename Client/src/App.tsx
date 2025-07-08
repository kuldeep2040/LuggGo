import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Your footer component
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FindStoragePage from "./pages/FindStoragePage";
import AboutUsPage from "./pages/AboutUsPage";
import HeroSection from "./components/HeroSection";
import AvailableStorageUnits from "./pages/AvailableStorageUnits";
import LuggageStorageDetail from "./pages/LuggageStorageDetails";
import ContactUs from "./pages/ContactUsPage";
import Home from "./pages/Home";
const TicketSalesPage: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#f4f8fc]   text-gray-900 font-sans min-h-screen flex flex-col">
       
        <Navbar />
 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<HeroSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element=  {<TermsOfService />} />
            <Route path="/find-storage" element={<FindStoragePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/units" element={<AvailableStorageUnits />} />
            <Route path="/book" element={<LuggageStorageDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />

 
 
          </Routes>
        </main>
 
        <Footer />
      </div>
    </Router>
  );
};
 
export default TicketSalesPage;
 