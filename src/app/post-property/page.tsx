"use client";

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROPERTY } from '@/graphql/mutations';
import { useRouter } from 'next/navigation';
import PropertyForm from '@/components/property/PropertyForm';

export default function PostPropertyPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  
  const [createProperty, { loading }] = useMutation(CREATE_PROPERTY, {
    onCompleted: (data) => {
      router.push(`/properties/${data.createProperty.id}`);
    },
    onError: (error) => {
      setError(error.message);
    },
  });
  
  const handleSubmit = (propertyData: any) => {
    createProperty({
      variables: {
        input: propertyData,
      },
    });
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Post a New Property</h1>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      <PropertyForm onSubmit={handleSubmit} isSubmitting={loading} />
    </div>
  );
}
