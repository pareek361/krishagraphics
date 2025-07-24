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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">KrishaGraphics</h2>
          <p className="text-gray-400 max-w-xs">Your one-stop solution for all designing and printing needs. Creativity meets quality!</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {links.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-blue-400 transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-2"><FaEnvelope /> info@krishagraphics.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">&copy; {new Date().getFullYear()} KrishaGraphics. All rights reserved.</div>
    </footer>
  );
} 