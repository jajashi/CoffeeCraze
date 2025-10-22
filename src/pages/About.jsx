const About = () => {
  return (
    <div className="container my-5">
      {/* About Hero */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">About Coffee Craze</h1>
        <p className="lead text-muted">Where passion meets perfection in every cup</p>
      </section>

      {/* Main About Content */}
      <section className="about-section mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card p-4">
              <h2 className="section-title mb-4">Our Story</h2>
              <p className="lead">
                Welcome to Coffee Craze, where passion meets perfection in every cup.
                We are dedicated to serving the finest quality coffee, carefully sourced
                from the world's best coffee regions.
              </p>
              <p>
                Our expert baristas craft each beverage with precision and love,
                ensuring that every sip delivers an exceptional coffee experience.
                From our signature blends to seasonal specialties, we take pride in
                offering a diverse menu that caters to all coffee enthusiasts.
              </p>
              <p>
                At Coffee Craze, we believe that great coffee has the power to bring
                people together, spark creativity, and create memorable moments.
                Join us in celebrating the art of coffee making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="my-5">
        <h2 className="text-center mb-5">Our Values</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center p-4">
              <div className="mb-3">
                <i className="ri-cup-line fs-1 text-primary"></i>
              </div>
              <h3 className="h5">Quality First</h3>
              <p>We source only the finest beans from sustainable farms around the world, ensuring every cup meets our high standards.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-4">
              <div className="mb-3">
                <i className="ri-heart-line fs-1 text-primary"></i>
              </div>
              <h3 className="h5">Crafted with Love</h3>
              <p>Our skilled baristas prepare each drink with care and attention to detail, making every customer feel special.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 text-center p-4">
              <div className="mb-3">
                <i className="ri-team-line fs-1 text-primary"></i>
              </div>
              <h3 className="h5">Community Focus</h3>
              <p>We believe in creating a welcoming space where people can connect, relax, and enjoy great coffee together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="my-5">
        <h2 className="text-center mb-5">Why Choose Coffee Craze?</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="d-flex align-items-start">
              <i className="ri-checkbox-circle-fill fs-4 text-success me-3 mt-1"></i>
              <div>
                <h4 className="h5">Premium Quality Beans</h4>
                <p>We carefully select our beans from the world's finest coffee-growing regions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex align-items-start">
              <i className="ri-checkbox-circle-fill fs-4 text-success me-3 mt-1"></i>
              <div>
                <h4 className="h5">Expert Baristas</h4>
                <p>Our team is trained in the art and science of coffee preparation.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex align-items-start">
              <i className="ri-checkbox-circle-fill fs-4 text-success me-3 mt-1"></i>
              <div>
                <h4 className="h5">Cozy Atmosphere</h4>
                <p>Enjoy your coffee in our warm and inviting environment.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex align-items-start">
              <i className="ri-checkbox-circle-fill fs-4 text-success me-3 mt-1"></i>
              <div>
                <h4 className="h5">Sustainable Practices</h4>
                <p>We're committed to environmental responsibility in all our operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5 p-5 bg-light rounded">
        <h2 className="mb-3">Visit Us Today!</h2>
        <p className="lead mb-4">Experience the Coffee Craze difference for yourself.</p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="#contact" className="btn btn-primary btn-lg">Get Directions</a>
          <a href="/menu" className="btn btn-outline-primary btn-lg">View Menu</a>
        </div>
      </section>
    </div>
  );
};

export default About;



