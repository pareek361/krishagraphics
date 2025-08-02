import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Designing', href: '#designing' },
  { name: 'Printing', href: '#printing' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="w-full md:w-auto text-left flex items-center gap-3 mb-4 md:mb-0">
          <img
            src="/KRISHAGRAPHICS_ONLYLOGO.png"
            alt="KrishaGraphics Logo"
            className="h-10 w-10 rounded-full shadow-lg"
          />
          <div className="flex flex-col">
            <span className="font-script text-2xl md:text-3xl tracking-tight text-purple-400 -mb-2.5 font-bold">
              Krisha
            </span>
            <span className="font-bold text-sm md:text-base tracking-wider text-teal-400 uppercase">
              GRAPHICS
            </span>
            <p className="text-gray-400 max-w-xs mt-2 text-sm">Your one-stop solution for all designing and printing needs. Creativity meets quality!</p>
          </div>
        </div>
        <div className="w-full md:w-auto text-left md:text-center">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {links.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-teal-400 transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-auto text-left md:text-right">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-2"><FaEnvelope /> info@krishagraphics.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-teal-400"><FaFacebook /></a>
            <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
            <a href="#" className="hover:text-teal-300"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="text-left md:text-center text-gray-500 mt-8 text-sm">&copy; {new Date().getFullYear()} KrishaGraphics. All rights reserved.</div>
    </footer>
  );
} 