import React, { useState } from 'react';

export default function FindStoragePage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const popularCities = [
    { name: 'Mumbai', icon: '🏙️' },
    { name: 'Delhi', icon: '🏛️' },
    { name: 'Bangalore', icon: '🌆' },
    { name: 'Kolkata', icon: '🌉' },
    { name: 'Chennai', icon: '🏖️' },
    { name: 'Hyderabad', icon: '🏯' }
  ];
  
  const storageLocations = [
    {
      name: 'SafeBag Mumbai Airport',
      location: 'Mumbai International T2, Gate 4',
      price: '₹99/hour',
      open: 'Open 24/7',
      rating: 4.8,
      reviews: 235,
      amenities: ['24/7 Security', 'Insurance Included', 'Air Conditioned']
    },
    {
      name: 'QuickStore Delhi Railway Station',
      location: 'Platform 1, Near Main Exit',
      price: '₹89/hour',
      open: '7 AM – 11 PM',
      rating: 4.5,
      reviews: 189,
      amenities: ['Digital Lockers', 'CCTV Surveillance', 'Sanitized']
    },
    {
      name: 'SmartLuggage Bangalore',
      location: 'MG Road Metro Station',
      price: '₹75/hour',
      open: 'Open 24/7',
      rating: 4.7,
      reviews: 172,
      amenities: ['Package Acceptance', 'Staff Assistance', 'Digital Receipt']
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section with Indian-inspired pattern */}
      <div className="relative bg-blue-600 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '25px 25px'
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Store and Explore
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Find Nearby Luggage Storage
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Safely store your baggage at verified locations near airports, railway stations, 
            and city centers across India. Travel hassle-free!
          </p>
        </div>
      </div>
      
      {/* Search Bar with Indian-style decoration */}
      <div className="max-w-4xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location (e.g., Mumbai Airport, Delhi Metro)"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition flex items-center justify-center">
              <span>Search</span>
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
          
          {/* Popular Cities */}
          <div className="mt-6">
            <h3 className="text-gray-600 mb-3 font-medium">Popular Cities:</h3>
            <div className="flex flex-wrap gap-2">
              {popularCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => setSelectedCity(city.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    selectedCity === city.name
                      ? 'bg-blue-100 border-blue-300 text-blue-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{city.icon} {city.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Indicators */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">100% Safe & Secure</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Verified Locations</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">24/7 Access</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Book Now, Pay Later</h3>
          </div>
        </div>
      </div>
      
      {/* Storage Results with Indian-inspired design elements */}
      <div className="max-w-6xl mx-auto mt-16 px-6 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </span>
          Popular Storage Locations
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storageLocations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition border border-gray-100 group"
            >
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                <img 
                  src={`/api/placeholder/400/320`} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg text-sm font-medium text-blue-600">
                  {item.open}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex items-center text-amber-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-1 font-medium">{item.rating}</span>
                    <span className="ml-1 text-gray-500 text-sm">({item.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-sm">{item.location}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.amenities.map((amenity, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-bold">{item.price}</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center">
                    Book Now
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition inline-flex items-center">
            View More Locations
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* How It Works with Indian-inspired decoration */}
      <div className="bg-blue-50 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '25px 25px'
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center mb-12 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting dots line (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-blue-200 z-0"></div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-12 border-4 border-white shadow-sm">1</div>
              <h3 className="text-xl font-semibold mt-4 mb-3 text-gray-800">Search Location</h3>
              <p className="text-gray-600">Find storage spots near you or your destination in over 25 cities across India.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-12 border-4 border-white shadow-sm">2</div>
              <h3 className="text-xl font-semibold mt-4 mb-3 text-gray-800">Book Online</h3>
              <p className="text-gray-600">Reserve your spot within seconds. Pay online or at drop-off.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-12 border-4 border-white shadow-sm">3</div>
              <h3 className="text-xl font-semibold mt-4 mb-3 text-gray-800">Drop & Explore</h3>
              <p className="text-gray-600">Drop your luggage and receive a digital receipt. Enjoy your day baggage-free!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
