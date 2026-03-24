# Client Handoff for Nordic Goods Co

## What Was Built
We have created a bespoke e-commerce website for Nordic Goods Co, featuring a clean and modern design that emphasizes curated products. The website includes the following pages:

1. **Home Page**: A split layout hero section, trust signals, featured collections, and best sellers.
2. **Shop Page**: A product listing with sidebar filters and sorting options.
3. **Product Detail Page**: Detailed product information with a quick add feature.
4. **Collections Page**: A focused grid of curated collections.
5. **About Page**: An editorial layout sharing the founder's story.
6. **Shipping & Returns Page**: A checklist-style layout for policies.
7. **Contact Page**: A functional form for customer inquiries.

## Changing Images
All images on the site are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., "hero").
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
You can use any web-accessible image URL (Cloudinary, S3, etc.). For best results, use images at least 1200px wide, and landscape orientation for hero images.

## Changing Logo
If a logo slot exists, you can swap it in the same `src/config/images.ts` file by updating the logo URL.

## Changing Colors
To modify the color scheme, edit the `tailwind.config.js` file. You can change the primary, secondary, and accent colors there.

## Changing Fonts
To swap the Google Font used in the site, update the font imports in `src/app/layout.tsx`.

## Updating Text Content
Text content can be updated directly in the respective page files located in the `src/pages` directory.

## How to Request Changes from Pegrio
For any changes or updates, please contact Pegrio support via email at support@pegrio.com.

## Hosting and Maintenance Info
The website is hosted on Cloudflare Pages. Ensure to monitor the site for performance and uptime.

## Contact
For any questions or support, please reach out to Pegrio support.