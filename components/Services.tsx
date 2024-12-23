"use client"; // Add this directive

import { useState } from 'react';
import styles from '../styles/Services.module.css';
import Image from 'next/image'; // Import next/image for optimized image loading

const Services = () => {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    detailedDescription: string;
    images: string[];
  } | null>(null);

  const [showAllServices, setShowAllServices] = useState(false);

  const services = {
    Realtor: [
      {
        title: 'Land and Plot Sales',
        description: 'Facilitating seamless transactions for buyers and sellers.',
        detailedDescription:
          'Our realtor services specialize in the transparent and professional handling of land and plot transactions. From property evaluations and market analysis to negotiations and final closures, we ensure all parties enjoy a smooth and stress-free process.',
        images: ['/images/land-1.png', '/images/land-2.png'],
      },
      {
        title: 'Property Appraisal',
        description: 'Accurate and reliable property valuations.',
        detailedDescription:
          'Our property appraisal services provide comprehensive and precise valuations. Using advanced tools and market insights, we offer detailed reports for real estate transactions, investments, or legal requirements.',
        images: ['/images/appraisal-1.png', '/images/appraisal-2.png'],
      },
    ],
    PropertyManagement: [
      {
        title: 'Vacant Rental Rooms to Let',
        description: 'Discover affordable and well-maintained rental spaces.',
        detailedDescription:
          'We manage and advertise rental properties with a focus on ensuring they attract reliable tenants. Our service includes creating attractive listings, managing inquiries, scheduling showings, and performing thorough tenant vetting. We provide landlords with peace of mind and tenants with a seamless rental experience.',
        images: ['/images/rent-1.png', '/images/rent-2.png'],
      },
      {
        title: 'Facility Tenancy & Occupancy',
        description: 'Enhance tenancy rates with effective facility management.',
        detailedDescription:
          'Our tenancy management services ensure optimal occupancy levels and a balanced mix of tenants for facilities. We handle periodic inspections, resolve tenant-related issues, and implement strategic retention plans to foster a harmonious living and working environment.',
        images: ['/images/tenancy-1.png', '/images/tenancy-2.png'],
      },
      {
        title: 'Rent Collection',
        description: 'Timely and efficient collection of rent payments.',
        detailedDescription:
          'We handle the entire rent collection process, ensuring that payments are collected on time and that landlords face minimal disruptions. Our service includes tracking payment schedules, following up with tenants, and providing landlords with detailed reports.',
        images: ['/images/collect-1.png', '/images/collect-2.png'],
      },
      {
        title: 'Vacant Rooms Advertisements',
        description: 'Attract quality tenants with professional listings.',
        detailedDescription:
          'We create high-quality advertisements for vacant rooms, showcasing the best features of the property. Our advertisements target the right audience through various channels to ensure quick and successful tenant placement.',
        images: ['/images/vacancy-1.png', '/images/vacancy-2.png'],
      },
    ],
    FacilityManagement: [
      {
        title: 'Facility Minor Repairs & Maintenance',
        description: 'Keeping your facility in top condition.',
        detailedDescription:
          'We handle minor repairs and maintenance to ensure that the property remains functional and aesthetically pleasing. From plumbing fixes to light fixtures, our team is always on hand to address any immediate maintenance needs.',
        images: ['/images/maintenance-1.png', '/images/maintenance-2.png'],
      },
      {
        title: 'Facility Cleanliness & Security',
        description: 'Maintaining cleanliness and ensuring security.',
        detailedDescription:
          'Our team is responsible for keeping your facility clean and secure. We provide regular cleaning services and ensure the property is well-secured, offering peace of mind to both tenants and landlords.',
        images: ['/images/cleanliness-1.png', '/images/security-1.png'],
      },
    ],
  };

  const servicesToDisplay = showAllServices
    ? Object.values(services).flat()
    : [
        ...services.Realtor,
        ...services.PropertyManagement,
        ...services.FacilityManagement,
      ].slice(0, 4); // Display only the first 4 services initially

  return (
    <div>
      {/* Services Section */}
      <section id="services" className={`py-5 bg-light ${styles.servicesSection}`}>
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          {selectedService ? (
            <div className="row">
              <div className="col-md-6">
                <div className={styles.imagesContainer}>
                  {selectedService.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${selectedService.title} ${index + 1}`}
                      width={500} // Specify width and height for better performance
                      height={300}
                      className={styles.serviceImage}
                    />
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <h3>{selectedService.title}</h3>
                <p>{selectedService.detailedDescription}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedService(null)}
                >
                  Back to Services
                </button>
              </div>
            </div>
          ) : (
            <div className="row">
              {servicesToDisplay.map((item, idx) => (
                <div key={idx} className="col-md-6 mb-4">
                  <div
                    className={`card ${styles.serviceCard}`}
                    onClick={() => setSelectedService(item)}
                  >
                    <div className={`card-body ${styles.cardBody}`}>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Show More / Show Less button */}
          {!selectedService && (
            <div className="text-center">
              {!showAllServices ? (
                <button
                  className="btn btn-primary"
                  onClick={() => setShowAllServices(true)}
                >
                  Show More Services
                </button>
              ) : (
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowAllServices(false)}
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
