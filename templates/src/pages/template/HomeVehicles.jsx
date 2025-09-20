import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Wrench,
  Droplets,
  Star,
  Heart,
  ShoppingCart,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

const HomeVehicles = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { label: "Xe máy", href: "#motorcycles" },
    { label: "Xe đạp", href: "#bicycles" },
    { label: "Phụ kiện", href: "#accessories" },
    { label: "Dầu nhớt", href: "#oil" },
    { label: "Dụng cụ", href: "#tools" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Car,
      color: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    {
      id: "motorcycle",
      name: "Xe máy",
      icon: Car,
      color: "bg-red-500",
    },
    {
      id: "bicycle",
      name: "Xe đạp",
      icon: Bike,
      color: "bg-blue-500",
    },
    {
      id: "accessories",
      name: "Phụ kiện",
      icon: Wrench,
      color: "bg-gray-500",
    },
    {
      id: "oil",
      name: "Dầu nhớt",
      icon: Droplets,
      color: "bg-yellow-500",
    },
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
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
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
        "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=500",
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
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
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
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
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
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
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
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
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
    {
      icon: Shield,
      title: "Bảo hành chính hãng",
      description: "Tất cả sản phẩm đều có bảo hành chính hãng từ nhà sản xuất",
    },
    {
      icon: Award,
      title: "Chất lượng cao",
      description: "Sản phẩm được kiểm định chất lượng nghiêm ngặt",
    },
    {
      icon: Users,
      title: "Tư vấn chuyên nghiệp",
      description: "Đội ngũ kỹ thuật viên giàu kinh nghiệm",
    },
    {
      icon: Clock,
      title: "Giao hàng nhanh",
      description: "Giao hàng trong 24h cho đơn hàng nội thành",
    },
  ];

  const testimonials = [
    {
      name: "Anh Minh",
      role: "Chủ xe Honda",
      content:
        "Dịch vụ bảo dưỡng rất chuyên nghiệp, xe chạy mượt hơn nhiều sau khi thay dầu nhớt.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Chị Lan",
      role: "Người dùng xe đạp",
      content:
        "Xe đạp Giant chất lượng tốt, nhân viên tư vấn nhiệt tình và chuyên nghiệp.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Anh Tuấn",
      role: "Tay đua nghiệp dư",
      content:
        "Mũ bảo hiểm Shoei rất an toàn và thoải mái, đáng đồng tiền bát gạo.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header navItems={navItems} />

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
                <Car className="w-4 h-4 mr-2" />
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
                  src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                  <Car className="w-4 h-4 text-white" />
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
                  <Bike className="w-3 h-3 text-white" />
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
                  <Wrench className="w-3 h-3 text-white" />
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
                <Car className="w-8 h-8 text-red-500" />
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
                <Bike className="w-6 h-6 text-orange-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Khách hàng hài lòng" },
              { number: "50+", label: "Thương hiệu nổi tiếng" },
              { number: "100%", label: "Sản phẩm chính hãng" },
              { number: "24/7", label: "Hỗ trợ khách hàng" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Category Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Danh mục sản phẩm
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các danh mục sản phẩm đa dạng từ xe máy, xe đạp đến phụ
              kiện và dầu nhớt chất lượng cao
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Khám phá bộ sưu tập {category.name.toLowerCase()} chất lượng
                    cao với giá cả hợp lý
                  </p>
                  <div className="flex items-center text-red-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Xem sản phẩm
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm xe cộ và phụ kiện được yêu thích nhất với chất
              lượng vượt trội
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500 border border-gray-200"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} theme="vehicles" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch
              vụ tốt nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những phản hồi chân thực từ khách hàng đã tin tưởng và sử dụng
              dịch vụ của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Service Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dịch vụ bảo hành & bảo dưỡng
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Chúng tôi cung cấp dịch vụ bảo hành và bảo dưỡng chuyên nghiệp
                với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị
                hiện đại.
              </p>
              <div className="space-y-4">
                {[
                  "Bảo hành chính hãng từ nhà sản xuất",
                  "Dịch vụ bảo dưỡng định kỳ",
                  "Thay thế phụ tùng chính hãng",
                  "Tư vấn kỹ thuật miễn phí",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Service Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-red-500 to-orange-500"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Đăng ký nhận thông tin
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và lời khuyên
              bảo dưỡng xe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-500 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Đăng ký
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HomeVehicles;
