// pages/properties/[id].js
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPropertyById, getLandlordById } from '../../lib/data';
import styles from '../../styles/PropertyDetail.module.css';

export default function PropertyDetail({ property, landlord }) {
  const router = useRouter();

  // If the page is not yet generated, show loading
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{property.title} | RentSeeker</title>
        <meta name="description" content={property.description} />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <div className={styles.propertyDetail}>
          <div className={styles.header}>
            <h1 className={styles.title}>{property.title}</h1>
            <div className={styles.location}>
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </div>
            <div className={styles.price}>${property.rent}/month</div>
          </div>

          <div className={styles.gallery}>
            {property.images && property.images.length > 0 ? (
              property.images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <Image 
                    src={image} 
                    alt={`${property.title} - Image ${index + 1}`}
                    width={800}
                    height={500}
                    layout="responsive"
                    className={styles.image}
                  />
                </div>
              ))
            ) : (
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/placeholder.jpg" 
                  alt="No image available"
                  width={800}
                  height={500}
                  layout="responsive"
                  className={styles.image}
                />
              </div>
            )}
          </div>

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Bedrooms</span>
              <span className={styles.specValue}>{property.bedrooms}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Bathrooms</span>
              <span className={styles.specValue}>{property.bathrooms}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Square Feet</span>
              <span className={styles.specValue}>{property.sqft}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Availability</span>
              <span className={styles.specValue}>{property.available ? 'Available' : 'Not Available'}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Date Listed</span>
              <span className={styles.specValue}>{property.datePosted}</span>
            </div>
          </div>

          <div className={styles.description}>
            <h2>About this property</h2>
            <p>{property.description}</p>
          </div>

          {property.amenities && property.amenities.length > 0 && (
            <div className={styles.amenities}>
              <h2>Amenities</h2>
              <ul className={styles.amenitiesList}>
                {property.amenities.map((amenity, index) => (
                  <li key={index} className={styles.amenityItem}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}

          {landlord && (
            <div className={styles.landlord}>
              <h2>Contact Landlord</h2>
              <div className={styles.landlordInfo}>
                <p><strong>Name:</strong> {landlord.name}</p>
                <p><strong>Email:</strong> {landlord.email}</p>
                {landlord.phone && <p><strong>Phone:</strong> {landlord.phone}</p>}
              </div>
            </div>
          )}

          <div className={styles.actions}>
            <button className={styles.contactButton}>Request a tour</button>
            <button className={styles.saveButton}>Save property</button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const property = await getPropertyById(params.id);
    let landlord = null;
    
    if (property && property.landlordId) {
      landlord = await getLandlordById(property.landlordId);
    }
    
    return {
      props: {
        property,
        landlord,
      },
    };
  } catch (error) {
    console.error('Error fetching property:', error);
    return {
      props: {
        property: null,
        landlord: null,
      },
    };
  }
}