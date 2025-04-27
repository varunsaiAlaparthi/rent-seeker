"use client";

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '@/graphql/queries';
import PropertyGrid from '@/components/property/PropertyGrid';
import PropertyFilters from '@/components/property/PropertyFilters';
import Loading from '@/components/common/Loading';

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: 0,
    maxPrice: 10000,
    bedrooms: 0,
    limit: 12,
    offset: 0,
  });
  
  const { loading, error, data, fetchMore } = useQuery(GET_PROPERTIES, {
    variables: filters,
  });
  
  const loadMore = () => {
    fetchMore({
      variables: {
        ...filters,
        offset: data.properties.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          properties: [...prev.properties, ...fetchMoreResult.properties],
        };
      },
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <PropertyFilters filters={filters} setFilters={setFilters} />
        </div>
        
        <div className="lg:w-3/4">
          {loading && !data ? (
            <Loading />
          ) : error ? (
            <p className="text-red-500">Error loading properties. Please try again.</p>
          ) : (
            <>
              <PropertyGrid properties={data.properties} />
              
              {data.properties.length >= filters.limit && (
                <div className="mt-8 text-center">
                  <button
                    onClick={loadMore}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}