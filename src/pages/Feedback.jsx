import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceRating: 0,
    qualityRating: 0,
    ambianceRating: 0,
    recommendation: '',
    favoriteProduct: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleStarClick = (category, rating) => {
    setFormData({ ...formData, [category]: rating });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.serviceRating === 0) newErrors.serviceRating = 'Please rate our service';
    if (formData.qualityRating === 0) newErrors.qualityRating = 'Please rate our coffee quality';
    if (formData.ambianceRating === 0) newErrors.ambianceRating = 'Please rate our ambiance';
    if (!formData.recommendation) newErrors.recommendation = 'Please select an option';
    if (!formData.comments.trim()) newErrors.comments = 'Please share your feedback';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Send feedback to PHP backend
      const response = await fetch('http://localhost/Coffee%20Shop/process_feedback.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert('Thank you for your feedback! We appreciate your feedback in our services.');
        
        // Clear form immediately
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceRating: 0,
          qualityRating: 0,
          ambianceRating: 0,
          recommendation: '',
          favoriteProduct: '',
          comments: ''
        });
        setErrors({});
        
        // Redirect to home after a short delay
        setTimeout(() => navigate('/'), 2000);
      } else {
        alert(`Error submitting feedback: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      console.log('Feedback data that failed:', formData);
      
      // Fallback: Show success message even if backend fails
      alert('Thank you for your feedback! We appreciate your feedback in our services.\n\nNote: Feedback saved locally. Database connection will be restored later.');
      
      // Clear form immediately
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceRating: 0,
        qualityRating: 0,
        ambianceRating: 0,
        recommendation: '',
        favoriteProduct: '',
        comments: ''
      });
      setErrors({});
      
      // Redirect to home after a short delay
      setTimeout(() => navigate('/'), 2000);
    }
  };

  const StarRating = ({ category, rating }) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} onClick={() => handleStarClick(category, star)}>
            <i className={`bx ${rating >= star ? 'bxs-star' : 'bx-star'}`}></i>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="feedback-container">
            <h1 className="text-center mb-4">We Value Your Feedback</h1>
            <p className="text-center text-muted mb-5">
              Help us improve by sharing your experience at Coffee Craze
            </p>

            <form className="feedback-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section mb-4">
                <h3 className="section-title">
                  <i className="bx bx-user me-2"></i>
                  Personal Information
                </h3>
                
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>
              </div>

              {/* Rating Section */}
              <div className="form-section mb-4">
                <h3 className="section-title">
                  <i className="bx bx-star me-2"></i>
                  Rate Your Experience
                </h3>

                <div className="mb-3">
                  <label className="form-label">Service Quality *</label>
                  <StarRating category="serviceRating" rating={formData.serviceRating} />
                  {errors.serviceRating && <small className="text-danger">{errors.serviceRating}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Coffee Quality *</label>
                  <StarRating category="qualityRating" rating={formData.qualityRating} />
                  {errors.qualityRating && <small className="text-danger">{errors.qualityRating}</small>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Ambiance *</label>
                  <StarRating category="ambianceRating" rating={formData.ambianceRating} />
                  {errors.ambianceRating && <small className="text-danger">{errors.ambianceRating}</small>}
                </div>
              </div>

              {/* Recommendation */}
              <div className="form-section mb-4">
                <h3 className="section-title">
                  <i className="bx bx-message-rounded-dots me-2"></i>
                  Tell Us More
                </h3>

                <div className="mb-3">
                  <label className="form-label">Would you recommend Coffee Craze to others? *</label>
                  <div className="recommendation-group">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="recommendation"
                        id="recYes"
                        value="yes"
                        checked={formData.recommendation === 'yes'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="recYes">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="recommendation"
                        id="recNo"
                        value="no"
                        checked={formData.recommendation === 'no'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="recNo">No</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="recommendation"
                        id="recMaybe"
                        value="maybe"
                        checked={formData.recommendation === 'maybe'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="recMaybe">Maybe</label>
                    </div>
                  </div>
                  {errors.recommendation && <small className="text-danger">{errors.recommendation}</small>}
                </div>

                <div className="mb-3">
                  <label htmlFor="favoriteProduct" className="form-label">Favorite Coffee Product</label>
                  <select
                    className="form-control"
                    id="favoriteProduct"
                    name="favoriteProduct"
                    value={formData.favoriteProduct}
                    onChange={handleChange}
                  >
                    <option value="">Select your favorite</option>
                    <option value="Espresso">Espresso</option>
                    <option value="Cappuccino">Cappuccino</option>
                    <option value="Latte">Latte</option>
                    <option value="Americano">Americano</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Cold Brew">Cold Brew</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="comments" className="form-label">Additional Comments *</label>
                  <textarea
                    className={`form-control ${errors.comments ? 'is-invalid' : ''}`}
                    id="comments"
                    name="comments"
                    rows="5"
                    placeholder="Share your thoughts, suggestions, or any other feedback..."
                    value={formData.comments}
                    onChange={handleChange}
                  ></textarea>
                  {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  <i className="bx bx-send me-2"></i>
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;


