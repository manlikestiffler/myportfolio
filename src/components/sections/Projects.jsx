import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import projects from '../../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [fullscreenProject, setFullscreenProject] = useState(null);

  // Prevent background scroll when fullscreen modal is open
  useEffect(() => {
    if (fullscreenProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [fullscreenProject]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Ensure Vimeo player API script is loaded if inventory embed is used
  useEffect(() => {
    const usesInventoryEmbed = projects.some(p => p.title && p.title.toLowerCase().includes('inventory'));
    if (!usesInventoryEmbed) return;

    if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://player.vimeo.com/api/player.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

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
                  {project.video && project.video.includes('vimeo.com') ? (
                    project.title.toLowerCase().includes('inventory') ? (
                      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                          src="https://player.vimeo.com/video/1114598471?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          title="Monisha Inventory System"
                        />
                      </div>
                    ) : (
                      <iframe
                        src={project.video}
                        className="w-full h-48 object-cover"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={project.title}
                      />
                    )
                  ) : (
                    <video
                      src={project.video}
                      className="w-full h-48 object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4 pointer-events-none">
                    <div className="flex-grow">
                      <h3
                        className="text-white font-bold tracking-tight text-lg mb-2 cursor-pointer underline pointer-events-auto"
                        onClick={() => setFullscreenProject(project)}
                      >
                        {project.title}
                      </h3>
                      <p className="text-white text-sm">{project.description}</p>
                    </div>
                    <div className="flex gap-2 self-end pointer-events-auto">
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

        {/* Fullscreen Video Modal */}
        {fullscreenProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setFullscreenProject(null)}
          >
            <div
              className="relative max-w-4xl w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg"
                onClick={() => setFullscreenProject(null)}
                aria-label="Close video"
              >
                &#10005;
              </button>

              {fullscreenProject.video && fullscreenProject.video.includes('vimeo.com') ? (
                <iframe
                  src={fullscreenProject.video}
                  className="w-full aspect-video rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={fullscreenProject.title}
                />
              ) : (
                <video
                  src={fullscreenProject.video}
                  className="w-full aspect-video rounded-lg"
                  controls
                  autoPlay
                />
              )}

              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">{fullscreenProject.title}</h3>
                <p className="text-gray-200">{fullscreenProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;