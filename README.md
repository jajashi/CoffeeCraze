# Coffee Craze - Single Page Application (SPA)

A modern, responsive Single Page Application for a coffee shop built with **React** and **React Router DOM**.

## 🚀 Features

- **Single Page Application (SPA)** - Seamless navigation without page reloads
- **React Router DOM** - Client-side routing with multiple pages
- **Dynamic Routing** - Navigate programmatically between pages
- **Protected Routes** - Authentication-based access control (optional)
- **404 Page Handling** - Custom not found page
- **Responsive Design** - Mobile-first approach with Bootstrap 5
- **State Management** - Context API for cart management
- **Local Storage** - Persistent cart data
- **Modern UI/UX** - Clean and intuitive interface

## 📋 Pages

1. **Home** - Hero section, membership plans, events, and contact
2. **About** - Company story, values, and why choose us
3. **Menu** - Coffee selection with add to cart functionality
4. **Order** - Shopping cart and checkout process
5. **Feedback** - Customer feedback form with ratings
6. **Sign In** - Authentication page (Sign In / Sign Up)
7. **404** - Custom not found page

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM v6** - Routing
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework
- **Boxicons & Remixicon** - Icon libraries
- **Context API** - State management

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd react-coffee-shop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy image assets to public folder:**
   - Ensure all coffee images are in the `public` folder:
     - `logo.png`
     - `coffee cup.png`
     - `espresso.png`
     - `cappucino.png`
     - `latte.png`
     - `americano.png`
     - `mocha.png`
     - `cold_brew.png`

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - The app will open automatically at `http://localhost:3000`
   - If not, navigate to `http://localhost:3000` manually

## 🎯 Usage

### Navigation

- Use the header menu to navigate between pages
- All navigation happens without page reloads (SPA behavior)
- Active page is highlighted in the navigation menu

### Shopping Cart

- Add items from the **Menu** page
- View and modify cart in the **Order** page
- Cart data persists in local storage

### Authentication (Optional)

To enable protected routes:

1. Open `src/App.jsx`
2. Uncomment the protected route example
3. Users must sign in to access protected pages

### Programmatic Navigation

The app uses React Router's `useNavigate` hook for programmatic navigation:
- Checkout page redirects after order completion
- Sign in page redirects to home after authentication
- Menu page has a "Go to Order" button

## 📁 Project Structure

```
react-coffee-shop/
├── public/                 # Static assets
│   ├── logo.png
│   ├── coffee cup.png
│   └── [coffee images]
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/           # Context providers
│   │   └── CartContext.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Order.jsx
│   │   ├── Feedback.jsx
│   │   ├── SignIn.jsx
│   │   └── NotFound.jsx
│   ├── styles/            # CSS files
│   │   └── App.css
│   ├── App.jsx            # Main app component with routes
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration
```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/App.css`:

```css
:root {
  --bg-color: #f0ae88;        /* Background color */
  --text-color: #fff;         /* Text color */
  --main-color: #7c2e28;      /* Primary color */
}
```

### Routes

Add or modify routes in `src/App.jsx`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

## 🔒 Protected Routes

To protect a route, wrap it with the `ProtectedRoute` component:

```jsx
<Route 
  path="/order" 
  element={
    <ProtectedRoute>
      <Order />
    </ProtectedRoute>
  } 
/>
```

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## 👨‍💻 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌟 Key React Router Features Implemented

1. ✅ **BrowserRouter** - HTML5 history API
2. ✅ **Routes & Route** - Define app routes
3. ✅ **Link & NavLink** - Navigation components
4. ✅ **useNavigate** - Programmatic navigation
5. ✅ **Protected Routes** - Authentication guards
6. ✅ **404 Handling** - Catch-all route
7. ✅ **Active Link Styling** - NavLink with isActive

## 📄 License

This project is created for educational purposes.

## 👥 Contact

Coffee Craze
- Address: Lakeside Blk5 Ph1, Cabuyao City
- Phone: +63 (975) 129-0725
- Email: coffeecraze@gmail.com

---

**Enjoy your Coffee Craze experience! ☕**



