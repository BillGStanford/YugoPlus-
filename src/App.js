import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkShowcase from './components/WorkShowcase';
import ContactSection from './components/ContactSection';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';
import LoadingScreen from './components/loader/LoadingScreen'; // Import the LoadingScreen

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

  if (loading) {
    return <LoadingScreen />; // Show the loading screen while loading is true
  }

  return (
    <div className="bg-dark">
      <Navbar />
      
      <div className="relative min-h-screen flex">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 w-16 h-full bg-gradient-to-b from-primary to-secondary z-10 shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-6 h-full">
            <a href="#hero" className="text-white text-2xl">🏠</a>
            <a href="#services" className="text-white text-2xl">💼</a>
            <a href="#work" className="text-white text-2xl">🖥️</a>
            <a href="#about" className="text-white text-2xl">👥</a>
            <a href="#contact" className="text-white text-2xl">📞</a>
            <a href="#footer" className="text-white text-2xl">⚡</a>
          </div>
        </div>

        <main className="w-full ml-16">
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
    </div>
  );
}

export default App;
