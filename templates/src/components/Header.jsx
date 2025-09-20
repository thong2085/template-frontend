import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ theme, title, navItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getThemeClasses = () => {
    switch (theme) {
      case "minimal":
        return {
          container: "bg-white border-b border-minimal-border",
          title: "font-minimalHeading text-2xl text-minimal-text",
          nav: "text-minimal-text hover:text-minimal-accent",
          button: "bg-minimal-accent hover:bg-minimal-hover text-white",
          icon: "text-minimal-text hover:text-minimal-accent",
        };
      case "premium":
        return {
          container: "bg-premium-bg border-b border-premium-border",
          title: "font-premiumHeading text-2xl text-premium-text",
          nav: "text-premium-text hover:text-premium-accent",
          button: "bg-premium-accent hover:bg-premium-hover text-black",
          icon: "text-premium-text hover:text-premium-accent",
        };
      case "lifestyle":
        return {
          container: "bg-lifestyle-bg border-b border-lifestyle-border",
          title: "font-lifestyleHeading text-2xl text-lifestyle-text",
          nav: "text-lifestyle-text hover:text-lifestyle-green",
          button: "bg-lifestyle-green hover:bg-lifestyle-hover text-white",
          icon: "text-lifestyle-text hover:text-lifestyle-green",
        };
      default:
        return {};
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 backdrop-blur-md ${themeClasses.container}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <h1 className={themeClasses.title}>{title}</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`${themeClasses.nav} transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${themeClasses.icon} transition-colors duration-200`}
            >
              <Search size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${themeClasses.icon} transition-colors duration-200 relative`}
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-full ${themeClasses.icon}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`block px-4 py-2 ${themeClasses.nav} transition-colors duration-200`}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
