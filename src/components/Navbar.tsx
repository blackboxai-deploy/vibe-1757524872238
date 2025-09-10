"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-black">
              Uber
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-black transition-colors duration-200">
                Ride
              </a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors duration-200">
                Drive
              </a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors duration-200">
                Business
              </a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-200">
                About
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Help
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Log in
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200">
                Ride
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200">
                Drive
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200">
                Business
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200">
                About
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-black">
                  Help
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-black">
                  Log in
                </Button>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}