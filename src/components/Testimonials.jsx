import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-12 drop-shadow-lg">Testimonials</h2>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="overflow-x-hidden w-full">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            className="w-full"
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center text-center mb-8 mx-auto hover:shadow-2xl hover:border-teal-300 dark:hover:border-purple-400 transition-all duration-300 group">
                  <div className="relative">
                    <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-teal-200 dark:border-purple-400 group-hover:border-teal-300 dark:group-hover:border-purple-300 transition-colors duration-200" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 italic mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">"{t.quote}"</p>
                  <span className="font-semibold text-teal-700 dark:text-purple-400 group-hover:text-teal-600 dark:group-hover:text-purple-300 transition-colors duration-200">{t.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
} 