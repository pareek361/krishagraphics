"use client"

import { useState } from "react"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Designing", href: "#designing" },
  { name: "Printing", href: "#printing" },
  // { name: "Rates", href: "#rates" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#whyus" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-5 md:py-3 sm:py-5">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/KRISHAGRAPHICS_ONLYLOGO.png"
            alt="KrishaGraphics Logo"
            className="h-10 w-10 rounded-full shadow-lg"
          />
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="font-script text-xl sm:text-2xl lg:text-3xl tracking-tight text-purple-600 dark:text-purple-400 drop-shadow font-bold">
                Krisha
              </span>
              <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wider text-teal-600 dark:text-teal-400 uppercase md:-mt-4 -mt-2 md:pb-1.5">
                GRAPHICS
              </span>
            </div>
          </div>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-semibold text-gray-700 dark:text-gray-200 px-2 py-1 rounded hover:bg-teal-100 dark:hover:bg-purple-800/30 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Dark Mode Toggle + Hamburger */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode((dm) => !dm)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? <FaSun className="text-teal-400" /> : <FaMoon className="text-gray-800" />}
          </button>
          <button
            className="lg:hidden ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Open Menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <img
                  src="/KRISHAGRAPHICS_ONLYLOGO.png"
                  alt="KrishaGraphics Logo"
                  className="h-8 w-8 rounded-full shadow"
                />
                <div className="flex flex-col">
                  <span className="font-script text-lg tracking-tight text-purple-600 dark:text-purple-400 font-bold">
                    Krisha
                  </span>
                  <span className="font-bold text-xs tracking-wider text-teal-600 dark:text-teal-400 uppercase -mt-1">
                    GRAPHICS
                  </span>
                </div>
              </div>
              <button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="flex-1 bg-white dark:bg-gray-900 flex flex-col justify-center">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-semibold text-gray-700 dark:text-gray-200 px-6 py-2.5 rounded-lg hover:bg-teal-100 dark:hover:bg-purple-800/30 hover:text-teal-700 dark:hover:text-teal-400 transition-all duration-200 text-xl border border-transparent hover:border-teal-200 dark:hover:border-purple-700 bg-white dark:bg-gray-900 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-center gap-4">
                <button
                  aria-label="Toggle Dark Mode"
                  onClick={() => setDarkMode((dm) => !dm)}
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {darkMode ? <FaSun className="text-teal-400" /> : <FaMoon className="text-gray-800" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
