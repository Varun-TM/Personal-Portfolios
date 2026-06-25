# 🚀 Quick Start Guide

Welcome! Here's everything you need to get your premium portfolio live in minutes.

## ⚡ 5-Minute Setup

### 1. Install Node.js (if needed)

Download from [nodejs.org](https://nodejs.org/) - Choose the LTS version.

### 2. Install Dependencies

```bash
cd varun-portfolio
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. View in Browser

Open [http://localhost:3000](http://localhost:3000)

**That's it! Your portfolio is running locally.** 🎉

## 📝 Essential Customizations

### Add Your Resume

1. Place your resume PDF in `public/resume.pdf`
2. The download button will work automatically

### Update Contact Information

Edit `app/components/Contact.tsx`:

```typescript
const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'varun.t.manoharan@gmail.com',  // ← Change this
    link: 'mailto:varun.t.manoharan@gmail.com',  // ← Change this
  },
  // ...
]
```

### Update Social Links

Edit `app/components/Hero.tsx` and `app/components/Footer.tsx`:

```typescript
<a href="https://your-linkedin-url">  {/* Update LinkedIn */}
<a href="https://your-github-url">     {/* Update GitHub */}
```

## 🌐 Deploy to Production

### Easiest: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Your site is live! 🚀

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📂 Project Structure

```
varun-portfolio/
├── app/
│   ├── components/        # All page sections
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout & metadata
│   └── page.tsx           # Main page
├── public/                # Static files (resume, images)
├── package.json           # Dependencies
├── tailwind.config.ts     # Theme configuration
├── tsconfig.json          # TypeScript config
└── README.md              # Full documentation
```

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: '#0B1220',    // Main background
  surface: '#111827',       // Cards background
  primary: '#2563EB',       // Bright blue (links, buttons)
  accent: '#06B6D4',        // Cyan (highlights)
  highlight: '#7C3AED',     // Purple (secondary highlights)
}
```

### Modify Sections

Each section is in `app/components/`:

- **Hero** - Edit `Hero.tsx` for headline/description
- **About** - Edit `About.tsx` for philosophy section
- **Experience** - Edit `Experience.tsx` for work history
- **Projects** - Edit `Projects.tsx` for case studies
- **Skills** - Edit `Skills.tsx` for technical skills
- **Achievements** - Edit `Achievements.tsx` for metrics

### Update Personal Info

Edit `app/layout.tsx` for SEO metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Cloud & DevOps Engineer',  // ← Change
  description: 'Your description here',          // ← Change
}
```

## ✅ Pre-Launch Checklist

Before making your portfolio public:

- [ ] Resume PDF added to `public/resume.pdf`
- [ ] All contact information updated
- [ ] Social links correct (LinkedIn, GitHub)
- [ ] Email in Contact form matches your email
- [ ] Tested on mobile phone
- [ ] All animations smooth in browser
- [ ] No broken links (check all sections)
- [ ] Metadata updated with your name/description

## 🔧 Common Tasks

### Run locally with port 3001

```bash
npm run dev -- -p 3001
```

### Build for production

```bash
npm run build
npm start
```

### Check for TypeScript errors

```bash
npx tsc --noEmit
```

## 📊 What's Included

✅ **9 Premium Sections**
- Hero with animated background
- About with values
- Interactive career timeline
- Featured projects with case studies
- Skill categories
- Animated achievement counters
- Education & certifications
- Contact form
- Professional footer

✅ **Design Features**
- Dark theme with premium colors
- Glassmorphism effects
- Smooth animations (Framer Motion)
- Responsive mobile design
- Smooth scrolling
- Micro-interactions on hover
- Animated gradients
- Professional typography

✅ **Technical**
- Next.js 14 with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Framer Motion for animations
- SEO optimized
- Performance ready
- Accessibility compliant
- Production-grade code

## 🆘 Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Module not found?
```bash
rm -rf node_modules
npm install
```

### Animations not working?
- Check browser supports CSS animations
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Form not submitting?
- Check browser console for errors
- In production, implement backend endpoint

## 📞 Support

- **Email**: varun.t.manoharan@gmail.com
- **LinkedIn**: https://linkedin.com/in/varun-t-m-5237b793
- **Docs**: See README.md for full documentation

## 🎯 Next Steps

1. ✅ Run locally: `npm run dev`
2. ✅ Customize your content
3. ✅ Deploy to Vercel
4. ✅ Share your portfolio!

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Your premium portfolio awaits! Start with `npm install && npm run dev` 🚀**
