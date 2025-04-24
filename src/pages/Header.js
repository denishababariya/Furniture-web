import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaShoppingCart, 
  FaUser, 
  FaSearch, 
  FaHeart, 
  FaBars 
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 d-none d-md-block">
              <small>Free shipping on orders over $500</small>
            </div>
            <div className="col-md-4 text-center">
              <small>Customer Support: (123) 456-7890</small>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-end">
                <Link to="/track-order" className="text-white text-decoration-none me-3">
                  <small>Track Order</small>
                </Link>
                <Link to="/contact" className="text-white text-decoration-none">
                  <small>Contact Us</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container">
          <div className="py-3">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-6 col-md-3">
                <Link to="/" className="text-decoration-none">
                  <h1 className="m-0 fs-3 fw-bold text-dark">MyFurniture</h1>
                </Link>
              </div>

              {/* Search & Navigation */}
              <div className="col-md-6 d-none d-md-block">
                {searchVisible ? (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for products..."
                    />
                    <button className="btn btn-dark" type="button">
                      <FaSearch />
                    </button>
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => setSearchVisible(false)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <nav className="d-flex justify-content-center">
                    <ul className="nav">
                      <li className="nav-item">
                        <Link className="nav-link text-dark fw-medium" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link 
                          className="nav-link text-dark fw-medium dropdown-toggle" 
                          to="/shop" 
                          id="shopDropdown" 
                          role="button" 
                          data-bs-toggle="dropdown"
                        >
                          Shop
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                          <li><Link className="dropdown-item" to="/category/living-room">Living Room</Link></li>
                          <li><Link className="dropdown-item" to="/category/bedroom">Bedroom</Link></li>
                          <li><Link className="dropdown-item" to="/category/dining">Dining</Link></li>
                          <li><Link className="dropdown-item" to="/category/office">Office</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-dark fw-medium" to="/new-arrivals">
                          New Arrivals
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-dark fw-medium" to="/deals">
                          Deals
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-dark fw-medium" to="/about">
                          About
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>

              {/* Icons */}
              <div className="col-6 col-md-3">
                <div className="d-flex justify-content-end align-items-center">
                  <button 
                    className="btn btn-link text-dark me-2 d-none d-md-block"
                    onClick={() => setSearchVisible(!searchVisible)}
                  >
                    <FaSearch size={20} />
                  </button>
                  <Link to="/wishlist" className="btn btn-link text-dark me-2 d-none d-md-block">
                    <FaHeart size={20} />
                  </Link>
                  <Link to="/account" className="btn btn-link text-dark me-3">
                    <FaUser size={20} />
                  </Link>
                  <Link to="/cart" className="btn btn-link text-dark position-relative">
                    <FaShoppingCart size={20} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      3
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  </Link>
                  <button 
                    className="btn btn-link text-dark ms-3 d-md-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <FaBars size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu bg-white shadow d-md-none ${isMenuOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '1050',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        overflowY: 'auto',
        paddingTop: '20px'
      }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="m-0">Menu</h5>
            <button 
              className="btn-close" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            ></button>
          </div>

          <div className="mb-4">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products..."
                />
                <button className="btn btn-dark" type="button">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="mobile-nav">
            <ul className="list-unstyled">
              <li className="border-bottom py-2">
                <Link to="/" className="text-decoration-none text-dark fw-medium d-block">
                  Home
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/category/living-room" className="text-decoration-none text-dark fw-medium d-block">
                  Living Room
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/category/bedroom" className="text-decoration-none text-dark fw-medium d-block">
                  Bedroom
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/category/dining" className="text-decoration-none text-dark fw-medium d-block">
                  Dining
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/category/office" className="text-decoration-none text-dark fw-medium d-block">
                  Office
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/new-arrivals" className="text-decoration-none text-dark fw-medium d-block">
                  New Arrivals
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/deals" className="text-decoration-none text-dark fw-medium d-block">
                  Deals
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/about" className="text-decoration-none text-dark fw-medium d-block">
                  About Us
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/contact" className="text-decoration-none text-dark fw-medium d-block">
                  Contact Us
                </Link>
              </li>
              <li className="border-bottom py-2">
                <Link to="/track-order" className="text-decoration-none text-dark fw-medium d-block">
                  Track Order
                </Link>
              </li>
              <li className="py-2">
                <Link to="/account" className="text-decoration-none text-dark fw-medium d-block">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Category Navigation (Desktop) */}
      <div className="bg-light border-bottom d-none d-md-block">
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/sofas">Sofas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/beds">Beds</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/tables">Tables</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/chairs">Chairs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/storage">Storage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/lighting">Lighting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/decor">Decor</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;