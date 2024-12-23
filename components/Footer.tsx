import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // For WhatsApp image

const Footer = () => {
  // State for showing back to top button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button when scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id='footer' className={`py-4 ${styles.footer}`}>
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <FaPhoneAlt className={styles.icon} />{' '}
              <a href="tel:0723030033" className={styles.link}>
                0723 030033
              </a>{' '}
              /{' '}
              <a href="tel:0101230033" className={styles.link}>
                0101230033
              </a>
            </p>
            <p>
              <FaFacebook className={styles.icon} />{' '}
              <a
                href="https://www.facebook.com/PropertyIncider"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Property Incider Commercial Agency Limited
              </a>
            </p>
            <p>
              <FaTwitter className={styles.icon} />{' '}
              <a
                href="https://twitter.com/PropertyIncider"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Property Incider Commercial Agency Limited
              </a>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Location</h5>
            <p>
              <FaMapMarkerAlt className={styles.icon} /> Mt Sinai Mall, 2nd Floor Room 208
            </p>
            <p>P.O. Box: 508-20103 - Market Road</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Property Incider Commercial Agency Limited is committed to providing top-tier
              property management and realtor services with integrity and professionalism.
            </p>
          </div>
        </div>
        <hr className={styles.divider} />
        <footer className="bg-dark text-light py-3">
          <div className="container">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Property Incider Commercial Agency Limited. All rights reserved
            </p>
          </div>
        </footer>

      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          className={styles.backToTop}
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/0723030033"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <Image
          src="/images/whatsapp-icon.png" // Ensure you have this image in the public directory
          alt="Chat with us on WhatsApp"
          width={50} // Reduced size
          height={50} // Reduced size
        />
      </a>
    </footer>
  );
};

export default Footer;
