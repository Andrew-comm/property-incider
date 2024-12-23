"use client"; // Mark this component as a client component

import styles from '../styles/HeroSection.module.css'; // Import custom CSS

const HeroSection = () => {
  // Smoothly scroll to a section by ID
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.heroSection}>
      {/* Overlay for styling */}
      <div className={styles.overlay}></div>

      {/* Content Container */}
      <div className={`${styles.content} text-center text-white`}>
        <h1 className={styles.heroTitle}>Welcome to Property Incider</h1>
        <p className={styles.heroSubtitle}>
          Your one-stop solution for all your property needs. Explore our services and find the perfect match.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center flex-wrap mt-4">
          <button
            className={`btn btn-primary ${styles.serviceButton}`}
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About Us"
          >
            About Us
          </button>
          <button
            className={`btn btn-secondary ${styles.serviceButton}`}
            onClick={() => scrollToSection('services')}
            aria-label="Scroll to Services"
          >
            Services
          </button>
          <button
            className={`btn btn-success ${styles.serviceButton}`}
            onClick={() => scrollToSection('activities')}
            aria-label="Scroll to Activities"
          >
            Activities
          </button>
          <button
            className={`btn btn-warning ${styles.serviceButton}`}
            onClick={() => scrollToSection('footer')}
            aria-label="Scroll to Contact Us"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
