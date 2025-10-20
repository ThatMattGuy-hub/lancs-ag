# Lancashire Ag - Marketing Website

A modern, responsive marketing website for Lancashire Ag, a construction and agriculture contractor serving Lancashire. Built with React, TypeScript, Tailwind CSS, and deployed on Vercel.

## 🚀 Features

- **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Animations**: Smooth transitions and scroll animations with Framer Motion
- **SEO Optimized**: Meta tags, JSON-LD schema, and semantic HTML
- **Accessible**: WCAG AA compliant with keyboard navigation
- **Contact Forms**: Integrated with Web3Forms for serverless form handling
- **Performance**: Optimized images, lazy loading, and code splitting

## 📋 Prerequisites

- Node.js 22.x or higher
- npm 11.x or higher

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LancashireAg_Native
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your Web3Forms access key to `.env`:
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Get your free access key from [Web3Forms](https://web3forms.com)

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, etc.)
│   ├── Header.tsx      # Site header with navigation
│   └── Footer.tsx      # Site footer
├── sections/           # Page sections (HomeHero, HomeServices, etc.)
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Legal.tsx
├── content/            # Static content (JSON)
│   ├── services.json
│   ├── projects.json
│   └── copy.json
├── lib/                # Utility functions
│   ├── utils.ts
│   ├── seo.ts
│   └── forms.ts
├── styles/             # Global styles
│   └── globals.css
└── App.tsx             # Main app component with routing
```

## 🎨 Design System

### Colors
- **Background**: `#fffcf2` (warm cream)
- **Muted**: `#ccc5b9` (subtle accents)
- **Ink-1**: `#403d39` (body text)
- **Ink-2**: `#252422` (headings)
- **Accent**: `#eb5e28` (CTAs, highlights)

### Typography
- System font stack for optimal performance
- Responsive sizing with Tailwind utilities
- WCAG AA contrast ratios

## 🔧 Configuration

### Environment Variables
- `VITE_WEB3FORMS_ACCESS_KEY`: Web3Forms API key for contact form
- `VITE_SITE_URL`: Production site URL for SEO

### Tailwind Configuration
Custom theme configuration in `tailwind.config.js` with brand colors and utilities.

## 📝 Content Management

Content is managed through JSON files in `src/content/`:

- **services.json**: Service offerings with details
- **projects.json**: Portfolio projects with metrics
- **copy.json**: Site-wide copy (hero, testimonials, etc.)

Edit these files to update content without touching code.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `VITE_WEB3FORMS_ACCESS_KEY`
   - `VITE_SITE_URL`
4. Deploy!

Vercel will automatically:
- Build on every push to `main`
- Create preview deployments for PRs
- Optimize assets and images

### Manual Deployment

Build the project:
```bash
npm run build
```

The `dist` folder contains the static files ready for deployment to any static hosting service.

## 🧪 Testing

The site includes:
- TypeScript for type safety
- ESLint for code quality
- Responsive design testing across devices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Copyright 2025 Lancashire Ag. All rights reserved.

## 📞 Support

For questions or issues, contact:
- Email: info@lancashireag.com
- Phone: +44 1234 567890

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Forms powered by [Web3Forms](https://web3forms.com/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
