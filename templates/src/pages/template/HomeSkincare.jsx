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
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeSkincare() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Skincare", href: "#" },
    { label: "Makeup", href: "#" },
    { label: "Perfume", href: "#" },
    { label: "Sale", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-pink-400 to-rose-600",
    },
    { id: "skincare", name: "Skincare", icon: Heart, color: "bg-pink-500" },
    { id: "makeup", name: "Makeup", icon: Sparkles, color: "bg-rose-500" },
    { id: "perfume", name: "Perfume", icon: Star, color: "bg-purple-500" },
  ];

  const skincareProducts = [
    {
      id: 1,
      name: "Serum Vitamin C cao cấp",
      price: "899.000đ",
      originalPrice: "1.299.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 31,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Brightening", "Anti-aging", "Hydrating", "Vitamin C"],
      nutrition: "Vitamin C, Hyaluronic Acid, Niacinamide",
    },
    {
      id: 2,
      name: "Kem dưỡng ẩm ban đêm",
      price: "599.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Deep Hydration", "Night Repair", "Anti-aging", "Gentle"],
      nutrition: "Ceramides, Peptides, Retinol",
    },
    {
      id: 3,
      name: "Son môi matte cao cấp",
      price: "299.000đ",
      originalPrice: "399.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 25,
      category: "makeup",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Long-lasting", "Matte Finish", "Pigmented", "Comfortable"],
      nutrition: "Vitamin E, Jojoba Oil, Natural Pigments",
    },
    {
      id: 4,
      name: "Nước hoa nữ sang trọng",
      price: "1.999.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "perfume",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Long-lasting", "Luxury Scent", "Elegant", "Premium"],
      nutrition: "Rose, Jasmine, Sandalwood",
    },
    {
      id: 5,
      name: "Kem chống nắng SPF 50+",
      price: "399.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["SPF 50+", "Waterproof", "Non-greasy", "Broad Spectrum"],
      nutrition: "Zinc Oxide, Titanium Dioxide, Antioxidants",
    },
    {
      id: 6,
      name: "Phấn nền full coverage",
      price: "699.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "makeup",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Full Coverage", "Long-wear", "Natural Finish", "Buildable"],
      nutrition: "Silica, Mica, Natural Minerals",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? skincareProducts
      : skincareProducts.filter(
          (product) => product.category === activeCategory
        );

  const bestSellers = skincareProducts.slice(0, 5);

  const features = [
    { icon: Shield, title: "Chính hãng 100%", desc: "Cam kết hàng chính hãng" },
    { icon: Truck, title: "Giao hàng nhanh", desc: "Miễn phí trong 2h" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 7 ngày" },
    { icon: Zap, title: "Tư vấn chuyên nghiệp", desc: "24/7 hỗ trợ" },
  ];

  const reviews = [
    {
      name: "Nguyễn Thị A",
      role: "Khách hàng VIP",
      content: "Serum Vitamin C này thật sự hiệu quả! Da mình sáng hơn rõ rệt sau 2 tuần sử dụng.",
      rating: 5,
      beforeAfter: true,
    },
    {
      name: "Trần Thị B",
      role: "Beauty Blogger",
      content: "Kem dưỡng ẩm ban đêm rất mịn và thấm nhanh. Da không bị bí tắc như các sản phẩm khác.",
      rating: 5,
      beforeAfter: true,
    },
    {
      name: "Lê Thị C",
      role: "Khách hàng thân thiết",
      content: "Son môi matte này đẹp và bền màu cả ngày. Màu sắc rất tự nhiên và không khô môi.",
      rating: 5,
      beforeAfter: false,
    },
  ];

  const stats = [
    { icon: Users, value: "100K+", label: "Khách hàng tin tưởng" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Star, value: "99%", label: "Hài lòng với sản phẩm" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="skincare" title="Beauty Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Sản phẩm hot 2025
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Làm đẹp
                <span className="text-pink-500 block">chuyên nghiệp</span>
                tại nhà
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập mỹ phẩm và skincare cao cấp, giúp bạn tự tin
                và xinh đẹp mỗi ngày.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Mua ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
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
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Beauty Products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-pink-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">✨</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-rose-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">💄</div>
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
                  <div className="text-xs">🌸</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-pink-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">💖</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">✨</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-pink-500" />
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
            <h2 className="text-4xl font-bold mb-4">Best Sellers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top 5 sản phẩm được yêu thích nhất với hiệu quả vượt trội
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
                <div className="absolute -top-2 -left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  #{index + 1}
                </div>
                <ProductCard theme="skincare" product={product} />
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
              Khám phá các danh mục mỹ phẩm phù hợp với nhu cầu làm đẹp của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className={`p-8 rounded-2xl text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? category.color + " text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 hover:border-pink-300"
                }`}
              >
                <category.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-pink-500"
                  }`}
                />
                <div
                  className={`font-semibold text-lg ${
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
              Những sản phẩm mỹ phẩm và skincare được yêu thích nhất
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
                <ProductCard theme="skincare" product={product} />
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Customer Reviews */}
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
            <h2 className="text-4xl font-bold mb-4">Đánh giá khách hàng</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Phản hồi thực tế từ khách hàng trước và sau khi sử dụng
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
                <div>
                  <div className="font-bold text-pink-500">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
                {review.beforeAfter && (
                  <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                    <div className="text-sm text-pink-600 font-medium">
                      ✨ Có hình ảnh trước/sau
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer theme="skincare" />
    </div>
  );
}
