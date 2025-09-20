import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer({ theme }) {
  const getThemeClasses = () => {
    switch (theme) {
      case "minimal":
        return {
          container: "bg-minimal-muted border-t border-minimal-border",
          text: "text-minimal-text",
          accent: "text-minimal-accent",
          hover: "hover:text-minimal-accent",
        };
      case "premium":
        return {
          container: "bg-premium-muted border-t border-premium-border",
          text: "text-premium-text",
          accent: "text-premium-accent",
          hover: "hover:text-premium-accent",
        };
      case "lifestyle":
        return {
          container: "bg-lifestyle-muted border-t border-lifestyle-border",
          text: "text-lifestyle-text",
          accent: "text-lifestyle-green",
          hover: "hover:text-lifestyle-green",
        };
      default:
        return {};
    }
  };

  const themeClasses = getThemeClasses();

  const footerSections = [
    {
      title: "Về chúng tôi",
      links: [
        { label: "Giới thiệu", href: "#" },
        { label: "Tuyển dụng", href: "#" },
        { label: "Tin tức", href: "#" },
        { label: "Liên hệ", href: "#" },
      ],
    },
    {
      title: "Hỗ trợ khách hàng",
      links: [
        { label: "Hướng dẫn mua hàng", href: "#" },
        { label: "Chính sách đổi trả", href: "#" },
        { label: "Bảo hành", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Chính sách",
      links: [
        { label: "Điều khoản sử dụng", href: "#" },
        { label: "Chính sách bảo mật", href: "#" },
        { label: "Chính sách vận chuyển", href: "#" },
        { label: "Chính sách thanh toán", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Phone, text: "0123 456 789" },
    { icon: Mail, text: "info@example.com" },
    { icon: MapPin, text: "123 Đường ABC, Quận 1, TP.HCM" },
  ];

  return (
    <footer className={themeClasses.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>
              {theme === "minimal"
                ? "Minimal Store"
                : theme === "premium"
                ? "Premium Shop"
                : "Lifestyle Store"}
            </h3>
            <p className={`${themeClasses.text} mb-4 text-sm leading-relaxed`}>
              {theme === "minimal"
                ? "Thời trang tối giản, phong cách hiện đại cho cuộc sống năng động."
                : theme === "premium"
                ? "Sản phẩm cao cấp, chất lượng vượt trội cho người tiêu dùng thông thái."
                : "Lối sống lành mạnh, sản phẩm organic và thân thiện với môi trường."}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full border ${themeClasses.text} ${themeClasses.hover} transition-all duration-200`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className={`font-semibold mb-4 ${themeClasses.text}`}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className={`text-sm ${themeClasses.text} ${themeClasses.hover} transition-colors duration-200`}
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`p-2 rounded-full ${themeClasses.accent} bg-opacity-10`}
                >
                  <contact.icon size={16} className={themeClasses.accent} />
                </div>
                <span className={`text-sm ${themeClasses.text}`}>
                  {contact.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className={`text-sm ${themeClasses.text} mb-4 md:mb-0`}>
            © 2025{" "}
            {theme === "minimal"
              ? "Minimal Store"
              : theme === "premium"
              ? "Premium Shop"
              : "Lifestyle Store"}
            . Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              className={`text-sm ${themeClasses.text} ${themeClasses.hover} transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
            >
              Điều khoản
            </motion.a>
            <motion.a
              href="#"
              className={`text-sm ${themeClasses.text} ${themeClasses.hover} transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
            >
              Bảo mật
            </motion.a>
            <motion.a
              href="#"
              className={`text-sm ${themeClasses.text} ${themeClasses.hover} transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
