"use client";

import SearchBar from '@/components/common/SearchBar';
import PropertyGrid from '@/components/property/PropertyGrid';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEATURED_PROPERTIES } from '@/graphql/queries';
import Loading from '@/components/common/Loading';

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: 0,
    maxPrice: 10000,
    bedrooms: 0,
  });
  
  const { loading, error, data } = useQuery(GET_FEATURED_PROPERTIES);
  
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-4 rounded-lg text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Rental Home</h1>
          <p className="text-xl mb-8">Browse thousands of rental properties in your area</p>
          <SearchBar onSearch={setSearchParams} />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
        {loading ? (
          <Loading />
        ) : error ? (
          <p>Error loading properties</p>
        ) : (
          <PropertyGrid properties={data?.featuredProperties || []} />
        )}
      </section>
      
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose RentSeeker?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">Verified Listings</h3>
            <p>All properties are verified for authenticity and accurate information.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">Easy Application</h3>
            <p>Apply for properties directly through our platform with a few clicks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
            <p>Our customer support team is available around the clock to assist you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}