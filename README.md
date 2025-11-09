# 🚀 Portfolio Project - Sujeet Sharma

A modern, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features a beautiful teal/cyan gradient theme, dark mode, smooth animations, and an integrated hire/contact system.

---

## ✨ Features

### 🎨 Design & UI
- **Liquid Glass Effect** - Modern glassmorphism design with gradient accents
- **Dark/Light Mode** - Persistent theme toggle with smooth transitions
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Teal/Cyan Gradient Theme** - Consistent brand colors throughout

### 🧩 Sections
- **Hero** - Animated typewriter effect with avatar
- **About** - Personal introduction with highlights
- **Skills** - Animated progress bars for technical skills
- **Projects** - Portfolio showcase with live demos
- **Experience** - Professional timeline
- **Certifications** - Certificate gallery
- **Education** - Academic background
- **Blog** - Recent posts and articles
- **Contact** - EmailJS-powered contact form

### 🚀 Special Features
- **Email Connect Modal** - Capture visitor email on first hire attempt
- **Hire Letter System** - Pre-filled hiring letter with customization
- **Scroll-to-Top Button** - Smooth scroll with gradient styling
- **Active Section Highlighting** - Navbar tracks current section
- **Scroll Progress Bar** - Visual page scroll indicator
- **Resume Download** - One-click PDF resume access

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Email:** EmailJS (contact form & hire system)
- **Icons:** Heroicons (SVG)

---

## 📁 Project Structure

```
Portfolio_Project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── About.jsx
│   │   ├── Avatar.jsx
│   │   ├── Blog.jsx
│   │   ├── Certifications.jsx
│   │   ├── ConnectEmailModal.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HireLetterModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Skills.jsx
│   │   ├── SocialIcons.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Timeline.jsx
│   ├── pages/               # Route pages
│   │   └── Home.jsx
│   ├── images/              # Static assets
│   │   ├── avatar.jpg
│   │   ├── Resume.pdf
│   │   └── [project/cert images]
│   ├── data.js              # Portfolio content & data
│   ├── index.css            # Global styles & CSS variables
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── .env.example             # EmailJS config template
├── vite.config.js           # Vite configuration
├── tailwind.config.cjs      # Tailwind configuration
└── package.json             # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sujeetshar14921/Portfolio_Project.git
   cd Portfolio_Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Create `.env` file:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/Portfolio_Project/](http://localhost:5173/Portfolio_Project/)

---

## 📝 Customization

### Update Your Information

Edit `src/data.js`:

```javascript
export const siteMeta = {
  title: 'Your Name',
  description: 'Your description',
  author: 'Your Name',
}

export const socials = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  email: 'mailto:your@email.com',
}

// Update projects, skills, experience, etc.
```

### Replace Images

1. Add your images to `src/images/`
2. Update paths in `src/data.js`
3. Replace `avatar.jpg` with your photo
4. Replace `Resume.pdf` with your resume

### Customize Theme Colors

Edit `src/index.css`:

```css
:root {
  --brand-rgb: 93, 211, 211; /* Teal/Cyan */
}
```

---

## 🌐 Deployment

### GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
   })
   ```

2. **Build & Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### Vercel / Netlify

```bash
npm run build
```

Upload the `dist/` folder or connect your Git repository.

---

## 📧 EmailJS Setup

### Template Variables

Your EmailJS template should include these variables:

**For Contact Form:**
- `{{name}}`
- `{{email}}`
- `{{message}}`

**For Hire Letter:**
- `{{visitor_name}}`
- `{{visitor_email}}`
- `{{hiring_letter}}`

### Email Fallback

If EmailJS keys are not configured, the system automatically falls back to `mailto:` links with pre-filled content.

---

## 🎨 Features Breakdown

### Hire Flow
1. User clicks **Hire Me** button
2. If no email saved → Email connect modal appears
3. Email saved → Hire letter modal opens with pre-filled template
4. User can edit letter and send via EmailJS

### Dark Mode
- Toggle in navbar
- Persists across sessions (localStorage)
- Smooth transitions with Tailwind's `dark:` classes

### Animations
- Hero typewriter effect
- Scroll-triggered section animations
- Hover effects on cards and buttons
- Smooth scroll progress bar

---

## 📜 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run deploy    # Deploy to GitHub Pages
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Sujeet Sharma**
- GitHub: [@Sujeetshar14921](https://github.com/Sujeetshar14921)
- LinkedIn: [Sujeet Sharma](https://www.linkedin.com/in/sujeet-sharma-13090326b)
- Email: sujeetsharmadc56@gmail.com

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)

---

## 📸 Screenshots

*(Add screenshots of your portfolio here)*

---

⭐ **Star this repo if you found it helpful!**# SDE Portfolio (Vite + React + Tailwind)

This is a minimal, modern Software Development Engineer portfolio built with React, Tailwind CSS, Framer Motion and React Router. It includes example components and example data in `src/data.js` so you can quickly customize it for your profile.

Getting started

1. cd into the `portfolio` folder
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`

Notes

- Replace the sample data in `src/data.js` with your own projects, skills, and experience.
- Update EmailJS keys in `src/components/ContactForm.jsx` and replace the placeholder IDs.
- Add your avatar images into `public/image/` or `portfolio/image/` as appropriate.
