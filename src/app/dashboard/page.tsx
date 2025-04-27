"use client";

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_PROPERTIES } from '@/graphql/queries';
import PropertyGrid from '@/components/property/PropertyGrid';
import Loading from '@/components/common/Loading';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('properties');
  
  const { loading, error, data } = useQuery(GET_MY_PROPERTIES);
  
  // Mock data for demo purposes
  const dummyProperties = [
    {
      id: '1',
      title: 'Luxury Downtown Apartment',
      description: 'Beautiful apartment in the heart of downtown with modern amenities.',
      price: 2500,
      location: '123 Main St, New York, NY',
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      imageUrl: '/images/placeholder.jpg',
      features: ['Hardwood floors', 'In-unit laundry', 'Fitness center'],
      available: true,
      createdAt: '2025-04-15T00:00:00Z',
      updatedAt: '2025-04-15T00:00:00Z',
      ownerId: '101',
    },
    {
      id: '2',
      title: 'Cozy Studio in Brooklyn',
      description: 'Bright and airy studio apartment in a prime Brooklyn location.',
      price: 1800,
      location: '456 Park Ave, Brooklyn, NY',
      bedrooms: 0,
      bathrooms: 1,
      squareFeet: 500,
      imageUrl: '/images/placeholder.jpg',
      features: ['Stainless steel appliances', 'Pet friendly', 'Roof access'],
      available: true,
      createdAt: '2025-04-10T00:00:00Z',
      updatedAt: '2025-04-10T00:00:00Z',
      ownerId: '101',
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Dashboard</h1>
        <Link href="/post-property">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Post a New Property
          </button>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('properties')}
              className={`py-4 px-6 text-gray-600 font-medium ${
                activeTab === 'properties' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'
              }`}
            >
              My Properties
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-6 text-gray-600 font-medium ${
                activeTab === 'applications' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-4 px-6 text-gray-600 font-medium ${
                activeTab === 'favorites' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'
              }`}
            >
              Favorites
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 text-gray-600 font-medium ${
                activeTab === 'profile' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'
              }`}
            >
              Profile
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'properties' && (
            <>
              <h2 className="text-xl font-semibold mb-6">My Listed Properties</h2>
              {loading ? (
                <Loading />
              ) : error ? (
                <p className="text-red-500">Error loading properties</p>
              ) : (
                <PropertyGrid properties={dummyProperties} />
              )}
            </>
          )}
          
          {activeTab === 'applications' && (
            <>
              <h2 className="text-xl font-semibold mb-6">Property Applications</h2>
              <div className="bg-gray-50 p-8 rounded text-center">
                <p className="text-gray-500">No applications yet</p>
              </div>
            </>
          )}
          
          {activeTab === 'favorites' && (
            <>
              <h2 className="text-xl font-semibold mb-6">My Saved Properties</h2>
              <div className="bg-gray-50 p-8 rounded text-center">
                <p className="text-gray-500">No saved properties yet</p>
              </div>
            </>
          )}
          
          {activeTab === 'profile' && (
            <>
              <h2 className="text-xl font-semibold mb-6">My Profile</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-1">Name</p>
                    <p className="font-medium">John Doe</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <p className="font-medium">john@example.com</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Account Type</p>
                    <p className="font-medium">Property Owner</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
