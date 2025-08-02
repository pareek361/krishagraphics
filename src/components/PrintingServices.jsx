import { motion } from 'framer-motion';

const services = [
  { title: 'Visiting Cards', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { title: 'Brochure Printing', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
  { title: 'Poster Printing', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { title: 'Book Printing', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { title: 'Menu Card Printing', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  { title: 'Sticker & Label', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { title: 'Box Printing', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
  { title: 'Calendar Printing', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
];

export default function PrintingServices() {
  return (
    <section id="printing" className="py-20 bg-gradient-to-br from-purple-50 via-white to-teal-50 dark:from-purple-900/30 dark:via-gray-800 dark:to-purple-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 dark:text-teal-400 mb-12 drop-shadow-lg">Printing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-purple-300 dark:hover:border-teal-400 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="relative overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-teal-400 transition-colors duration-200">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 