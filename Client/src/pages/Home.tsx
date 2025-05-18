// src/pages/Home.tsx or src/Home.tsx
import React from 'react';
import FeaturesGrid from '../components/Features'; // adjust path as needed
import Testimonials from '../components/Testimonials';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div>
      {/* You can add a Hero, Navbar, etc. here */}
      <HeroSection/>
      <FeaturesGrid />
      <Testimonials/>
    </div>
  );
};

export default Home;
