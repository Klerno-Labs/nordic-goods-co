# Deployment Guide for Nordic Goods Co

## Step-by-Step Cloudflare Pages Deployment
1. **Build the Project for Static Export**
   Ensure your `next.config.js` has the following settings:
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build the Project**
   Run the following command to build the project:
   ```bash
   npm run build
   ```

3. **Create a Cloudflare Pages Project**
   - Go to the Cloudflare dashboard.
   - Select "Pages" from the sidebar.
   - Click "Create a Project".

4. **Connect Your Repository**
   - Choose your Git provider (GitHub, GitLab, etc.).
   - Select the repository containing your project.

5. **Configure Build Settings**
   - **Production Branch**: `main` (or your default branch)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `out` (or the directory where your static files are generated)

6. **Set Environment Variables**
   If you have any environment variables, add them in the "Environment Variables" section.

7. **Deploy Your Site**
   Click "Save and Deploy". Your site will be built and deployed.

## Domain Setup Instructions
1. **Add Custom Domain**
   - In the Cloudflare Pages dashboard, go to your project settings.
   - Click on "Custom Domains" and add your domain.

2. **Update DNS Settings**
   - Follow the instructions provided by Cloudflare to update your DNS settings.

## Post-Deploy Checklist
- Ensure SSL is enabled for your custom domain.
- Check for any redirects that need to be set up.
- Verify Google Analytics integration is working.