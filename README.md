# ShopNext - Modern E-commerce Platform

A comprehensive, full-featured e-commerce website built with React, TypeScript, and modern web technologies. ShopNext demonstrates professional-level development practices with a complete shopping experience including product browsing, cart management, checkout process, and order confirmation.

## 🚀 Features

### Core E-commerce Functionality
- **Product Catalog**: Browse 40+ products across 4 categories (Electronics, Fashion, Home, Sports)
- **Advanced Filtering**: Filter by category, brand, price range, and ratings
- **Product Search**: Real-time search functionality
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add/remove items, quantity management, persistent state
- **Checkout Process**: Complete checkout flow with form validation
- **Order Management**: Order confirmation with PDF invoice generation

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations throughout the application
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds
- **Accessibility**: Built with accessibility best practices

### Technical Features
- **TypeScript**: Full type safety and enhanced developer experience
- **Component Architecture**: Modular, reusable React components
- **State Management**: Context API for cart and application state
- **Form Handling**: Comprehensive form validation and error handling
- **PDF Generation**: Automatic invoice generation with jsPDF
- **Image Optimization**: Optimized images from Pexels API

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type safety and enhanced development experience
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.23.6** - Smooth animations and transitions
- **Lucide React 0.344.0** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Additional Libraries
- **jsPDF 3.0.1** - PDF generation for invoices
- **html2canvas 1.4.1** - HTML to canvas conversion for PDF generation

## 📋 Prerequisites

Before running this project, make sure you have the following installed on your system:

### Required Software
1. **Node.js** (version 16.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify npm: `npm --version`
   - Or install yarn: `npm install -g yarn`

3. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 500MB free space
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

## 🚀 Installation & Setup

### Step 1: Clone the Repository
```bash
# Clone the repository
git clone https://github.com/Suryanshu-Nabheet/ShopNext.git

# Navigate to the project directory
cd shopnext
```

### Step 2: Install Dependencies
```bash
# Install all project dependencies
npm install

# Or if you prefer yarn
yarn install
```

### Step 3: Verify Installation
Check that all dependencies are installed correctly:
```bash
# Check if node_modules folder exists
ls node_modules

# Verify package.json dependencies
npm list --depth=0
```

## 🏃‍♂️ Running the Project

### Development Mode
Start the development server with hot reload:
```bash
# Start development server
npm run dev

# Or with yarn
yarn dev
```

The application will be available at:
- **Local**: http://localhost:5173
- **Network**: http://[your-ip]:5173

### Production Build
Create an optimized production build:
```bash
# Build for production
npm run build

# Or with yarn
yarn build
```

### Preview Production Build
Preview the production build locally:
```bash
# Preview production build
npm run preview

# Or with yarn
yarn preview
```

## 📁 Project Structure

```
shopnext/
├── public/                 # Static assets
│   ├── vite.svg           # Vite logo
│   └── index.html         # HTML template
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── AboutPage.tsx
│   │   ├── Cart.tsx
│   │   ├── CartCheckoutPage.tsx
│   │   ├── Categories.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Newsletter.tsx
│   │   ├── OrderConfirmation.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetailsPage.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductModal.tsx
│   │   └── ProductsPage.tsx
│   ├── context/           # React Context
│   │   └── CartContext.tsx
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript config
├── tsconfig.node.json    # Node-specific TypeScript config
├── vite.config.ts        # Vite configuration
└── README.md            # Project documentation
```

## 🎯 Usage Guide

### Navigation
1. **Home Page**: Landing page with hero section, categories, and featured products
2. **Products Page**: Complete product catalog with filtering and search
3. **Product Details**: Individual product pages with image gallery and specifications
4. **About Page**: Information about the project and developer
5. **Shopping Cart**: Slide-out cart with item management
6. **Checkout**: Complete checkout process with form validation
7. **Order Confirmation**: Order summary with PDF invoice download

### Key Features Usage

#### Shopping Cart
- Click the cart icon in the header to open/close
- Add items from product cards or product detail pages
- Adjust quantities with +/- buttons
- Remove items with the "Remove" button
- Proceed to checkout when ready

#### Product Filtering
- Use the search bar to find specific products
- Filter by category using the category buttons
- On the products page, use advanced filters:
  - Category selection
  - Brand dropdown
  - Price range slider
  - Minimum rating filter

#### Checkout Process
1. Add items to cart
2. Click "Proceed to Checkout" in cart
3. Fill out personal information
4. Enter shipping address
5. Provide payment details
6. Review order summary
7. Complete purchase

#### Order Management
- After successful checkout, view order confirmation
- Download PDF invoice
- Check order status and tracking information

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:
```env
# Example environment variables (if needed)
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=ShopNext
```

### Customization Options

#### Tailwind CSS
Modify `tailwind.config.js` to customize:
- Colors and themes
- Spacing and sizing
- Fonts and typography
- Responsive breakpoints

#### Vite Configuration
Update `vite.config.ts` for:
- Build optimizations
- Plugin configurations
- Development server settings

## 🧪 Development

### Code Quality
```bash
# Run ESLint for code quality
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

### TypeScript
```bash
# Type checking
npx tsc --noEmit

# Watch mode for type checking
npx tsc --noEmit --watch
```

### Component Development
- All components are in `src/components/`
- Use TypeScript interfaces for props
- Follow React hooks patterns
- Implement responsive design with Tailwind CSS

## 📱 Browser Support

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Mobile Support
- **iOS Safari**: 14+
- **Chrome Mobile**: 90+
- **Samsung Internet**: 14+

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# If port 5173 is busy, Vite will automatically use the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

#### Node Modules Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --showConfig

# Restart TypeScript server in VS Code
# Command Palette > "TypeScript: Restart TS Server"
```

### Performance Issues
- Ensure you have sufficient RAM (8GB recommended)
- Close unnecessary applications
- Use latest Node.js LTS version
- Clear browser cache

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit changes: `git commit -m "Add new feature"`
6. Push to branch: `git push origin feature/new-feature`
7. Create a Pull Request

### Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Write descriptive commit messages
- Add comments for complex logic
- Ensure responsive design
- Test on multiple browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Documentation

- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute to this project
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines and standards

## 👨‍💻 Developer

**Suryanshu Nabheet**
- **Role**: Full Stack Developer
- **Experience**: 4+ years at NullClass and FirstBench.ai
- **LinkedIn**: [Suryanshu Nabheet](https://www.linkedin.com/in/suryanshu-nabheet/)
- **Twitter**: [@SuryanshuXDev](https://x.com/SuryanshuXDev)
- **GitHub**: [Suryanshu-Nabheet](https://github.com/Suryanshu-Nabheet)
- **YouTube**: [Suryanshu Nabheet](https://www.youtube.com/@SuryanshuNabheet/)

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Pexels** - For high-quality stock images
- **Lucide** - For beautiful icons
- **Vite Team** - For the fast build tool

## 📞 Support

If you encounter any issues or have questions:

1. **Check the troubleshooting section** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Contact the developer** via social media links

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

*ShopNext - Where modern e-commerce meets exceptional user experience*
