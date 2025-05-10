
# Deployment Guide

This guide will help you deploy the AI Product Lab application to various platforms.

## Prerequisites

- Node.js 16+ installed
- NPM or Yarn package manager
- Git (optional, but recommended)

## Option 1: Lovable Deployment (Recommended for Beginners)

1. Go to [lovable.dev](https://lovable.dev) and sign in
2. Open your project
3. Click "Share" → "Publish"
4. Your site will be live at a URL like: https://your-project-name.lovable.app

## Option 2: Netlify Deployment

1. Create a [Netlify](https://netlify.com) account
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub or upload the folder
4. Under "Basic build settings":
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Option 3: Vercel Deployment

1. Create a [Vercel](https://vercel.com) account
2. Click "Add New" → "Project"
3. Import your repository or upload files
4. Configure as needed:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

## Option 4: Manual Deployment to Any Web Host

1. Build your project:
   ```
   npm run build
   ```
2. Upload the contents of the `dist` folder to your web hosting service
3. Make sure to configure redirects properly for single-page apps

## Environment Variables

If your app needs environment variables, make sure to:
1. Copy `.env.example` to `.env` for local development
2. Add these variables in your hosting platform's settings panel

## Custom Domain Setup

For custom domains:
1. Purchase a domain from a registrar like Namecheap, GoDaddy, etc.
2. In your hosting platform (Lovable, Netlify, etc.), add your custom domain
3. Update DNS settings at your domain registrar as instructed by your hosting platform
4. Wait for DNS propagation (can take up to 48 hours)

## Need help?

If you get stuck during deployment:
- Check the [docs.lovable.dev](https://docs.lovable.dev) for assistance
- Visit [discord.gg/lovable](https://discord.gg/lovable) for community support
