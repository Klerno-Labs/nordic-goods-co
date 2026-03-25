# Cloudflare Pages Deployment Guide

## Step-by-Step Deployment Instructions

1. **Create a Cloudflare Pages Project**
   - Log in to your Cloudflare account.
   - Navigate to the "Pages" section and click on "Create a Project".
   - Connect your GitHub repository containing the Nordic Goods Co website.

2. **Configure Build Settings**
   - Set the **Production Branch** to `main` (or your default branch).
   - Set the **Build Command** to:
     ```bash
     npm run build
     ```
   - Set the **Output Directory** to:
     ```
     out
     ```

3. **Set Environment Variables**
   - In the Cloudflare Pages settings, navigate to the "Environment Variables" section.
   - Add the following environment variable:
     - `NEXT_PUBLIC_API_URL`: Your API base URL.

4. **Domain Setup**
   - After the project is created, you can set up a custom domain.
   - In the Cloudflare Pages dashboard, go to the "Custom Domains" section.
   - Follow the instructions to add your domain and configure DNS settings.

5. **Post-Deploy Checklist**
   - Ensure SSL is enabled for your custom domain.
   - Check that redirects are set up correctly if necessary.
   - Verify Google Analytics is tracking correctly.

Your site should now be live and accessible via the custom domain you configured.