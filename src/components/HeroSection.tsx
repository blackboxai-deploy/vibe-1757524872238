"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function HeroSection() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [rideType, setRideType] = useState('ride');

  const handleBookRide = () => {
    console.log('Booking ride:', { pickupLocation, dropoffLocation, rideType });
    // Add actual booking logic here
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x1080?text=Modern+city+street+with+cars+and+urban+transportation+scene+professional+photography" 
          alt="Modern city street with cars and urban transportation scene"
          className="w-full h-full object-cover opacity-20"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Go anywhere with{' '}
            <span className="text-black">Uber</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Request a ride, hop in, and go. Choose from a range of ride options and find one that fits your budget and schedule.
          </p>
          
          {/* Service Type Selector */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
            <button
              onClick={() => setRideType('ride')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                rideType === 'ride' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Ride
            </button>
            <button
              onClick={() => setRideType('delivery')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                rideType === 'delivery' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Package
            </button>
            <button
              onClick={() => setRideType('reserve')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                rideType === 'reserve' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Reserve
            </button>
          </div>
        </div>

        {/* Right Content - Booking Form */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request a ride now
              </h2>
              
              <div className="space-y-4">
                {/* Pickup Location */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <Input
                    type="text"
                    placeholder="Pickup location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="pl-10 h-12 text-base border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                {/* Divider Line */}
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300"></div>
                </div>

                {/* Dropoff Location */}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black"></div>
                  <Input
                    type="text"
                    placeholder="Dropoff location"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="pl-10 h-12 text-base border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <Button 
                  onClick={handleBookRide}
                  className="w-full h-12 bg-black text-white hover:bg-gray-800 text-base font-medium"
                >
                  Request now
                </Button>

                <div className="text-center">
                  <button className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                    Schedule for later
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-12 text-sm border-gray-300 hover:border-black">
              Ride to Airport
            </Button>
            <Button variant="outline" className="h-12 text-sm border-gray-300 hover:border-black">
              City Center
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}