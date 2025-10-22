import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero container my-5 d-flex flex-column flex-md-row align-items-center gap-4">
        <div className="hero-text flex-fill">
          <h5 className="text-muted">#Coffee for your every day cravings</h5>
          <h1 className="display-4 fw-bold">Coffee Craze</h1>
          <p>Start your day by drinking a coffee and make your morning happy. Coffee has a stimulating effect that activates your brain attentiveness.</p>
          <div className="mt-4">
            <Link to="/menu" className="btn btn-primary btn-lg me-3">View Menu</Link>
            <Link to="/order" className="btn btn-outline-primary btn-lg">Order Now</Link>
          </div>
        </div>
        <div className="hero-img flex-fill text-center">
          <img src="/coffee cup.png" alt="Coffee Cup" className="img-fluid" style={{ maxHeight: '400px' }} />
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="membership-section container my-5">
        <h2 className="section-title text-center mb-4">Join Our Membership</h2>
        <div className="membership-content row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <h3>Basic Member</h3>
              <div className="price fs-4 my-3">Free</div>
              <ul className="list-unstyled mb-3">
                <li>✓ Access to member-only events</li>
                <li>✓ Monthly newsletter</li>
                <li>✓ Birthday special offers</li>
                <li>✓ Free taste of one product</li>
                <li>✓ Earn a one-time 5% discount</li>
              </ul>
              <Link to="/signin" className="btn btn-outline-primary">Join Now</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3 border-primary">
              <h3>Premium Member</h3>
              <div className="price fs-4 my-3">₱569.99/month</div>
              <ul className="list-unstyled mb-3">
                <li>✓ All Basic benefits</li>
                <li>✓ 20% off on all beverages</li>
                <li>✓ Free coffee on your birthday</li>
                <li>✓ Priority seating</li>
                <li>✓ Exclusive tasting events</li>
              </ul>
              <Link to="/signin" className="btn btn-primary">Join Now</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <h3>VIP Member</h3>
              <div className="price fs-4 my-3">₱1139.99/month</div>
              <ul className="list-unstyled mb-3">
                <li>✓ All Premium benefits</li>
                <li>✓ 30% off on all beverages</li>
                <li>✓ Free pastry with every coffee</li>
                <li>✓ Reserved seating</li>
                <li>✓ Private coffee workshops</li>
              </ul>
              <Link to="/signin" className="btn btn-outline-primary">Join Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="event-section container my-5">
        <h2 className="section-title text-center mb-4">Upcoming Events</h2>
        <div className="event-content row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="event-date text-center me-3 p-3 border rounded bg-light">
                  <span className="day fs-2 fw-bold d-block">25</span>
                  <span className="month text-uppercase">Dec</span>
                </div>
                <div className="event-details">
                  <h5 className="mb-1">Coffee Tasting Workshop</h5>
                  <p className="mb-1">
                    Join us for an interactive coffee tasting session where you'll
                    learn about different coffee origins and brewing methods.
                  </p>
                  <span className="event-time text-muted">2:00 PM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="event-date text-center me-3 p-3 border rounded bg-light">
                  <span className="day fs-2 fw-bold d-block">10</span>
                  <span className="month text-uppercase">Jan</span>
                </div>
                <div className="event-details">
                  <h5 className="mb-1">Latte Art Competition</h5>
                  <p className="mb-1">
                    Watch talented baristas compete in our annual latte art competition.
                    Vote for your favorite designs!
                  </p>
                  <span className="event-time text-muted">1:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="event-date text-center me-3 p-3 border rounded bg-light">
                  <span className="day fs-2 fw-bold d-block">28</span>
                  <span className="month text-uppercase">Feb</span>
                </div>
                <div className="event-details">
                  <h5 className="mb-1">Coffee & Music Night</h5>
                  <p className="mb-1">
                    Enjoy live music while sipping on our signature blends.
                    A perfect evening experience!
                  </p>
                  <span className="event-time text-muted">8:00 PM - 12:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section container my-5">
        <h2 className="section-title text-center mb-4">Get In Touch</h2>
        <div className="contact-content row">
          <div className="col-md-5 contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="d-flex align-items-start mb-3">
                <i className="ri-map-pin-line fs-4 me-3"></i>
                <div>
                  <h5>Address</h5>
                  <p>Lakeside Blk5 Ph1, Cabuyao City</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="ri-phone-line fs-4 me-3"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+63 (975) 129-0725</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="ri-mail-line fs-4 me-3"></i>
                <div>
                  <h5>Email</h5>
                  <p>coffeecraze@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="ri-time-line fs-4 me-3"></i>
                <div>
                  <h5>Hours</h5>
                  <p>
                    Mon-Sat: 7:00 AM - 10:00 PM<br />
                    Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 contact-form-section">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); }}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



