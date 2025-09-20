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
  Dog,
  Cat,
  Utensils,
  Gamepad2,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomePets() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Chó", href: "#" },
    { label: "Mèo", href: "#" },
    { label: "Thức ăn", href: "#" },
    { label: "Phụ kiện", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-green-400 to-blue-600",
    },
    { id: "dog", name: "Chó", icon: Dog, color: "bg-green-500" },
    { id: "cat", name: "Mèo", icon: Cat, color: "bg-blue-500" },
    { id: "food", name: "Thức ăn", icon: Utensils, color: "bg-yellow-500" },
    {
      id: "accessories",
      name: "Phụ kiện",
      icon: Gamepad2,
      color: "bg-purple-500",
    },
  ];

  const petProducts = [
    {
      id: 1,
      name: "Thức ăn cho chó Royal Canin",
      price: "299.000đ",
      originalPrice: "399.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 25,
      category: "food",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Dinh dưỡng cao",
        "Dễ tiêu hóa",
        "Tăng cường miễn dịch",
        "Hương vị thơm ngon",
      ],
      nutrition: "Protein 26%, Fat 15%, Fiber 3%, Moisture 10%",
    },
    {
      id: 2,
      name: "Quần áo cho mèo dễ thương",
      price: "89.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "cat",
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Mềm mại", "Dễ giặt", "Thoải mái", "Thiết kế đẹp"],
      nutrition: "100% Cotton, Không phai màu, Chất liệu an toàn",
    },
    {
      id: 3,
      name: "Đồ chơi cho chó bền đẹp",
      price: "159.000đ",
      originalPrice: "199.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 20,
      category: "dog",
      image:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Bền đẹp", "An toàn", "Nhiều màu sắc", "Dễ vệ sinh"],
      nutrition: "Nhựa ABS an toàn, Không góc cạnh, Nhiều hình dạng",
    },
    {
      id: 4,
      name: "Thức ăn cho mèo Whiskas",
      price: "199.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "food",
      image:
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Dinh dưỡng cân bằng",
        "Hương vị hấp dẫn",
        "Dễ tiêu hóa",
        "Tăng cường sức khỏe",
      ],
      nutrition: "Protein 30%, Fat 12%, Fiber 2.5%, Moisture 8%",
    },
    {
      id: 5,
      name: "Chuồng cho chó cao cấp",
      price: "1.999.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "dog",
      image:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Chắc chắn", "Dễ lắp ráp", "Thoáng khí", "Thiết kế đẹp"],
      nutrition: "Khung thép không gỉ, Lưới thép, Sơn chống gỉ",
    },
    {
      id: 6,
      name: "Đồ chơi cho mèo có chuông",
      price: "79.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "cat",
      image:
        "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Kích thích vận động",
        "An toàn",
        "Nhiều màu sắc",
        "Dễ vệ sinh",
      ],
      nutrition: "Nhựa PP an toàn, Chuông bên trong, Dây dài 30cm",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? petProducts
      : petProducts.filter((product) => product.category === activeCategory);

  const petCareTips = [
    {
      id: 1,
      title: "Cách chăm sóc chó con",
      description: "Hướng dẫn chi tiết cách chăm sóc chó con từ 2-6 tháng tuổi",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: "5 phút đọc",
    },
    {
      id: 2,
      title: "Dinh dưỡng cho mèo",
      description: "Chế độ ăn uống phù hợp cho mèo ở các độ tuổi khác nhau",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: "7 phút đọc",
    },
    {
      id: 3,
      title: "Huấn luyện thú cưng",
      description: "Các phương pháp huấn luyện hiệu quả cho chó và mèo",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: "10 phút đọc",
    },
  ];

  const features = [
    { icon: Shield, title: "Sản phẩm an toàn", desc: "Chất liệu 100% an toàn" },
    { icon: Truck, title: "Giao hàng nhanh", desc: "Trong 24h" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 7 ngày" },
    { icon: Zap, title: "Hotline thú y", desc: "Tư vấn miễn phí 24/7" },
  ];

  const stats = [
    { icon: Users, value: "15K+", label: "Chủ thú cưng tin tưởng" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Star, value: "98%", label: "Hài lòng với chất lượng" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="pets" title="Pet Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Ảnh chó mèo dễ thương
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pet Shop
                <span className="text-green-500 block">yêu thương</span>
                chăm sóc thú cưng
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập sản phẩm chất lượng cao cho thú cưng, từ
                thức ăn, quần áo đến đồ chơi và phụ kiện.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Mua ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem tips chăm sóc
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Cute Pets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-green-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">🐕</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-blue-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🐱</div>
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
                  <div className="text-xs">🍖</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">🐕</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">🐱</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-green-500" />
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
              Đồ ăn, quần áo, đồ chơi cho thú cưng yêu
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
                    : "bg-white border-2 border-gray-200 hover:border-green-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-green-500"
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
              Card sản phẩm + nút mua nhanh cho thú cưng
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
                <ProductCard theme="pets" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pet Care Tips */}
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
            <h2 className="text-4xl font-bold mb-4">Tips chăm sóc thú cưng</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Blog chia sẻ kinh nghiệm chăm sóc thú cưng
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petCareTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {tip.readTime}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      Đọc thêm
                    </motion.button>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-green-500" />
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
        className="py-16 bg-green-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Chính sách giao hàng
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-white" />
                <span className="text-white">Hotline thú y 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white">Tư vấn chăm sóc miễn phí</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gọi ngay: 0123 456 789
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Tư vấn thú y
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer theme="pets" />
    </div>
  );
}
