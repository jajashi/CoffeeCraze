# Quick Start Guide

Get your Coffee Craze SPA running in 3 minutes!

## Prerequisites

✅ Node.js 16+ installed  
✅ Terminal/Command Prompt access

## 3-Step Setup

### Step 1: Install Dependencies

Open terminal in the `react-coffee-shop` folder:

```bash
cd "C:\xampp\htdocs\Coffee Shop\react-coffee-shop"
npm install
```

⏱️ Takes ~1-2 minutes

### Step 2: Copy Image Assets

**Option A: Use PowerShell Script** (Recommended)

```powershell
powershell -ExecutionPolicy Bypass -File copy-assets.ps1
```

**Option B: Manual Copy**

Copy these files from parent folder to `public/`:
- logo.png
- coffee cup.png
- espresso.png
- cappucino.png
- latte.png
- americano.png
- mocha.png
- cold_brew.png

### Step 3: Start Dev Server

```bash
npm run dev
```

🎉 App opens at http://localhost:3000

## That's It!

Your Coffee Craze SPA is now running!

## What to Try

1. Navigate through pages using the menu
2. Add coffee to cart from Menu page
3. Go to Order page and place an order
4. Submit feedback
5. Try Sign In/Sign Up

## Troubleshooting

**Images not showing?**
- Run the copy-assets.ps1 script again
- Check that images are in the `public/` folder

**Port 3000 in use?**
- Edit `vite.config.js` and change port to 3001

**Need Help?**
- See SETUP.md for detailed instructions
- Check INSTRUCTIONS.md for feature documentation

## Next Steps

- Read README.md for full documentation
- Explore the code in `src/` folder
- Customize colors in `src/styles/App.css`
- Enable protected routes in `src/App.jsx`

---

**Enjoy your Coffee Craze SPA! ☕**



