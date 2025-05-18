import React, { useState } from 'react';
import {  
  MapPin, 
  Clock, 
  Wifi, 
  Coffee, 
  Car, 
  Smartphone, 
  Scissors, 
  Info, 
  Check, 
  MessageCircle, 
  Star,
  Calendar,
  ChevronDown
} from 'lucide-react';

// TypeScript interfaces
interface StorageUnit {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  dailyRate: number;
  address: string;
  landmark: string;
  distance: { minutes: number; kilometers: number };
  openingHours: string;
  description: string;
  amenities: string[];
  nearbyAttractions: Array<{name: string; distance: number}>;
  schedule: Record<string, {open: string; close: string}>;
  images: string[];
}

const LuggageStorageDetail: React.FC = () => {
  // State management
  const [bagCount, setBagCount] = useState<number>(1);
  const [dropoffDate, setDropoffDate] = useState<string>('18-05-2025');
  const [dropoffTime, setDropoffTime] = useState<string>('11:45');
  const [pickupDate, setPickupDate] = useState<string>('18-05-2025');
  const [pickupTime, setPickupTime] = useState<string>('12:45');
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [activeDateInput, setActiveDateInput] = useState<'dropoff' | 'pickup' | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'reviews' | 'faq'>('info');
  
  // Mock data for the selected storage unit
  const storageUnit: StorageUnit = {
    id: "morgan-hotel-1",
    name: "Hotel Morgan",
    rating: 4.8,
    reviewCount: 127,
    hourlyRate: 13,
    dailyRate: 104,
    address: "Railway Station 2nd Exit, Jaipur",
    landmark: "Jaipur Railway Station",
    distance: { minutes: 14, kilometers: 1.2 },
    openingHours: "Mon-Sun 12:00 AM to 11:30 PM",
    description: "The LugGo store Hotel Morgan is an extremely convenient option for luggage storage in Jaipur City. This store is only 0.280 Km away from Jaipur Railway Station, 1.7 km from Jaipur Sindhi camp bus stand and 13.0 Km distance from Jaipur Airport.",
    amenities: ["WiFi", "Coffee", "Parking", "Mobile Charging", "Bag Repair"],
    nearbyAttractions: [
      {name: "Moti Dungri Temple", distance: 6.0},
      {name: "Hawa Mahal", distance: 4.5},
      {name: "Amer Fort", distance: 12.4},
      {name: "Jantar Mantar", distance: 4.3},
      {name: "Birla Mandir", distance: 5.7}
    ],
    schedule: {
      "Monday": {open: "12:00 AM", close: "11:59 PM"},
      "Tuesday": {open: "12:00 AM", close: "11:59 PM"},
      "Wednesday": {open: "12:00 AM", close: "11:59 PM"},
      "Thursday": {open: "12:00 AM", close: "11:59 PM"},
      "Friday": {open: "12:00 AM", close: "11:59 PM"},
      "Saturday": {open: "12:00 AM", close: "11:59 PM"},
      "Sunday": {open: "12:00 AM", close: "11:59 PM"}
    },
    images: ["https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg", "https://c4.wallpaperflare.com/wallpaper/754/557/317/palace-of-the-winds-jaipur-rajasthan-india-wallpaper-preview.jpg"]
  };

  // Generate dates for calendar
  const generateCalendarDates = () => {
    const today = new Date();
    const dates = [];
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      dates.push({
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        year: date.getFullYear(),
        dayName: date.toLocaleString('default', { weekday: 'short' }),
        fullDate: `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
      });
    }
    
    return dates;
  };
  
  const calendarDates = generateCalendarDates();
  
  // Time slot options
  const timeSlots = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", 
    "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
    "19:00", "20:00", "21:00", "22:00", "23:00"
  ];

  // Calculate hours between dropoff and pickup
  const calculateHours = () => {
    if (dropoffDate === pickupDate) {
      const dropoffHour = parseInt(dropoffTime.split(':')[0]);
      const pickupHour = parseInt(pickupTime.split(':')[0]);
      return Math.max(1, pickupHour - dropoffHour);
    }
    // For simplicity, returning 24 hours if dates are different
    return 24;
  };

  // Calculate current booking total
  const calculateTotal = () => {
    const hours = calculateHours();
    return bagCount * storageUnit.hourlyRate * hours;
  };

  // Handle date selection
  const handleDateSelect = (date: string) => {
    if (activeDateInput === 'dropoff') {
      setDropoffDate(date);
    } else if (activeDateInput === 'pickup') {
      setPickupDate(date);
    }
    setShowDatePicker(false);
    setActiveDateInput(null);
  };

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    if (activeDateInput === 'dropoff') {
      setDropoffTime(time);
    } else if (activeDateInput === 'pickup') {
      setPickupTime(time);
    }
  };

  // Format date for display
  const formatDateDisplay = (date: string, time: string) => {
    return `${date} ${time}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation bar
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 sticky top-0 z-20 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="flex items-center font-medium text-white hover:text-blue-100 transition-colors bg-white bg-opacity-20 px-4 py-2 rounded-lg">
            <ArrowLeft size={20} className="mr-2" />
            Back to Search Results
          </button>
          <div className="text-2xl font-bold">LugGo</div>
        </div>
      </div> */}

      {/* Hero section */}
      <div className="relative bg-gradient-to-b from-blue-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-2">{storageUnit.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-yellow-400 text-gray-900 px-3 py-1 rounded-full">
              <Star size={16} fill="currentColor" className="mr-1" />
              <span className="font-bold">{storageUnit.rating}</span>
              <span className="mx-1">•</span>
              <span>{storageUnit.reviewCount} reviews</span>
            </div>
            
            <div className="mx-3 bg-blue-500 px-3 py-1 rounded-full flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>Near {storageUnit.landmark}</span>
            </div>
            
            <div className="bg-green-500 px-3 py-1 rounded-full flex items-center">
              <Check size={14} className="mr-1" />
              <span>Nearest Location</span>
            </div>
          </div>
          
          <div className="flex items-center text-lg">
            <Clock size={20} className="mr-2" />
            <span>{storageUnit.openingHours}</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-3xl"></div>
      </div>

      {/* Main content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          {/* Gallery */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-12">
              {storageUnit.images.map((image, index) => (
                <div key={index} className={`${index === 0 ? 'md:col-span-2' : ''} relative overflow-hidden rounded-xl shadow-lg h-64`}>
                  <img 
                    src={image} 
                    alt={`${storageUnit.name} - Image ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Storage details */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="mb-6 border-b border-gray-200">
                <div className="flex space-x-8">
                  <button 
                    onClick={() => setActiveTab('info')}
                    className={`pb-4 relative ${activeTab === 'info' 
                      ? 'text-blue-600 font-medium border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Information
                  </button>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-4 relative ${activeTab === 'reviews' 
                      ? 'text-blue-600 font-medium border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Reviews
                  </button>
                  <button 
                    onClick={() => setActiveTab('faq')}
                    className={`pb-4 relative ${activeTab === 'faq' 
                      ? 'text-blue-600 font-medium border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    FAQs
                  </button>
                </div>
              </div>
              
              {activeTab === 'info' && (
                <>
                  {/* Location */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                    <div className="bg-gray-100 rounded-xl p-5 mb-4">
                      <div className="flex items-start mb-3">
                        <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                        <div className="ml-3">
                          <p className="text-gray-800 font-medium">{storageUnit.address}</p>
                          <p className="text-gray-500 text-sm mt-1">Full address will be shared after booking</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Show on Map
                        </button>
                      </div>
                      
                      <div className="mt-4 flex items-center">
                        <div className="mr-4 flex items-center text-gray-700">
                          <Clock size={16} className="mr-1 text-blue-600" />
                          <span>{storageUnit.distance.minutes} min drive</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin size={16} className="mr-1 text-blue-600" />
                          <span>{storageUnit.distance.kilometers} km from city center</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* About */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About this location</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{storageUnit.description}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Wifi size={18} className="text-blue-600 mr-3" />
                        <span className="text-gray-800">Free WiFi</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Coffee size={18} className="text-blue-600 mr-3" />
                        <span className="text-gray-800">Coffee Shop</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Car size={18} className="text-blue-600 mr-3" />
                        <span className="text-gray-800">Parking</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Smartphone size={18} className="text-blue-600 mr-3" />
                        <span className="text-gray-800">Charging</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <Scissors size={18} className="text-blue-600 mr-3" />
                        <span className="text-gray-800">Bag Repair</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Nearby attractions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {storageUnit.nearbyAttractions.map((attraction, index) => (
                        <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                          <MapPin size={16} className="text-blue-600 mr-2" />
                          <span className="text-gray-800">{attraction.name}</span>
                          <span className="ml-auto text-gray-500">{attraction.distance} km</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Operating Hours */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Operating Hours</h2>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(storageUnit.schedule).map(([day, hours], index) => (
                          <div 
                            key={index} 
                            className={`flex justify-between p-3 rounded-lg ${
                              day === 'Sunday' || day === 'Saturday' 
                                ? 'bg-blue-50 text-blue-800' 
                                : 'bg-white border border-gray-100'
                            }`}
                          >
                            <span className="font-medium">{day}</span>
                            <span>{hours.open} - {hours.close}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {activeTab === 'reviews' && (
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                  <p className="text-gray-700">Reviews section coming soon...</p>
                </div>
              )}
              
              {activeTab === 'faq' && (
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-gray-700">FAQs section coming soon...</p>
                </div>
              )}
            </div>
            
            {/* Right column - Booking form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24 border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
                  <h2 className="text-xl font-bold">Book Your Storage</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-3xl font-bold">₹{storageUnit.hourlyRate}</span>
                    <span className="ml-1">/hour</span>
                    <span className="mx-2 text-white text-opacity-70">|</span>
                    <span className="text-lg">₹{storageUnit.dailyRate}/day</span>
                  </div>
                </div>
                
                <div className="p-5">
                  {/* Date & Time Selection */}
                  <div className="mb-5 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">When do you need storage?</label>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Drop-off</label>
                        <button 
                          onClick={() => {
                            setActiveDateInput('dropoff');
                            setShowDatePicker(true);
                          }}
                          className="w-full flex items-center justify-between border border-gray-300 rounded-lg p-3 hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        >
                          <div className="flex items-center">
                            <Calendar size={16} className="text-blue-600 mr-2" />
                            <span className="text-gray-800">{formatDateDisplay(dropoffDate, dropoffTime)}</span>
                          </div>
                          <ChevronDown size={16} className="text-gray-400" />
                        </button>
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Pick-up</label>
                        <button 
                          onClick={() => {
                            setActiveDateInput('pickup');
                            setShowDatePicker(true);
                          }}
                          className="w-full flex items-center justify-between border border-gray-300 rounded-lg p-3 hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        >
                          <div className="flex items-center">
                            <Calendar size={16} className="text-blue-600 mr-2" />
                            <span className="text-gray-800">{formatDateDisplay(pickupDate, pickupTime)}</span>
                          </div>
                          <ChevronDown size={16} className="text-gray-400" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Date picker overlay */}
                    {showDatePicker && (
                      <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Select {activeDateInput === 'dropoff' ? 'Drop-off' : 'Pick-up'} Date
                          </h3>
                          <div className="flex overflow-x-auto pb-2 space-x-2">
                            {calendarDates.map((date, index) => (
                              <button
                                key={index}
                                onClick={() => handleDateSelect(date.fullDate)}
                                className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg transition-colors ${
                                  (activeDateInput === 'dropoff' && dropoffDate === date.fullDate) ||
                                  (activeDateInput === 'pickup' && pickupDate === date.fullDate)
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-blue-50'
                                }`}
                              >
                                <span className="text-xs font-medium">{date.dayName}</span>
                                <span className="text-lg font-bold my-1">{date.day}</span>
                                <span className="text-xs">{date.month}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Select {activeDateInput === 'dropoff' ? 'Drop-off' : 'Pick-up'} Time
                          </h3>
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((time, index) => (
                              <button
                                key={index}
                                onClick={() => handleTimeSelect(time)}
                                className={`p-2 text-center rounded-lg transition-colors ${
                                  (activeDateInput === 'dropoff' && dropoffTime === time) ||
                                  (activeDateInput === 'pickup' && pickupTime === time)
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-blue-50'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={() => {
                              setShowDatePicker(false);
                              setActiveDateInput(null);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Bag quantity */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of bags</label>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-800">Any size</span>
                      <div className="flex items-center">
                        <button 
                          onClick={() => setBagCount(Math.max(1, bagCount - 1))}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900">{bagCount}</span>
                        <button 
                          onClick={() => setBagCount(bagCount + 1)}
                          className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing details */}
                  <div className="border-t border-b border-gray-200 py-4 mb-5">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{bagCount} bag × {calculateHours()} hours</span>
                        <span className="font-medium text-gray-900">₹{calculateTotal()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-gray-700">Insurance (₹10,000/bag)</span>
                          <button className="ml-1 text-blue-500 hover:text-blue-700">
                            <Info size={16} />
                          </button>
                        </div>
                        <div className="flex items-center text-green-600">
                          <Check size={16} className="mr-1" />
                          <span className="font-medium">Included</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="credits" 
                            className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 mr-2"
                          />
                          <label htmlFor="credits" className="text-gray-600 text-sm">
                            Apply LugGo credits
                          </label>
                          <button className="ml-1 text-blue-500 hover:text-blue-700">
                            <Info size={16} />
                          </button>
                        </div>
                        <span className="text-gray-500">₹0</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Total and book now button */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">Total Price</span>
                      <span className="text-2xl font-bold text-blue-600">₹{calculateTotal()}</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center">
                      <img src="/api/placeholder/20/20" alt="" className="mr-2" />
                      Book Now
                    </button>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
                    <h3 className="font-medium text-blue-800 mb-1">Free cancellation</h3>
                    <p className="text-sm text-blue-700">
                      Cancel before your drop-off time for a full refund, no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg flex items-center transition-all transform hover:scale-105">
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default LuggageStorageDetail;
