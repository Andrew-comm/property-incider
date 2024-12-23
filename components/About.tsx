import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={`py-5 ${styles.aboutSection}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <Image
              src="/images/property-1.png" // Replace with your image path
              alt="About Us"
              width={500}
              height={400}
              className={`img-fluid ${styles.aboutImage}`}
            />
          </div>
          <div className="col-md-6">
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p className={styles.aboutText}>
              We're the home of excellent service. Our vision is to create a more profitable venture
              characterized by a culture of partnership & cooperation. Our mission is to ease the dirt
              off the administrative burden & revolutionize the property industry into a more profitable venture.
            </p>
            <p className={styles.aboutText}>
              Our objective is to be a dependable partner in property management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
