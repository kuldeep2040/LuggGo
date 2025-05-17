import React from "react";
import Navbar from "./components/Navbar";
import "tailwindcss";
const TicketSalesPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center px-10 py-20 bg-gray-50 relative overflow-hidden">
        <h1 className="text-4xl font-bold mb-4">
          Sell Tickets <span className="text-blue-600">Online.</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Sell your online tickets easily with best user satisfaction.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium text-sm">
          Get Started
        </button>
        <div className="mt-10 flex justify-center items-center gap-10">
          <div className="text-left max-w-xs">
            <img
              src="https://source.unsplash.com/200x200/?woman,phone"
              alt="User"
              className="rounded-full mx-auto mb-4"
            />
            <div className="bg-white p-4 rounded shadow-md text-sm">
              <p>Katrina monte</p>
              <p className="text-gray-500">@katmonte</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium">$30,049.41</p>
            <p className="text-green-500">+14%</p>
            <p className="text-gray-500">Sales: $22,426</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Packed with tools and <span className="text-blue-600">functionality.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Lowest Fee",
            "Free to Start",
            "Unlimited Tickets",
            "Event Calendars",
            "Attendees",
            "Robust Ecommerce",
            "Revenue Control",
            "+4 More",
          ].map((feature: string, index: number) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="font-medium text-lg mb-2">{feature}</h3>
              <p className="text-gray-500 text-sm">
                Our unbelievable low fee of 0.9% will help you keep more of your profits and scale faster.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grow Section */}
      <section className="px-10 py-20 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Make more money and <span className="text-blue-600">grow your event.</span>
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto">
          Our 0.9% fee is the lowest on the market. It will allow you to keep more profits and help grow your event.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="https://source.unsplash.com/300x200/?meeting,office"
            alt="Grow event"
            className="rounded shadow-md"
          />
          <div className="text-sm text-left">
            <p className="font-medium">Gross: $547,210</p>
            <p className="text-gray-500">Sales: $22,426</p>
            <p className="text-green-500">+14%</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketSalesPage;
