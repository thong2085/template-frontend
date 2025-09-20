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
  BookOpen,
  PenTool,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeBooks() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Sách học tập", href: "#" },
    { label: "Tiểu thuyết", href: "#" },
    { label: "Kỹ năng", href: "#" },
    { label: "Văn phòng phẩm", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-indigo-400 to-purple-600",
    },
    {
      id: "education",
      name: "Học tập",
      icon: GraduationCap,
      color: "bg-indigo-500",
    },
    {
      id: "novel",
      name: "Tiểu thuyết",
      icon: BookOpen,
      color: "bg-purple-500",
    },
    { id: "skills", name: "Kỹ năng", icon: Lightbulb, color: "bg-blue-500" },
    {
      id: "stationery",
      name: "Văn phòng phẩm",
      icon: PenTool,
      color: "bg-pink-500",
    },
  ];

  const booksProducts = [
    {
      id: 1,
      name: "Sách Toán lớp 12 nâng cao",
      price: "89.000đ",
      originalPrice: "120.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 26,
      category: "education",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Comprehensive",
        "Advanced Level",
        "Practice Tests",
        "Solutions",
      ],
      nutrition: "Mathematics, Advanced Problems, Solutions",
    },
    {
      id: 2,
      name: "Tiểu thuyết Dế Mèn Phiêu Lưu Ký",
      price: "59.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "novel",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Classic Literature",
        "Vietnamese Author",
        "Adventure",
        "Children's Book",
      ],
      nutrition: "Literature, Adventure, Vietnamese Culture",
    },
    {
      id: 3,
      name: "Kỹ năng giao tiếp hiệu quả",
      price: "99.000đ",
      originalPrice: "149.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 34,
      category: "skills",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Communication", "Self-help", "Professional", "Practical"],
      nutrition: "Communication Skills, Psychology, Business",
    },
    {
      id: 4,
      name: "Bút bi cao cấp Parker",
      price: "299.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "stationery",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Premium Quality",
        "Smooth Writing",
        "Elegant Design",
        "Durable",
      ],
      nutrition: "Stainless Steel, Gold Plated, Refillable",
    },
    {
      id: 5,
      name: "Sách Vật Lý lớp 11",
      price: "79.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "education",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Physics", "Grade 11", "Clear Explanations", "Exercises"],
      nutrition: "Physics, Mechanics, Thermodynamics, Exercises",
    },
    {
      id: 6,
      name: "Vở ghi chép A4 200 trang",
      price: "25.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "stationery",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["A4 Size", "200 Pages", "High Quality", "Spiral Bound"],
      nutrition: "High Quality Paper, Spiral Binding, Durable Cover",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? booksProducts
      : booksProducts.filter((product) => product.category === activeCategory);

  const bestSellers = booksProducts.slice(0, 5);

  const topPicks = [
    {
      id: 1,
      title: "Sách hay nhất tháng",
      description: "Những cuốn sách được yêu thích nhất trong tháng",
      books: ["Toán nâng cao", "Vật lý 11", "Kỹ năng giao tiếp"],
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Bộ sưu tập văn học",
      description: "Tuyển tập những tác phẩm văn học kinh điển",
      books: ["Dế Mèn Phiêu Lưu Ký", "Truyện Kiều", "Chí Phèo"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Văn phòng phẩm cao cấp",
      description: "Bộ sưu tập văn phòng phẩm chất lượng cao",
      books: ["Bút Parker", "Vở A4", "Bút chì 2B"],
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const features = [
    { icon: Shield, title: "Sách chính hãng", desc: "100% sách gốc" },
    { icon: Truck, title: "Giao hàng nhanh", desc: "Trong 24h" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 7 ngày" },
    { icon: Zap, title: "Tư vấn chọn sách", desc: "Miễn phí 24/7" },
  ];

  const stats = [
    { icon: Users, value: "30K+", label: "Độc giả tin tưởng" },
    { icon: Award, value: "4.8", label: "Đánh giá trung bình" },
    { icon: Star, value: "95%", label: "Hài lòng với chất lượng" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="books" title="BookStore" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Sách bestseller
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Tri thức
                <span className="text-indigo-500 block">vô tận</span>
                từ những trang sách
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá thế giới sách phong phú, từ sách học tập đến tiểu
                thuyết, văn phòng phẩm chất lượng cao cho mọi nhu cầu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Mua ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem top picks
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Books Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-indigo-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">📚</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-purple-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">✏️</div>
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
                  className="absolute top-1/2 right-4 w-4 h-4 bg-blue-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">📖</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">📚</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">✍️</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-500" />
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

      {/* Best Sellers Section */}
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
            <h2 className="text-4xl font-bold mb-4">Sách Bestseller</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top 5 cuốn sách được yêu thích nhất với nội dung chất lượng
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-2 -left-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  #{index + 1}
                </div>
                <ProductCard theme="books" product={product} />
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
            <h2 className="text-4xl font-bold mb-4">Danh mục sản phẩm</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các danh mục sách và văn phòng phẩm theo thể loại
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
                    : "bg-white border-2 border-gray-200 hover:border-indigo-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-indigo-500"
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
            <h2 className="text-4xl font-bold mb-4">Sản phẩm nổi bật</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sách và văn phòng phẩm chất lượng cao với giá cả hợp lý
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
                <ProductCard theme="books" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Top Picks Section */}
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
            <h2 className="text-4xl font-bold mb-4">Top Picks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sách gợi ý được tuyển chọn kỹ lưỡng cho từng nhu cầu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPicks.map((pick, index) => (
              <motion.div
                key={pick.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={pick.image}
                    alt={pick.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pick.title}</h3>
                  <p className="text-gray-600 mb-4">{pick.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    Bao gồm: {pick.books.join(", ")}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Xem bộ sưu tập
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
        className="py-20"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer theme="books" />
    </div>
  );
}
