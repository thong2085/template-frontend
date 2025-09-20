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
  Car,
  Bike,
  Wrench,
  Droplets,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeVehicles() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Xe máy", href: "#" },
    { label: "Xe đạp", href: "#" },
    { label: "Phụ kiện", href: "#" },
    { label: "Dầu nhớt", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-red-400 to-red-600",
    },
    { id: "motorcycle", name: "Xe máy", icon: Car, color: "bg-red-500" },
    { id: "bicycle", name: "Xe đạp", icon: Bike, color: "bg-blue-500" },
    { id: "accessories", name: "Phụ kiện", icon: Wrench, color: "bg-gray-500" },
    { id: "oil", name: "Dầu nhớt", icon: Droplets, color: "bg-yellow-500" },
  ];

  const vehiclesProducts = [
    {
      id: 1,
      name: "Xe máy Honda Wave RSX",
      price: "25.999.000đ",
      originalPrice: "28.999.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 10,
      category: "motorcycle",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Fuel Efficient",
        "Reliable",
        "Easy Maintenance",
        "Modern Design",
      ],
      nutrition: "110cc Engine, 4-Stroke, Electric Start",
    },
    {
      id: 2,
      name: "Xe đạp thể thao Giant",
      price: "8.999.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "bicycle",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Lightweight", "Durable", "Smooth Ride", "Sporty"],
      nutrition: "Aluminum Frame, 21-Speed, Disc Brakes",
    },
    {
      id: 3,
      name: "Mũ bảo hiểm Shoei",
      price: "2.999.000đ",
      originalPrice: "3.999.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 25,
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Safety Certified", "Comfortable", "Aerodynamic", "Premium"],
      nutrition: "Carbon Fiber, DOT Certified, Removable Liner",
    },
    {
      id: 4,
      name: "Dầu nhớt Castrol 10W-40",
      price: "299.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "oil",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "High Performance",
        "Engine Protection",
        "Long Lasting",
        "Smooth",
      ],
      nutrition: "10W-40 Grade, Synthetic Blend, 1L Bottle",
    },
    {
      id: 5,
      name: "Xe máy Yamaha Exciter 155",
      price: "45.999.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "motorcycle",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Sporty", "Powerful", "Advanced Tech", "Stylish"],
      nutrition: "155cc Engine, VVA Technology, LED Lights",
    },
    {
      id: 6,
      name: "Bộ đồ bảo hộ da",
      price: "1.999.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Protective", "Comfortable", "Breathable", "Durable"],
      nutrition: "Genuine Leather, CE Armor, Removable Liner",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? vehiclesProducts
      : vehiclesProducts.filter(
          (product) => product.category === activeCategory
        );

  const features = [
    { icon: Shield, title: "Bảo hành chính hãng", desc: "2 năm toàn quốc" },
    { icon: Truck, title: "Giao hàng tận nơi", desc: "Miễn phí 50km" },
    { icon: RotateCcw, title: "Đổi trả 7 ngày", desc: "Không cần lý do" },
    { icon: Zap, title: "Tư vấn kỹ thuật", desc: "24/7 hỗ trợ" },
  ];

  const stats = [
    { icon: Users, value: "15K+", label: "Khách hàng tin tưởng" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Star, value: "98%", label: "Hài lòng với dịch vụ" },
  ];

  const customerReviews = [
    {
      name: "Nguyễn Văn A",
      role: "Khách hàng VIP",
      content:
        "Xe Honda Wave RSX rất tiết kiệm nhiên liệu và dễ sử dụng. Dịch vụ bảo hành tốt.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Trần Thị B",
      role: "Khách hàng thân thiết",
      content:
        "Xe đạp Giant chất lượng tốt, đi êm và nhẹ. Rất hài lòng với sản phẩm.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Lê Văn C",
      role: "Khách hàng mới",
      content:
        "Mũ bảo hiểm Shoei rất an toàn và thoải mái. Đáng đồng tiền bát gạo.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="vehicles" title="Vehicle Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Sản phẩm xe mới nhất
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Xe cộ
                <span className="text-red-500 block">chất lượng</span>
                phụ kiện cao cấp
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập xe máy, xe đạp và phụ kiện chất lượng cao
                với dịch vụ bảo hành và bảo dưỡng chuyên nghiệp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Mua ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem bảo hành
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Vehicles Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-red-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">🏍️</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-orange-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🚲</div>
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
                  <div className="text-xs">🔧</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-red-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">🏍️</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">🚲</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-red-500" />
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
              Khám phá các danh mục xe cộ và phụ kiện chất lượng cao
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
                    : "bg-white border-2 border-gray-200 hover:border-red-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-red-500"
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
              Xe cộ và phụ kiện chất lượng cao với giá cả hợp lý
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
                <ProductCard theme="vehicles" product={product} />
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
              Phản hồi thực tế từ khách hàng với hình ảnh sản phẩm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-red-500">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{review.content}"</p>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <div className="text-sm text-red-600 font-medium">
                    📸 Có hình ảnh thực tế
                  </div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-red-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Trung tâm bảo hành
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-white" />
                <span className="text-white">
                  Bảo hành chính hãng 2 năm toàn quốc
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-6 h-6 text-white" />
                <span className="text-white">
                  Dịch vụ bảo dưỡng chuyên nghiệp
                </span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Chính sách bảo dưỡng
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Đặt lịch bảo dưỡng
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer theme="vehicles" />
    </div>
  );
}
