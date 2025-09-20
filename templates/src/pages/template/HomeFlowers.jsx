import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  Star,
  Heart,
  Sparkles,
  Award,
  Users,
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  Zap,
  Flower2,
  Gift,
  Heart as HeartIcon,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeFlowers() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Hoa tươi", href: "#" },
    { label: "Quà sinh nhật", href: "#" },
    { label: "Quà cưới", href: "#" },
    { label: "Theo dịp", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-emerald-400 to-teal-600",
    },
    { id: "flowers", name: "Hoa tươi", icon: Flower2, color: "bg-emerald-500" },
    { id: "birthday", name: "Sinh nhật", icon: Gift, color: "bg-pink-500" },
    { id: "wedding", name: "Cưới hỏi", icon: HeartIcon, color: "bg-red-500" },
    {
      id: "occasion",
      name: "Theo dịp",
      icon: Calendar,
      color: "bg-purple-500",
    },
  ];

  const flowersProducts = [
    {
      id: 1,
      name: "Bó hoa hồng đỏ 99 bông",
      price: "899.000đ",
      originalPrice: "1.299.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 31,
      category: "flowers",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Fresh Daily", "Premium Quality", "Romantic", "Long Lasting"],
      nutrition: "99 Red Roses, Premium Wrapping, Vase Included",
    },
    {
      id: 2,
      name: "Gấu bông khổng lồ 1.5m",
      price: "599.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "birthday",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Soft & Cuddly",
        "Premium Material",
        "Perfect Gift",
        "Huggable",
      ],
      nutrition: "Premium Plush, 1.5m Height, Soft Filling",
    },
    {
      id: 3,
      name: "Bó hoa cưới sang trọng",
      price: "1.999.000đ",
      originalPrice: "2.999.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 33,
      category: "wedding",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Elegant", "Wedding Ready", "Luxury", "Memorable"],
      nutrition: "White Roses, Baby's Breath, Silk Ribbon",
    },
    {
      id: 4,
      name: "Quà handmade đặc biệt",
      price: "299.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "occasion",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Handmade", "Unique", "Personalized", "Special"],
      nutrition: "Handcrafted, Personalized Message, Gift Box",
    },
    {
      id: 5,
      name: "Bó hoa hướng dương tươi",
      price: "399.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "flowers",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Bright & Cheerful", "Fresh", "Sunny", "Uplifting"],
      nutrition: "Fresh Sunflowers, Green Foliage, Natural Wrapping",
    },
    {
      id: 6,
      name: "Bộ quà tặng cao cấp",
      price: "799.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "birthday",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Complete Set", "Premium", "Gift Ready", "Beautiful"],
      nutrition: "Flowers, Chocolate, Card, Gift Box",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? flowersProducts
      : flowersProducts.filter(
          (product) => product.category === activeCategory
        );

  const comboGifts = [
    {
      id: 1,
      name: "Combo Valentine",
      price: "1.299.000đ",
      originalPrice: "1.899.000đ",
      items: ["Hoa hồng đỏ", "Gấu bông", "Socola"],
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 32,
    },
    {
      id: 2,
      name: "Combo Sinh nhật",
      price: "899.000đ",
      originalPrice: "1.299.000đ",
      items: ["Hoa tươi", "Bánh kem", "Quà handmade"],
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 31,
    },
    {
      id: 3,
      name: "Combo Cưới hỏi",
      price: "2.999.000đ",
      originalPrice: "4.299.000đ",
      items: ["Hoa cưới", "Trang trí", "Quà cặp đôi"],
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 30,
    },
  ];

  const features = [
    { icon: Truck, title: "Giao trong 2h", desc: "Nhanh chóng & tươi mới" },
    { icon: Shield, title: "Hoa tươi 100%", desc: "Cam kết chất lượng" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 24h" },
    { icon: Zap, title: "Tư vấn miễn phí", desc: "24/7 hỗ trợ" },
  ];

  const stats = [
    { icon: Users, value: "20K+", label: "Khách hàng hài lòng" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Star, value: "99%", label: "Hoa tươi chất lượng" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="flowers" title="Flower Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-pink-50 to-purple-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Bouquet đẹp, filter theo dịp
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hoa tươi
                <span className="text-emerald-500 block">quà tặng</span>ý nghĩa
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập hoa tươi, quà tặng handmade và combo quà
                tặng đặc biệt cho mọi dịp quan trọng trong cuộc sống.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Đặt ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem combo quà
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-pink-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Flowers Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 w-6 h-6 bg-emerald-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">🌸</div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [15, -15, 15],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-8 w-5 h-5 bg-pink-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🎁</div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 right-4 w-4 h-4 bg-purple-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">💝</div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">🌹</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">🎁</div>
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
        className="py-16 bg-gray-50"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Categories */}
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
            <h2 className="text-4xl font-bold mb-4">Danh mục sản phẩm</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các danh mục hoa tươi và quà tặng theo dịp
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? category.color + " text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 hover:border-emerald-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-emerald-500"
                  }`}
                />
                <div
                  className={`font-medium ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {category.name}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Sản phẩm nổi bật</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hoa tươi và quà tặng đẹp với hình ảnh nghệ thuật
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard theme="flowers" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Combo Gifts Section */}
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
            <h2 className="text-4xl font-bold mb-4">Combo quà tặng</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gợi ý sản phẩm kết hợp hoàn hảo cho từng dịp đặc biệt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboGifts.map((combo, index) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{combo.discount}%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-emerald-500">
                        {combo.price}
                      </span>
                      <span className="text-gray-400 line-through">
                        {combo.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Bao gồm: {combo.items.join(", ")}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Đặt combo ngay
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick Order */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-emerald-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Hotline đặt nhanh
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-white" />
                <span className="text-white">
                  Giao trong 2h - Hoa tươi 100%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white">Tư vấn miễn phí 24/7</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gọi ngay: 0123 456 789
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Đặt hàng nhanh
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer theme="flowers" />
    </div>
  );
}
