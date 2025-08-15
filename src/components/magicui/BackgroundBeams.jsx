import { useEffect, useRef } from 'react';

/**
 * A component that creates an animated background beam effect
 * @param {Object} props - The component props
 * @param {string} props.className - Additional class names
 * @param {Object} props.style - Additional inline styles
 * @param {string} props.color - Beam color (default: '#3B82F6')
 * @param {number} props.quantity - Number of beams (default: 20)
 * @param {boolean} props.disableAnimation - Whether to disable animation (default: false)
 * @returns {JSX.Element} The background beams component
 */
const BackgroundBeams = ({ 
  className = '',
  style = {},
  color = '#3B82F6',
  quantity = 20,
  disableAnimation = false,
  ...props
}) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (disableAnimation) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Beam properties
    const beams = [];
    for (let i = 0; i < quantity; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 2 + 0.5,
        length: Math.random() * 400 + 200,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 30 - 15, // Variation in hue
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw beams
      for (const beam of beams) {
        // Create gradient
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + beam.length
        );
        
        // Get base color components
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${beam.opacity})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x, beam.y + beam.length);
        ctx.stroke();
        
        // Move beam
        beam.y -= beam.speed;
        
        // Reset beam position when it goes off-screen
        if (beam.y + beam.length < 0) {
          beam.y = canvas.height;
          beam.x = Math.random() * canvas.width;
        }
      }
      
      // Continue animation loop
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [color, quantity, disableAnimation]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full ${className}`}
      style={{ opacity: '0.4', ...style }}
      aria-hidden="true"
      {...props}
    />
  );
};

export default BackgroundBeams; 