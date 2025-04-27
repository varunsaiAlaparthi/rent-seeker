"use client";

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (params: {
    location: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
  }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('10000');
  const [bedrooms, setBedrooms] = useState('0');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      minPrice: parseInt(minPrice),
      maxPrice: parseInt(maxPrice),
      bedrooms: parseInt(bedrooms),
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            id="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="City, neighborhood, or address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="minPrice" className="block text-gray-700 text-sm font-medium mb-1">Min Price</label>
          <select
            id="minPrice"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="0">$0</option>
            <option value="500">$500</option>
            <option value="1000">$1,000</option>
            <option value="1500">$1,500</option>
            <option value="2000">$2,000</option>
            <option value="2500">$2,500</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="maxPrice" className="block text-gray-700 text-sm font-medium mb-1">Max Price</label>
          <select
            id="maxPrice"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="1000">$1,000</option>
            <option value="2000">$2,000</option>
            <option value="3000">$3,000</option>
            <option value="5000">$5,000</option>
            <option value="10000">$10,000+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="bedrooms" className="block text-gray-700 text-sm font-medium mb-1">Bedrooms</label>
          <select
            id="bedrooms"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="0">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
        
        <div className="md:col-span-5">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Search Properties
          </button>
        </div>
      </div>
    </form>
  );
}