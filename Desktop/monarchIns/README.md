# Monarch Insurance - React Website

A modern, animated website for Monarch Insurance built with React and Vite.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful animations and transitions
- 🎯 Smooth scrolling navigation
- 📱 Fully mobile responsive
- ⚡ Fast performance with Vite
- 🎭 Interactive components with React hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
monarchIns/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── StatCard.jsx
│   │   ├── Insurance.jsx
│   │   ├── InsuranceCard.jsx
│   │   ├── Pages.jsx
│   │   ├── Contact.jsx
│   │   ├── Careers.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Adding Your Logo

Replace the logo placeholder in `src/components/Navbar.jsx`:

```jsx
<div className="nav-logo">
  <img src="/path-to-your-logo.svg" alt="Monarch Insurance" />
</div>
```

### Color Scheme

The color scheme is defined in `src/styles.css` using CSS variables:

- Primary Green: `#11422e`
- Black: `#000000`
- White: `#ffffff`

You can modify these in the `:root` section of the CSS file.

## Technologies Used

- React 18
- Vite
- CSS3 (with animations)
- Inter font family

## License

© 2024 Monarch Insurance. All rights reserved.
