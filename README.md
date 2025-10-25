# Skillsio Landing Page

A modern, fully responsive landing page built with React, TypeScript, and TailwindCSS for Skillsio - an AI-powered skills assessment platform.

## 🚀 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Font**: Inter (Google Fonts)

## 🎨 Features

- ✨ Smooth scroll navigation
- 🎭 Fade-in and slide-up animations
- 📱 Fully responsive design (mobile → tablet → desktop)
- 🎯 Modular component architecture
- 🎨 Custom color palette with brand colors (#0b5945)
- ⚡ Lightning-fast with Vite
- 💪 Type-safe with TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
skillsio-/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx       # Hero section with CTA
│   │   ├── SolutionSection.tsx   # Solution presentation
│   │   ├── FeaturesSection.tsx   # Key features grid
│   │   ├── WaitingListSection.tsx # Newsletter signup
│   │   └── Footer.tsx            # Footer with social links
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Global styles with TailwindCSS
├── index.html                    # HTML entry point
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎨 Color Palette

- **Primary**: #0b5945 (Brand Green)
- **Secondary**: #424242 (Dark Gray)
- **Background**: #ffffff (White)

## 📄 Sections

1. **Hero Section** - Full-screen hero with headline and CTA
2. **Solution Section** - Platform presentation and unique value proposition
3. **Features Section** - 4 key features with icons
4. **Waiting List Section** - Newsletter signup form
5. **Footer** - Logo, copyright, and social links

## 🌐 Development

The site runs on `http://localhost:5173` by default when using `npm run dev`.

## 🔧 Build

To build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 📝 License

© Skillsio 2025
