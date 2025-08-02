import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12">Contact Us</h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
          <form className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
            <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
            <button type="submit" className="bg-teal-600 text-white font-bold py-2 rounded hover:bg-teal-700 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-300 transition">Send Message</button>
          </form>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><FaEnvelope /> info@krishagraphics.com</div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><FaPhone /> +91 98765 43210</div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200"><FaMapMarkerAlt /> 123, Main Road, Your City, India</div>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" alt="Map" className="rounded-xl w-full h-40 object-cover mt-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 