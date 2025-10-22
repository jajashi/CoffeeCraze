import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');

  const coffeeMenu = [
    {
      name: 'Espresso',
      price: 115.00,
      image: '/espresso.png',
      description: 'Rich and bold single shot of pure coffee essence'
    },
    {
      name: 'Cappuccino',
      price: 75.00,
      image: '/cappucino.png',
      description: 'Perfect blend of espresso, steamed milk, and foam'
    },
    {
      name: 'Latte',
      price: 80.00,
      image: '/latte.png',
      description: 'Smooth espresso with velvety steamed milk'
    },
    {
      name: 'Americano',
      price: 195.00,
      image: '/americano.png',
      description: 'Espresso with hot water for a clean, strong taste'
    },
    {
      name: 'Mocha',
      price: 85.00,
      image: '/mocha.png',
      description: 'Espresso with rich chocolate and steamed milk'
    },
    {
      name: 'Cold Brew',
      price: 68.00,
      image: '/cold_brew.png',
      description: 'Smooth, low-acid coffee brewed for 24 hours'
    }
  ];

  const handleAddToCart = (coffee) => {
    addToCart({ ...coffee, quantity: 1 });
    setNotification(`${coffee.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="container my-5">
      {/* Notification */}
      {notification && (
        <div className="alert alert-success alert-dismissible fade show position-fixed top-0 end-0 m-3" 
             style={{ zIndex: 1050 }} role="alert">
          <i className="bx bx-check-circle me-2"></i>
          {notification}
          <button type="button" className="btn-close" onClick={() => setNotification('')}></button>
        </div>
      )}

      {/* Menu Header */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Our Coffee Menu</h1>
        <p className="lead text-muted">Discover our carefully crafted selection of premium coffees</p>
      </section>

      {/* Coffee Grid */}
      <section className="menu-section">
        <div className="row g-4">
          {coffeeMenu.map((coffee, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 text-center">
                <img 
                  src={coffee.image} 
                  className="card-img-top" 
                  alt={coffee.name}
                  style={{ height: '250px', objectFit: 'contain', padding: '20px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{coffee.name}</h5>
                  <p className="flex-grow-1">{coffee.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                    <span className="text-primary fw-bold text-dark fs-5">₱{coffee.price.toFixed(2)}</span>
                    <button 
                      type="button" 
                      className="btn btn-outline-primary btn-sm add-to-cart-icon" 
                      onClick={() => handleAddToCart(coffee)}
                      title={`Add ${coffee.name} to cart`}
                    >
                      <i className="bx bx-cart-add fs-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5 p-5 bg-light rounded">
        <h2 className="mb-3">Ready to Order?</h2>
        <p className="lead mb-4">Get your favorite coffee delivered or pick it up in-store!</p>
        <button 
          className="btn btn-primary btn-lg"
          onClick={() => navigate('/order')}
        >
          <i className="bx bx-cart me-2"></i>
          Go to Order Page
        </button>
      </section>
    </div>
  );
};

export default Menu;



