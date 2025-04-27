// components/PropertyCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/PropertyCard.module.css';

export default function PropertyCard({ property }) {
  const {
    id,
    title,
    address,
    city,
    state,
    rent,
    bedrooms,
    bathrooms,
    sqft,
    images
  } = property;

  // Get the main image or use a placeholder
  const mainImage = images && images.length > 0 
    ? images[0] 
    : '/images/placeholder.jpg';

  return (
    <div className={styles.propertyCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={mainImage} 
          alt={title}
          width={300}
          height={200}
          layout="responsive"
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.address}>{address}, {city}, {state}</p>
        <div className={styles.specs}>
          <span className={styles.rent}>${rent}/month</span>
          <span className={styles.bedrooms}>{bedrooms} {bedrooms === 1 ? 'bed' : 'beds'}</span>
          <span className={styles.bathrooms}>{bathrooms} {bathrooms === 1 ? 'bath' : 'baths'}</span>
          <span className={styles.sqft}>{sqft} sqft</span>
        </div>
        <Link href={`/properties/${id}`}>
          <a className={styles.viewButton}>View Details</a>
        </Link>
      </div>
    </div>
  );
}