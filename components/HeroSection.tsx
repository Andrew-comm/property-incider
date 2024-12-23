"use client"; // Mark this component as a client component

import styles from '../styles/HeroSection.module.css'; // Import custom CSS
import Link from 'next/link'; // Import Link from Next.js

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      {/* Overlay for styling */}
      <div className={styles.overlay}></div>

      {/* Content Container */}
      <div className={`${styles.content} text-center text-white`}>
        <h1 className={styles.heroTitle}>Welcome to Property Insider</h1>
        <p className={styles.heroSubtitle}>
          Your one-stop solution for all your property needs. Explore our services and find the perfect match.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center flex-wrap mt-4">
          <Link href="#about">
            <button
              className={`btn btn-primary ${styles.serviceButton}`}
              aria-label="Scroll to About Us"
            >
              About Us
            </button>
          </Link>
          <Link href="#services">
            <button
              className={`btn btn-secondary ${styles.serviceButton}`}
              aria-label="Scroll to Services"
            >
              Services
            </button>
          </Link>
          <Link href="#activities">
            <button
              className={`btn btn-success ${styles.serviceButton}`}
              aria-label="Scroll to Activities"
            >
              Activities
            </button>
          </Link>
          <Link href="#footer">
            <button
              className={`btn btn-warning ${styles.serviceButton}`}
              aria-label="Scroll to Contact Us"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;