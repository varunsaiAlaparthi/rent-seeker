// components/PropertyList.jsx
import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import FilterPanel from './FilterPanel';
import { useRouter } from 'next/router';
import styles from '../styles/PropertyList.module.css';

export default function PropertyList({ initialProperties }) {
  const router = useRouter();
  const [properties, setProperties] = useState(initialProperties || []);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    city: '',
  });
  const [loading, setLoading] = useState(false);

  // Apply filters and fetch properties
  const applyFilters = async (filterData) => {
    setLoading(true);
    try {
      // Create query string from filters
      const params = new URLSearchParams();
      Object.entries(filterData).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      
      // Update URL with filters
      router.push(`/?${params.toString()}`, undefined, { shallow: true });
      
      // Fetch filtered properties
      const response = await fetch(`/api/properties?${params.toString()}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Rental Properties</h1>
      
      <div className={styles.content}>
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        
        <div className={styles.propertiesGrid}>
          {loading ? (
            <div className={styles.loading}>Loading properties...</div>
          ) : properties.length > 0 ? (
            properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className={styles.noResults}>No properties match your search criteria.</div>
          )}
        </div>
      </div>
    </div>
  );
}