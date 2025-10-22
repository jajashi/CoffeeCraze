# Image Assets Setup

The Coffee Craze SPA requires several image files to display properly. Currently, these images are not included in the repository.

## Required Images

Place the following images in the `public/` folder:

### 1. Logo
- **File:** `logo.png`
- **Description:** Coffee Craze logo
- **Recommended Size:** 300x300px or larger
- **Used In:** Header, Sign In page

### 2. Hero Image
- **File:** `coffee cup.png`
- **Description:** Coffee cup for homepage hero section
- **Recommended Size:** 800x800px or larger
- **Used In:** Home page hero section

### 3. Coffee Product Images

| File | Product | Recommended Size |
|------|---------|-----------------|
| `espresso.png` | Espresso | 400x400px |
| `cappucino.png` | Cappuccino | 400x400px |
| `latte.png` | Latte | 400x400px |
| `americano.png` | Americano | 400x400px |
| `mocha.png` | Mocha | 400x400px |
| `cold_brew.png` | Cold Brew | 400x400px |

## How to Add Images

### Option 1: Use Existing Images

If you have existing coffee shop images:

1. Rename them to match the required filenames above
2. Copy them to the `react-coffee-shop/public/` folder
3. Restart the dev server

### Option 2: Download Stock Images

You can use free stock images from:

- **Unsplash:** https://unsplash.com/s/photos/coffee
- **Pexels:** https://www.pexels.com/search/coffee/
- **Pixabay:** https://pixabay.com/images/search/coffee/

Search for:
- "coffee cup" for hero image
- "espresso", "cappuccino", "latte", etc. for menu items
- "coffee shop logo" or create your own logo

### Option 3: Create Placeholder Images

For testing purposes, you can create simple placeholder images:

1. Use any image editor (Paint, Photoshop, GIMP, etc.)
2. Create 400x400px images with coffee-related colors
3. Add text labels (e.g., "Espresso", "Latte")
4. Save as PNG files with the required names

### Option 4: Use Online Tools

Quick placeholder generators:
- https://placeholder.com/
- https://via.placeholder.com/400x400.png/7c2e28/ffffff?text=Espresso

## Temporary Solution

The application will still work without images, but you'll see:
- Missing image icons (🖼️)
- Alt text instead of images
- Broken image placeholders in the browser

This doesn't affect the SPA functionality, routing, or cart features.

## Image Specifications

For best results:

- **Format:** PNG (preferred) or JPG
- **Background:** Transparent PNG or white background
- **Aspect Ratio:** 1:1 (square) for consistency
- **File Size:** < 500KB per image for fast loading
- **Resolution:** At least 400x400px, up to 800x800px

## After Adding Images

1. Place all images in `public/` folder
2. Restart the dev server: `npm run dev`
3. Refresh the browser
4. Images should now display correctly

## Coffee-Themed Color Palette

For creating custom images or graphics:

- **Primary Brown:** `#7c2e28`
- **Light Peach:** `#f0ae88`
- **Cream:** `#fff`
- **Dark Brown:** `#4a1a16`

## Need Help?

If you encounter issues:

1. Check that image filenames match exactly (case-sensitive)
2. Verify images are in `public/` folder, not `src/`
3. Clear browser cache and refresh
4. Check browser console for 404 errors

---

**Note:** The application is fully functional without images. Images are only for visual enhancement. All routing, cart management, and SPA features work independently of the images.



