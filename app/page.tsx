import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.module.css';
import About from '../components/About'; // Import components
import Services from '../components/Services'; // Import components
import ActivitiesCarousel from '../components/ActivitiesCarousel'; // Import carousel component
import PromoSection from '../components/PromoSection'; // Import Promotional Section
import Testimonials from '../components/Testimonials'; // Import Testimonials Section

export default function Home() {
  return (
    <div>
      {/* Main content of the page */}
      <main>
        <section className="container my-5">
          <ActivitiesCarousel /> {/* Example of carousel component */}
        </section>

        <section id="about" className="py-5">
          <About /> {/* About section */}
        </section>

        <section id="services" className="py-5 bg-light">
          <Services /> {/* Services section */}
        </section>     

        
      </main>
    </div>
  );
}
