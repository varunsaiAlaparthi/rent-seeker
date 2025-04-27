"use client";

import { useParams } from 'next/navigation';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROPERTY, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '@/graphql/queries';
import PropertyDetails from '@/components/property/PropertyDetails';
import Loading from '@/components/common/Loading';

export default function PropertyPage() {
  const params = useParams();
  const propertyId = params.id as string;
  
  const { loading, error, data } = useQuery(GET_PROPERTY, {
    variables: { id: propertyId },
  });
  
  const [addToFavorites] = useMutation(ADD_TO_FAVORITES);
  const [removeFromFavorites] = useMutation(REMOVE_FROM_FAVORITES);
  
  const handleFavoriteToggle = async (isFavorite: boolean) => {
    if (isFavorite) {
      await removeFromFavorites({ variables: { propertyId } });
    } else {
      await addToFavorites({ variables: { propertyId } });
    }
  };
  
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error loading property details. Please try again.</p>;
  if (!data || !data.property) return <p className="text-red-500">Property not found.</p>;
  
  return (
    <PropertyDetails property={data.property} onFavoriteToggle={handleFavoriteToggle} />
  );
}
