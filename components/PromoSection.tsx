'use client';

import styles from '../styles/Promo.module.css';

const PromoSection = () => {
  return (
    <section id="promo" className={`${styles.promoSection} py-5`}>
      <div className={`container ${styles.promoContainer}`}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h2 className={`${styles.promoHeading} text-center text-white`}>
              Ready to Find Your Perfect Property?
            </h2>
            <p className={`${styles.promoText} text-center text-white`}>
              Whether you're buying, selling, or renting, we have the perfect property for you. Let us help you take the next step.
            </p>
            <div className="text-center">
              <a href="#services" className={`${styles.promoBtn} btn btn-primary`}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
