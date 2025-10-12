import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A2540]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-2 sm:px-4">
        <div className="flex items-center justify-between h-20 sm:h-24">

          {/* Left Section (Logo + Text) */}
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink min-w-0">
            {!logoLoadError ? (
              <img
                src="/martinovation-logo.png"
                alt="Martinovation Logo"
                className="h-10 xs:h-12 sm:h-16 md:h-20 w-auto transition-transform duration-500 hover:scale-110"
                onError={() => setLogoLoadError(true)}
              />
            ) : (
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-[#00D4FF]" />
            )}

            {/* Futuristic Text */}
            <span className="text-lg xs:text-xl sm:text-3xl md:text-5xl font-bold orbitron bg-gradient-to-r from-[#00D4FF] via-[#58F6FF] to-[#0078FF] text-transparent bg-clip-text tracking-wide whitespace-nowrap transition-all duration-500 hover:opacity-90 truncate">
              Martinovation
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 pr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-[#00D4FF] px-3 py-2 text-sm font-medium tracking-wider transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-2 sm:pr-4 flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#00D4FF] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2540]/98 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-[#00D4FF] block px-3 py-2 text-base font-medium tracking-wide transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
