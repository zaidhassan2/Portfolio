# GitHub Deployment Guide

This guide will help you deploy your 3D Portfolio to GitHub Pages.

## Prerequisites

1.  **Git Installed**: Ensure you have Git installed on your system.
2.  **GitHub Account**: You need a GitHub account.
3.  **Repository Created**: You have already created the repository: `https://github.com/zaidhassan2/Portfolio`

## Steps to Deploy

### 1. Initialize Git (if not already done)

Open your terminal in the project directory (`/home/wolf/Portfolio/portfolio`) and run:

```bash
git init
```

### 2. Add Remote Origin

Link your local project to your GitHub repository:

```bash
git remote add origin https://github.com/zaidhassan2/Portfolio.git
```

*Note: If you have already added an origin, you can check it with `git remote -v`.*

### 3. Commit Your Changes

Stage and commit all your files:

```bash
git add .
git commit -m "Initial commit: Complete 3D Portfolio"
```

### 4. Push to Main Branch

Push your code to the `main` branch of your repository:

```bash
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

I have already configured the `deploy` script for you. Simply run:

```bash
npm run deploy
```

This command will:
1.  Build your project (creating a `dist` folder).
2.  Push the `dist` folder to a `gh-pages` branch on your repository.

### 6. Configure GitHub Pages Settings

1.  Go to your repository on GitHub: [https://github.com/zaidhassan2/Portfolio](https://github.com/zaidhassan2/Portfolio)
2.  Click on **Settings** > **Pages** (in the left sidebar).
3.  Under **Build and deployment** > **Source**, ensure "Deploy from a branch" is selected.
4.  Under **Branch**, select `gh-pages` and `/ (root)`.
5.  Click **Save**.

### 7. Access Your Website

After a few minutes, your website will be live at:
**https://zaidhassan2.github.io/Portfolio/**

## Troubleshooting

-   **404 Error**: If you see a 404 error, wait a few minutes and refresh. GitHub Pages can take a moment to update.
-   **Blank Page**: If the page is blank, ensure the `base` in `vite.config.js` matches your repository name (`/Portfolio/`). I have already set this for you.
