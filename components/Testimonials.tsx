'use client';

import { useState } from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Oluoch',
      role: 'Client',
      feedback: 'Amazing service! They helped us find the perfect rental property with ease. Highly recommend!',
      image: '/images/testimonial-1.png',
    },
    {
      name: 'Jane Kirui',
      role: 'Tenant',
      feedback: 'I’ve been renting for years, and this is the best management service I’ve experienced.',
      image: '/images/testimonial-2.png',
    },
    {
      name: 'David Kimani',
      role: 'Landlord',
      feedback: 'The team provided excellent support for my properties. They manage everything efficiently.',
      image: '/images/testimonial-3.png',
    },
    {
      name: 'Emma Kevogo',
      role: 'Property Owner',
      feedback: 'A wonderful team to work with. They truly care about both the tenants and the property owners.',
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
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="carousel">
          <div className={`${styles.testimonialCard} card shadow-sm`}>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className={`${styles.testimonialImage} rounded-circle mx-auto d-block`}
            />
            <div className="card-body">
              <p className="testimonial-feedback">"{testimonials[currentIndex].feedback}"</p>
              <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
              <p className="testimonial-role">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className="carousel-buttons">
            <button className={`${styles.carouselBtn} prev`} onClick={prevTestimonial}>
              &#10094;
            </button>
            <button className={`${styles.carouselBtn} next`} onClick={nextTestimonial}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;