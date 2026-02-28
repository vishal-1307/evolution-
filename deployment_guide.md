# How to Go Live (Deployment Guide)

You have successfully built your meaningful website! Here are the two best ways to make it live.

## Option 1: The "Instant" Way (Netlify Drag & Drop)
**Best if:** You don't have Git installed or want it live in 30 seconds.
**Prerequisite:** I have already run the build command for you. You have a `dist` folder in your project.

1.  Open [Netlify Drop](https://app.netlify.com/drop).
2.  Open your project folder on your computer: `C:\Users\thaku\OneDrive\Desktop\evolution\website`.
3.  Find the folder named **`dist`** inside it.
4.  **Drag and drop** the `dist` folder onto the Netlify page.
5.  **Done!** Your site is live. You can rename the site in "Site Settings" to something like `evolution-academy.netlify.app`.

---

## Option 2: The "Professional" Way (GitHub + Vercel)
**Best if:** You want to make future updates easily and have a professional setup.

### Step 1: Install Git
It seems `git` is not installed on your system.
1.  Download [Git for Windows](https://git-scm.com/download/win).
2.  Install it (keep clicking "Next").
3.  Restart your computer (or VS Code).

### Step 2: Push to GitHub
1.  Create a new repository on [GitHub.com](https://github.com/new) named `evolution-website`.
2.  Open your terminal and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/evolution-website.git
    git push -u origin main
    ```

### Step 3: Connect Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your `evolution-website` repository.
4.  Click **"Deploy"**.
5.  Vercel will detect `Vite` and deploy it automatically.

### Important Note for Routing
Since this is a Single Page App (React), if you reload on a page like `/about`, it might error on Netlify/Vercel unless configured.
**I have already handled this** by using standard build tools, but for Netlify Drop, you might need a `_redirects` file if you face 404 errors on refresh.

**To fix 404s on Refresh (Netlify):**
Create a file named `_redirects` inside the `public` folder with this content:
```
/*  /index.html  200
```
(I can do this for you now just in case).
