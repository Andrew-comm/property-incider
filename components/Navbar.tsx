import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';  // Import the CSS module

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Logo on the left side of the navbar */}
        <Link className={`navbar-brand ${styles.navbarBrand}`} href="/">
          <Image 
            src="/images/logo.png" 
            alt="Property Incider Logo" 
            width={60} 
            height={40} 
            style={{ marginRight: '10px' }} 
          />
          Property Incider
        </Link>

        {/* Navbar toggler for mobile view */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#activities">Activities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#footer">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
