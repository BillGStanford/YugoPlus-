import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Graphic Design', href: '#services', type: 'design' },
    { name: 'Web Development', href: '#services', type: 'web' },
    { name: 'Video Editing', href: '#services', type: 'video' }
  ];

  const handleServiceClick = (serviceType) => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Allow time for scroll to complete before switching tabs
      setTimeout(() => {
        window.setActiveServiceTab?.(serviceType);
      }, 500);
    }
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Yugo<span className="text-primary">Plus</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-300 hover:text-white transition flex items-center space-x-1"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <div 
                className={`absolute top-full -left-4 mt-2 w-56 bg-dark/95 backdrop-blur-md rounded-xl shadow-lg transform transition-all duration-200 ${
                  activeDropdown === 'services' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => handleServiceClick(service.type)}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition first:rounded-t-xl last:rounded-b-xl"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
            <a href="#work" className="text-gray-300 hover:text-white transition">Work</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            <button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => handleServiceClick(service.type)}
                className="block w-full text-left text-gray-300 hover:text-white transition pl-4 border-l-2 border-primary/30 hover:border-primary"
              >
                {service.name}
              </button>
            ))}
            <div className="w-full h-px bg-white/10 my-2"></div>
            <a href="#work" className="block text-gray-300 hover:text-white transition">Work</a>
            <a href="#about" className="block text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact</a>
            <button className="w-full bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;