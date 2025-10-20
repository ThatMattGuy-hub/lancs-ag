# Lancashire Ag Website - Quick Setup Guide

## ✅ What's Been Built

A complete, production-ready marketing website with:

### Pages
- **Home** - Hero, highlights, services, featured project, testimonials, CTA
- **Services** - Filterable service grid with 7 services
- **Service Detail** - Individual service pages with sidebar CTA
- **Projects** - Portfolio of 8 completed projects with filtering
- **About** - Company story, values, credentials
- **Contact** - Full contact form with Web3Forms integration
- **Legal Pages** - Privacy, Terms, Health & Safety, Insurance

### Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with meta tags and JSON-LD schema
- ✅ WCAG AA accessible
- ✅ Contact form with validation (Zod + React Hook Form)
- ✅ Web3Forms integration for serverless form handling
- ✅ Sticky header with mobile menu
- ✅ Brand colors and design system
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## 🚀 Quick Start

1. **Install dependencies** (if not already done):
```bash
npm install --legacy-peer-deps
```

2. **Set up Web3Forms** (for contact form):
   - Go to https://web3forms.com
   - Sign up for free
   - Get your access key
   - Add it to `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```

3. **Start development server**:
```bash
npm run dev
```

4. **Open browser**:
   - Navigate to http://localhost:5173
   - The website should be running!

## 📝 Customization

### Update Content
Edit these JSON files in `src/content/`:
- `services.json` - Add/edit services
- `projects.json` - Add/edit portfolio projects
- `copy.json` - Update hero text, testimonials, contact info

### Update Branding
- Logo: Replace `public/logo.svg`
- Colors: Edit `tailwind.config.js`
- Fonts: Update `src/styles/globals.css`

### Add Images
Place images in `public/images/` and reference them in JSON files or components.

## 🎨 Design System

### Colors
```css
--bg:        #fffcf2  /* Warm cream background */
--muted:     #ccc5b9  /* Subtle accents */
--ink-1:     #403d39  /* Body text */
--ink-2:     #252422  /* Headings */
--accent:    #eb5e28  /* CTAs and highlights */
```

### Components
All UI components are in `src/components/ui/`:
- Button (primary, secondary, outline variants)
- Card (with hover effects)
- Container (responsive widths)
- Section (consistent spacing)
- Badge (for labels)

## 🚀 Deployment to Vercel

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `VITE_WEB3FORMS_ACCESS_KEY`
     - `VITE_SITE_URL` (your production URL)
   - Click "Deploy"

3. **Done!** Your site will be live in minutes.

## 📱 Testing Checklist

- [ ] Test all pages load correctly
- [ ] Test navigation (desktop and mobile)
- [ ] Test contact form submission
- [ ] Test responsive design on different screen sizes
- [ ] Test all links work
- [ ] Check accessibility with keyboard navigation
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

## 🔧 Common Tasks

### Add a New Service
1. Open `src/content/services.json`
2. Add new service object with all fields
3. Choose an icon from Lucide React
4. Save and refresh

### Add a New Project
1. Open `src/content/projects.json`
2. Add new project object
3. Add project image to `public/images/projects/`
4. Save and refresh

### Update Contact Information
1. Open `src/content/copy.json`
2. Update the `contact` section
3. Save and refresh

### Change Colors
1. Open `tailwind.config.js`
2. Update colors in the `extend` section
3. Restart dev server

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Verify environment variables are set
4. Check that Node.js version is 22.x or higher

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder text with actual company information
2. **Add Images**: Add real project photos and team photos
3. **Set Up Analytics**: Add Vercel Analytics or Plausible
4. **Test Forms**: Test the contact form with real submissions
5. **SEO**: Update meta descriptions for each page
6. **Performance**: Run Lighthouse audit and optimize

## 📚 Documentation

- [React Router](https://reactrouter.com/) - Routing
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Hook Form](https://react-hook-form.com/) - Forms
- [Zod](https://zod.dev/) - Validation
- [Web3Forms](https://web3forms.com/) - Form backend

---

**Built with ❤️ for Lancashire Ag**
