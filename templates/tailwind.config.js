/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        minimalHeading: ["Playfair Display", "serif"],
        minimalBody: ["Inter", "sans-serif"],

        premiumHeading: ["Poppins", "sans-serif"],
        premiumBody: ["Lato", "sans-serif"],

        lifestyleHeading: ["Baloo 2", "cursive"],
        lifestyleBody: ["Nunito", "sans-serif"],
      },
      colors: {
        minimal: {
          bg: "#FFFFFF",
          text: "#111111",
          accent: "#A3C9A8",
          muted: "#F5F5F5",
          hover: "#8BB38E",
          border: "#E5E5E5",
        },
        premium: {
          bg: "#0A0A0A",
          text: "#FFFFFF",
          accent: "#FFD700",
          muted: "#1A1A1A",
          hover: "#FFED4E",
          border: "#333333",
          gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        },
        lifestyle: {
          bg: "#FFFFFF",
          text: "#333333",
          green: "#4CAF50",
          pink: "#F8BBD0",
          orange: "#FF9800",
          blue: "#2196F3",
          muted: "#F8F9FA",
          hover: "#45A049",
          border: "#E0E0E0",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
