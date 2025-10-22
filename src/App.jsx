import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Feedback from './pages/Feedback';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

import './styles/App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/signin" element={<SignIn />} />
              
              {/* Protected Routes Example */}
              {/* Uncomment to enable protected routes */}
              {/* <Route 
                path="/order" 
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                } 
              /> */}
              
              {/* 404 Not Found - Must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;



