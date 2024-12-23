'use client';

import { useState } from 'react';
import Image from 'next/image'; // Using next/image for image optimization
import Link from 'next/link'; // Importing Link for navigation
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Oluoch',
      role: 'Client',
      feedback:
        'Amazing service! They helped us find the perfect rental property with ease. Highly recommend!',
      image: '/images/testimonial-1.png',
    },
    {
      name: 'Jane Kirui',
      role: 'Tenant',
      feedback:
        'I’ve been renting for years, and this is the best management service I’ve experienced.',
      image: '/images/testimonial-2.png',
    },
    {
      name: 'David Kimani',
      role: 'Landlord',
      feedback:
        'The team provided excellent support for my properties. They manage everything efficiently.',
      image: '/images/testimonial-3.png',
    },
    {
      name: 'Emma Kevogo',
      role: 'Property Owner',
      feedback:
        'A wonderful team to work with. They truly care about both the tenants and the property owners.',
      image: '/images/testimonial-4.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className={`${styles.testimonialSection} py-5`}>
      <div className="container">
        {/* Example of using Next.js Link for navigation */}
        <h2 className="text-center mb-4">
          <Link href="/contact">What Our Clients Say</Link> {/* Link to Contact Page */}
        </h2>
        <div className="carousel">
          <div className={`${styles.testimonialCard} card shadow-sm`}>
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className={`${styles.testimonialImage} rounded-circle mx-auto d-block`}
              width={100}
              height={100} // Add appropriate width/height
            />
            <div className="card-body">
              <p className={styles.testimonialFeedback}>
                &quot;{testimonials[currentIndex].feedback}&quot;
              </p>
              <h4 className={styles.testimonialName}>
                {testimonials[currentIndex].name}
              </h4>
              <p className={styles.testimonialRole}>
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
          <div className="carousel-buttons">
            <button
              className={`${styles.carouselBtn} ${styles.prev}`}
              onClick={prevTestimonial}
            >
              &#10094;
            </button>
            <button
              className={`${styles.carouselBtn} ${styles.next}`}
              onClick={nextTestimonial}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
