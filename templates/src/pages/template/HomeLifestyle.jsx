import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Shield,
  Flower,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeLifestyle() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "🏠 Trang chủ", href: "#" },
    { label: "🍎 Sản phẩm", href: "#" },
    { label: "📖 Blog", href: "#" },
    { label: "💚 Về chúng tôi", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-lifestyle-green to-lifestyle-blue",
    },
    { id: "organic", name: "Organic", icon: Leaf, color: "bg-lifestyle-green" },
    {
      id: "supplements",
      name: "Thực phẩm chức năng",
      icon: Heart,
      color: "bg-lifestyle-pink",
    },
    {
      id: "wellness",
      name: "Chăm sóc sức khỏe",
      icon: Shield,
      color: "bg-lifestyle-orange",
    },
    {
      id: "natural",
      name: "Thiên nhiên",
      icon: Flower,
      color: "bg-lifestyle-blue",
    },
  ];

  const lifestyleProducts = [
    {
      id: 1,
      name: "Rau củ organic tươi",
      price: "89.000đ",
      originalPrice: "120.000đ",
      rating: 4.9,
      reviews: 234,
      isNew: true,
      discount: 26,
      category: "organic",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "100% Organic",
        "No Pesticides",
        "Rich in Vitamins",
        "Fresh Daily",
      ],
      nutrition: "Vitamin A, C, K, Folate",
    },
    {
      id: 2,
      name: "Vitamin D3 + K2",
      price: "299.000đ",
      rating: 4.8,
      reviews: 156,
      isNew: false,
      category: "supplements",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Tăng cường xương",
        "Hỗ trợ miễn dịch",
        "Hấp thụ canxi",
        "Chống lão hóa",
      ],
      nutrition: "Vitamin D3 1000IU, Vitamin K2 100mcg",
    },
    {
      id: 3,
      name: "Tinh dầu oải hương",
      price: "199.000đ",
      originalPrice: "249.000đ",
      rating: 4.7,
      reviews: 89,
      isNew: true,
      discount: 20,
      category: "natural",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Giảm stress",
        "Thư giãn",
        "Cải thiện giấc ngủ",
        "Kháng khuẩn",
      ],
      nutrition: "100% Pure Lavender Essential Oil",
    },
    {
      id: 4,
      name: "Máy đo huyết áp điện tử",
      price: "899.000đ",
      rating: 4.6,
      reviews: 178,
      isNew: false,
      category: "wellness",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Đo chính xác", "Dễ sử dụng", "Lưu trữ dữ liệu", "Báo động"],
      nutrition: "FDA Approved, Clinical Accuracy",
    },
    {
      id: 5,
      name: "Trái cây sấy khô",
      price: "149.000đ",
      rating: 4.8,
      reviews: 267,
      isNew: true,
      category: "organic",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "No Sugar Added",
        "Rich in Fiber",
        "Antioxidants",
        "Natural Sweet",
      ],
      nutrition: "Fiber, Vitamin C, Potassium",
    },
    {
      id: 6,
      name: "Collagen Peptide",
      price: "599.000đ",
      rating: 4.9,
      reviews: 134,
      isNew: false,
      category: "supplements",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Làm đẹp da",
        "Tăng cường xương",
        "Hỗ trợ khớp",
        "Chống lão hóa",
      ],
      nutrition: "Collagen Peptide 10g, Vitamin C",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? lifestyleProducts
      : lifestyleProducts.filter(
          (product) => product.category === activeCategory
        );

  const healthTips = [
    {
      title: "Bổ sung vitamin đầy đủ",
      content:
        "Vitamin D3, K2, C và các khoáng chất thiết yếu giúp tăng cường miễn dịch và sức khỏe xương.",
      icon: "💊",
    },
    {
      title: "Theo dõi sức khỏe thường xuyên",
      content:
        "Sử dụng thiết bị đo huyết áp, nhịp tim để kiểm soát sức khỏe tim mạch hiệu quả.",
      icon: "📊",
    },
    {
      title: "Thư giãn và giảm stress",
      content:
        "Tinh dầu thiên nhiên và các sản phẩm thư giãn giúp cải thiện chất lượng giấc ngủ.",
      icon: "🧘‍♀️",
    },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Khách hàng hài lòng" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Heart, value: "100%", label: "Sản phẩm chính hãng" },
  ];

  return (
    <div className="bg-lifestyle-bg text-lifestyle-text font-lifestyleBody min-h-screen">
      <Header theme="lifestyle" title="Lifestyle Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lifestyle-green/10 via-lifestyle-pink/5 to-lifestyle-orange/10"></div>
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
                className="inline-flex items-center px-4 py-2 bg-lifestyle-green/20 rounded-full text-lifestyle-green text-sm font-medium mb-6"
              >
                <Leaf className="w-4 h-4 mr-2" />
                Lối sống lành mạnh 2025
              </motion.div>

              <h1 className="font-lifestyleHeading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sống khỏe
                <span className="text-lifestyle-green block">mỗi ngày</span>
                cùng chúng tôi
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá thế giới sản phẩm sức khỏe, thực phẩm chức năng và
                thiết bị chăm sóc sức khỏe chất lượng cao cho cuộc sống khỏe
                mạnh.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-lifestyle-green hover:bg-lifestyle-hover text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Khám phá ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-lifestyle-green text-lifestyle-green hover:bg-lifestyle-green hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem blog
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-lifestyle-green/20 to-lifestyle-pink/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Healthy Lifestyle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-lifestyle-green/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-lifestyle-green/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">🍎</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-lifestyle-pink/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">💚</div>
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
                  className="absolute top-1/2 right-4 w-4 h-4 bg-lifestyle-orange/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🏃‍♀️</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-lifestyle-green/20 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">🌿</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-lifestyle-pink/30 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">💚</div>
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
        className="py-16 bg-lifestyle-muted"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lifestyle-green/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-lifestyle-green" />
                </div>
                <div className="text-3xl font-bold text-lifestyle-text mb-2">
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
            <h2 className="font-lifestyleHeading text-4xl font-bold mb-4">
              Danh mục sức khỏe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các danh mục sản phẩm chăm sóc sức khỏe toàn diện cho bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
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
                    : "bg-white border-2 border-lifestyle-border hover:border-lifestyle-green"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-lifestyle-green"
                  }`}
                />
                <div
                  className={`font-medium ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-lifestyle-text"
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
        className="py-20 bg-lifestyle-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-lifestyleHeading text-4xl font-bold mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm organic và thân thiện với môi trường được yêu thích
              nhất
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
                <ProductCard theme="lifestyle" product={product} />
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
              className="bg-lifestyle-green hover:bg-lifestyle-hover text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Xem tất cả sản phẩm
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Health Tips */}
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
            <h2 className="font-lifestyleHeading text-4xl font-bold mb-4">
              Lời khuyên sức khỏe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những lời khuyên hữu ích để chăm sóc sức khỏe toàn diện và hiệu
              quả
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-lifestyle-pink/20 to-lifestyle-green/20 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-lifestyleHeading text-xl font-bold mb-4 text-lifestyle-green">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{tip.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-lifestyle-green to-lifestyle-blue"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-lifestyleHeading text-3xl font-bold mb-4 text-white">
              Đăng ký nhận tin
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Nhận thông tin về sản phẩm sức khỏe mới, lời khuyên chăm sóc sức
              khỏe và ưu đãi đặc biệt
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
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-lifestyle-green px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100"
              >
                Đăng ký
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer theme="lifestyle" />
    </div>
  );
}
