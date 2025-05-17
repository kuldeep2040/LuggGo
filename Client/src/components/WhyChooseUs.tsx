"use client";
import React, { useState } from "react";
import {
  ShieldCheck,
  Store,
  PhoneCall,
  DollarSign,
  Lock,
  XCircle,
  ArrowRight
} from "lucide-react";

// Feature type definition
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Verified Stores",
    description:
      "We ensure peace of mind with verified, validated stores and strict approval processes for guaranteed luggage security.",
    icon: <Store className="w-6 h-6" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance from our experts for a seamless experience, no matter the issue.",
    icon: <PhoneCall className="w-6 h-6" />,
  },
  {
    title: "Flexible Prices",
    description:
      "Hourly-based pricing ensures maximum flexibility and value for all types of travelers.",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Insurance Coverage",
    description:
      "We provide coverage up to ₹10,000 INR for rare incidents. Travel worry-free with us.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Tamper-Proof Security",
    description:
      "Each bag is sealed with high-grade tamper-proof tags to ensure full safety of your belongings.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "100% Free Cancellation",
    description:
      "Change in plans? No problem. Cancel anytime with zero fees, no questions asked.",
    icon: <XCircle className="w-6 h-6" />,
  },
];

const WhyChooseUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-4">
            Our Promise
          </span>
          
          <h2 className="text-4xl md:text-4xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We've reimagined luggage storage to give you peace of mind while you explore freely
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Colored top border that grows on hover */}
              <div className={`h-1 bg-gradient-to-r from-blue-500 to-cyan-400 w-full transform origin-left transition-all duration-300 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5 bg-blue-50 text-blue-600 transition-all duration-300 ${hoveredIndex === index ? 'bg-blue-600 text-white' : ''}`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                <div className={`mt-6 flex items-center text-blue-600 font-medium transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;