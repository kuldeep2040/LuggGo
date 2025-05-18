import React, { useEffect, useState } from "react";
import { MapPin, Clock, ExternalLink, Star, Navigation } from "lucide-react";

// Define a storage unit type
type StorageUnit = {
  id: number;
  name: string;
  address: string;
  distance: string;
  pricePerHour: number;
  pricePerDay: number;
  landmark: string;
  openTime: string;
  closeTime: string;
  image: string;
  nearest: boolean;
  rating?: number;
  reviews?: number;
};

// Expanded dummy data with ratings
const dummyData: StorageUnit[] = [
  {
    id: 1,
    name: "Hotel Morgan",
    address: "Railway Station 2nd Exit, Jaipur",
    distance: "14 min / 1.2 km",
    pricePerHour: 13,
    pricePerDay: 104,
    landmark: "Jaipur Railway Station",
    openTime: "12:00 AM",
    closeTime: "11:30 PM",
    image: 'https://files.yappe.in/place/small/cloak-room-9468891.webp',
    nearest: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Luggage Storage by Rental Wheel",
    address:
      "Near Khasa Kothi Flyover, MI Road, Near, Sindhi Camp, Jaipur, Rajasthan 302001",
    distance: "15 min / 1.2 km",
    pricePerHour: 20,
    pricePerDay: 160,
    landmark: "Jaipur Railway Station",
    openTime: "6:00 AM",
    closeTime: "8:00 PM",
    image: "https://indianrailmedia.wordpress.com/wp-content/uploads/2016/01/a27a2-suitcase.jpg?w=400&h=272",
    nearest: false,
    rating: 4.6,
    reviews: 84
  },
  {
    id: 3,
    name: "SafeKeep Storage",
    address: "Pink Square Mall, Govind Marg, Jaipur",
    distance: "22 min / 2.5 km",
    pricePerHour: 15,
    pricePerDay: 120,
    landmark: "Pink Square Mall",
    openTime: "9:00 AM",
    closeTime: "9:00 PM",
    image: "https://indianrailmedia.wordpress.com/wp-content/uploads/2016/01/4b898-cloak-room-at-new-delhi-railway-station.jpg",
    nearest: false,
    rating: 4.7,
    reviews: 56
  }
];

const AvailableStorageUnits: React.FC = () => {
  const [units, setUnits] = useState<StorageUnit[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("nearest");

  useEffect(() => {
    // Filter and sort logic could be implemented here
    const filteredUnits = [...dummyData];
    
    if (selectedFilter === "nearest") {
      filteredUnits.sort((a, b) => {
        if (a.nearest && !b.nearest) return -1;
        if (!a.nearest && b.nearest) return 1;
        return parseFloat(a.distance.split(' / ')[1]) - parseFloat(b.distance.split(' / ')[1]);
      });
    } else if (selectedFilter === "price-low") {
      filteredUnits.sort((a, b) => a.pricePerHour - b.pricePerHour);
    } else if (selectedFilter === "price-high") {
      filteredUnits.sort((a, b) => b.pricePerHour - a.pricePerHour);
    } else if (selectedFilter === "rating") {
      filteredUnits.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    
    setUnits(filteredUnits);
  }, [selectedFilter]);

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header with search summary and filters */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {units.length} LugGo stores near <span className="text-blue-600">Jaipur</span>
        </h1>
        <p className="text-gray-600 mb-4">Safe and secure luggage storage near top attractions</p>
        
        {/* Filter options */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${selectedFilter === "nearest" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setSelectedFilter("nearest")}
          >
            Nearest
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${selectedFilter === "price-low" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setSelectedFilter("price-low")}
          >
            Price (Low to High)
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${selectedFilter === "price-high" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setSelectedFilter("price-high")}
          >
            Price (High to Low)
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${selectedFilter === "rating" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setSelectedFilter("rating")}
          >
            Highest Rating
          </button>
        </div>
      </div>

      {/* Storage Unit Cards */}
      <div className="grid grid-cols-1 gap-6">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Column */}
              <div className="relative md:w-72">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-48 md:h-full object-cover"
                />
                {unit.nearest && (
                  <div className="absolute top-3 left-0 bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-r-full shadow-sm">
                    Nearest Location
                  </div>
                )}
              </div>
              
              {/* Content Column */}
              <div className="flex-1 p-4 md:p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      {unit.name}
                    </h2>
                    {unit.rating && (
                      <div className="flex items-center mb-2">
                        <div className="flex items-center text-yellow-400 mr-1">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-sm font-medium">{unit.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({unit.reviews} reviews)</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <p className="text-blue-700 font-bold">₹{unit.pricePerHour}/hour</p>
                      <p className="text-gray-600">₹{unit.pricePerDay}/day</p>
                      <p className="text-xs text-gray-500 mt-1">per bag</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <p className="flex items-center text-sm text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                    <span>{unit.address}</span>
                  </p>
                  <p className="flex items-center text-sm text-gray-700">
                    <Navigation className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                    <span>About {unit.distance} from <span className="font-medium">Jaipur</span></span>
                  </p>
                  <p className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Open Mon-Sun {unit.openTime} to {unit.closeTime}</span>
                  </p>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Landmark:</span> {unit.landmark}
                  </p>
                  <p className="text-xs text-gray-500 italic mt-1">
                    Full address will be shared after booking
                  </p>
                  <a href="#" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-2">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Show on Map
                  </a>
                </div>
              </div>
              
              {/* Action Column */}
                <a href="/book">
              <div className="bg-gray-50 p-4 md:p-6 flex flex-col justify-center items-center space-y-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl w-full transition duration-200 shadow-sm">
                  Book Now
                </button>
                <button className="bg-[#0acd7d] hover:bg-[#249264] text-white font-semibold py-3 px-6 rounded-xl w-full transition duration-200 shadow-sm">
                  View Details
                </button>
              </div>
                </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-10 bg-blue-50 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Need more options?</h3>
        <p className="text-gray-600 mb-4">We have over 2,000+ storage locations across 56 cities</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-sm">
          Search Different Location
        </button>
      </div>
    </div>
  );
};

export default AvailableStorageUnits;