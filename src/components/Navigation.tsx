import { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles, Bell, CheckCheck, Trash2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoLoadError, setLogoLoadError] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome to Martinovation!",
      message: "Check out our upcoming events and schedule.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "New Event Added",
      message: "Tech Workshop has been scheduled for next week.",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Gallery Updated",
      message: "New photos from last event are now available.",
      time: "1 day ago",
      read: true,
    },
  ]);

  // ✅ separate refs for desktop and mobile
  const desktopNotificationRef = useRef(null);
  const mobileNotificationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ updated outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !desktopNotificationRef.current?.contains(event.target) &&
        !mobileNotificationRef.current?.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

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
          {/* Logo Section */}
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
            <span className="text-lg xs:text-xl sm:text-3xl md:text-5xl font-bold orbitron bg-gradient-to-r from-[#00D4FF] via-[#58F6FF] to-[#0078FF] text-transparent bg-clip-text tracking-wide whitespace-nowrap transition-all duration-500 hover:opacity-90 truncate">
              Martinovation
            </span>
          </div>

          {/* Desktop Nav Links + Notifications */}
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

            {/* Desktop Notifications */}
            <div className="relative" ref={desktopNotificationRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative text-gray-200 hover:text-[#00D4FF] p-2 transition-all duration-300"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-[#0A2540] border border-[#00D4FF]/30 rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#00D4FF]/20 to-[#0078FF]/20 px-4 py-3 border-b border-[#00D4FF]/30">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-sm">
                        Notifications
                      </h3>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-[#00D4FF] hover:text-[#58F6FF] text-xs flex items-center gap-1 transition-colors"
                        >
                          <CheckCheck className="w-3 h-3" />
                          Mark all read
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 border-b border-[#00D4FF]/10 hover:bg-[#00D4FF]/5 transition-colors ${
                            !notification.read ? "bg-[#00D4FF]/10" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div
                              className="flex-1 cursor-pointer"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium text-sm">
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
                                )}
                              </div>
                              <p className="text-gray-400 text-xs mt-1">
                                {notification.message}
                              </p>
                              <p className="text-gray-500 text-xs mt-1">
                                {notification.time}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                deleteNotification(notification.id)
                              }
                              className="text-gray-400 hover:text-red-400 transition-colors flex-shrink-0"
                              aria-label="Delete notification"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-400 text-sm">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu + Notifications */}
          <div className="md:hidden flex items-center gap-2 pr-2 sm:pr-4 flex-shrink-0">
            <div className="relative" ref={mobileNotificationRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative text-white hover:text-[#00D4FF] p-2"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#0A2540] border border-[#00D4FF]/30 rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#00D4FF]/20 to-[#0078FF]/20 px-4 py-3 border-b border-[#00D4FF]/30">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-sm">
                        Notifications
                      </h3>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-[#00D4FF] hover:text-[#58F6FF] text-xs flex items-center gap-1 transition-colors"
                        >
                          <CheckCheck className="w-3 h-3" />
                          Mark all read
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 border-b border-[#00D4FF]/10 hover:bg-[#00D4FF]/5 transition-colors ${
                            !notification.read ? "bg-[#00D4FF]/10" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div
                              className="flex-1 cursor-pointer"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium text-sm">
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
                                )}
                              </div>
                              <p className="text-gray-400 text-xs mt-1">
                                {notification.message}
                              </p>
                              <p className="text-gray-500 text-xs mt-1">
                                {notification.time}
                              </p>
                            </div>
                            <button
                              onClick={() =>
                                deleteNotification(notification.id)
                              }
                              className="text-gray-400 hover:text-red-400 transition-colors flex-shrink-0"
                              aria-label="Delete notification"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-400 text-sm">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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
