"use client"; // Mark this component as a client component

import Image from 'next/image';
import styles from '../styles/HeroSection.module.css'; // Import custom CSS

const HeroSection = () => {
  // Define sectionId as a string
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`hero-section ${styles.heroSection}`}>
      <div className={styles.overlay}></div>
      <div className="container text-center text-white" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className={styles.heroTitle}>Welcome to Property Incider</h1>
        <p className={styles.heroSubtitle}>
          Your one-stop solution for all your property needs. Explore our services and find the perfect match.
        </p>
        <div className="d-flex justify-content-center flex-wrap mt-4">
          <button
            className={`btn btn-primary ${styles.serviceButton}`}
            onClick={() => scrollToSection('about')}
          >
            About Us
          </button>
          <button
            className={`btn btn-secondary ${styles.serviceButton}`}
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button
            className={`btn btn-success ${styles.serviceButton}`}
            onClick={() => scrollToSection('activities')}
          >
            Activities
          </button>
          <button
            className={`btn btn-warning ${styles.serviceButton}`}
            onClick={() => scrollToSection('footer')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
