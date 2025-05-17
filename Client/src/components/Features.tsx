import React from 'react';
import { Briefcase, Train, Clock, ShieldCheck, /*ShieldDollar, GlobeAlt*/Truck } from 'lucide-react';

// Define a type that includes the icon as a component
type Feature = {
  title: string;
  description: string;
  iconColor: string;
  icon: JSX.Element;
};

const features: Feature[] = [
  {
    title: 'Airport Lockers',
    description:
      'Convenient luggage storage right next to major airports with 24/7 access and high-level security.',
    iconColor: 'bg-blue-100 text-blue-500',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: 'Railway Cloakrooms',
    description:
      'Modern baggage facilities available near tier-1 city railway stations for all travelers.',
    iconColor: 'bg-yellow-100 text-yellow-500',
    icon: <Train className="w-5 h-5" />,
  },
  {
    title: 'Hourly & Daily Plans',
    description:
      'Flexible pricing so you only pay for the hours or days you need to store your baggage.',
    iconColor: 'bg-green-100 text-green-500',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: 'High Security',
    description:
      'All luggage is stored with secure digital locks, CCTV, and on-site staff monitoring.',
    iconColor: 'bg-red-100 text-red-500',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Insurance Included',
    description:
      'Every bag stored with us is automatically insured for loss or damage.',
    iconColor: 'bg-purple-100 text-purple-500',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Easy Web Booking',
    description:
      'Use our clean and simple website to pre-book your storage space before arrival.',
    iconColor: 'bg-pink-100 text-pink-500',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Luggage Delivery',
    description:
      'Get your stored luggage delivered to your hotel, Airbnb, or destination with our add-on courier option.',
    iconColor: 'bg-orange-100 text-orange-500',
    icon: <Truck className="w-5 h-5" />,
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-[#f5faff] py-20 px-4 md:px-10 overflow-hidden">
      {/* Blue Blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0" />
      {/* Orange Blob */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Designed for <span className="text-blue-600">Smart Travelers</span>
        </h2>
        <p className="text-gray-500 mt-4">
          Here's what makes our baggage storage service the most reliable and user-friendly
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm p-6 text-left hover:shadow-lg transition-all duration-200 ease-in-out w-full h-60"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${feature.iconColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* More Card */}
          <div className="bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-semibold relative w-full h-60 hover:shadow-lg transition-all duration-200 ease-in-out">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">+4</div>
              <div>More</div>
            </div>
            <div className="absolute bottom-3 right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}