import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={`py-5 ${styles.aboutSection}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <Image
              src="/images/property-1.png" // Ensure this path is correct
              alt="About Us"
              width={500}
              height={400}
              className={styles.aboutImage} // Removed `img-fluid` since it's not applicable with `next/image`
              priority // Optional: Ensures this image loads faster as it's likely above the fold
            />
          </div>
          <div className="col-md-6">
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p className={styles.aboutText}>
              We&apos;re the home of excellent service. Our vision is to create a more profitable
              venture characterized by a culture of partnership &amp; cooperation. Our mission is to ease the
              dirt off the administrative burden &amp; revolutionize the property industry into a more
              profitable venture.
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
