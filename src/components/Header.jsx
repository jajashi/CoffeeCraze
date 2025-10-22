import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom custom-bg sticky-top">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Coffee Craze Logo" height="60" />
      </Link>

      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'text-main fw-bold' : 'text-secondary'}`}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/menu" 
              className={({ isActive }) => `nav-link ${isActive ? 'text-main fw-bold' : 'text-secondary'}`}
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/order" 
              className={({ isActive }) => `nav-link ${isActive ? 'text-main fw-bold' : 'text-secondary'}`}
            >
              Order
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'text-main fw-bold' : 'text-secondary'}`}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/feedback" 
              className={({ isActive }) => `nav-link ${isActive ? 'text-main fw-bold' : 'text-secondary'}`}
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="d-flex align-items-center gap-3">
        <Link to="/order" className="btn btn-outline-secondary position-relative" id="cart-icon-btn">
          <i className="bx bx-cart fs-4"></i>
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/signin" className="btn btn-outline-secondary">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;

