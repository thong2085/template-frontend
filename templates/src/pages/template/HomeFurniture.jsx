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
  Home,
  Bed,
  ChefHat,
  Palette,
} from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomeFurniture() {
  const [activeCategory, setActiveCategory] = useState("all");

  const navItems = [
    { label: "Phòng khách", href: "#" },
    { label: "Phòng ngủ", href: "#" },
    { label: "Nhà bếp", href: "#" },
    { label: "Trang trí", href: "#" },
  ];

  const categories = [
    {
      id: "all",
      name: "Tất cả",
      icon: Sparkles,
      color: "bg-gradient-to-r from-amber-400 to-orange-600",
    },
    { id: "living", name: "Phòng khách", icon: Home, color: "bg-amber-500" },
    { id: "bedroom", name: "Phòng ngủ", icon: Bed, color: "bg-orange-500" },
    { id: "kitchen", name: "Nhà bếp", icon: ChefHat, color: "bg-red-500" },
    { id: "decor", name: "Trang trí", icon: Palette, color: "bg-pink-500" },
  ];

  const furnitureProducts = [
    {
      id: 1,
      name: "Sofa 3 chỗ ngồi hiện đại",
      price: "8.999.000đ",
      originalPrice: "12.999.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 31,
      category: "living",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Premium Leather", "Modern Design", "Comfortable", "Durable"],
      nutrition: "Premium Leather, Solid Wood Frame",
    },
    {
      id: 2,
      name: "Giường ngủ gỗ tự nhiên",
      price: "5.999.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: false,
      category: "bedroom",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Natural Wood", "Eco-friendly", "Sturdy", "Elegant"],
      nutrition: "Solid Oak Wood, Natural Finish",
    },
    {
      id: 3,
      name: "Bàn ăn 6 người",
      price: "3.999.000đ",
      originalPrice: "5.999.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: true,
      discount: 33,
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Spacious", "Easy Clean", "Modern", "Family Size"],
      nutrition: "Tempered Glass, Steel Frame",
    },
    {
      id: 4,
      name: "Tranh trang trí nghệ thuật",
      price: "899.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      category: "decor",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Handmade", "Unique Design", "High Quality", "Artistic"],
      nutrition: "Canvas, Acrylic Paint, Wood Frame",
    },
    {
      id: 5,
      name: "Tủ quần áo 4 cánh",
      price: "4.999.000đ",
      rating: 4.8,
      reviews: 1789,
      isNew: false,
      category: "bedroom",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["Spacious", "Organized", "Modern", "Durable"],
      nutrition: "MDF Board, Melamine Coating",
    },
    {
      id: 6,
      name: "Đèn trang trí LED",
      price: "599.000đ",
      rating: 4.6,
      reviews: 945,
      isNew: false,
      category: "decor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: ["LED Technology", "Energy Saving", "Modern", "Adjustable"],
      nutrition: "LED Bulbs, Metal Body, Glass Shade",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? furnitureProducts
      : furnitureProducts.filter(
          (product) => product.category === activeCategory
        );

  const roomShowcases = [
    {
      id: 1,
      name: "Phòng khách hiện đại",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Modern",
      items: ["Sofa", "Coffee Table", "TV Stand"],
    },
    {
      id: 2,
      name: "Phòng ngủ sang trọng",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Luxury",
      items: ["Bed", "Wardrobe", "Nightstand"],
    },
    {
      id: 3,
      name: "Nhà bếp tiện nghi",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Functional",
      items: ["Dining Table", "Chairs", "Storage"],
    },
  ];

  const lookbookIdeas = [
    {
      id: 1,
      title: "Phong cách Scandinavian",
      description: "Tối giản, sáng sủa với gỗ tự nhiên và màu trắng",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Sofa trắng", "Bàn gỗ", "Thảm trắng"],
    },
    {
      id: 2,
      title: "Phong cách Industrial",
      description: "Thô mộc, mạnh mẽ với kim loại và gỗ thô",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Sofa da", "Bàn kim loại", "Đèn thô"],
    },
    {
      id: 3,
      title: "Phong cách Bohemian",
      description: "Tự do, màu sắc với họa tiết và chất liệu tự nhiên",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Thảm họa tiết", "Gối màu", "Cây xanh"],
    },
  ];

  const features = [
    { icon: Shield, title: "Bảo hành 2 năm", desc: "Cam kết chất lượng" },
    { icon: Truck, title: "Lắp đặt miễn phí", desc: "Tại nhà trong 24h" },
    { icon: RotateCcw, title: "Đổi trả 30 ngày", desc: "Không cần lý do" },
    { icon: Zap, title: "Tư vấn thiết kế", desc: "Miễn phí 24/7" },
  ];

  const stats = [
    { icon: Users, value: "25K+", label: "Khách hàng hài lòng" },
    { icon: Award, value: "4.8", label: "Đánh giá trung bình" },
    { icon: Star, value: "98%", label: "Sản phẩm chất lượng" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Header theme="furniture" title="Furniture Store" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
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
                className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-600 text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Không gian phòng mẫu
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Nội thất
                <span className="text-amber-500 block">sang trọng</span>
                cho ngôi nhà
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Khám phá bộ sưu tập nội thất cao cấp, trang trí nhà đẹp với
                thiết kế hiện đại và chất lượng vượt trội.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center group transition-all duration-200"
                >
                  Khám phá ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
                >
                  Xem phòng mẫu
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Furniture Showroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent"></div>

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
                  className="absolute top-8 right-8 w-6 h-6 bg-amber-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-sm">🛋️</div>
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
                  <div className="text-xs">🛏️</div>
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
                  className="absolute top-1/2 right-4 w-4 h-4 bg-red-400/60 rounded-full flex items-center justify-center"
                >
                  <div className="text-xs">🍽️</div>
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200/50 rounded-full flex items-center justify-center"
              >
                <div className="text-2xl">🏠</div>
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
                <div className="text-xl">🪑</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-amber-500" />
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

      {/* Room Showcase */}
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
            <h2 className="text-4xl font-bold mb-4">Không gian phòng mẫu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá các phong cách thiết kế nội thất đẹp và hiện đại
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomShowcases.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {room.style}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    Bao gồm: {room.items.join(", ")}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Xem chi tiết
                  </motion.button>
                </div>
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
              Khám phá các danh mục nội thất theo từng phòng
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
                    : "bg-white border-2 border-gray-200 hover:border-amber-300"
                }`}
              >
                <category.icon
                  className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === category.id
                      ? "text-white"
                      : "text-amber-500"
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
              Nội thất cao cấp với thiết kế đẹp và chất lượng vượt trội
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
                <ProductCard theme="furniture" product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lookbook Section */}
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
            <h2 className="text-4xl font-bold mb-4">Gợi ý trang trí</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Các phong cách thiết kế nội thất phổ biến và xu hướng mới nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lookbookIdeas.map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    Bao gồm: {idea.items.join(", ")}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Xem phong cách
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer theme="furniture" />
    </div>
  );
}
