import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Amit Sharma', quote: 'KrishaGraphics ne hamare business ke liye best branding ki! Highly recommended.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Verma', quote: 'Printing quality aur design dono hi top class hain. Fast delivery bhi!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rahul Singh', quote: 'Bahut creative team hai, har kaam perfection ke sath hota hai.', img: 'https://randomuser.me/api/portraits/men/54.jpg' },
  { name: 'Sneha Patel', quote: 'Customer support aur quality dono hi lajawab hain.', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-yellow-400 mb-12">Testimonials</h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="overflow-x-hidden w-full">
          <Swiper spaceBetween={24} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }} className="w-full">
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center mb-8 mx-auto">
                  <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-200 dark:border-yellow-400" />
                  <p className="text-gray-700 dark:text-gray-200 italic mb-2">"{t.quote}"</p>
                  <span className="font-semibold text-blue-700 dark:text-yellow-400">{t.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
} 