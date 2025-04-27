"use client";

interface PropertyFiltersProps {
  filters: {
    location: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    limit: number;
    offset: number;
  };
  setFilters: (filters: any) => void;
}

export default function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'minPrice' || name === 'maxPrice' || name === 'bedrooms') {
      setFilters({
        ...filters,
        [name]: parseInt(value),
        offset: 0, // Reset pagination when filters change
      });
    } else {
      setFilters({
        ...filters,
        [name]: value,
        offset: 0, // Reset pagination when filters change
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const resetFilters = () => {
    setFilters({
      location: '',
      minPrice: 0,
      maxPrice: 10000,
      bedrooms: 0,
      limit: 12,
      offset: 0,
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Filter Properties</h3>
        <button
          type="button"
          onClick={resetFilters}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Reset
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="City, neighborhood, or address"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
            Min Price
          </label>
          <select
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="0">Any</option>
            <option value="500">$500</option>
            <option value="1000">$1,000</option>
            <option value="1500">$1,500</option>
            <option value="2000">$2,000</option>
            <option value="2500">$2,500</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
            Max Price
          </label>
          <select
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="1000">$1,000</option>
            <option value="2000">$2,000</option>
            <option value="3000">$3,000</option>
            <option value="5000">$5,000</option>
            <option value="10000">$10,000+</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="0">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Additional Amenities
          </label>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="amenity-parking"
                name="amenities"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="amenity-parking" className="ml-2 block text-sm text-gray-700">
                Parking
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="amenity-laundry"
                name="amenities"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="amenity-laundry" className="ml-2 block text-sm text-gray-700">
                In-unit Laundry
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="amenity-pets"
                name="amenities"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="amenity-pets" className="ml-2 block text-sm text-gray-700">
                Pet Friendly
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="amenity-ac"
                name="amenities"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="amenity-ac" className="ml-2 block text-sm text-gray-700">
                Air Conditioning
              </label>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}