"use client"; // Add this directive

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './globals.css'; // Global styles
import '../styles/Navbar.module.css'; // Custom Navbar styles
import { useEffect } from 'react';
import Navbar from '../components/Navbar'; // Navbar component
import Footer from '../components/Footer'; // Footer component
import HeroSection from '../components/HeroSection'; // Import Hero Section
import Testimonials from '../components/Testimonials'; // Import Testimonials Section
import PromoSection from '../components/PromoSection'; // Import Promotional Section

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js'); // Ensure Bootstrap JS is loaded
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Property Incider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <HeroSection />
        <PromoSection /> {/* Add the promotional section here */}
        <main>{children}</main>
        <Testimonials /> {/* Add testimonials section here */}
        <Footer />
      </body>
    </html>
  );
}
