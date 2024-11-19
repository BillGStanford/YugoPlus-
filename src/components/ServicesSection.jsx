import { useState, useEffect } from 'react';
import { 
  Palette, 
  Globe, 
  Video, 
  Layers, 
  ShoppingCart, 
  Smartphone,
  Youtube,
  Instagram,
  Calendar
} from 'lucide-react';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('design');

  useEffect(() => {
    // Expose the setActiveTab function globally
    window.setActiveServiceTab = (tab) => {
      setActiveTab(tab);
    };

    return () => {
      delete window.setActiveServiceTab;
    };
  }, []);

  const services = {
    design: {
      icon: <Palette className="w-12 h-12 text-blue-400" />,
      title: "Graphic Design",
      description: "Transform your brand identity with our professional design services",
      features: [
        {
          icon: <Layers />,
          title: "Logo Design",
          description: "Custom logo creation with unlimited revisions until you're satisfied"
        },
        {
          icon: <Palette />,
          title: "Brand Identity",
          description: "Complete brand packages including business cards, letterheads, and guidelines"
        },
        {
          icon: <Instagram />,
          title: "Social Media Graphics",
          description: "Eye-catching designs for all your social media platforms"
        }
      ]
    },
    web: {
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      title: "Web Design",
      description: "Create stunning, responsive websites that convert visitors into customers",
      features: [
        {
          icon: <Globe />,
          title: "Custom Website Design",
          description: "Tailored websites built with modern frameworks and technologies"
        },
        {
          icon: <Smartphone />,
          title: "Responsive Design",
          description: "Websites that look and work perfectly on all devices"
        }
      ]
    },
    video: {
      icon: <Video className="w-12 h-12 text-pink-400" />,
      title: "Video Editing",
      description: "Professional video editing services for all your content needs",
      features: [
        {
          icon: <Youtube />,
          title: "YouTube Content",
          description: "Engaging video edits with cuts, transitions, and effects"
        },
        {
          icon: <Instagram />,
          title: "Social Media Videos",
          description: "Short-form content optimized for social platforms"
        },
      ]
    }
  };

  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional creative services tailored to elevate your brand
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white/5 p-1">
            {Object.keys(services).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {services[activeTab].icon}
            <h3 className="text-3xl font-bold text-white mt-4 mb-2">
              {services[activeTab].title}
            </h3>
            <p className="text-gray-400">
              {services[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services[activeTab].features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;