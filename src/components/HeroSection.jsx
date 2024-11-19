import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, CheckCircle, Play } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    "Expert Creative Team",
    "Fast Turnaround Time",
    "Unlimited Revisions",
    "24/7 Support"
  ];

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm text-primary mb-6">
              <span className="mr-2">🚀</span>
              Elevate Your Digital Presence
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Creative Design, Development & Video 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Transform your brand with our expert team of designers, developers, and video editors. We create stunning digital experiences that captivate your audience.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className={`flex items-center space-x-2 transition-all duration-500 delay-${index * 200}`}
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transform transition hover:scale-105">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Preview Cards */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              {/* Design Preview */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-xl transform rotate-6 transition-transform hover:rotate-0">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl mb-4"></div>
                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                </div>
              </div>

              {/* Web Preview */}
              <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-xl transform -rotate-6 transition-transform hover:rotate-0">
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl mb-4"></div>
                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                </div>
              </div>

              {/* Video Preview */}
              <div className="relative w-64 h-64 mx-auto mt-32 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl backdrop-blur-xl transition-transform hover:scale-105">
                <div className="p-6">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl mb-4"></div>
                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;