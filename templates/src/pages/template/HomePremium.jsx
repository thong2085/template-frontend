import { motion } from "framer-motion";
import {
  Crown,
  Star,
  Shield,
  Truck,
  RotateCcw,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function HomePremium() {
  const navItems = [
    { label: "Sản phẩm", href: "#" },
    { label: "Khuyến mãi", href: "#" },
    { label: "VIP", href: "#" },
    { label: "Liên hệ", href: "#" },
  ];

  const premiumProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max Titanium",
      price: "29.999.000đ",
      originalPrice: "34.999.000đ",
      rating: 4.9,
      reviews: 1247,
      isNew: true,
      discount: 14,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "MacBook Pro M3 Max",
      price: "89.999.000đ",
      rating: 4.8,
      reviews: 892,
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: "5.999.000đ",
      originalPrice: "6.999.000đ",
      rating: 4.7,
      reviews: 2156,
      isNew: false,
      discount: 14,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Apple Watch Ultra 2",
      price: "19.999.000đ",
      rating: 4.9,
      reviews: 634,
      isNew: true,
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const features = [
    { icon: Truck, title: "Miễn phí vận chuyển", desc: "Toàn quốc trong 24h" },
    { icon: Shield, title: "Bảo hành chính hãng", desc: "Lên đến 2 năm" },
    { icon: RotateCcw, title: "Đổi trả dễ dàng", desc: "Trong 30 ngày" },
    { icon: Zap, title: "Hỗ trợ 24/7", desc: "Luôn sẵn sàng" },
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "CEO TechCorp",
      content:
        "Sản phẩm chất lượng tuyệt vời, dịch vụ chuyên nghiệp. Tôi rất hài lòng!",
      rating: 5,
    },
    {
      name: "Trần Thị B",
      role: "Designer",
      content:
        "Giao hàng nhanh, sản phẩm đúng như mô tả. Sẽ quay lại mua tiếp.",
      rating: 5,
    },
    {
      name: "Lê Văn C",
      role: "Developer",
      content:
        "Hỗ trợ khách hàng rất tốt, giải đáp mọi thắc mắc một cách tận tình.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-premium-bg text-premium-text font-premiumBody min-h-screen">
      <Header theme="premium" title="Premium Shop" navItems={navItems} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-premium-bg via-premium-muted to-premium-bg"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.05)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center px-6 py-3 bg-premium-accent/20 rounded-full text-premium-accent text-sm font-medium mb-8"
              >
                <Crown className="w-5 h-5 mr-2" />
                Siêu phẩm 2025 - Độc quyền
              </motion.div>

              <h1 className="font-premiumHeading text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Công nghệ
                <span className="text-premium-accent block">cao cấp</span>
                cho cuộc sống
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Khám phá những sản phẩm công nghệ đỉnh cao với thiết kế sang
                trọng, hiệu năng vượt trội và trải nghiệm người dùng hoàn hảo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-premium-accent hover:bg-premium-hover text-black px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center group transition-all duration-200 shadow-lg shadow-premium-accent/25"
                >
                  Khám phá ngay
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-premium-accent text-premium-accent hover:bg-premium-accent hover:text-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200"
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
              <div className="aspect-square bg-gradient-to-br from-premium-muted to-premium-accent/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Premium Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-premium-accent/20 to-transparent"></div>

                {/* Floating particles */}
                <motion.div
                  animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 w-4 h-4 bg-premium-accent rounded-full"
                />
                <motion.div
                  animate={{
                    y: [20, -20, 20],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-8 w-3 h-3 bg-premium-accent/60 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [-15, 15, -15],
                    x: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-4 w-2 h-2 bg-premium-accent/40 rounded-full"
                />
              </div>

              {/* Premium badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-premium-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-3xl">👑</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-premium-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-2xl">💎</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-premium-muted/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-premiumHeading text-4xl font-bold mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cam kết mang đến trải nghiệm mua sắm cao cấp với dịch vụ tận tâm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-premium-accent/20 rounded-2xl mb-6 group-hover:bg-premium-accent/30 transition-all duration-300"
                >
                  <feature.icon className="w-10 h-10 text-premium-accent" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Premium Products */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-premium-accent/20 rounded-full text-premium-accent text-sm font-medium mb-6"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Sản phẩm cao cấp
            </motion.div>

            <h2 className="font-premiumHeading text-5xl font-bold mb-6">
              Bộ sưu tập độc quyền
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Những sản phẩm công nghệ đỉnh cao với thiết kế sang trọng và hiệu
              năng vượt trội
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard theme="premium" product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-premium-accent hover:bg-premium-hover text-black px-12 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg shadow-premium-accent/25"
            >
              Xem tất cả sản phẩm
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-premium-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-premiumHeading text-4xl font-bold mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-xl text-gray-300">
              Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của
              chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-premium-muted/50 backdrop-blur-sm rounded-2xl p-8 border border-premium-border"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-premium-accent fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-premium-accent">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-premiumHeading text-4xl font-bold mb-6">
              Sẵn sàng trải nghiệm cao cấp?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Đăng ký ngay để nhận thông tin về sản phẩm mới và ưu đãi độc quyền
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
                className="flex-1 px-6 py-4 rounded-xl border border-premium-border bg-premium-muted/50 text-premium-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-premium-accent focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-premium-accent hover:bg-premium-hover text-black px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-premium-accent/25"
              >
                Đăng ký VIP
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer theme="premium" />
    </div>
  );
}
