import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';


function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B2CBF] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      <Navigation />
      <Hero />
      <About />
      <Schedule />
      <Events />
      <Gallery />
      <Team />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
