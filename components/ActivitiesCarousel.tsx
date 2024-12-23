import Image from 'next/image';
import styles from '../styles/ActivitiesCarousel.module.css';

const ActivitiesCarousel = () => {
  const services = [
    {
      image: '/images/property-1.png',
      title: 'Property Management',
      description: 'Expert management services to ensure your property runs smoothly.',
    },
    {
      image: '/images/property-2.png',
      title: 'Vacant Rental Rooms to Let',
      description: 'We manage and advertise vacant rental rooms for quick occupancy.',
    },
    {
      image: '/images/property-8.png',
      title: 'Facility Tenancy & Occupancy',
      description: 'Ensuring optimal tenancy and occupancy rates for your facilities.',
    },
    {
      image: '/images/property-9.png',
      title: 'Rent Collection',
      description: 'Reliable and efficient rent collection services.',
    },
    {
      image: '/images/property-10.png',
      title: 'Vacant Rooms Advertisements',
      description: 'Professional advertisements to fill your vacant rooms fast.',
    },
    {
      image: '/images/property-11.png',
      title: 'Facility Repairs & Maintenance',
      description: 'Minor repairs and maintenance to keep your property in top shape.',
    },
    {
      image: '/images/property-3.png',
      title: 'Facility Cleanliness & Security',
      description: 'Comprehensive services for cleanliness and security of your property.',
    },
    {
      image: '/images/property-4.png',
      title: 'Land Sale',
      description: 'We buy and sell land & plots to meet your investment goals.',
    },
    {
      image: '/images/property-5.png',
      title: 'Selling on Behalf',
      description: 'Trust us to sell properties on behalf of our clients.',
    },
    {
      image: '/images/property-6.png',
      title: 'Trade-In Services',
      description: 'Seamless trade-in solutions for properties.',
    },
    {
      image: '/images/property-7.png',
      title: 'Property Appraisal',
      description: 'Accurate and reliable property valuation services.',
    },
  ];

  return (
    <section id="activities" className={`py-5 ${styles.activitiesSection}`}>
      <div className="container">
        <h2 className={`text-center mb-4 ${styles.activitiesTitle}`}>Our Activities</h2>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {services.map((service, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="d-block w-100 position-relative" style={{ height: '600px' }}>
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
                </div>
              </div>
            ))}
          </div>
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
