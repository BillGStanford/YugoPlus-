import { useState } from 'react';
import { Users, Star, Info } from 'lucide-react';

const AboutUsSection = () => {
  const [teamInfo, setTeamInfo] = useState([

  ]);

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are a passionate team of creators, developers, and innovators dedicated to delivering exceptional results. Get to know more about us below.
          </p>
        </div>

        {/* Our Team */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamInfo.map((member, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of teamwork. Together, we achieve more.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
              <Star className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in everything we do, delivering top-quality results every time.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
              <Info className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Transparency</h3>
              <p className="text-gray-400">
                We value openness and honesty in our communication with clients and team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
