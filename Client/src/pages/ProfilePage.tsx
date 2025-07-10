import React, { useState } from 'react';
import { User, Edit3, MapPin, Calendar, Package, Phone, Mail, CreditCard, Shield, ChevronRight, Clock, CheckCircle, X, Save, Settings, LogOut, Star, TrendingUp } from 'lucide-react';

interface Booking {
  id: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  bags: number;
  price: number;
  status: 'completed' | 'active' | 'cancelled';
  qrCode: string;
  rating?: number;
}

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'settings'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: 'Jamie Boston',
    email: 'jamie.boston@email.com',
    phone: '+91 98765 43210',
    city: 'Jaipur',
    address: 'Sector 15, Pink City, Jaipur'
  });
  const [editedDetails, setEditedDetails] = useState<UserDetails>(userDetails);

  const bookings: Booking[] = [
    {
      id: '1',
      location: 'Railway Station 2nd Exit, Jaipur',
      date: '2025-05-18',
      time: '11:45 - 12:45',
      duration: '1 hour',
      bags: 1,
      price: 13,
      status: 'active',
      qrCode: '9538'
    },
    {
      id: '2',
      location: 'Hawa Mahal Station, Jaipur',
      date: '2025-04-22',
      time: '14:30 - 16:30',
      duration: '2 hours',
      bags: 2,
      price: 52,
      status: 'completed',
      qrCode: '8421',
      rating: 5
    },
    {
      id: '3',
      location: 'Jaipur Airport Terminal 1',
      date: '2025-03-15',
      time: '09:00 - 18:00',
      duration: '9 hours',
      bags: 3,
      price: 234,
      status: 'completed',
      qrCode: '7639',
      rating: 4
    }
  ];

  const handleSave = () => {
    setUserDetails(editedDetails);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedDetails(userDetails);
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200';
      case 'completed': return 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200';
      default: return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200';
    }
  };

  const totalBookings = bookings.length;
  const activeBookings = bookings.filter(b => b.status === 'active').length;
  const totalSpent = bookings.reduce((sum, b) => sum + b.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-50 via-white to-purple-50">
      {/* Header */}
      {/* <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">{userDetails.name}</p>
                  <p className="text-xs text-gray-500">{userDetails.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{userDetails.name}</h3>
                    <p className="text-blue-100 text-sm">{userDetails.city}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-blue-100">Premium Member</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{totalBookings}</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{activeBookings}</div>
                    <div className="text-xs text-gray-600">Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">₹{totalSpent}</div>
                    <div className="text-xs text-gray-600">Spent</div>
                  </div>
                </div>
              </div>

              <nav className="p-4 space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeTab === 'profile' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeTab === 'bookings' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span className="font-medium">Bookings</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeTab === 'settings' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="font-medium">Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 text-red-600 hover:bg-red-50 hover:scale-105 mt-8">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Profile Details</h2>
                    <p className="text-blue-100 mt-1">Manage your personal information</p>
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span className="font-medium">Edit Profile</span>
                    </button>
                  ) : (
                    <div className="flex space-x-3">
                      <button
                        onClick={handleCancel}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedDetails.name}
                          onChange={(e) => setEditedDetails({...editedDetails, name: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <User className="h-5 w-5 text-blue-600" />
                          <span className="text-gray-900 font-medium">{userDetails.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={editedDetails.email}
                          onChange={(e) => setEditedDetails({...editedDetails, email: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <Mail className="h-5 w-5 text-blue-600" />
                          <span className="text-gray-900 font-medium">{userDetails.email}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editedDetails.phone}
                          onChange={(e) => setEditedDetails({...editedDetails, phone: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <Phone className="h-5 w-5 text-blue-600" />
                          <span className="text-gray-900 font-medium">{userDetails.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">City</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedDetails.city}
                          onChange={(e) => setEditedDetails({...editedDetails, city: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      ) : (
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <span className="text-gray-900 font-medium">{userDetails.city}</span>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Address</label>
                      {isEditing ? (
                        <textarea
                          value={editedDetails.address}
                          onChange={(e) => setEditedDetails({...editedDetails, address: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      ) : (
                        <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                          <span className="text-gray-900 font-medium">{userDetails.address}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">My Bookings</h2>
                        <p className="text-blue-100 mt-1">Track and manage your storage history</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-6 w-6 text-white" />
                        <span className="text-lg font-semibold">{bookings.length} Total</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="group relative bg-white/40 backdrop-blur-sm border border-white shadow-lg rounded-2xl p-6 hover:bg-white/60 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center">
                                  <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">{booking.location}</h3>
                                  <span className={`px-3 py-1 text-xs rounded-full border capitalize font-medium ${getStatusColor(booking.status)}`}>
                                    {booking.status}
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Calendar className="h-4 w-4 text-blue-500" />
                                  <span className="font-medium">{booking.date}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Clock className="h-4 w-4 text-purple-500" />
                                  <span className="font-medium">{booking.time}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Package className="h-4 w-4 text-green-500" />
                                  <span className="font-medium">{booking.bags} bag{booking.bags > 1 ? 's' : ''}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <CreditCard className="h-4 w-4 text-orange-500" />
                                  <span className="font-bold text-gray-900">₹{booking.price}</span>
                                </div>
                              </div>
                              {booking.rating && (
                                <div className="flex items-center space-x-2 mt-3">
                                  <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`h-4 w-4 ${i < booking.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-600">Your rating</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center space-x-4">
                              {booking.status === 'active' && (
                                <div className="text-center bg-gradient-to-r from-blue-500 to-blue-500 text-white p-4 rounded-xl">
                                  <div className="text-xs font-medium">Access Code</div>
                                  <div className="text-2xl font-bold">{booking.qrCode}</div>
                                </div>
                              )}
                              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <h2 className="text-2xl font-bold">Account Settings</h2>
                  <p className="text-blue-100 mt-1">Manage your preferences and security</p>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="group bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Account Security</h3>
                            <p className="text-sm text-gray-600">Two-factor authentication enabled</p>
                          </div>
                        </div>
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="group bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/60 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                            <p className="text-sm text-gray-600">Receive booking confirmations and updates</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-500"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="group bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/60 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">SMS Notifications</h3>
                            <p className="text-sm text-gray-600">Get text updates for your bookings</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;