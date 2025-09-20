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
  Dumbbell,
  Activity,
  Circle,
  Target,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeSports() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Gym", href: "#" },
    { label: "Yoga", href: "#" },
    { label: "Bóng đá", href: "#" },
    { label: "Cầu lông", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-orange-400 to-red-600",
    },
    { id: "gym", name: "Gym", icon: Dumbbell, color: "bg-orange-500" },
    { id: "yoga", name: "Yoga", icon: Activity, color: "bg-purple-500" },
    { id: "football", name: "Bóng đá", icon: Circle, color: "bg-green-500" },
    {
      id: "badminton",
      name: "Cầu lông",
      icon: Target,
      color: "bg-blue-500",
    },
  ];

  const sportsProducts = [
    {
      id: 1,
      name: "Giày chạy bộ Nike Air Max",
      price: "2.999.000đ",
      originalPrice: "3.999.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 25,
      category: "gym",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Thoáng khí", "Đàn hồi tốt", "Bền đẹp", "Thiết kế hiện đại"],
      nutrition: "Air Max technology, Mesh upper, Rubber outsole",
    },
    {
      id: 2,
      name: "Quần áo gym Adidas",
      price: "899.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "gym",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Thấm mồ hôi", "Co giãn tốt", "Thoải mái", "Kiểu dáng đẹp"],
      nutrition: "Polyester blend, Moisture-wicking, 4-way stretch",
    },
    {
      id: 3,
      name: "Thảm yoga cao cấp",
      price: "599.000đ",
      originalPrice: "799.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 25,
      category: "yoga",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Chống trượt", "Dễ vệ sinh", "Bền đẹp", "Thiết kế đẹp"],
      nutrition: "TPE material, Non-slip surface, 6mm thickness",
    },
    {
      id: 4,
      name: "Giày bóng đá Nike Mercurial",
      price: "1.999.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "football",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Nhẹ", "Bám sân tốt", "Thoáng khí", "Kiểm soát bóng tốt"],
      nutrition: "Flyknit upper, Dynamic Fit collar, NikeGrip technology",
    },
    {
      id: 5,
      name: "Vợt cầu lông Yonex",
      price: "1.299.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "badminton",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Cân bằng tốt", "Lực đánh mạnh", "Kiểm soát tốt", "Bền đẹp"],
      nutrition: "Carbon fiber, 4U weight, G5 grip size",
    },
    {
      id: 6,
      name: "Dụng cụ gym đa năng",
      price: "3.999.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "gym",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Đa chức năng",
        "Tiết kiệm không gian",
        "An toàn",
        "Dễ sử dụng",
      ],
      nutrition: "Steel frame, Adjustable weights, Safety locks",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? sportsProducts
      : sportsProducts.filter((product) => product.category === activeCategory);

  const bestSellers = sportsProducts.slice(0, 4);

  const comboOffers = [
    {
      id: 1,
      name: "Combo Gym cơ bản",
      price: "4.999.000đ",
      originalPrice: "6.999.000đ",
      items: ["Giày chạy bộ", "Quần áo gym", "Găng tay", "Khăn"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 29,
    },
    {
      id: 2,
      name: "Combo Yoga hoàn chỉnh",
      price: "1.299.000đ",
      originalPrice: "1.799.000đ",
      items: ["Thảm yoga", "Quần áo yoga", "Block yoga", "Dây đai"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 28,
    },
    {
      id: 3,
      name: "Combo Bóng đá",
      price: "2.999.000đ",
      originalPrice: "4.299.000đ",
      items: ["Giày bóng đá", "Quần áo", "Tất", "Bóng"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      discount: 30,
    },
  ];

  const features = [
    { icon: Shield, title: "Chất lượng cao", desc: "Sản phẩm chính hãng" },
    { icon: Truck, title: "Giao hàng nhanh", desc: "Trong 24h" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 7 ngày" },
    { icon: Zap, title: "Hỗ trợ chọn size", desc: "Tư vấn miễn phí" },
  ];

  const stats = [
    { icon: Users, value: "25K+", label: "Vận động viên tin tưởng" },
    { icon: Award, value: "4.8", label: "Đánh giá trung bình" },
    { icon: Star, value: "97%", label: "Hài lòng với chất lượng" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="sports" title="Sports Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Hình ảnh vận động mạnh mẽ
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Đồ thể thao
                <span className="text-orange-500 block">Fitness</span>
                chuyên nghiệp
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập đồ thể thao và fitness chất lượng cao, từ
                gym, yoga đến bóng đá và cầu lông.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Mua ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem combo khuyến mãi
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sports Equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-orange-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">💪</div>
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
                  className="absolute bottom-8 left-8 w-5 h-5 bg-red-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">⚽</div>
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
                  <div className="text-xs">🏃</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">💪</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-xl">⚽</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-orange-500" />
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
            <h2 className="text-4xl font-bold mb-4">Theo môn thể thao</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sản phẩm chuyên dụng cho từng môn thể thao
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
                    : "bg-white border-2 border-gray-200 hover:border-orange-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-orange-500"
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

      {/* Best Sellers */}
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
            <h2 className="text-4xl font-bold mb-4">Best Seller</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Giày, quần áo gym, dụng cụ được yêu thích nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-2 -left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  #{index + 1}
                </div>
                <ProductCard theme="sports" product={product} />
              </motion.div>
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
              Đồ thể thao chất lượng cao với giá cả hợp lý
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
                <ProductCard theme="sports" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Combo Offers */}
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
            <h2 className="text-4xl font-bold mb-4">Gói combo giảm giá</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tiết kiệm chi phí với các combo sản phẩm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboOffers.map((combo, index) => (
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
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{combo.discount}%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{combo.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-orange-500">
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Mua combo ngay
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-orange-500" />
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
        className="py-16 bg-orange-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Hỗ trợ chọn size
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-white" />
                <span className="text-white">Chính sách bảo hành 1 năm</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-white" />
                <span className="text-white">Tư vấn chọn size miễn phí</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gọi ngay: 0123 456 789
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                Tư vấn miễn phí
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer theme="sports" />
    </div>
  );
}
