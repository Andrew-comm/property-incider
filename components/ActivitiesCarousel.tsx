import Image from 'next/image';
import styles from '../styles/ActivitiesCarousel.module.css';

const ActivitiesCarousel = () => {
  const services = [
    {
      image: '/images/property-1.png',
      title: 'Property Management',
      description: 'Expert management services to ensure your property runs smoothly.',
      link: '/services/property-management', // Add link for navigation
    },
    {
      image: '/images/property-2.png',
      title: 'Vacant Rental Rooms to Let',
      description: 'We manage and advertise vacant rental rooms for quick occupancy.',
      link: '/services/vacant-rooms', // Add link for navigation
    },
    {
      image: '/images/property-8.png',
      title: 'Facility Tenancy & Occupancy',
      description: 'Ensuring optimal tenancy and occupancy rates for your facilities.',
      link: '/services/tenancy-occupancy', // Add link for navigation
    },
    {
      image: '/images/property-9.png',
      title: 'Rent Collection',
      description: 'Reliable and efficient rent collection services.',
      link: '/services/rent-collection', // Add link for navigation
    },
    {
      image: '/images/property-10.png',
      title: 'Vacant Rooms Advertisements',
      description: 'Professional advertisements to fill your vacant rooms fast.',
      link: '/services/vacant-ads', // Add link for navigation
    },
    {
      image: '/images/property-11.png',
      title: 'Facility Repairs & Maintenance',
      description: 'Minor repairs and maintenance to keep your property in top shape.',
      link: '/services/repairs-maintenance', // Add link for navigation
    },
    {
      image: '/images/property-3.png',
      title: 'Facility Cleanliness & Security',
      description: 'Comprehensive services for cleanliness and security of your property.',
      link: '/services/cleanliness-security', // Add link for navigation
    },
    {
      image: '/images/property-4.png',
      title: 'Land Sale',
      description: 'We buy and sell land & plots to meet your investment goals.',
      link: '/services/land-sale', // Add link for navigation
    },
    {
      image: '/images/property-5.png',
      title: 'Selling on Behalf',
      description: 'Trust us to sell properties on behalf of our clients.',
      link: '/services/selling-on-behalf', // Add link for navigation
    },
    {
      image: '/images/property-6.png',
      title: 'Trade-In Services',
      description: 'Seamless trade-in solutions for properties.',
      link: '/services/trade-in', // Add link for navigation
    },
    {
      image: '/images/property-7.png',
      title: 'Property Appraisal',
      description: 'Accurate and reliable property valuation services.',
      link: '/services/appraisal', // Add link for navigation
    },
  ];

  return (
    <section id="activities" className={`py-5 ${styles.activitiesSection}`}>
      <div className="container">
        <h2 className={`text-center mb-4 ${styles.activitiesTitle}`}>Our Activities</h2>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {services.map((service, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div
                  className="d-block w-100 position-relative"
                  style={{ height: '600px' }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={`carousel-caption d-none d-md-block ${styles.carouselCaption}`}>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                  {/* Updated Link usage without <a> tag */}
                  
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCarousel;
