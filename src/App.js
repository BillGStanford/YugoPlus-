import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkShowcase from './components/WorkShowcase';
import ContactSection from './components/ContactSection';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a loading process (replace with real data fetching if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    setIsVisible(true);

    // Smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="bg-dark">
      <Navbar />
      
      <main>
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>
        <section id="services" className="min-h-screen">
          <ServicesSection />
        </section>
        <section id="work" className="min-h-screen">
          <WorkShowcase />
        </section>
        <section id="about" className="min-h-screen">
          <AboutUsSection />
        </section>
        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
