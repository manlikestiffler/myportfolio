import ScrollReveal from '../animations/ScrollReveal.jsx';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="tiny-text text-primary mb-3 inline-block">Get To Know Me</span>
            <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About Me</h2>
          </ScrollReveal>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="mb-1">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Computer Engineer | JavaScript Enthusiast | Problem-Solver
                </h3>
              </div>
              
              <p className="body-copy-tight">
                I'm a passionate developer with hands-on experience in building real-world apps for inventory systems, IoT platforms, and mobile solutions. I specialize in JavaScript (React) and am expanding into React Native to build for mobile users as well.
              </p>
              
              <p className="body-copy-tight">
                I've independently built and deployed multiple web apps that solve real problems in agriculture, retail, and water safety. My approach to development is centered around writing clean, maintainable code that delivers exceptional user experiences. I enjoy solving complex problems and continuously learning about new technologies and best practices in the ever-evolving web development landscape.
              </p>
              
              <div className="pt-1">
                <h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    "Clean, efficient code",
                    "Responsive design",
                    "Performance optimization",
                    "Accessibility focused",
                    "Rapid prototyping",
                    "System architecture"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"/>
                      <span className="small-text font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 flex">
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About; 