import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Handshake } from 'lucide-react';

const sponsorLogos = [
  { name: 'Tech Sponsor 1', placeholder: 'TS1' },
  { name: 'Tech Sponsor 2', placeholder: 'TS2' },
  { name: 'Tech Sponsor 3', placeholder: 'TS3' },
  { name: 'Tech Sponsor 4', placeholder: 'TS4' },
  { name: 'Tech Sponsor 5', placeholder: 'TS5' },
];

const Sponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % sponsorLogos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + sponsorLogos.length) % sponsorLogos.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sponsors" className="section-padding bg-gradient-to-b from-[#1A1A1A] to-[#0A2540]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient">
          Our Sponsors
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Powering innovation together
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {sponsorLogos.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A2540] p-8 rounded-xl border-2 border-[#00D4FF]/30 hover:border-[#7B2CBF] transition-all duration-300 hover:shadow-lg hover:shadow-[#7B2CBF]/20 aspect-square flex items-center justify-center group">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B2CBF] flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {sponsor.placeholder}
                      </div>
                      <p className="text-white font-semibold text-lg">{sponsor.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#00D4FF] hover:bg-[#7B2CBF] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous sponsor"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#00D4FF] hover:bg-[#7B2CBF] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next sponsor"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {sponsorLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#00D4FF] w-8' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to sponsor ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0A2540] p-10 rounded-2xl border-2 border-[#FFD700]/50">
            <Handshake className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Partner with us to empower the next generation of innovators and gain visibility among talented students and tech enthusiasts.
            </p>
            <a
              href="tel:8674944887"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#00D4FF] text-[#0A2540] rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Umanand Mishra: 8674944887
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
