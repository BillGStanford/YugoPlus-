import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">YugoPlus</h3>
            <p className="text-gray-400">
              Transforming ideas into digital reality through innovative design and development solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Services</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-primary transition">Workshowcase</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
        <h1 className="text-xl font-bold mb-4">Socials</h1>
            <div className="flex space-x-4">
            <a href="https://www.instagram.com/yugoplus_/" target='blank' className="text-gray-400 hover:text-primary transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © {currentYear} YugoPlus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
