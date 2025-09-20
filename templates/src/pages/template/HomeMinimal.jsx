import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeMinimal() {
  const navItems = [
    { label: "Nam", href: "#" },
    { label: "Nữ", href: "#" },
    { label: "Phụ kiện", href: "#" },
    { label: "Sale", href: "#" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Áo sơ mi trắng tối giản",
      price: "299.000đ",
      originalPrice: "399.000đ",
      rating: 4.8,
      reviews: 156,
      isNew: true,
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Quần jean slim fit",
      price: "599.000đ",
      rating: 4.6,
      reviews: 89,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Áo khoác bomber",
      price: "899.000đ",
      originalPrice: "1.199.000đ",
      rating: 4.9,
      reviews: 234,
      isNew: true,
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Giày sneaker trắng",
      price: "1.299.000đ",
      rating: 4.7,
      reviews: 178,
      isNew: false,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Khách hàng" },
    { icon: Award, value: "4.9", label: "Đánh giá" },
    { icon: TrendingUp, value: "99%", label: "Hài lòng" },
  ];

  return (
    <div className="bg-minimal-bg text-minimal-text font-minimalBody min-h-screen">
      <Header theme="minimal" title="Minimal Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-minimal-muted to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-minimal-accent/10 rounded-full text-minimal-accent text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Bộ sưu tập mới 2025
              </motion.div>

              <h1 className="font-minimalHeading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Phong cách
                <span className="text-minimal-accent block">tối giản</span>
                hiện đại
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập thời trang tối giản với thiết kế thanh lịch,
                chất liệu cao cấp và phong cách không bao giờ lỗi thời.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-minimal-accent hover:bg-minimal-hover text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Khám phá ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-minimal-accent text-minimal-accent hover:bg-minimal-accent hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem bộ sưu tập
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-minimal-muted to-minimal-accent/20 rounded-3xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Minimal Fashion Store"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-minimal-accent/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-minimal-accent/20 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">✨</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-minimal-accent/30 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">👕</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-minimal-accent/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-minimal-accent" />
                </div>
                <div className="text-3xl font-bold text-minimal-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-minimalHeading text-4xl font-bold mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm được yêu thích nhất với thiết kế tối giản và chất
              lượng vượt trội
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard theme="minimal" product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-minimal-accent text-minimal-accent hover:bg-minimal-accent hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Xem tất cả sản phẩm
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-minimal-muted"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-minimalHeading text-3xl font-bold mb-4">
            Đăng ký nhận tin
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-minimal-accent focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-minimal-accent hover:bg-minimal-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Đăng ký
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer theme="minimal" />
    </div>
  );
}
