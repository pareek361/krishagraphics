"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-teal-100 via-white to-purple-100 dark:from-purple-900/20 dark:via-gray-800 dark:to-purple-900/20 overflow-hidden"
    >
      {/* Background with Gradient Overlay */}
      <img
        src="/heroimage.jpeg"
        alt="Printing Press"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none hidden md:block"
      />
      <img
        src="/heromob.jpg"
        alt="Printing Press Mobile"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none md:hidden"
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 dark:bg-teal-800/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 py-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-600 dark:text-teal-400 mb-4 drop-shadow-lg">
          Welcome to KrishaGraphics
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
          Your one-stop solution for <span className="font-semibold text-teal-500 dark:text-teal-300">Designing</span>{" "}
          & <span className="font-semibold text-purple-500 dark:text-purple-300">Printing</span> — Creativity meets
          Quality!
        </p>

        {/* CTA Buttons */}
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-teal-600 text-white font-bold rounded-full shadow-lg hover:bg-teal-700 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-300 transition"
        >
          Get a Quote
        </a>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-12">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Projects Done" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/*<motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>*/}
    </section>
  )
}
