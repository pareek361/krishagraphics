import { motion } from 'framer-motion';

// You can pass a 'variant' prop to choose different path styles per section
export default function SectionConnector({ variant = 'curve' }) {
  // Define different SVG paths for different variants
  const paths = {
    curve: 'M50 0 Q55 60 50 120', // simple S-curve
    zigzag: 'M50 0 L70 30 L30 60 L70 90 L50 120', // zig-zag
    wave: 'M50 0 Q80 40 50 80 Q20 120 50 120', // wave
  };
  const path = paths[variant] || paths.curve;

  return (
    <div className="flex justify-center relative z-20">
      <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d={path}
          stroke="url(#connector-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="connector-gradient" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14b8a6" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 