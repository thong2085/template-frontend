import { motion } from "framer-motion";
import {
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
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeSupermarket() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Thực phẩm", href: "#" },
    { label: "Đồ uống", href: "#" },
    { label: "Gia vị", href: "#" },
    { label: "Đồ gia dụng", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    { id: "vegetables", name: "Rau củ", icon: Heart, color: "bg-green-500" },
    { id: "meat", name: "Thịt cá", icon: Star, color: "bg-red-500" },
    { id: "snacks", name: "Snack", icon: Sparkles, color: "bg-yellow-500" },
    { id: "beverages", name: "Nước giải khát", icon: Heart, color: "bg-blue-500" },
  ];

  const supermarketProducts = [
    {
      id: 1,
      name: "Rau củ tươi organic",
      price: "45.000đ",
      originalPrice: "60.000đ",
      rating: 4.8,
      reviews: 234,
      isNew: true,
      discount: 25,
      category: "vegetables",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Fresh Daily", "Organic", "No Pesticides", "Local Farm"],
      nutrition: "Vitamin A, C, K, Folate",
    },
    {
      id: 2,
      name: "Thịt bò tươi",
      price: "299.000đ",
      rating: 4.9,
      reviews: 156,
      isNew: false,
      category: "meat",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Fresh Cut", "Premium Quality", "No Hormones", "Local Source"],
      nutrition: "High Protein, Iron, B12",
    },
    {
      id: 3,
      name: "Snack khoai tây",
      price: "25.000đ",
      originalPrice: "35.000đ",
      rating: 4.6,
      reviews: 89,
      isNew: true,
      discount: 29,
      category: "snacks",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Crunchy", "Natural", "No Preservatives", "Family Pack"],
      nutrition: "Potatoes, Natural Salt, Oil",
    },
    {
      id: 4,
      name: "Nước cam tươi",
      price: "35.000đ",
      rating: 4.7,
      reviews: 178,
      isNew: false,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["100% Natural", "Fresh Squeezed", "Vitamin C", "No Sugar Added"],
      nutrition: "Vitamin C, Natural Sugars",
    },
    {
      id: 5,
      name: "Gia vị tổng hợp",
      price: "89.000đ",
      rating: 4.8,
      reviews: 267,
      isNew: true,
      category: "vegetables",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Premium Blend", "Natural", "Aromatic", "Long Lasting"],
      nutrition: "Natural Herbs, Spices",
    },
    {
      id: 6,
      name: "Cá hồi tươi",
      price: "199.000đ",
      rating: 4.9,
      reviews: 134,
      isNew: false,
      category: "meat",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Fresh Catch", "Omega-3", "Premium Grade", "Sustainable"],
      nutrition: "Omega-3, Protein, Vitamin D",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? supermarketProducts
      : supermarketProducts.filter(
          (product) => product.category === activeCategory
        );

  const comboDeals = [
    {
      id: 1,
      name: "Combo nấu ăn gia đình",
      price: "299.000đ",
      originalPrice: "450.000đ",
      items: ["Rau củ tươi", "Thịt bò", "Gia vị"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 34,
    },
    {
      id: 2,
      name: "Combo snack party",
      price: "89.000đ",
      originalPrice: "120.000đ",
      items: ["Snack khoai tây", "Nước cam", "Bánh kẹo"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 26,
    },
    {
      id: 3,
      name: "Combo healthy",
      price: "199.000đ",
      originalPrice: "280.000đ",
      items: ["Rau củ organic", "Cá hồi", "Nước ép"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 29,
    },
  ];

  const features = [
    { icon: Clock, title: "Giao hàng nhanh", desc: "Trong 30 phút" },
    { icon: Shield, title: "Chất lượng đảm bảo", desc: "Tươi ngon 100%" },
    { icon: Truck, title: "Miễn phí ship", desc: "Đơn từ 200k" },
    { icon: Zap, title: "Đặt hàng dễ dàng", desc: "App & Website" },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Khách hàng thân thiết" },
    { icon: Award, value: "4.8", label: "Đánh giá trung bình" },
    { icon: Star, value: "99%", label: "Hài lòng với chất lượng" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="supermarket" title="SuperMarket 24/7" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Combo khuyến mãi hot
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Siêu thị
                <span className="text-blue-500 block">24/7</span>
                tại nhà
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mua sắm thực phẩm tươi ngon, đồ gia dụng chất lượng với dịch vụ
                giao hàng nhanh chóng và tiện lợi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Mua ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem combo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Supermarket Products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-blue-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">🛒</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-green-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🥬</div>
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
                  className="absolute top-1/2 right-4 w-4 h-4 bg-yellow-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🍎</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">🛍️</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">🥕</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-500" />
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
              Khám phá các danh mục thực phẩm tươi ngon và đồ gia dụng chất lượng
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
                    : "bg-white border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-blue-500"
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
              Thực phẩm tươi ngon, đồ gia dụng chất lượng với giá cả hợp lý
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
                <ProductCard theme="supermarket" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Combo Section */}
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
            <h2 className="text-4xl font-bold mb-4">Combo tiết kiệm</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gợi ý combo nấu ăn tiết kiệm và tiện lợi cho gia đình
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboDeals.map((combo, index) => (
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
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{combo.discount}%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-500">
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
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Thêm vào giỏ
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-blue-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Địa chỉ cửa hàng
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-white" />
                <span className="text-white">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-white" />
                <span className="text-white">Hotline: 0123 456 789</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Đặt hàng nhanh
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Gọi ngay: 0123 456 789
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer theme="supermarket" />
    </div>
  );
}
