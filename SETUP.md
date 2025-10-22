# Coffee Craze SPA - Setup Guide

This guide will help you set up and run the Coffee Craze Single Page Application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Step-by-Step Setup

### 1. Navigate to Project Directory

Open your terminal/command prompt and navigate to the react-coffee-shop folder:

```bash
cd "C:\xampp\htdocs\Coffee Shop\react-coffee-shop"
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- React and React DOM
- React Router DOM
- Vite (build tool)
- And other dependencies

Expected output: A `node_modules` folder will be created with all dependencies.

### 3. Setup Public Assets

The application requires coffee images in the `public` folder. You need to copy the following images:

**From the parent directory to `react-coffee-shop/public/`:**

- `logo.png`
- `americano.png`
- `cappucino.png`
- `espresso.png`
- `latte.png`
- `mocha.png`
- `cold_brew.png`
- `coffee cup.png`

You can do this manually or use the provided PowerShell script.

#### Option A: Manual Copy (Windows)

1. Open File Explorer
2. Navigate to `C:\xampp\htdocs\Coffee Shop\`
3. Copy the image files listed above
4. Paste them into `C:\xampp\htdocs\Coffee Shop\react-coffee-shop\public\`

#### Option B: Using PowerShell Script (Windows)

Create a file named `copy-assets.ps1` in the project root with:

```powershell
# Copy images from parent directory to public folder
$parentDir = ".."
$publicDir = "public"

# Create public directory if it doesn't exist
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir
}

# List of images to copy
$images = @(
    "logo.png",
    "americano.png",
    "cappucino.png",
    "espresso.png",
    "latte.png",
    "mocha.png",
    "cold_brew.png",
    "coffee cup.png"
)

# Copy each image
foreach ($image in $images) {
    $sourcePath = Join-Path $parentDir $image
    $destPath = Join-Path $publicDir $image
    
    if (Test-Path $sourcePath) {
        Copy-Item $sourcePath $destPath -Force
        Write-Host "Copied: $image" -ForegroundColor Green
    } else {
        Write-Host "Not found: $image" -ForegroundColor Yellow
    }
}

Write-Host "`nAsset copy complete!" -ForegroundColor Cyan
```

Run it with:

```powershell
powershell -ExecutionPolicy Bypass -File copy-assets.ps1
```

### 4. Start Development Server

Start the Vite development server:

```bash
npm run dev
```

Expected output:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 5. Open in Browser

The application should automatically open in your default browser at:
```
http://localhost:3000
```

If it doesn't open automatically, manually navigate to the URL above.

## Verification

Once the app is running, verify the following:

- [ ] Header with logo appears correctly
- [ ] Navigation menu works (Home, About, Menu, Order, Feedback)
- [ ] All coffee images load on Menu page
- [ ] Cart functionality works
- [ ] Navigation doesn't reload the page
- [ ] Footer appears at the bottom

## Troubleshooting

### Issue: Images not loading

**Solution:** Ensure all images are in the `public` folder. Check browser console for 404 errors.

### Issue: npm install fails

**Solution:** 
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Ensure you have internet connection

### Issue: Port 3000 already in use

**Solution:** 
- Close other applications using port 3000
- Or modify the port in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Change to any available port
    open: true
  }
})
```

### Issue: React Router not working

**Solution:** Ensure you're using the dev server (`npm run dev`), not opening the HTML file directly.

## Building for Production

To create a production build:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Directory Structure After Setup

```
react-coffee-shop/
├── node_modules/          # Dependencies (created after npm install)
├── public/                # Static assets
│   ├── logo.png
│   ├── coffee cup.png
│   ├── espresso.png
│   ├── cappucino.png
│   ├── latte.png
│   ├── americano.png
│   ├── mocha.png
│   └── cold_brew.png
├── src/                   # Source code
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json     # Created after npm install
├── vite.config.js
└── README.md
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Next Steps

1. Explore the application features
2. Test all navigation routes
3. Try adding items to cart
4. Submit feedback form
5. Test sign in/sign up functionality
6. Customize colors and content as needed

## Features to Test

### 1. SPA Navigation
- Click through all menu items
- Verify page doesn't reload
- Check active link highlighting

### 2. React Router Features
- Navigate using header links
- Use browser back/forward buttons
- Test programmatic navigation (buttons on pages)
- Try accessing non-existent route (should show 404)

### 3. Cart Functionality
- Add items from Menu page
- Go to Order page
- Modify quantities
- Place order
- Verify cart persists after page refresh

### 4. Forms
- Fill out contact form on Home
- Submit feedback with ratings
- Test sign in/sign up

### 5. Responsive Design
- Resize browser window
- Test on mobile view (F12 → Device toolbar)
- Check tablet view

## Support

If you encounter any issues not covered here, check:

1. Browser console for errors (F12)
2. Terminal output for server errors
3. Ensure all files are in correct locations
4. Verify Node.js and npm versions

## Success!

If you see the Coffee Craze homepage with the hero section, coffee cup image, and navigation menu, you're all set! 

Enjoy exploring your new Single Page Application! ☕



