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
  Baby,
  Shirt,
  Utensils,
  Gamepad2,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeBaby() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Quần áo", href: "#" },
    { label: "Đồ dùng", href: "#" },
    { label: "Sữa & Bỉm", href: "#" },
    { label: "Đồ chơi", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-pink-400 to-purple-600",
    },
    { id: "0-1", name: "0-1 tuổi", icon: Baby, color: "bg-pink-500" },
    { id: "1-3", name: "1-3 tuổi", icon: Shirt, color: "bg-purple-500" },
    { id: "3-5", name: "3-5 tuổi", icon: Utensils, color: "bg-blue-500" },
    { id: "5+", name: "5+ tuổi", icon: Gamepad2, color: "bg-green-500" },
  ];

  const babyProducts = [
    {
      id: 1,
      name: "Bộ quần áo bé gái dễ thương",
      price: "199.000đ",
      originalPrice: "299.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 33,
      category: "0-1",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Cotton 100%", "Mềm mại", "Dễ giặt", "An toàn"],
      nutrition: "100% Cotton, Không phai màu, Chất liệu an toàn",
    },
    {
      id: 2,
      name: "Sữa bột cho bé 6-12 tháng",
      price: "450.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "0-1",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Dinh dưỡng cao",
        "Dễ tiêu hóa",
        "Tăng cường miễn dịch",
        "Hương vị thơm ngon",
      ],
      nutrition: "DHA, ARA, Prebiotics, Vitamin D, Canxi",
    },
    {
      id: 3,
      name: "Bỉm tã giấy siêu thấm",
      price: "299.000đ",
      originalPrice: "399.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 25,
      category: "1-3",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Siêu thấm", "Không gây kích ứng", "Thoáng khí", "Dễ thay"],
      nutrition: "Không chứa hóa chất độc hại, Thấm hút 12h",
    },
    {
      id: 4,
      name: "Đồ chơi xếp hình thông minh",
      price: "159.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "3-5",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Phát triển trí tuệ", "An toàn", "Nhiều màu sắc", "Bền đẹp"],
      nutrition: "Nhựa ABS an toàn, Không góc cạnh, Nhiều hình dạng",
    },
    {
      id: 5,
      name: "Xe đẩy em bé cao cấp",
      price: "2.999.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "0-1",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Chắc chắn", "Dễ gập", "Nhiều tính năng", "Thiết kế đẹp"],
      nutrition: "Khung thép không gỉ, Bánh xe cao su, Dây an toàn 5 điểm",
    },
    {
      id: 6,
      name: "Bộ đồ chơi nấu ăn",
      price: "399.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "5+",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Sáng tạo", "Giáo dục", "Nhiều phụ kiện", "Chất lượng cao"],
      nutrition: "Nhựa PP an toàn, 50+ phụ kiện, Hướng dẫn sử dụng",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? babyProducts
      : babyProducts.filter((product) => product.category === activeCategory);

  const features = [
    {
      icon: Shield,
      title: "An toàn tuyệt đối",
      desc: "Chất liệu 100% an toàn",
    },
    { icon: Truck, title: "Giao hàng nhanh", desc: "Trong 24h" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 7 ngày" },
    { icon: Zap, title: "Tư vấn chuyên gia", desc: "Miễn phí 24/7" },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Mẹ bỉm tin tưởng" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Star, value: "99%", label: "Hài lòng với chất lượng" },
  ];

  const momReviews = [
    {
      name: "Chị Nguyễn Thị A",
      role: "Mẹ của bé 8 tháng",
      content:
        "Sản phẩm chất lượng tốt, bé nhà mình rất thích. Dịch vụ tư vấn rất nhiệt tình.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Chị Trần Thị B",
      role: "Mẹ của bé 2 tuổi",
      content:
        "Đồ chơi an toàn, bé chơi rất vui. Giao hàng nhanh, đóng gói cẩn thận.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Chị Lê Thị C",
      role: "Mẹ của bé 4 tuổi",
      content:
        "Sản phẩm đa dạng, giá cả hợp lý. Bé nhà mình rất thích bộ đồ chơi nấu ăn.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="baby" title="Baby Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
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
                Bé dễ thương + sản phẩm hot
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mẹ & Bé
                <span className="text-pink-500 block">yêu thương</span>
                chăm sóc toàn diện
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập sản phẩm chất lượng cao cho mẹ và bé, từ
                quần áo, đồ dùng đến sữa bột và đồ chơi an toàn.
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
                  Xem sản phẩm hot
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Baby Products"
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
                  <div className="text-sm">👶</div>
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
                  <div className="text-xs">🧸</div>
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
                  <div className="text-xs">🍼</div>
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
                <div className="text-2xl">👶</div>
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
                <div className="text-xl">🧸</div>
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
            <h2 className="text-4xl font-bold mb-4">Theo độ tuổi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sản phẩm phù hợp với từng giai đoạn phát triển của bé
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
                    : "bg-white border-2 border-gray-200 hover:border-pink-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-pink-500"
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
            <h2 className="text-4xl font-bold mb-4">Sản phẩm nhiều màu sắc</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bộ sưu tập sản phẩm đa dạng với nhiều màu sắc tươi sáng
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
                <ProductCard theme="baby" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mom Reviews */}
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
            <h2 className="text-4xl font-bold mb-4">Mẹ bỉm chia sẻ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những chia sẻ chân thực từ các mẹ bỉm về trải nghiệm mua sắm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {momReviews.map((review, index) => (
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
                    <div className="font-bold text-pink-500">{review.name}</div>
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
                <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                  <div className="text-sm text-pink-600 font-medium">
                    💝 Mẹ bỉm tin tưởng
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

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-pink-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Hotline tư vấn
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-white" />
                <span className="text-white">Chính sách đổi trả linh hoạt</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white">Tư vấn chuyên gia miễn phí</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gọi ngay: 0123 456 789
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Tư vấn miễn phí
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer theme="baby" />
    </div>
  );
}
