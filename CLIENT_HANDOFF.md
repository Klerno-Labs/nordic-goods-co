# Nordic Goods Co Website Handoff

## Overview
We have built a bespoke, high-performance website for Nordic Goods Co, designed to showcase your curated products and convert visitors into leads. Below is a page-by-page overview of the site.

### Home Page
- Features an asymmetrical hero section with a strong call-to-action.
- Includes a value proposition bar highlighting key services.
- Displays a curated product collection in a bento grid format.
- Showcases customer testimonials to build trust.
- Contains a footer with essential links and contact information.

### Shop Page
- A product grid with sidebar filtering options for easy navigation.
- Quick view functionality allows users to see product details without leaving the page.

### Product Details Page
- An image gallery with zoom functionality for product images.
- Variant selection options for different product types.
- A "Why we chose this" section detailing product benefits.

### About Page
- Tells the brand story and introduces team members.
- Lists services offered along with realistic pricing.

### Contact Page
- A lead generation form with real-time validation and success animations.

### FAQ Page
- Expandable accordion sections for frequently asked questions.

### Shipping & Returns Page
- Informational layout detailing shipping and return policies.

## Changing Images
All images on the site are controlled from one file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. To swap an image:
1. Open `src/config/images.ts`.
2. Find the slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats
You can use any web-accessible image URL (Cloudinary, S3, etc.). For best results, use images at least 1200px wide, especially for hero images.

## Changing Logo
If a logo slot exists in `src/config/images.ts`, follow the same steps as above to swap it out.

## Changing Colors
To modify the brand colors, update the `tailwind.config.js` file. You can change the primary, secondary, and accent colors there.

## Changing Fonts
To swap the Google Font in the root layout, update the `layout.tsx` file to include your desired font.

## Updating Text Content
To update text content, edit the relevant page files in the `src/app` directory.

## Requesting Changes
For any changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance
The site is hosted on Cloudflare Pages. Ensure to monitor performance and update content as needed.

## Contact
For support, please contact Pegrio at support@pegrio.com.