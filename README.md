# SoulFelt Music - Landing Page

A mobile-first "Link-in-bio" landing page for SoulFelt Music, built with Vite, React, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with smooth animations and transitions
- **Featured Tracks**: Showcase your latest releases with streaming links
- **Support Section**: Easy donation/support options
- **Email Signup**: Capture leads with a simple email form
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Accessible**: Semantic HTML with proper ARIA labels

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React 19**: Modern component-based UI
- **Tailwind CSS**: Utility-first styling with custom soul color palette
- **PostCSS**: CSS processing with autoprefixer

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

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

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation bar
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── FeaturedTracks.jsx  # Track cards with streaming links
│   ├── Support.jsx         # Support/donation options
│   ├── EmailSignup.jsx     # Email capture form
│   └── Footer.jsx          # Footer with social links
├── App.jsx                 # Main app component
├── main.jsx                # React app entry point
└── index.css               # Tailwind directives and global styles
```

## Customization

### Colors

The custom "soul" color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  soul: {
    50: '#fef7ed',
    // ... through to 900
  }
}
```

### Content

Update the content in each component file:
- Track information in `FeaturedTracks.jsx`
- Support amounts in `Support.jsx`
- Social links in `Footer.jsx`

### Streaming Links

Replace the `#` placeholder links in `FeaturedTracks.jsx` with actual streaming URLs.

### Payment Integration

Integrate the support buttons in `Support.jsx` with your payment provider (Stripe, PayPal, etc.).

### Email Service

Connect the `EmailSignup.jsx` component to your email marketing service (Mailchimp, ConvertKit, etc.).

## Deployment

This site is ready to deploy to:
- **Netlify**: Drop the `dist` folder or connect your repo
- **Vercel**: Import your Git repository
- **GitHub Pages**: Configure build settings

Build command: `npm run build`  
Output directory: `dist`

## License

All rights reserved - SoulFelt Music © 2026