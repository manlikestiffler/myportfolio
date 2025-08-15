import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import projects from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <ScrollReveal>
            <span className="tiny-text text-primary mb-3 inline-block">What I've Built</span>
            <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">My Projects</h2>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 section-subtitle">
            Here are some of my recent projects. Each one was built with a focus on user experience, 
            performance, and clean code.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                activeFilter === category 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleFilterClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ScrollReveal key={project.id} className="group">
              <div className="card h-full flex flex-col overflow-hidden">
                <div className="relative">
                  <video
                    src={project.video}
                    className="w-full h-48 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4">
                    <div className="flex-grow">
                      <h3 className="text-white font-bold tracking-tight text-lg mb-2">{project.title}</h3>
                      <p className="text-white text-sm">{project.description}</p>
                    </div>
                    <div className="flex gap-2 self-end">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors">
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 