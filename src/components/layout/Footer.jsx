import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/manlikestiffler', ariaLabel: 'GitHub Profile' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/tinashe-gomo-15a899258', ariaLabel: 'LinkedIn Profile' },
  ];

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              A showcase of my web development projects and professional journey.
              Built with React and modern web technologies.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Harare, Zimbabwe</span>
            </div>
            <a 
              href="mailto:tinashegomo00@outlook.com" 
              className="flex items-center text-gray-300 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>tinashegomo00@outlook.com</span>
            </a>
          </div>
          
          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white/10 inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Tinashe Gomo. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with <span className="text-red-500">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 