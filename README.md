# React 19 Portfolio Website

A modern, responsive portfolio website built with React 19, Tailwind CSS, and other cutting-edge technologies. This project showcases skills, projects, and professional information in an elegant and interactive way.

![Portfolio Preview](https://placehold.co/1200x630/e2e8f0/1e293b/png?text=Portfolio+Website+Preview)

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, minimalist design with beautiful animations
- **Interactive Elements**: Smooth scrolling, animated sections, and interactive project cards
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility Focused**: Built with best practices for all users
- **SEO Ready**: Structured for optimal search engine visibility

## Technologies Used

- **React 19** - Core framework with latest features
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **EmailJS** - Contact form submission
- **Lenis** - Smooth scrolling

## Project Structure

```
src/
├── components/
│   ├── ui/             # UI components
│   ├── magicui/        # Special animated components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, About, etc.)
│   └── animations/     # Animation components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── data/               # Data files
└── styles/             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to see the website.

## Customization

### Personal Information

Edit the data files in the `src/data/` directory to update your personal information, projects, skills, and experience.

### Styling

Customize the colors and other styling variables in the `tailwind.config.js` file.

### Resume

Replace the `public/resume.pdf` file with your own resume.

## Deployment

This site is optimized for deployment on Vercel or Netlify.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-website)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/portfolio-website)

## Performance Optimization

- Lazy-loaded components
- Optimized images with WebP/AVIF formats
- Code splitting
- Tree shaking
- Optimized fonts with proper font-display strategies

## Accessibility

This project follows WCAG 2.1 AA compliance guidelines:
- Proper semantic HTML
- Keyboard navigation support
- ARIA labels where appropriate
- Support for screen readers
- Respects user's reduced motion preferences

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons from [Lucide React](https://lucide.dev)
- Placeholder images from [placehold.co](https://placehold.co)

## Contact

If you have any questions or feedback, feel free to reach out at your.email@example.com
