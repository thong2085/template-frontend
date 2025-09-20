import { motion } from "framer-motion";

// Demo component để test hình ảnh
export default function ImageDemo() {
  const imageSets = {
    minimal: [
      {
        name: "Fashion Store",
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Minimal Fashion Store",
      },
      {
        name: "White Shirt",
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Minimal White Shirt",
      },
      {
        name: "Jeans",
        url: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Slim Fit Jeans",
      },
      {
        name: "Bomber Jacket",
        url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Bomber Jacket",
      },
      {
        name: "Sneakers",
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "White Sneakers",
      },
    ],
    premium: [
      {
        name: "Tech Store",
        url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Premium Technology Store",
      },
      {
        name: "iPhone",
        url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "iPhone 15 Pro Max",
      },
      {
        name: "MacBook",
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "MacBook Pro",
      },
      {
        name: "AirPods",
        url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "AirPods Pro",
      },
      {
        name: "Apple Watch",
        url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Apple Watch Ultra",
      },
    ],
    lifestyle: [
      {
        name: "Organic Store",
        url: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Healthy Lifestyle Store",
      },
      {
        name: "Organic Vegetables",
        url: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Fresh Organic Vegetables",
      },
      {
        name: "Baby Formula",
        url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Baby Formula",
      },
      {
        name: "Yoga Mat",
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Premium Yoga Mat",
      },
      {
        name: "Pet Food",
        url: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Organic Pet Food",
      },
      {
        name: "Dried Fruits",
        url: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Dried Fruits",
      },
      {
        name: "Baby Clothes",
        url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Cotton Baby Clothes",
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Image Demo - Template Images
        </h1>

        {Object.entries(imageSets).map(([theme, images]) => (
          <motion.div
            key={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 capitalize text-center">
              {theme} Theme Images
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gray-200 flex items-center justify-center text-2xl"
                      style={{ display: "none" }}
                    >
                      {theme === "minimal"
                        ? "👔"
                        : theme === "premium"
                        ? "📱"
                        : "🌱"}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-gray-800">
                      {image.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-lg font-bold mb-4">Image Sources:</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              • <strong>Minimal:</strong> Fashion and clothing images from
              Unsplash
            </li>
            <li>
              • <strong>Premium:</strong> Technology and electronics images from
              Unsplash
            </li>
            <li>
              • <strong>Lifestyle:</strong> Organic, health, and lifestyle
              images from Unsplash
            </li>
            <li>
              • All images are optimized for web with proper sizing and
              compression
            </li>
            <li>
              • Fallback icons are provided for each theme when images fail to
              load
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
