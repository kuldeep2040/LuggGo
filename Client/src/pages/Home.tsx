// src/pages/Home.tsx or src/Home.tsx
import React from 'react';
import FeaturesGrid from '../components/Features'; // adjust path as needed
import PromoHero from '../components/PromoHero';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      {/* You can add a Hero, Navbar, etc. here */}
      <FeaturesGrid />
      <PromoHero/>
      <Testimonials/>
    </div>
  );
};

export default Home;
