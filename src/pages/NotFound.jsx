import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="py-5">
            <i className="bx bx-coffee-togo display-1 text-muted mb-4"></i>
            <h1 className="display-1 fw-bold text-main">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="lead text-muted mb-4">
              Oops! Looks like this page took a coffee break and never came back.
            </p>
            <p className="mb-5">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/" className="btn btn-primary btn-lg">
                <i className="bx bx-home me-2"></i>
                Go Home
              </Link>
              <Link to="/menu" className="btn btn-outline-primary btn-lg">
                <i className="bx bx-food-menu me-2"></i>
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;



