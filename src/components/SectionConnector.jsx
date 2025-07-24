import { motion } from 'framer-motion';

export default function SectionConnector() {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '80px' }}
        transition={{ duration: 0.7 }}
        className="w-1 bg-gradient-to-b from-blue-400 to-yellow-400 dark:from-yellow-400 dark:to-blue-400 rounded-full my-4"
        style={{ minHeight: '80px' }}
      />
    </div>
  );
} 