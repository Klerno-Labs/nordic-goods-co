# Nordic Goods Co Website

## Project Description
This project is a bespoke, high-performance website for Nordic Goods Co, a curated e-commerce retail business. The site features a modern, clean design focused on premium product presentation and seamless user experience.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (Utility-first)
- Framer Motion (for animations)
- React Hook Form (for form handling)

## Getting Started

### Install
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

Open your browser and navigate to `http://localhost:3000`.

### Build
To build the project for production:

npm run build

### Deploy
To export the project for static hosting:

npm run export

## Project Structure Overview

/src
  /app
    /about
      page.tsx
    /contact
      page.tsx
    /faq
      page.tsx
    /shipping
      page.tsx
    /shop
      page.tsx
    /product
      /[slug]
        page.tsx
    layout.tsx
    page.tsx
  /components
    Button.tsx
    Input.tsx
    Navbar.tsx
    Footer.tsx
    HeroSection.tsx
    Testimonials.tsx
    ProductCard.tsx
  /config
    images.ts
  /styles
    globals.css

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is defined with a `src` URL and `alt` text. Here are the slots:

- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: Gallery image 1
- **gallery-2**: Gallery image 2
- **gallery-3**: Gallery image 3
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background
- **team-1**: Team member photo
- **product-1**: Product photo 1
- **product-2**: Product photo 2

## Brand Customization
To change the brand colors, modify the `tailwind.config.js` file. For fonts, update the `layout.tsx` file to include your desired Google Fonts. To change the logo, update the relevant image slot in `src/config/images.ts`.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for any API endpoints.

## Deployment Instructions
For deploying on Cloudflare Pages:
1. Set up a new project in Cloudflare Pages.
2. Connect your GitHub repository.
3. Set the build command to `npm run build` and the output directory to `out`.
4. Configure environment variables in the Cloudflare dashboard.