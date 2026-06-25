# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform and offers the best experience.

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click "New Project"
4. Select your repository
5. Click "Deploy"
6. Vercel auto-detects Next.js and builds automatically
7. Your site goes live at `*.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS setup instructions from your domain provider

## Alternative Deployments

### Netlify

```bash
# Build locally first
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

### AWS Amplify

1. Connect GitHub repository
2. Select branch (main)
3. Build settings auto-detected
4. Deploy

### Self-Hosted (VPS/Docker)

```bash
# Build for production
npm run build

# Start server
npm start

# For Docker:
# 1. Create Dockerfile
# 2. Build: docker build -t varun-portfolio .
# 3. Run: docker run -p 3000:3000 varun-portfolio
```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t varun-portfolio .
docker run -p 3000:3000 varun-portfolio
```

## Environment Variables

For production deployment, set environment variables in your hosting platform:

1. **Vercel**: Project Settings → Environment Variables
2. **Netlify**: Site Settings → Build & Deploy → Environment
3. **AWS Amplify**: App Settings → Environment Variables

Reference `.env.example` for available variables.

## Performance Checklist

Before going live:

- [ ] Verify all links work (especially social links)
- [ ] Test form submission
- [ ] Check mobile responsiveness
- [ ] Verify animations load smoothly
- [ ] Test on different browsers
- [ ] Optimize images in public folder
- [ ] Add resume.pdf to public folder
- [ ] Update metadata in layout.tsx
- [ ] Configure analytics (optional)
- [ ] Set up error tracking (optional)

## Monitoring & Maintenance

### Vercel Analytics
- Built-in performance monitoring
- Web Vitals tracking
- Error reporting

### Sentry (Error Tracking - Optional)

```bash
npm install @sentry/nextjs
```

## Continuous Deployment

With Vercel, GitHub, Netlify:
- Push to main branch
- Automatic build and deploy
- Preview deployments for PRs
- Rollback to previous versions

## SSL/HTTPS

- Vercel: Automatic (Let's Encrypt)
- Netlify: Automatic (Let's Encrypt)
- Self-hosted: Use Certbot for Let's Encrypt

## Domain Configuration

### For Vercel

1. Go to project settings
2. Domains section
3. Add domain and follow DNS instructions

### For Netlify

1. Domain settings
2. Add custom domain
3. Update DNS provider

### DNS Records

Point your domain to:
- **Vercel**: `cname.vercel.com`
- **Netlify**: `dns.netlify.com`

## Troubleshooting Deployment

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Missing Dependencies

```bash
# Update packages
npm update

# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Performance Issues

1. Check Lighthouse scores
2. Optimize images
3. Enable caching headers
4. Use CDN (Vercel does this automatically)

## Post-Deployment

1. Test all functionality
2. Set up monitoring
3. Configure backups
4. Plan maintenance schedule
5. Share portfolio URL
6. Update resume with portfolio link

## Support Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [AWS Amplify Docs](https://docs.amplify.aws)

---

**Your portfolio is now ready for the world! 🚀**
