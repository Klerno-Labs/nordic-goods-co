# Nordic Goods Co E-Commerce Website

## Project Description
A bespoke, high-end e-commerce platform tailored for Nordic Goods Co, focusing on curated retail experiences with a premium feel. The website features a clean, modern design that emphasizes product visibility and editorial storytelling.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (utility-first)
- **Animation**: Framer Motion (scroll-triggered animations)
- **Icons**: Lucide React (imported individually)
- **Fonts**: Google Fonts via Next.js

## Getting Started
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nordic-goods-co.git
   cd nordic-goods-co
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:

npm run dev

Visit `http://localhost:3000` in your browser.

### Build
To build the project for production:

npm run build

### Deploy
To deploy the project, follow the instructions in the DEPLOYMENT_GUIDE.md file.

## Project Structure Overview

/src
  /components       # Reusable components
  /config           # Configuration files (images, etc.)
  /lib              # Utility functions
  /pages            # Next.js pages
  /styles           # Global styles
/public              # Static assets

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is documented with comments explaining where it appears.

### Image Slots
- **hero**: Main split screen image on the homepage.
- **hero-alt**: Alternative hero image for inner pages.
- **about**: Image for the About page.
- **service-1**: Image for the first service card.
- **gallery-1**: Image for the first gallery item.

## Brand Customization
### Changing Colors
Modify the `tailwind.config.js` file to change the color palette.

### Changing Fonts
Update the font imports in `src/app/layout.tsx` to swap Google Fonts.

### Changing Logo
Edit the `src/config/images.ts` file to update the logo URL.

## Environment Variables
No specific environment variables are required for this project.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md file for deploying to Cloudflare Pages.