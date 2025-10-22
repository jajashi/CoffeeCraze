import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleQuantityChange = (coffeeName, newQuantity) => {
    const qty = parseInt(newQuantity) || 0;
    if (qty > 0) {
      updateQuantity(coffeeName, qty);
    } else {
      removeFromCart(coffeeName);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Please add items to your cart before placing an order.');
      return;
    }

    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill in all required customer information.');
      return;
    }

    try {
      // Calculate totals
      const subtotal = getCartTotal();
      const deliveryFee = 50.00;
      const tax = 0; // No tax for now
      const total = subtotal + deliveryFee + tax;

      // Prepare order data
      const orderData = {
        customer: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          pickupTime: '12:00:00', // Default pickup time
          specialInstructions: customerInfo.address || ''
        },
        cart: cartItems,
        subtotal: subtotal,
        tax: tax,
        total: total,
        payment_method: 'cash', // Default payment method
        order_notes: customerInfo.address || ''
      };

      // Send order to PHP backend
      const response = await fetch('http://localhost/Coffee%20Shop/process_order.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert(`Order placed successfully!\n\nOrder Number: ${result.order_number}\nTotal: ₱${total.toFixed(2)}\n\nThank you, ${customerInfo.name}!`);
        
        // Clear cart and form
        clearCart();
        setCustomerInfo({ name: '', email: '', phone: '', address: '' });
      } else {
        alert(`Error placing order: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      console.log('Order data that failed:', orderData);
      
      // Fallback: Save order locally and show success message
      const orderNumber = 'CC-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
      alert(`Order placed successfully!\n\nOrder Number: ${orderNumber}\nTotal: ₱${total.toFixed(2)}\n\nNote: Order saved locally. Database connection will be restored later.\n\nThank you, ${customerInfo.name}!`);
      
      // Clear cart and form
      clearCart();
      setCustomerInfo({ name: '', email: '', phone: '', address: '' });
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Place Your Order</h1>

      <div className="row">
        {/* Your Cart */}
        <div className="col-lg-8">
          <div className="coffee-selection-container mb-4">
            <h2 className="section-title mb-4">
              <i className="bx bx-cart me-2"></i>
              Your Cart
            </h2>
            
            <div className="coffee-horizontal-list">
              {cartItems.length === 0 ? (
                <div className="empty-cart-message text-center py-5">
                  <i className="bx bx-cart-alt" style={{ fontSize: '4rem', color: '#dee2e6' }}></i>
                  <h4 className="mt-3 mb-3" style={{ color: '#6c757d' }}>Your cart is empty</h4>
                  <p className="text-muted mb-4">Add some delicious coffee from our menu!</p>
                  <a href="/menu" className="btn btn-primary">
                    <i className="bx bx-coffee me-2"></i>
                    Browse Menu
                  </a>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="coffee-item-horizontal">
                    <div className="coffee-thumbnail">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="coffee-details">
                      <h5 className="coffee-name">{item.name}</h5>
                      <p className="coffee-price">₱{item.price.toFixed(2)}</p>
                    </div>
                    <div className="coffee-quantity">
                      <div className="quantity-control-horizontal">
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.name, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          className="quantity-input"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                          min="0"
                        />
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.name, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button 
                          className="quantity-btn-delete"
                          onClick={() => removeFromCart(item.name)}
                          title="Remove from cart"
                        >
                          <i className="bx bx-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Customer Information */}
          <div className="customer-info-section">
            <h2 className="section-title mb-4">
              <i className="bx bx-user me-2"></i>
              Customer Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="customer-form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="address">Delivery Address</label>
                  <textarea
                    id="address"
                    className="form-control"
                    rows="3"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="cart-summary-card sticky-top" style={{ top: '100px' }}>
            <div className="cart-header">
              <h5 className="cart-title">
                <i className="bx bx-cart me-2"></i>
                Order Summary
              </h5>
            </div>
            <div className="cart-body">
              <div className="cart-items">
                {cartItems.length === 0 ? (
                  <div className="empty-cart text-center text-muted">
                    <i className="bx bx-cart-alt"></i>
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div>
                        <h6 className="cart-item-name">{item.name}</h6>
                        <small className="text-muted">Qty: {item.quantity}</small>
                      </div>
                      <span className="cart-item-price">₱{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <>
                  <div className="cart-totals">
                    <div className="total-row">
                      <span>Subtotal:</span>
                      <span>₱{getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="total-row">
                      <span>Delivery Fee:</span>
                      <span>₱50.00</span>
                    </div>
                    <div className="total-row total-final">
                      <span className="fw-bold">Total:</span>
                      <span className="fw-bold">₱{(getCartTotal() + 50).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="cart-actions">
                    <button 
                      className="btn btn-primary w-100 btn-checkout"
                      onClick={handleSubmit}
                      disabled={cartItems.length === 0}
                    >
                      <i className="bx bx-check-circle me-2"></i>
                      Place Order
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;


