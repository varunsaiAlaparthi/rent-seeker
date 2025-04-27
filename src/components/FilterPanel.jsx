// components/FilterPanel.jsx
import { useState } from 'react';
import styles from '../styles/FilterPanel.module.css';

export default function FilterPanel({ filters, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters({
      ...localFilters,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };
  
  const handleReset = () => {
    const resetFilters = {
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      city: '',
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };
  
  return (
    <div className={styles.filterPanel}>
      <h2 className={styles.title}>Filter Properties</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.filterSection}>
          <label className={styles.label}>
            Price Range:
            <div className={styles.priceInputs}>
              <input
                type="number"
                name="minPrice"
                value={localFilters.minPrice}
                onChange={handleInputChange}
                placeholder="Min"
                min="0"
                className={styles.input}
              />
              <span>to</span>
              <input
                type="number"
                name="maxPrice"
                value={localFilters.maxPrice}
                onChange={handleInputChange}
                placeholder="Max"
                min="0"
                className={styles.input}
              />
            </div>
          </label>
        </div>
        
        <div className={styles.filterSection}>
          <label className={styles.label}>
            Bedrooms:
            <select
              name="bedrooms"
              value={localFilters.bedrooms}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </label>
        </div>
        
        <div className={styles.filterSection}>
          <label className={styles.label}>
            Bathrooms:
            <select
              name="bathrooms"
              value={localFilters.bathrooms}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="1.5">1.5+</option>
              <option value="2">2+</option>
              <option value="2.5">2.5+</option>
              <option value="3">3+</option>
            </select>
          </label>
        </div>
        
        <div className={styles.filterSection}>
          <label className={styles.label}>
            City:
            <input
              type="text"
              name="city"
              value={localFilters.city}
              onChange={handleInputChange}
              placeholder="Enter city name"
              className={styles.input}
            />
          </label>
        </div>
        
        <div className={styles.filterActions}>
          <button type="submit" className={styles.applyButton}>Apply Filters</button>
          <button type="button" className={styles.resetButton} onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}