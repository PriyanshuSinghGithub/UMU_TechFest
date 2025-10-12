import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-[#0A2540]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Have questions? Reach out to us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#00D4FF] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a
                    href="mailto:martinovation@umu.ac.in"
                    className="text-gray-300 hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    martinovation1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#00D4FF] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-gray-300">
                    Usha Martin University
                    <br />
                    Angara, Ranchi, Jharkhand 835103
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A2540] p-6 rounded-xl border border-[#00D4FF]/30">
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white transition-all duration-300 pulse"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white transition-all duration-300 pulse"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/martinovation_techfest?igsh=cGczMm42M3hwOWxs"
                  className="w-12 h-12 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white transition-all duration-300 pulse"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] hover:bg-[#00D4FF] hover:text-white transition-all duration-300 pulse"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-[#00D4FF]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.485817868827!2d85.50638197492462!3d23.40681147890637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f518cbbfffffff%3A0x49668409bc317a24!2sUsha%20Martin%20University!5e0!3m2!1sen!2sin!4v1760105732799!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Usha Martin University Location"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] border ${
                    errors.name ? "border-red-500" : "border-[#00D4FF]/30"
                  } rounded-lg text-white focus:outline-none focus:border-[#00D4FF] transition-colors duration-300`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] border ${
                    errors.email ? "border-red-500" : "border-[#00D4FF]/30"
                  } rounded-lg text-white focus:outline-none focus:border-[#00D4FF] transition-colors duration-300`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] border ${
                    errors.message ? "border-red-500" : "border-[#00D4FF]/30"
                  } rounded-lg text-white focus:outline-none focus:border-[#00D4FF] transition-colors duration-300 resize-none`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#7B2CBF] rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
