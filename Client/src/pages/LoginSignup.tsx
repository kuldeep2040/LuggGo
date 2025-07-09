import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User, Luggage, MapPin, Shield, Star } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { activeTab, formData });
    // You can add your authentication logic here
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const switchTab = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with Luggage Theme */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-all"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-white/20 rounded-full">
              <Luggage className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-white text-xl font-bold">LugGo</h2>
              <p className="text-blue-100 text-sm">Secure Luggage Storage</p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => switchTab('login')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Welcome Back
            </button>
            <button
              onClick={() => switchTab('signup')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'signup'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Join LugGo
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Benefits Banner */}
          {/* <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {activeTab === 'login' 
                ? 'Continue your journey with us' 
                : 'Start storing with confidence'
              }
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Shield className="text-blue-600 mx-auto mb-1" size={20} />
                <p className="text-xs text-blue-600 font-medium">Secure</p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <MapPin className="text-green-600 mx-auto mb-1" size={20} />
                <p className="text-xs text-green-600 font-medium">Convenient</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl">
                <Star className="text-amber-600 mx-auto mb-1" size={20} />
                <p className="text-xs text-amber-600 font-medium">Trusted</p>
              </div>
            </div>
          </div> */}

          {/* Form */}
          <div className="space-y-4">
            {/* Name Field (Signup only) */}
            {activeTab === 'signup' && (
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Signup only) */}
            {activeTab === 'signup' && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {activeTab === 'login' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Luggage size={18} />
              <span>
                {activeTab === 'login' 
                  ? 'Access My Storage' 
                  : 'Start Storing Today'
                }
              </span>
            </button>

            {/* Social Login */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700">Twitter</span>
              </button>
            </div>

            {/* Terms for signup */}
            {activeTab === 'signup' && (
              <div className="bg-blue-50 rounded-xl p-4 mt-4">
                <p className="text-xs text-blue-600 text-center">
                  By joining LugGo, you agree to our{' '}
                  <a href="#" className="font-medium hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="font-medium hover:underline">Privacy Policy</a>
                  {/* <br />
                  <span className="text-blue-500 mt-1 block">
                    🧳 Your luggage, our priority. Safe & secure storage guaranteed.
                  </span> */}
                </p>
              </div>
            )}

            {/* Login benefits */}
            {activeTab === 'login' && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mt-4">
                <p className="text-sm text-blue-700 text-center">
                  <span className="font-medium">Welcome back!</span> 
                  <br />
                  Ready to find your perfect storage spot? 🗺️
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage - just the modal component demonstration
const App = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true); // Open by default to show the modal
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');

  const openAuthModal = (tab: 'login' | 'signup') => {
    setAuthTab(tab);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-700">LugGo Auth Modal Demo</h1>
        <div className="space-x-4">
          <button
            onClick={() => openAuthModal('login')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Show Login
          </button>
          <button
            onClick={() => openAuthModal('signup')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Show Signup
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authTab}
      />
    </div>
  );
};

export default App;