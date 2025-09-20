import { motion } from "framer-motion";
import {
  Search,
  Phone,
  ArrowRight,
  Star,
  Users,
  Award,
  Truck,
  Shield,
  Wrench,
  Hammer,
  Building,
  Package,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeConstruction() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { label: "🏠 Trang chủ", href: "#" },
    { label: "🧱 Xi măng", href: "#" },
    { label: "🔩 Sắt thép", href: "#" },
    { label: "🧱 Gạch", href: "#" },
    { label: "🎨 Sơn", href: "#" },
    { label: "🔧 Dụng cụ", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Package,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    { id: "cement", name: "Xi măng", icon: Building, color: "bg-gray-600" },
    { id: "steel", name: "Sắt thép", icon: Wrench, color: "bg-gray-800" },
    { id: "brick", name: "Gạch", icon: Building, color: "bg-red-600" },
    { id: "paint", name: "Sơn", icon: Package, color: "bg-blue-500" },
    { id: "tools", name: "Dụng cụ", icon: Hammer, color: "bg-yellow-600" },
  ];

  const constructionProducts = [
    {
      id: 1,
      name: "Xi măng PCB40 Hà Tiên",
      price: "89.000đ/bao",
      originalPrice: "95.000đ/bao",
      rating: 4.9,
      reviews: 234,
      isNew: true,
      discount: 6,
      category: "cement",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Chất lượng cao",
        "Độ bền tốt",
        "Dễ thi công",
        "Giá cạnh tranh",
      ],
      nutrition: "PCB40, 50kg/bao, Xuất xứ Việt Nam",
    },
    {
      id: 2,
      name: "Thép D10 Việt Nhật",
      price: "15.500đ/kg",
      rating: 4.8,
      reviews: 156,
      isNew: false,
      category: "steel",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Chất lượng Nhật", "Độ bền cao", "Chống gỉ", "Thi công dễ"],
      nutrition: "D10, 11.8mm, Thép cốt bê tông",
    },
    {
      id: 3,
      name: "Gạch ống 4 lỗ",
      price: "1.200đ/viên",
      originalPrice: "1.300đ/viên",
      rating: 4.7,
      reviews: 89,
      isNew: true,
      discount: 8,
      category: "brick",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Chất lượng tốt",
        "Tiết kiệm xi măng",
        "Cách nhiệt",
        "Bền đẹp",
      ],
      nutrition: "4 lỗ, 190x90x90mm, Gạch đất nung",
    },
    {
      id: 4,
      name: "Sơn Dulux Weathershield",
      price: "899.000đ/thùng",
      rating: 4.6,
      reviews: 178,
      isNew: false,
      category: "paint",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Chống thấm", "Chống nắng", "Bền màu", "Dễ thi công"],
      nutrition: "20L/thùng, Sơn ngoại thất, Chống UV",
    },
    {
      id: 5,
      name: "Máy cắt sắt Bosch",
      price: "2.999.000đ",
      rating: 4.8,
      reviews: 267,
      isNew: true,
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Công suất cao", "Bền bỉ", "An toàn", "Dễ sử dụng"],
      nutrition: "1800W, Cắt sắt D32, Bảo hành 2 năm",
    },
    {
      id: 6,
      name: "Ống nước PVC Bình Minh",
      price: "45.000đ/cây",
      rating: 4.9,
      reviews: 134,
      isNew: false,
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Chống ăn mòn", "Dễ lắp đặt", "Bền đẹp", "Giá tốt"],
      nutrition: "PVC, D21, 4m/cây, Chất lượng cao",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? constructionProducts
      : constructionProducts.filter(
          (product) => product.category === activeCategory
        );

  const projects = [
    {
      title: "Chung cư cao cấp",
      content:
        "Dự án chung cư 25 tầng tại quận 7, sử dụng vật liệu chất lượng cao.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      client: "Công ty ABC",
    },
    {
      title: "Nhà phố thương mại",
      content: "Khu nhà phố 3 tầng với thiết kế hiện đại, vật liệu bền đẹp.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      client: "Anh Minh",
    },
    {
      title: "Nhà xưởng công nghiệp",
      content: "Nhà xưởng 5000m2 với kết cấu thép chắc chắn, chống cháy.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      client: "Công ty XYZ",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Dự án hoàn thành" },
    { icon: Award, value: "4.9", label: "Đánh giá trung bình" },
    { icon: Truck, value: "24/7", label: "Giao hàng tận nơi" },
  ];

  const offers = [
    {
      title: "Combo dự án nhà phố",
      description: "Gói vật liệu hoàn chỉnh cho nhà phố 3 tầng",
      discount: "15%",
      price: "Từ 50 triệu",
      items: ["Xi măng", "Thép", "Gạch", "Sơn", "Dụng cụ"],
    },
    {
      title: "Combo chung cư",
      description: "Vật liệu chất lượng cao cho dự án chung cư",
      discount: "20%",
      price: "Từ 200 triệu",
      items: ["Xi măng", "Thép", "Gạch", "Sơn", "Ống nước"],
    },
    {
      title: "Combo nhà xưởng",
      description: "Vật liệu chuyên dụng cho nhà xưởng công nghiệp",
      discount: "25%",
      price: "Từ 500 triệu",
      items: ["Thép", "Xi măng", "Sơn", "Dụng cụ", "Vật liệu chống cháy"],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Custom Header with Search and Hotline */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  VLXD & Nội thất
                </h1>
                <p className="text-sm text-gray-500">
                  Vật liệu xây dựng chất lượng cao
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center space-x-8"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>

            {/* Search and Hotline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm vật liệu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Hotline */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:19001234"
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">1900-1234</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.header>

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
                <Building className="w-4 h-4 mr-2" />
                Vật liệu xây dựng uy tín
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Xây dựng
                <span className="text-orange-500 block">tương lai</span>
                bền vững
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cung cấp vật liệu xây dựng chất lượng cao, giá cạnh tranh và
                dịch vụ giao hàng tận nơi công trình.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Xem bảng giá
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Tư vấn dự án
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Construction Project"
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
                  <div className="text-sm">🏗️</div>
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
                  <div className="text-xs">🔧</div>
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
                  <div className="text-xs">🏢</div>
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
                <div className="text-2xl">🏗️</div>
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
                <div className="text-xl">🔨</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
            <h2 className="text-4xl font-bold mb-4">Danh mục vật liệu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các loại vật liệu xây dựng chất lượng cao cho dự án của
              bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-200 ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-lg transform scale-105`
                    : "bg-white border border-gray-200 text-gray-700 hover:border-orange-300 hover:shadow-md"
                }`}
              >
                <category.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-medium">{category.name}</div>
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
            <h2 className="text-4xl font-bold mb-4">Bảng giá vật liệu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Giá cạnh tranh, chất lượng đảm bảo, giao hàng tận nơi công trình
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} theme="construction" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Special Offers */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ưu đãi đặc biệt</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Giảm giá khi mua số lượng lớn, combo dự án với giá ưu đãi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                    <div className="text-2xl text-white font-bold">
                      {offer.discount}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="text-2xl font-bold text-orange-500 mb-4">
                    {offer.price}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {offer.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Liên hệ tư vấn
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Testimonials */}
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
            <h2 className="text-4xl font-bold mb-4">Dự án đã thực hiện</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những dự án thành công với vật liệu chất lượng cao từ chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Khách hàng: {project.client}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
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
        className="py-16 bg-gradient-to-r from-orange-500 to-red-500"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Nhận báo giá dự án
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Gửi thông tin dự án để nhận báo giá chi tiết và tư vấn miễn phí
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
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Gửi yêu cầu
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
