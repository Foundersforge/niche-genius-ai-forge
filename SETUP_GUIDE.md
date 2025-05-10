
# Simple Setup Guide for AI Product Lab

Hello! This guide will walk you through setting up and deploying this website in very simple steps.

## Getting Started

### Step 1: Download the project
- Click the green "Code" button at the top of the GitHub page
- Choose "Download ZIP"
- Once downloaded, unzip (extract) the folder to your computer

### Step 2: Install the necessary software
- Download and install Node.js from [nodejs.org](https://nodejs.org) (choose the "LTS" version)
- Just keep clicking "Next" through the installation

### Step 3: Open the project
- Open the folder you extracted
- Right-click inside the folder while holding Shift key
- Select "Open command window here" or "Open PowerShell window here"

### Step 4: Set up the project
- Type this command and press Enter:
  ```
  npm install
  ```
- Wait until it's finished (this might take a few minutes)

### Step 5: Run the website on your computer
- Type this command and press Enter:
  ```
  npm run dev
  ```
- Open your web browser and go to: http://localhost:8080

### Step 6: Make it live on the internet

#### Option 1: Using Lovable's built-in publishing (Easiest)
- Go to [lovable.dev](https://lovable.dev) and sign in
- Open your project
- Click the "Share" button at the top right
- Click "Publish" and follow the simple instructions

#### Option 2: Using Netlify (Also very easy)
1. Create a free account at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub (or drag-and-drop your project folder)
4. Keep all settings as they are and click "Deploy site"
5. Wait a few minutes, and your site will be live!

#### Option 3: Using Vercel
1. Create a free account at [vercel.com](https://vercel.com)
2. Click "Add New" → "Project" 
3. Connect to your GitHub (or import your project)
4. Keep all default settings and click "Deploy"

## Customizing Your Site

- To change the logo: Replace the globe icon in src/components/layout/Sidebar.tsx
- To change colors: Edit the colors in tailwind.config.ts
- To add new pages: Create new files in the src/pages folder

## Getting Help

If you get stuck or have questions, you can:
- Check the Lovable documentation at [docs.lovable.dev](https://docs.lovable.dev)
- Ask for help in our community at [discord.gg/lovable](https://discord.gg/lovable)

Enjoy your new AI Product Lab website!
