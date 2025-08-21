import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Hyperspeed from '../magicui/Hyperspeed';
import { hyperspeedPresets } from '../magicui/hyperspeed-presets';
// Import profile image
import profileImage from '../../assets/images/profile.jpg';

const Hero = () => {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/manlikestiffler', ariaLabel: 'GitHub Profile' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com/in/tinashe-gomo-15a899258', ariaLabel: 'LinkedIn Profile' },
  ];

  const name = "Tinashe Gomo";
  const sentence = "I’m a self-taught web developer passionate about transforming ideas into functional, scalable, and accessible user interfaces. With a strong background in web development, I’m currently exploring React Native to create seamless, mobile-first experiences that delight users and solve real-world problems.".split(" ");
  
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const imageX = useTransform(mouseX, [-100, 100], [-15, 15]);
  const imageY = useTransform(mouseY, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width/2) * 100;
    const y = (clientY - top - height / 2) / (height/2) * 100;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Hyperspeed effectOptions={hyperspeedPresets.five} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-3 text-center md:text-left">
            <div className="mb-2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="tiny-text text-primary/90"
              >
                Computer Engineer
              </motion.span>
            </div>
            <h1 className="display text-gray-100 tracking-tighter">
              {name.split(" ").map((word, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <div className="h-1 w-20 bg-primary/80 my-6 md:my-8 hidden md:block" />
            <p className="lead text-gray-300 max-w-xl mt-4 md:mt-0">
              {sentence.map((word, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                  className="inline-block mr-1.5"
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mt-8"
            >
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Download CV</a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="flex gap-5 justify-center md:justify-start mt-8"
            >
              {socialLinks.map((link) => (
                <a key={link.ariaLabel} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} className="text-gray-400 hover:text-white transition-colors">{link.icon}</a>
              ))}
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            style={{ x: imageX, y: imageY }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-2 relative w-[450px] h-[450px] mx-auto md:ml-auto md:mr-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <motion.img
              src={profileImage}
              alt="Tinashe Gomo"
              className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-xl"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
        >
          <span className="small-text tracking-wide mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 