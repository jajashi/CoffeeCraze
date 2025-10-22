function Footer() {
  return (
    <footer className="footer py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Contact Info</h5>
            <p className="mb-2">
              <i className="bx bx-map me-2"></i>
              Lakeside Bk5 Ph1, Cabuyao City
            </p>
            <p className="mb-2">
              <i className="bx bx-phone me-2"></i>
              +63 (975) 129-0725
            </p>
            <p className="mb-0">
              <i className="bx bx-envelope me-2"></i>
              coffeecraze@gmail.com
            </p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                <i className="bx bxl-facebook fs-4"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                <i className="bx bxl-instagram fs-4"></i>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                <i className="bx bxl-twitter fs-4"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                <i className="bx bxl-youtube fs-4"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                <i className="bx bxl-linkedin fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Coffee Craze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

