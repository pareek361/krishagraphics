import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Core Design Services',
    services: [
      { title: 'Logo Design', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
      { title: 'Brand Identity Design', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { title: 'Business Card & Stationery', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
      { title: 'Brochure & Flyer', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
      { title: 'Poster & Banner', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
      { title: 'Hoarding / Billboard', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
      { title: 'Social Media Post', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { title: 'Packaging Design', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
      { title: 'Label & Sticker', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
      { title: 'Menu Design', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    title: 'Print & Publishing Design',
    services: [
      { title: 'Book & Magazine', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
      { title: 'Notebook & Diary', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
      { title: 'Catalog & Prospectus', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
      { title: 'Invitation Card', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
      { title: 'Certificate Design', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    title: 'Digital & Web Graphics',
    services: [
      { title: 'Website Banner', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { title: 'Thumbnail & Cover Image', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
      { title: 'Ad Creatives', img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    title: 'Custom & Creative Design',
    services: [
      { title: 'Custom Illustrations', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
      { title: 'Infographic Design', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { title: 'Photo Editing & Retouching', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
      { title: 'Resume / CV Design', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
    ],
  },
];

export default function DesigningServices() {
  return (
    <section id="designing" className="py-24 bg-gradient-to-br from-white via-blue-50 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-yellow-400 mb-14 tracking-tight drop-shadow-lg">Designing Services</h2>
        {categories.map((cat, idx) => (
          <div key={cat.title} className="mb-16">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-yellow-300 mb-8 text-center uppercase tracking-wide">{cat.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {cat.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/90 dark:bg-gray-900/80 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:border-blue-400 dark:hover:border-yellow-400 transition-transform duration-300 backdrop-blur-md"
                >
                  <img src={service.img} alt={service.title} className="h-20 w-20 rounded-full object-cover shadow-lg mb-4 border-4 border-blue-100 dark:border-yellow-200" />
                  <h4 className="text-base font-bold text-gray-800 dark:text-gray-100 text-center mb-1 tracking-tight">{service.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 