# 🎨 Template Website Bán Hàng

Bộ sưu tập 13 template website bán hàng hiện đại và sáng tạo cho các lĩnh vực khác nhau, được xây dựng với React và Tailwind CSS.

## ✨ Tính năng nổi bật

- 🎯 **13 Template chuyên biệt**: Thời trang, Công nghệ, Sức khỏe, Mỹ phẩm, Siêu thị, Nội thất, Sách, Xe cộ, Hoa & Quà, Thể thao, Thú cưng, Mẹ & Bé, Xây dựng
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị
- 🎭 **Smooth Animations**: Hiệu ứng mượt mà với Framer Motion
- 🎨 **Modern UI/UX**: Thiết kế hiện đại, trải nghiệm người dùng tốt
- ⚡ **Performance**: Tối ưu tốc độ tải và hiệu suất
- 🔧 **Customizable**: Dễ dàng tùy chỉnh và mở rộng

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js >= 16.0.0
- npm >= 8.0.0

### Cài đặt dependencies

```bash
npm install
```

### Chạy dự án

```bash
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem dự án trong trình duyệt.

### Build cho production

```bash
npm run build
```

## 📁 Cấu trúc dự án

```
src/
├── components/           # Các component tái sử dụng
│   ├── Header.jsx       # Header component với navigation
│   ├── Footer.jsx       # Footer component
│   └── ProductCard.jsx  # Product card component với 13 themes
├── pages/template/      # Các template chính
│   ├── HomeMinimal.jsx     # Template thời trang tối giản
│   ├── HomePremium.jsx     # Template công nghệ cao cấp
│   ├── HomeLifestyle.jsx   # Template sức khỏe & organic
│   ├── HomeSkincare.jsx    # Template mỹ phẩm & skincare
│   ├── HomeSupermarket.jsx # Template siêu thị mini & tạp hóa
│   ├── HomeFurniture.jsx   # Template nội thất & trang trí
│   ├── HomeBooks.jsx       # Template sách & văn phòng phẩm
│   ├── HomeVehicles.jsx    # Template xe cộ & phụ kiện
│   ├── HomeFlowers.jsx     # Template hoa tươi & quà tặng
│   ├── HomeSports.jsx      # Template thể thao & dụng cụ
│   ├── HomePets.jsx        # Template thú cưng & phụ kiện
│   ├── HomeBaby.jsx        # Template mẹ & bé
│   └── HomeConstruction.jsx # Template vật liệu xây dựng
├── App.js              # Component chính với theme selector
├── index.css           # Global styles và custom CSS
└── index.js            # Entry point
```

## 🎨 Các Template

### 1. Minimal Template

- **Lĩnh vực**: Thời trang tối giản
- **Đặc điểm**: Thiết kế thanh lịch, màu sắc nhẹ nhàng
- **Màu chủ đạo**: Xanh lá cây (#A3C9A8)
- **Font**: Playfair Display (heading), Inter (body)

### 2. Premium Template

- **Lĩnh vực**: Công nghệ cao cấp
- **Đặc điểm**: Thiết kế sang trọng, hiệu ứng visual ấn tượng
- **Màu chủ đạo**: Vàng gold (#FFD700) trên nền đen
- **Font**: Poppins (heading), Lato (body)

### 3. Lifestyle Template

- **Lĩnh vực**: Lối sống lành mạnh, organic
- **Đặc điểm**: Thiết kế tươi mới, tương tác cao
- **Màu chủ đạo**: Xanh lá (#4CAF50), hồng (#F8BBD0), cam (#FF9800)
- **Font**: Baloo 2 (heading), Nunito (body)

## 🛠️ Công nghệ sử dụng

- **React 19.1.1**: Framework JavaScript
- **Tailwind CSS 3.4.3**: Utility-first CSS framework
- **Framer Motion 11.0.0**: Animation library
- **Lucide React 0.400.0**: Icon library
- **React Router DOM 6.26.0**: Routing (sẵn sàng sử dụng)

## 🎯 Tính năng chính

### Component System

- **Header**: Navigation responsive với mobile menu
- **Footer**: Thông tin liên hệ và links
- **ProductCard**: Card sản phẩm với animations và interactions

### Animations & Interactions

- Smooth page transitions
- Hover effects và micro-interactions
- Scroll-triggered animations
- Loading states và transitions

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa file `tailwind.config.js` để thay đổi color palette:

```javascript
colors: {
  minimal: {
    bg: "#FFFFFF",
    text: "#111111",
    accent: "#A3C9A8",
    // ... thêm màu khác
  }
}
```

### Thêm component mới

1. Tạo file component trong thư mục `src/components/`
2. Import và sử dụng trong template tương ứng
3. Thêm styles tùy chỉnh nếu cần

### Thay đổi fonts

Cập nhật Google Fonts import trong `src/index.css` và cấu hình trong `tailwind.config.js`.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload thư mục build/ lên Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm thông tin.

## 📞 Liên hệ

Nếu có câu hỏi hoặc góp ý, vui lòng tạo issue trên GitHub hoặc liên hệ qua email.

---

**Happy Coding! 🎉**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
