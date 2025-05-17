import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-[#2b2b2b] via-[#1e1e1e] to-black text-white py-12 px-4 md:px-8">
            {/* Doodle Corners */}
            <div className="absolute w-3 h-3 bg-pink-400 rounded-full top-3 left-3 animate-ping" />
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-6 right-8 animate-bounce" />
            <div className="absolute w-2.5 h-2.5 bg-yellow-400 rounded-full top-1/2 left-4 animate-spin" />
            <div className="absolute w-3 h-3 bg-green-400 rounded-full bottom-2 left-12 animate-ping" />

            <div className="max-w-7xl mx-auto">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                    {/* Logo */}
                    <div className="md:col-span-4">
                        <a href="/" className="text-white text-3xl font-bold">
                            LugGo
                        </a>
                        <p className="text-sm text-gray-300 mt-2">Secure. Convenient. Smart Luggage Storage</p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Book a Locker</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Find Nearby Storage</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Become a Partner</a></li>
                            <li><a href="#">Franchise</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4">
                        <h3 className="text-xl font-semibold mb-4">Stay in the Loop</h3>
                        <p className="text-gray-300 mb-4">Subscribe to receive updates as we launch in your city.</p>
                        <form className="flex flex-col sm:flex-row items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full sm:w-auto rounded-md text-white bg-[#3a3a3a] placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-5 mb-6">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaYoutube size={20} />
                    </a>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row md:justify-between">
                    <p className="text-sm text-gray-400">
                        © 2025 LugGO. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-400 mt-2 md:mt-0">
                       <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
          Privacy Policy
        </Link>
                        <Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">
          Terms of Service
        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
