// pages/add-property.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/AddProperty.module.css';

export default function AddProperty() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    rent: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    description: '',
    amenities: [],
    landlordId: '101', // Default landlord for demo
    available: true
  });

  // Common amenities for checkbox selection
  const commonAmenities = [
    'Parking', 'Laundry', 'Gym', 'Pool', 'Pets Allowed', 
    'Balcony', 'Dishwasher', 'Air Conditioning', 'Heating',
    'Elevator', 'Furnished', 'Fireplace', 'Storage', 'Doorman'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === '' ? '' : Number(value)
    });
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, value]
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter(amenity => amenity !== value)
      });
    }
  };

  const handleAvailabilityChange = (e) => {
    setFormData({
      ...formData,
      available: e.target.value === 'true'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add property');
      }
      
      const data = await response.json();
      router.push(`/properties/${data.id}`);
    } catch (error) {
      setError(error.message || 'An error occurred while adding the property');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add New Property | RentSeeker</title>
        <meta name="description" content="List your property for rent on RentSeeker" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>List Your Property</h1>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>Property Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className={styles.input}
              placeholder="e.g. Modern 2-Bedroom Apartment"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="address" className={