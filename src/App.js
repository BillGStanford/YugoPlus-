import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkShowcase from './components/WorkShowcase';
import ContactSection from './components/ContactSection';
import AboutUsSection from './components/AboutUsSection'; // Import AboutUsSection
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          // If it's a service link, set the active tab
          if (targetId.includes('service-')) {
            const serviceType = targetId.replace('service-', '');
            window.setActiveServiceTab?.(serviceType);
          }
          
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-dark">
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <section className="min-h-screen">
          <HeroSection />
        </section>
        <section id="services" className="min-h-screen">
          <ServicesSection />
        </section>
        <section id="work" className="min-h-screen">
          <WorkShowcase />
        </section>
        <section id="about" className="min-h-screen">
          <AboutUsSection /> {/* Added AboutUsSection here */}
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
