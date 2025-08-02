import { FaStar, FaBolt, FaSmile, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  { icon: <FaStar className="text-teal-400 text-3xl" />, title: 'Quality Assurance', desc: 'Top-notch quality in every print and design.' },
  { icon: <FaBolt className="text-purple-500 text-3xl" />, title: 'Fast Turnaround', desc: 'Quick delivery without compromising quality.' },
  { icon: <FaSmile className="text-teal-500 text-3xl" />, title: 'Customer Satisfaction', desc: 'We value your happiness above all.' },
  { icon: <FaPalette className="text-purple-400 text-3xl" />, title: 'Creative Excellence', desc: 'Unique, creative, and modern designs.' },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{f.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 