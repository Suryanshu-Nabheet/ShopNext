# ShopNext Architecture Documentation

## 📁 Folder Structure

This project follows a clean, modular architecture designed for scalability and maintainability.

```
ShopNext/
├── app/                    # Core application setup
│   ├── App.tsx            # Main app component with routing logic
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
│
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components
│   │   ├── SafeImage.tsx  # Image component with fallback
│   │   ├── ProductCard.tsx # Product card component
│   │   └── index.ts       # Barrel export
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Cart.tsx           # Shopping cart sidebar
│   └── Newsletter.tsx     # Newsletter subscription
│
├── pages/                 # Page components (one folder per page)
│   ├── Home/
│   │   ├── Home.tsx       # Home page with hero, categories, products
│   │   └── index.ts       # Clean export
│   ├── Products/
│   │   ├── Products.tsx   # Products listing with filters
│   │   └── index.ts
│   ├── ProductDetails/
│   │   ├── ProductDetails.tsx # Product detail view
│   │   └── index.ts
│   ├── Checkout/
│   │   ├── Checkout.tsx   # Single product checkout
│   │   └── index.ts
│   ├── CartCheckout/
│   │   ├── CartCheckout.tsx # Cart checkout
│   │   └── index.ts
│   ├── OrderConfirmation/
│   │   ├── OrderConfirmation.tsx # Order confirmation
│   │   └── index.ts
│   └── About/
│       ├── About.tsx       # About page
│       └── index.ts
│
├── data/                  # Centralized data files
│   ├── productsData.ts    # All product data and images
│   ├── homeData.ts        # Home page content
│   └── aboutData.ts       # About page content
│
├── lib/                   # Utility functions and helpers
│   └── utils.ts           # Common utilities (calculations, formatters)
│
├── context/               # React Context providers
│   └── CartContext.tsx    # Shopping cart state management
│
├── config/                # Configuration and constants
│   └── constants.ts       # App-wide constants (tax, shipping, etc.)
│
├── types/                 # TypeScript type definitions
│   └── index.ts           # Global types and interfaces
│
└── public/                # Static assets (images, fonts, etc.)
```

## 🎯 Key Principles

### 1. **Self-Contained Files**
Each `.tsx` or `.ts` file contains all related logic, JSX, and imports. Pages are not split across multiple folders unless components are reused elsewhere.

### 2. **Centralized Data**
All static data (products, content, images) is stored in the `data/` folder, with one file per feature/page. This makes updates easy and ensures single source of truth.

### 3. **Type Safety**
- All components use proper TypeScript interfaces
- Global types are defined in `types/`
- No `any` types in production code

### 4. **Path Aliases**
Imports use clean path aliases configured in `tsconfig.json` and `vite.config.ts`:
- `import ProductCard from 'components/ui/ProductCard'`
- `import { homeData } from 'data/homeData'`
- `import { Product } from 'types'`

### 5. **Naming Conventions**
- Components: `PascalCase` (e.g., `ProductCard.tsx`)
- Functions/Variables: `camelCase` (e.g., `calculateDiscount`)
- Files: Match component name exactly

## 🔧 Configuration

### Path Aliases
Configured in `tsconfig.app.json` and `vite.config.ts`:
- `components/*` → `./components/*`
- `pages/*` → `./pages/*`
- `data/*` → `./data/*`
- `lib/*` → `./lib/*`
- `context/*` → `./context/*`
- `config/*` → `./config/*`
- `types/*` → `./types/*`
- `app/*` → `./app/*`

### TypeScript
- Strict mode enabled
- All files properly typed
- No implicit any

## 📦 Data Organization

### Products Data (`data/productsData.ts`)
- `allProducts`: Complete product database (40 products)
- `featuredProducts`: Featured products for home page
- `getProductImages()`: Function to get product image arrays

### Home Data (`data/homeData.ts`)
- Hero section content
- Categories data
- Newsletter content
- Stats and features

### About Data (`data/aboutData.ts`)
- Project story
- Developer information
- Company values
- Tech stack details

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Code Quality

- ESLint configured for code quality
- Prettier for consistent formatting
- TypeScript strict mode
- Clear component documentation
- Modular, reusable code structure

## 🔄 Migration Notes

The project was refactored from a flat `src/components/` structure to this modular architecture. Key changes:

1. **Pages** are now in `pages/` with their own folders
2. **Data** is centralized in `data/` folder
3. **Types** are in `types/` folder
4. **Utilities** are in `lib/` folder
5. **Config** values are in `config/` folder
6. **Path aliases** eliminate long relative imports

## 🎨 Styling

- TailwindCSS for all styling
- Consistent design system
- Responsive design patterns
- No inline styles

## 🔐 Future Enhancements

This structure is ready for:
- User authentication
- Admin dashboard
- API integration
- State management (Redux/Zustand if needed)
- Testing setup
- Internationalization (i18n)

