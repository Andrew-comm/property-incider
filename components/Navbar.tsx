import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'; // Import CSS module

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Logo */}
        <Link href="/" passHref>
          <a className={`navbar-brand ${styles.navbarBrand}`}>
            <Image
              src="/images/logo.png"
              alt="Property Incider Logo"
              width={60}
              height={40}
              className={styles.logo}
              priority
            />
            Property Incider
          </a>
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
              <Link href="/" passHref>
                <a className="nav-link" aria-current="page">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" passHref>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" passHref>
                <a className="nav-link">Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#activities" passHref>
                <a className="nav-link">Activities</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#footer" passHref>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
