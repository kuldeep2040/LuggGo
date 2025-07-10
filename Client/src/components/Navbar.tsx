import type { FC } from 'react'
import { useState, useRef, useEffect } from 'react'
import { Bell } from 'lucide-react'

interface NavbarProps {
  isLoggedIn?: boolean;
  user?: {
    name?: string;
    avatar?: string;
  };
  onLogout?: () => void;
  onProfileClick?: () => void;
}

const Navbar: FC<NavbarProps> = ({
  isLoggedIn = true,
  user = { name: 'User' },
  onLogout,
  onProfileClick
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    if (onLogout) {
      onLogout();
    }
  };

  const handleProfileDetails = () => {
    setIsDropdownOpen(false);
    if (onProfileClick) {
      onProfileClick();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-center mt-4 items-center">
      <header className="flex justify-between items-center py-6 px-10 shadow-md rounded-full border border-blue-600 w-[90vw]">
        <a href="/">
          <div className="text-xl font-bold text-blue-600">LugGo</div>
        </a>

        <nav className="space-x-6 text-sm font-medium">
          <a href="/">Home</a>
          <a href="/how-it-works">How it Works</a>
          <a href="/pricing">Pricing</a>
          {isLoggedIn ? (
            <>
              <a href="/dashboard">Dashboard</a>
              <a href="/bookings">My Bookings</a>
            </>
          ) : (
            <a href="/contact-us">Support</a>
          )}
        </nav>

        <div className="space-x-4 flex items-center">
          <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
                onClick={toggleDropdown}
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                    {user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <span className="text-sm font-medium">{user.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <a href="/profile">
                    <button
                      onClick={handleProfileDetails}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Profile Details</span>
                    </button>
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <a href="/login">
                <button className="text-sm hover:text-blue-600">Log In</button>
              </a>
              <a href="/signup">
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                  Sign Up
                </button>
              </a>
            </>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar