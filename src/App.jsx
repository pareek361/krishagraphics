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
import Lenis from 'lenis';
import './index.css';
import SectionConnector from './components/SectionConnector';

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
      <main className="md:pt-20 pt-20">
        <Hero />
        <SectionConnector variant="curve" />
        <DesigningServices />
        <SectionConnector variant="zigzag" />
        <PrintingServices />
        <SectionConnector variant="wave" />
        {/* <Rates /> */}
        {/* <SectionConnector variant="curve" /> */}
        <Portfolio />
        <SectionConnector variant="zigzag" />
        <WhyUs />
        <SectionConnector variant="wave" />
        <Testimonials />
        <SectionConnector variant="curve" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
