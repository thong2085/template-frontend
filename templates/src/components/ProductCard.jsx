import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";

// Helper functions for default images and icons
const getDefaultImage = (theme) => {
  switch (theme) {
    case "minimal":
      return "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
    case "premium":
      return "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
    case "lifestyle":
      return "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
    default:
      return "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
  }
};

const getDefaultIcon = (theme) => {
  switch (theme) {
    case "minimal":
      return "👔";
    case "premium":
      return "📱";
    case "lifestyle":
      return "🌱";
    default:
      return "📦";
  }
};

export default function ProductCard({
  theme,
  product = {
    id: 1,
    name: "Sản phẩm demo",
    price: "299.000đ",
    originalPrice: "399.000đ",
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 128,
    isNew: true,
    discount: 25,
  },
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getThemeClasses = () => {
    switch (theme) {
      case "minimal":
        return {
          container:
            "bg-white border border-minimal-border hover:border-minimal-accent",
          title: "font-minimalHeading text-lg text-minimal-text",
          price: "text-minimal-text",
          originalPrice: "text-gray-400 line-through",
          button: "bg-minimal-accent hover:bg-minimal-hover text-white",
          badge: "bg-minimal-accent text-white",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "premium":
        return {
          container:
            "bg-premium-muted border border-premium-border hover:border-premium-accent",
          title: "font-premiumHeading text-lg text-premium-text",
          price: "text-premium-accent",
          originalPrice: "text-gray-400 line-through",
          button: "bg-premium-accent hover:bg-premium-hover text-black",
          badge: "bg-premium-accent text-black",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "lifestyle":
        return {
          container:
            "bg-gradient-to-br from-white to-lifestyle-muted border border-lifestyle-border hover:border-lifestyle-green hover:shadow-xl hover:shadow-lifestyle-green/20",
          title: "font-lifestyleHeading text-lg text-lifestyle-text",
          price: "text-lifestyle-green font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-lifestyle-green to-lifestyle-blue hover:from-lifestyle-hover hover:to-lifestyle-blue text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-lifestyle-green to-lifestyle-blue text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "skincare":
        return {
          container:
            "bg-gradient-to-br from-white to-pink-50 border border-pink-200 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-pink-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "supermarket":
        return {
          container:
            "bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-blue-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "furniture":
        return {
          container:
            "bg-gradient-to-br from-white to-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-amber-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "books":
        return {
          container:
            "bg-gradient-to-br from-white to-indigo-50 border border-indigo-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-indigo-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "vehicles":
        return {
          container:
            "bg-gradient-to-br from-white to-red-50 border border-red-200 hover:border-red-400 hover:shadow-xl hover:shadow-red-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-red-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "flowers":
        return {
          container:
            "bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-emerald-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "pets":
        return {
          container:
            "bg-gradient-to-br from-white to-green-50 border border-green-200 hover:border-green-400 hover:shadow-xl hover:shadow-green-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-green-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "sports":
        return {
          container:
            "bg-gradient-to-br from-white to-orange-50 border border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-orange-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "construction":
        return {
          container:
            "bg-gradient-to-br from-white to-orange-50 border border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-orange-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      case "baby":
        return {
          container:
            "bg-gradient-to-br from-white to-pink-50 border border-pink-200 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/30",
          title: "font-semibold text-lg text-gray-900",
          price: "text-pink-500 font-bold",
          originalPrice: "text-gray-400 line-through",
          button:
            "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg",
          badge:
            "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md",
          heart: isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500",
        };
      default:
        return {};
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
        themeClasses.container
      } ${
        theme === "lifestyle"
          ? "hover:shadow-2xl hover:shadow-lifestyle-green/30"
          : ""
      }`}
    >
      {/* Lifestyle floating elements */}
      {theme === "lifestyle" && (
        <>
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-2 right-2 w-3 h-3 bg-lifestyle-green/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            animate={{
              y: [5, -5, 5],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-2 left-2 w-2 h-2 bg-lifestyle-pink/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            animate={{
              y: [-3, 3, -3],
              x: [-2, 2, -2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-1 w-1.5 h-1.5 bg-lifestyle-orange/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </>
      )}
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <motion.div
          className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={product.image || getDefaultImage(theme)}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="text-4xl absolute inset-0 flex items-center justify-center bg-gray-100"
            style={{ display: "none" }}
          >
            {getDefaultIcon(theme)}
          </div>
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`px-2 py-1 text-xs font-semibold rounded-full ${themeClasses.badge}`}
            >
              Mới
            </motion.span>
          )}
          {product.discount && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white"
            >
              -{product.discount}%
            </motion.span>
          )}
          {/* Lifestyle specific badges */}
          {theme === "lifestyle" && product.category === "organic" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-lifestyle-green text-white flex items-center gap-1"
            >
              🌱 Organic
            </motion.span>
          )}
          {theme === "lifestyle" && product.category === "baby" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-lifestyle-pink text-white flex items-center gap-1"
            >
              👶 Baby Safe
            </motion.span>
          )}
          {theme === "lifestyle" && product.category === "sports" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-lifestyle-orange text-white flex items-center gap-1"
            >
              💪 Fitness
            </motion.span>
          )}
          {theme === "lifestyle" && product.category === "pet" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-lifestyle-blue text-white flex items-center gap-1"
            >
              🐕 Pet Friendly
            </motion.span>
          )}
          {/* Skincare specific badges */}
          {theme === "skincare" && product.category === "skincare" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-500 text-white flex items-center gap-1"
            >
              💆‍♀️ Skincare
            </motion.span>
          )}
          {theme === "skincare" && product.category === "makeup" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-rose-500 text-white flex items-center gap-1"
            >
              💄 Makeup
            </motion.span>
          )}
          {theme === "skincare" && product.category === "perfume" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500 text-white flex items-center gap-1"
            >
              🌸 Perfume
            </motion.span>
          )}
          {/* Supermarket specific badges */}
          {theme === "supermarket" && product.category === "vegetables" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white flex items-center gap-1"
            >
              🥬 Fresh
            </motion.span>
          )}
          {theme === "supermarket" && product.category === "meat" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white flex items-center gap-1"
            >
              🥩 Premium
            </motion.span>
          )}
          {theme === "supermarket" && product.category === "snacks" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-white flex items-center gap-1"
            >
              🍿 Snack
            </motion.span>
          )}
          {theme === "supermarket" && product.category === "beverages" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              🥤 Drink
            </motion.span>
          )}
          {/* Furniture specific badges */}
          {theme === "furniture" && product.category === "living" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-500 text-white flex items-center gap-1"
            >
              🛋️ Living
            </motion.span>
          )}
          {theme === "furniture" && product.category === "bedroom" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white flex items-center gap-1"
            >
              🛏️ Bedroom
            </motion.span>
          )}
          {theme === "furniture" && product.category === "kitchen" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white flex items-center gap-1"
            >
              🍽️ Kitchen
            </motion.span>
          )}
          {theme === "furniture" && product.category === "decor" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-500 text-white flex items-center gap-1"
            >
              🎨 Decor
            </motion.span>
          )}
          {/* Books specific badges */}
          {theme === "books" && product.category === "education" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-500 text-white flex items-center gap-1"
            >
              🎓 Education
            </motion.span>
          )}
          {theme === "books" && product.category === "novel" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500 text-white flex items-center gap-1"
            >
              📖 Novel
            </motion.span>
          )}
          {theme === "books" && product.category === "skills" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              💡 Skills
            </motion.span>
          )}
          {theme === "books" && product.category === "stationery" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-500 text-white flex items-center gap-1"
            >
              ✏️ Stationery
            </motion.span>
          )}
          {/* Vehicles specific badges */}
          {theme === "vehicles" && product.category === "motorcycle" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white flex items-center gap-1"
            >
              🏍️ Motorcycle
            </motion.span>
          )}
          {theme === "vehicles" && product.category === "bicycle" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              🚲 Bicycle
            </motion.span>
          )}
          {theme === "vehicles" && product.category === "accessories" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-500 text-white flex items-center gap-1"
            >
              🔧 Accessories
            </motion.span>
          )}
          {theme === "vehicles" && product.category === "oil" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-white flex items-center gap-1"
            >
              🛢️ Oil
            </motion.span>
          )}
          {/* Flowers specific badges */}
          {theme === "flowers" && product.category === "flowers" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-500 text-white flex items-center gap-1"
            >
              🌸 Fresh
            </motion.span>
          )}
          {theme === "flowers" && product.category === "birthday" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-500 text-white flex items-center gap-1"
            >
              🎁 Birthday
            </motion.span>
          )}
          {theme === "flowers" && product.category === "wedding" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white flex items-center gap-1"
            >
              💒 Wedding
            </motion.span>
          )}
          {theme === "flowers" && product.category === "occasion" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500 text-white flex items-center gap-1"
            >
              🎉 Special
            </motion.span>
          )}

          {/* Pet badges */}
          {theme === "pets" && product.category === "dog" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white flex items-center gap-1"
            >
              🐕 Dog
            </motion.span>
          )}
          {theme === "pets" && product.category === "cat" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              🐱 Cat
            </motion.span>
          )}
          {theme === "pets" && product.category === "food" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-white flex items-center gap-1"
            >
              🍖 Food
            </motion.span>
          )}
          {theme === "pets" && product.category === "accessories" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500 text-white flex items-center gap-1"
            >
              🎾 Accessories
            </motion.span>
          )}

          {/* Sports badges */}
          {theme === "sports" && product.category === "gym" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white flex items-center gap-1"
            >
              💪 Gym
            </motion.span>
          )}
          {theme === "sports" && product.category === "yoga" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500 text-white flex items-center gap-1"
            >
              🧘 Yoga
            </motion.span>
          )}
          {theme === "sports" && product.category === "football" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white flex items-center gap-1"
            >
              ⚽ Football
            </motion.span>
          )}
          {theme === "sports" && product.category === "badminton" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              🏸 Badminton
            </motion.span>
          )}

          {/* Construction badges */}
          {theme === "construction" && product.category === "cement" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-600 text-white flex items-center gap-1"
            >
              🏗️ Xi măng
            </motion.span>
          )}
          {theme === "construction" && product.category === "steel" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-800 text-white flex items-center gap-1"
            >
              🔩 Sắt thép
            </motion.span>
          )}
          {theme === "construction" && product.category === "brick" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-red-600 text-white flex items-center gap-1"
            >
              🧱 Gạch
            </motion.span>
          )}
          {theme === "construction" && product.category === "paint" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              🎨 Sơn
            </motion.span>
          )}
          {theme === "construction" && product.category === "tools" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-600 text-white flex items-center gap-1"
            >
              🔧 Dụng cụ
            </motion.span>
          )}

          {/* Baby badges */}
          {theme === "baby" && product.category === "clothes" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-500 text-white flex items-center gap-1"
            >
              👶 Quần áo
            </motion.span>
          )}
          {theme === "baby" && product.category === "supplies" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-500 text-white flex items-center gap-1"
            >
              🍼 Đồ dùng
            </motion.span>
          )}
          {theme === "baby" && product.category === "milk" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white flex items-center gap-1"
            >
              🥛 Sữa & Bỉm
            </motion.span>
          )}
          {theme === "baby" && product.category === "toys" && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-white flex items-center gap-1"
            >
              🧸 Đồ chơi
            </motion.span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm ${themeClasses.heart} transition-colors duration-200`}
          >
            <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <Eye size={16} />
          </motion.button>
        </div>

        {/* Quick Add Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 50,
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute bottom-3 left-3 right-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
              themeClasses.button
            } flex items-center justify-center gap-2 ${
              theme === "lifestyle" ? "shadow-lg shadow-lifestyle-green/30" : ""
            }`}
          >
            <ShoppingCart size={16} />
            Thêm vào giỏ
          </motion.button>
        </motion.div>

        {/* Lifestyle special effects */}
        {theme === "lifestyle" && (
          <>
            {/* Glow effect on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lifestyle-green/10 to-lifestyle-blue/10 pointer-events-none"
            />

            {/* Pulse effect for organic products */}
            {product.category === "organic" && (
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl bg-lifestyle-green/20 pointer-events-none"
              />
            )}
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className={`${themeClasses.title} mb-2 line-clamp-2`}>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-lg font-bold ${themeClasses.price}`}>
            {product.price}
          </span>
          {product.originalPrice && (
            <span className={`text-sm ${themeClasses.originalPrice}`}>
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Lifestyle specific info */}
        {theme === "lifestyle" && (
          <div className="mb-3">
            {/* Health benefits */}
            {product.category === "organic" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-lifestyle-green font-medium flex items-center gap-1">
                  <span>💚</span> 100% Natural
                </span>
                <span className="text-xs text-lifestyle-green font-medium flex items-center gap-1">
                  <span>🌿</span> No Pesticides
                </span>
              </div>
            )}
            {product.category === "baby" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-lifestyle-pink font-medium flex items-center gap-1">
                  <span>👶</span> Safe for Babies
                </span>
                <span className="text-xs text-lifestyle-pink font-medium flex items-center gap-1">
                  <span>🧸</span> Hypoallergenic
                </span>
              </div>
            )}
            {product.category === "sports" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-lifestyle-orange font-medium flex items-center gap-1">
                  <span>💪</span> Premium Quality
                </span>
                <span className="text-xs text-lifestyle-orange font-medium flex items-center gap-1">
                  <span>🏃‍♀️</span> Durable
                </span>
              </div>
            )}
            {product.category === "pet" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-lifestyle-blue font-medium flex items-center gap-1">
                  <span>🐕</span> Pet Approved
                </span>
                <span className="text-xs text-lifestyle-blue font-medium flex items-center gap-1">
                  <span>🌱</span> Organic
                </span>
              </div>
            )}
          </div>
        )}

        {/* Skincare specific info */}
        {theme === "skincare" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "skincare" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>✨</span> Brightening
                </span>
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>💧</span> Hydrating
                </span>
              </div>
            )}
            {product.category === "makeup" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-rose-500 font-medium flex items-center gap-1">
                  <span>💄</span> Long-lasting
                </span>
                <span className="text-xs text-rose-500 font-medium flex items-center gap-1">
                  <span>✨</span> Pigmented
                </span>
              </div>
            )}
            {product.category === "perfume" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>🌸</span> Luxury Scent
                </span>
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>⏰</span> Long-lasting
                </span>
              </div>
            )}
          </div>
        )}

        {/* Supermarket specific info */}
        {theme === "supermarket" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "vegetables" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span>🥬</span> Fresh Daily
                </span>
                <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span>🌱</span> Organic
                </span>
              </div>
            )}
            {product.category === "meat" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>🥩</span> Premium
                </span>
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>🏪</span> Local Source
                </span>
              </div>
            )}
            {product.category === "snacks" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🍿</span> Crunchy
                </span>
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🌿</span> Natural
                </span>
              </div>
            )}
            {product.category === "beverages" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🥤</span> 100% Natural
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>💧</span> Fresh
                </span>
              </div>
            )}
          </div>
        )}

        {/* Furniture specific info */}
        {theme === "furniture" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "living" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-amber-500 font-medium flex items-center gap-1">
                  <span>🛋️</span> Comfortable
                </span>
                <span className="text-xs text-amber-500 font-medium flex items-center gap-1">
                  <span>✨</span> Modern
                </span>
              </div>
            )}
            {product.category === "bedroom" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-orange-500 font-medium flex items-center gap-1">
                  <span>🛏️</span> Cozy
                </span>
                <span className="text-xs text-orange-500 font-medium flex items-center gap-1">
                  <span>🌿</span> Natural
                </span>
              </div>
            )}
            {product.category === "kitchen" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>🍽️</span> Functional
                </span>
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>💪</span> Durable
                </span>
              </div>
            )}
            {product.category === "decor" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>🎨</span> Artistic
                </span>
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>✨</span> Unique
                </span>
              </div>
            )}
          </div>
        )}

        {/* Books specific info */}
        {theme === "books" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "education" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-indigo-500 font-medium flex items-center gap-1">
                  <span>🎓</span> Educational
                </span>
                <span className="text-xs text-indigo-500 font-medium flex items-center gap-1">
                  <span>📚</span> Comprehensive
                </span>
              </div>
            )}
            {product.category === "novel" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>📖</span> Literature
                </span>
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>✨</span> Classic
                </span>
              </div>
            )}
            {product.category === "skills" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>💡</span> Self-help
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🚀</span> Practical
                </span>
              </div>
            )}
            {product.category === "stationery" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>✏️</span> Premium
                </span>
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>💎</span> Quality
                </span>
              </div>
            )}
          </div>
        )}

        {/* Vehicles specific info */}
        {theme === "vehicles" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "motorcycle" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>🏍️</span> Powerful
                </span>
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>⚡</span> Efficient
                </span>
              </div>
            )}
            {product.category === "bicycle" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🚲</span> Eco-friendly
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>💪</span> Healthy
                </span>
              </div>
            )}
            {product.category === "accessories" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                  <span>🔧</span> Protective
                </span>
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                  <span>🛡️</span> Safe
                </span>
              </div>
            )}
            {product.category === "oil" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🛢️</span> High Performance
                </span>
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🔧</span> Engine Care
                </span>
              </div>
            )}
          </div>
        )}

        {/* Flowers specific info */}
        {theme === "flowers" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "flowers" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                  <span>🌸</span> Fresh
                </span>
                <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                  <span>💚</span> Natural
                </span>
              </div>
            )}
            {product.category === "birthday" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>🎁</span> Perfect Gift
                </span>
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>🎉</span> Celebratory
                </span>
              </div>
            )}
            {product.category === "wedding" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>💒</span> Elegant
                </span>
                <span className="text-xs text-red-500 font-medium flex items-center gap-1">
                  <span>💕</span> Romantic
                </span>
              </div>
            )}
            {product.category === "occasion" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>🎉</span> Special
                </span>
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>✨</span> Unique
                </span>
              </div>
            )}
          </div>
        )}

        {/* Nutrition/Ingredients info for lifestyle */}
        {theme === "lifestyle" && product.nutrition && (
          <div className="mb-3 p-2 bg-lifestyle-muted rounded-lg">
            <div className="text-xs text-lifestyle-text font-medium mb-1">
              {product.category === "organic" || product.category === "pet"
                ? "Thành phần:"
                : "Chất liệu:"}
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Ingredients info for skincare */}
        {theme === "skincare" && product.nutrition && (
          <div className="mb-3 p-2 bg-pink-50 rounded-lg">
            <div className="text-xs text-pink-600 font-medium mb-1">
              Thành phần chính:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Nutrition info for supermarket */}
        {theme === "supermarket" && product.nutrition && (
          <div className="mb-3 p-2 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-600 font-medium mb-1">
              Giá trị dinh dưỡng:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Materials info for furniture */}
        {theme === "furniture" && product.nutrition && (
          <div className="mb-3 p-2 bg-amber-50 rounded-lg">
            <div className="text-xs text-amber-600 font-medium mb-1">
              Chất liệu:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Content info for books */}
        {theme === "books" && product.nutrition && (
          <div className="mb-3 p-2 bg-indigo-50 rounded-lg">
            <div className="text-xs text-indigo-600 font-medium mb-1">
              Nội dung:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Specifications info for vehicles */}
        {theme === "vehicles" && product.nutrition && (
          <div className="mb-3 p-2 bg-red-50 rounded-lg">
            <div className="text-xs text-red-600 font-medium mb-1">
              Thông số kỹ thuật:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Composition info for flowers */}
        {theme === "flowers" && product.nutrition && (
          <div className="mb-3 p-2 bg-emerald-50 rounded-lg">
            <div className="text-xs text-emerald-600 font-medium mb-1">
              Thành phần:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Pet benefits */}
        {theme === "pets" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "dog" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span>🐕</span> For Dogs
                </span>
                <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span>💚</span> Safe
                </span>
              </div>
            )}
            {product.category === "cat" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🐱</span> For Cats
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>💙</span> Comfortable
                </span>
              </div>
            )}
            {product.category === "food" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🍖</span> Nutritious
                </span>
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>💛</span> Healthy
                </span>
              </div>
            )}
            {product.category === "accessories" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>🎾</span> Fun
                </span>
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>💜</span> Durable
                </span>
              </div>
            )}
          </div>
        )}

        {/* Nutrition info for pets */}
        {theme === "pets" && product.nutrition && (
          <div className="mb-3 p-2 bg-green-50 rounded-lg">
            <div className="text-xs text-green-600 font-medium mb-1">
              Thông tin sản phẩm:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Sports benefits */}
        {theme === "sports" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "gym" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-orange-500 font-medium flex items-center gap-1">
                  <span>💪</span> Strong
                </span>
                <span className="text-xs text-orange-500 font-medium flex items-center gap-1">
                  <span>🔥</span> Durable
                </span>
              </div>
            )}
            {product.category === "yoga" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>🧘</span> Flexible
                </span>
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>☮️</span> Peaceful
                </span>
              </div>
            )}
            {product.category === "football" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span>⚽</span> Fast
                </span>
                <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                  <span>🏃</span> Agile
                </span>
              </div>
            )}
            {product.category === "badminton" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🏸</span> Precise
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🎯</span> Accurate
                </span>
              </div>
            )}
          </div>
        )}

        {/* Nutrition info for sports */}
        {theme === "sports" && product.nutrition && (
          <div className="mb-3 p-2 bg-orange-50 rounded-lg">
            <div className="text-xs text-orange-600 font-medium mb-1">
              Thông số kỹ thuật:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Construction specific info */}
        {theme === "construction" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "cement" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                  <span>🏗️</span> Chất lượng cao
                </span>
                <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                  <span>💪</span> Độ bền tốt
                </span>
              </div>
            )}
            {product.category === "steel" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-800 font-medium flex items-center gap-1">
                  <span>🔩</span> Chất lượng Nhật
                </span>
                <span className="text-xs text-gray-800 font-medium flex items-center gap-1">
                  <span>🛡️</span> Chống gỉ
                </span>
              </div>
            )}
            {product.category === "brick" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                  <span>🧱</span> Chất lượng tốt
                </span>
                <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                  <span>❄️</span> Cách nhiệt
                </span>
              </div>
            )}
            {product.category === "paint" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🎨</span> Chống thấm
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>☀️</span> Chống nắng
                </span>
              </div>
            )}
            {product.category === "tools" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-yellow-600 font-medium flex items-center gap-1">
                  <span>🔧</span> Công suất cao
                </span>
                <span className="text-xs text-yellow-600 font-medium flex items-center gap-1">
                  <span>🛡️</span> An toàn
                </span>
              </div>
            )}
          </div>
        )}

        {/* Nutrition info for construction */}
        {theme === "construction" && product.nutrition && (
          <div className="mb-3 p-2 bg-orange-50 rounded-lg">
            <div className="text-xs text-orange-600 font-medium mb-1">
              Thông số kỹ thuật:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Baby specific info */}
        {theme === "baby" && (
          <div className="mb-3">
            {/* Product benefits */}
            {product.category === "clothes" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>👶</span> Mềm mại
                </span>
                <span className="text-xs text-pink-500 font-medium flex items-center gap-1">
                  <span>🌿</span> An toàn
                </span>
              </div>
            )}
            {product.category === "supplies" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>🍼</span> Tiện lợi
                </span>
                <span className="text-xs text-purple-500 font-medium flex items-center gap-1">
                  <span>💎</span> Chất lượng
                </span>
              </div>
            )}
            {product.category === "milk" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🥛</span> Dinh dưỡng
                </span>
                <span className="text-xs text-blue-500 font-medium flex items-center gap-1">
                  <span>🛡️</span> An toàn
                </span>
              </div>
            )}
            {product.category === "toys" && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🧸</span> Giáo dục
                </span>
                <span className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                  <span>🎯</span> Phát triển
                </span>
              </div>
            )}
          </div>
        )}

        {/* Nutrition info for baby */}
        {theme === "baby" && product.nutrition && (
          <div className="mb-3 p-2 bg-pink-50 rounded-lg">
            <div className="text-xs text-pink-600 font-medium mb-1">
              Thông tin sản phẩm:
            </div>
            <div className="text-xs text-gray-600">{product.nutrition}</div>
          </div>
        )}

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${themeClasses.button}`}
        >
          Mua ngay
        </motion.button>
      </div>
    </motion.div>
  );
}
