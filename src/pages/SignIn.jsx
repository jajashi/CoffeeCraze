import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Sign up logic
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (!formData.name || !formData.email || !formData.password) {
        alert('Please fill in all fields!');
        return;
      }
      
      alert(`Account created successfully! Welcome, ${formData.name}!`);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', formData.name);
      navigate('/');
    } else {
      // Sign in logic
      if (!formData.email || !formData.password) {
        alert('Please fill in all fields!');
        return;
      }
      
      // For demo purposes, accept any credentials
      alert('Sign in successful!');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', formData.email.split('@')[0]);
      navigate('/');
    }
  };

  const handleGuestAccess = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="auth-card shadow-lg">
            <div className="text-center mb-4">
              <img src="/logo.png" alt="Coffee Craze" height="80" className="mb-3" />
              <h2 className="auth-form-title">{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
              <p className="text-muted">
                {isSignUp ? 'Join Coffee Craze today!' : 'Sign in to your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {isSignUp && (
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100 mb-3">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>

              <button 
                type="button" 
                className="btn btn-outline-secondary w-100 mb-3"
                onClick={handleGuestAccess}
              >
                Continue as Guest
              </button>

              <div className="text-center">
                <p className="mb-0">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  {' '}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setIsSignUp(!isSignUp)}
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>
            </form>

            <hr className="my-4" />

            <div className="text-center">
              <p className="text-muted mb-2">Or sign in with</p>
              <div className="d-flex gap-2 justify-content-center">
                <a 
                  href="https://www.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary flex-fill text-decoration-none"
                >
                  <i className="bx bxl-google me-2"></i>Google
                </a>
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary flex-fill text-decoration-none"
                >
                  <i className="bx bxl-facebook me-2"></i>Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


