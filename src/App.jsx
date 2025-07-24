import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesigningServices from './components/DesigningServices';
import PrintingServices from './components/PrintingServices';
import Rates from './components/Rates';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionConnector from './components/SectionConnector';
import Lenis from 'lenis';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className={(darkMode ? 'dark bg-gray-950' : 'bg-white') + ' overflow-x-hidden'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20">
        <Hero />
        <SectionConnector />
        <DesigningServices />
        <SectionConnector />
        <PrintingServices />
        <SectionConnector />
        <Rates />
        <SectionConnector />
        <Portfolio />
        <SectionConnector />
        <WhyUs />
        <SectionConnector />
        <Testimonials />
        <SectionConnector />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
