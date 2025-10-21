# 🚀 Deployment Guide - Lancashire Ag Website

Your website is ready to deploy! Follow these steps to get it live on Vercel.

## ✅ Prerequisites Complete

- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ All files ready for deployment

## 📝 Step-by-Step Deployment

### **Step 1: Create GitHub Repository**

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name**: `lancashire-ag-website` (or your preferred name)
   - **Description**: "Lancashire Ag - Construction and Agriculture Contractor Website"
   - **Visibility**: Private or Public (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### **Step 2: Push Code to GitHub**

GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/lancashire-ag-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### **Step 3: Deploy to Vercel**

1. Go to [Vercel](https://vercel.com) and sign in (or create account)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your `lancashire-ag-website` repository
5. Configure your project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

### **Step 4: Add Environment Variables**

Before deploying, add these environment variables in Vercel:

1. Click **"Environment Variables"** section
2. Add the following:

| Name | Value |
|------|-------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Your Web3Forms access key |
| `VITE_SITE_URL` | Your production URL (e.g., `https://lancashireag.com`) |

**To get Web3Forms access key:**
- Go to [Web3Forms](https://web3forms.com)
- Sign up for free
- Create a new form
- Copy your access key

### **Step 5: Deploy!**

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live! 🎉

## 🌐 After Deployment

### **Your Vercel URL**
You'll get a URL like: `https://lancashire-ag-website.vercel.app`

### **Custom Domain (Optional)**
To use your own domain (e.g., `lancashireag.com`):

1. In Vercel project, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow Vercel's instructions to update your DNS records
4. Update `VITE_SITE_URL` environment variable to your custom domain

## 🔄 Future Updates

To update your website:

1. Make changes to your code
2. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel automatically deploys the new version!

## 📋 Checklist Before Going Live

- [ ] Add Web3Forms access key to environment variables
- [ ] Test contact form submission
- [ ] Update `VITE_SITE_URL` to production URL
- [ ] Add real project images to `public/images/`
- [ ] Update content in JSON files with real information
- [ ] Test all pages and links
- [ ] Test on mobile devices
- [ ] Set up custom domain (if applicable)

## 🆘 Troubleshooting

### Build Fails
- Check the build logs in Vercel
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

### Contact Form Not Working
- Verify `VITE_WEB3FORMS_ACCESS_KEY` is set correctly
- Check Web3Forms dashboard for submissions
- Ensure environment variable starts with `VITE_`

### Images Not Loading
- Ensure images are in the `public` folder
- Check file paths in JSON files
- Verify image files were committed to Git

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Web3Forms Documentation](https://docs.web3forms.com/)

---

**Ready to deploy? Let's go! 🚀**
