import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Sparkles,
  Crown,
  Leaf,
  ArrowRight,
  Image,
} from "lucide-react";
import HomeMinimal from "./pages/template/HomeMinimal";
import HomePremium from "./pages/template/HomePremium";
import HomeLifestyle from "./pages/template/HomeLifestyle";
import HomeSkincare from "./pages/template/HomeSkincare";
import HomeSupermarket from "./pages/template/HomeSupermarket";
import HomeFurniture from "./pages/template/HomeFurniture";
import HomeBooks from "./pages/template/HomeBooks";
import HomeVehicles from "./pages/template/HomeVehicles";
import HomeFlowers from "./pages/template/HomeFlowers";
import HomeSports from "./pages/template/HomeSports";
import HomePets from "./pages/template/HomePets";
import HomeBaby from "./pages/template/HomeBaby";
import HomeConstruction from "./pages/template/HomeConstruction";
import ImageDemo from "./components/ImageDemo";

export default function App() {
  const [theme, setTheme] = useState("fashion");
  const [showImageDemo, setShowImageDemo] = useState(false);

  const themes = [
    {
      id: "fashion",
      name: "Thời trang",
      description: "Thời trang tối giản, thanh lịch",
      icon: Sparkles,
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
    },
    {
      id: "technology",
      name: "Công nghệ",
      description: "Công nghệ cao cấp, sang trọng",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      id: "health",
      name: "Sức khỏe",
      description: "Lối sống lành mạnh, organic",
      icon: Leaf,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
    },
    {
      id: "skincare",
      name: "Mỹ phẩm",
      description: "Mỹ phẩm & Skincare cao cấp",
      icon: Sparkles,
      color: "from-pink-400 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
    },
    {
      id: "supermarket",
      name: "Siêu thị",
      description: "Siêu thị mini & tạp hóa",
      icon: Sparkles,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      id: "furniture",
      name: "Nội thất",
      description: "Nội thất & trang trí nhà",
      icon: Sparkles,
      color: "from-amber-400 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      id: "books",
      name: "Sách",
      description: "Sách & văn phòng phẩm",
      icon: Sparkles,
      color: "from-indigo-400 to-purple-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      id: "vehicles",
      name: "Xe cộ",
      description: "Xe cộ & phụ kiện",
      icon: Sparkles,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      id: "flowers",
      name: "Hoa & Quà",
      description: "Hoa tươi & quà tặng",
      icon: Sparkles,
      color: "from-emerald-400 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
    },
    {
      id: "sports",
      name: "Thể thao",
      description: "Thể thao & dụng cụ",
      icon: Sparkles,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      id: "pets",
      name: "Thú cưng",
      description: "Thú cưng & phụ kiện",
      icon: Sparkles,
      color: "from-green-400 to-blue-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      id: "baby",
      name: "Mẹ & Bé",
      description: "Đồ dùng cho mẹ và bé",
      icon: Sparkles,
      color: "from-pink-400 to-purple-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
    },
    {
      id: "construction",
      name: "Xây dựng",
      description: "Vật liệu xây dựng & nội thất thô",
      icon: Sparkles,
      color: "from-orange-400 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ];

  const currentTheme = themes.find((t) => t.id === theme);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Theme Selector */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex items-center justify-between py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${currentTheme.color}`}
              >
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  Template Showcase
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                  Demo các template website bán hàng
                </p>
              </div>
            </motion.div>

            {/* Current Theme Display - Mobile */}
            <div className="sm:hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-2 rounded-lg bg-gradient-to-r ${currentTheme.color} text-white shadow-lg`}
              >
                <div className="flex items-center space-x-2">
                  <currentTheme.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {currentTheme.name}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="border-t border-gray-100 pt-4 pb-4">
            {/* Desktop Navigation */}
            <div className="hidden sm:block">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {themes.map((themeOption) => (
                  <motion.button
                    key={themeOption.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTheme(themeOption.id)}
                    className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                      theme === themeOption.id
                        ? `bg-gradient-to-r ${themeOption.color} text-white shadow-lg`
                        : `bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50`
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <themeOption.icon className="w-4 h-4" />
                      <span>{themeOption.name}</span>
                    </div>

                    {theme === themeOption.id && (
                      <motion.div
                        layoutId="activeTheme"
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation - Scrollable */}
            <div className="sm:hidden">
              <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
                {themes.map((themeOption) => (
                  <motion.button
                    key={themeOption.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTheme(themeOption.id)}
                    className={`relative flex-shrink-0 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                      theme === themeOption.id
                        ? `bg-gradient-to-r ${themeOption.color} text-white shadow-lg`
                        : `bg-white border border-gray-200 text-gray-700 hover:border-gray-300`
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <themeOption.icon className="w-4 h-4" />
                      <span>{themeOption.name}</span>
                    </div>

                    {theme === themeOption.id && (
                      <motion.div
                        layoutId="activeThemeMobile"
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Theme Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`${currentTheme.bgColor} border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${currentTheme.color}`}
              >
                <currentTheme.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className={`text-lg font-bold ${currentTheme.textColor}`}>
                  {currentTheme.name} Template
                </h2>
                <p className="text-gray-600">{currentTheme.description}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${currentTheme.color} text-white font-medium transition-all duration-200`}
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Template Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={showImageDemo ? "image-demo" : theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {showImageDemo ? (
            <ImageDemo />
          ) : (
            <>
              {theme === "fashion" && <HomeMinimal />}
              {theme === "technology" && <HomePremium />}
              {theme === "health" && <HomeLifestyle />}
              {theme === "skincare" && <HomeSkincare />}
              {theme === "supermarket" && <HomeSupermarket />}
              {theme === "furniture" && <HomeFurniture />}
              {theme === "books" && <HomeBooks />}
              {theme === "vehicles" && <HomeVehicles />}
              {theme === "flowers" && <HomeFlowers />}
              {theme === "sports" && <HomeSports />}
              {theme === "pets" && <HomePets />}
              {theme === "baby" && <HomeBaby />}
              {theme === "construction" && <HomeConstruction />}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gray-900 text-white py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold mb-2">Template Website Bán Hàng</h3>
          <p className="text-gray-400 mb-4">
            Bộ sưu tập 3 template hiện đại cho các lĩnh vực bán hàng khác nhau
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>• Responsive Design</span>
            <span>• Modern UI/UX</span>
            <span>• Smooth Animations</span>
            <span>• SEO Optimized</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
