"use client"

import { useState } from "react"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Designing", href: "#designing" },
  { name: "Printing", href: "#printing" },
  { name: "Rates", href: "#rates" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#whyus" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/placeholder.svg?height=36&width=36"
            alt="KrishaGraphics Logo"
            className="h-9 w-9 rounded-full shadow"
          />
          <span className="font-extrabold text-2xl tracking-tight text-blue-700 dark:text-yellow-400 drop-shadow">
            KrishaGraphics
          </span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-semibold text-gray-700 dark:text-gray-200 px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-yellow-400 transition-colors duration-200"
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
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </button>
          <button
            className="md:hidden ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Open Menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 p-8 pt-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-gray-700 dark:text-gray-200 px-2 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-yellow-400 transition-colors duration-200 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
