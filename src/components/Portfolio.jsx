import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Magazine Design', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
  { title: 'Book Printing', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80' },
  { title: 'Brand Identity', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
  { title: 'Poster Design', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80' },
  { title: 'Menu Card', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
  { title: 'Box Packaging', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-yellow-400 mb-16 tracking-tight drop-shadow-lg">Our Portfolio</h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="overflow-x-hidden w-full">
          <Swiper spaceBetween={32} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="w-full">
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300 mx-auto max-w-xs">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={project.img} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-t-2xl" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-2">{project.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
} 