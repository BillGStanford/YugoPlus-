import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'graphic-design',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (240) 733-8024",
      href: "tel:+12407338024"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@nilecomun@gmail.com",
      href: "mailto:nilecomun@gmail.com"
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;