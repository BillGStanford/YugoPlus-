import { useState } from 'react';
import { Eye, Code, Video } from 'lucide-react';

const WorkShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Browser Games",
      category: "design",
      image: "/api/placeholder/600/400",  // Thumbnail image
      description: "Complete Browser Game",
      link: "https://example.com/project1"  // Link to the detailed project page
    },

    {
      id: 2,
      title: "Corporate Website",
      category: "web",
      image: "/images/ourdays.JPG",
      description: "News Article & Digital Media Website that attracts countless users",
      link: "https://our-days-media.vercel.app/"
    },
    // Add more projects as needed
  ];

  // Filter projects based on category
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Amazing Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our portfolio of successful projects across different domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'design', 'web', 'video'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
