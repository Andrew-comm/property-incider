import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // State for showing the "Back to Top" button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button when scrolling
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className={`py-4 ${styles.footer}`}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <FaPhoneAlt className={styles.icon} />{' '}
              <Link href="tel:0723030033" className={styles.link}>
                0723 030033
              </Link>{' '}
              /{' '}
              <Link href="tel:0101230033" className={styles.link}>
                0101230033
              </Link>
            </p>
            <p>
              <FaFacebook className={styles.icon} />{' '}
              <Link href="https://www.facebook.com/PropertyIncider" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Property Insider Commercial Agency Limited
              </Link>
            </p>
            <p>
              <FaTwitter className={styles.icon} />{' '}
              <Link href="https://twitter.com/PropertyIncider" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Property Insider Commercial Agency Limited
              </Link>
            </p>
          </div>

          {/* Location Section */}
          <div className="col-md-4 mb-3">
            <h5>Location</h5>
            <p>
              <FaMapMarkerAlt className={styles.icon} /> Mt Sinai Mall, 2nd Floor Room 208
            </p>
            <p>Eldama Ravine</p>
            <p>P.O. Box: 508-20103 - Market Road</p>
          </div>

          {/* About Us Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Property Insider Commercial Agency Limited is committed to providing top-tier
              property management and realtor services with integrity and professionalism.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Footer Bottom Section */}
        <div className="bg-dark text-light py-3">
          <div className="container">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Property Insider Commercial Agency Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* WhatsApp Button */}
      <Link href="https://wa.me/0723030033" target="_blank" rel="noopener noreferrer" passHref>
        <Image
          src="/images/whatsapp-icon.png"
          alt="Chat with us on WhatsApp"
          width={50}
          height={50}
        />
      </Link>
    </footer>
  );
};

export default Footer;
