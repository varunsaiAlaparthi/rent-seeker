"use client";

import { useQuery } from '@apollo/client';
import { GET_MY_FAVORITES } from '@/graphql/queries';
import PropertyGrid from '@/components/property/PropertyGrid';
import Loading from '@/components/common/Loading';

export default function FavoritesPage() {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);
  
  // Mock data for demo purposes
  const dummyFavorites = [
    {
      id: '3',
      title: 'Modern Townhouse with Yard',
      description: 'Beautiful townhouse with a private yard in a quiet neighborhood.',
      price: 3200,
      location: '789 Oak St, Brooklyn, NY',
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 1800,
      imageUrl: '/images/placeholder.jpg',
      features: ['Private yard', 'Renovated kitchen', 'Washer/dryer'],
      available: true,
      createdAt: '2025-04-05T00:00:00Z',
      updatedAt: '2025-04-05T00:00:00Z',
      ownerId: '102',
    },
    {
      id: '4',
      title: 'Charming 1BR in West Village',
      description: 'Charming pre-war 1-bedroom apartment in the heart of West Village.',
      price: 2200,
      location: '321 Grove St, New York, NY',
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 650,
      imageUrl: '/images/placeholder.jpg',
      features: ['High ceilings', 'Hardwood floors', 'Exposed brick'],
      available: true,
      createdAt: '2025-04-01T00:00:00Z',
      updatedAt: '2025-04-01T00:00:00Z',
      ownerId: '103',
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
      
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-500">Error loading favorites</p>
      ) : dummyFavorites.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-500 mb-4">You haven't saved any properties yet.</p>
          <p className="text-gray-500">
            Browse properties and click the heart icon to add them to your favorites.
          </p>
        </div>
      ) : (
        <PropertyGrid properties={dummyFavorites} />
      )}
    </div>
  );
}
