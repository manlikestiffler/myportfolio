import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

/**
 * ScrollReveal component for revealing elements as they enter the viewport
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to be revealed
 * @param {Object} props.variants - Animation variants (optional)
 * @param {number} props.threshold - Visibility threshold for triggering animation (0-1)
 * @param {string} props.className - Additional CSS classes
 * @returns {React.ReactElement}
 */
const ScrollReveal = ({
  children,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isInView && !prefersReducedMotion) {
      controls.start('visible');
    } else if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      controls.set('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 