import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'; // Import CSS module

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Logo */}
        <Link href="/" className={`navbar-brand ${styles.navbarBrand}`}>
          <Image
            src="/images/logo.png"
            alt="Property Insider Logo"
            width={60}
            height={40}
            className={styles.logo}
            priority
          />
          Property Insider
        </Link>

        {/* Mobile Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#activities" className="nav-link">
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#footer" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
