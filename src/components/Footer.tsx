import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0A2540] to-[#1A1A1A] border-t border-[#00D4FF]/30 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-5">
          {/* Logo with glow */}
          <img
            src="/martinovation-logo.png"
            alt="Martinovation Logo"
            className="h-40 w-auto drop-shadow-[0_0_40px_rgba(0,212,255,1)] transition-transform duration-500 hover:scale-110"
          />

          {/* Gradient title */}
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#7B2CBF] bg-clip-text text-transparent">
            Martinovation TechFest 2025
          </span>

          <p className="text-gray-400 text-center max-w-2xl">
            Genesis of Tomorrow — Where Innovation Meets Imagination
          </p>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <span>by Team Martinovation</span>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Usha Martin University | Genesis of Tomorrow
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a
              href="#home"
              className="hover:text-[#00D4FF] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#00D4FF] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#schedule"
              className="hover:text-[#00D4FF] transition-colors duration-300"
            >
              Schedule
            </a>
            <a
              href="#events"
              className="hover:text-[#00D4FF] transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="#contact"
              className="hover:text-[#00D4FF] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
