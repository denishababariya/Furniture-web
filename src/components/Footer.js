import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="modern-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h3>MyFurniture</h3>
                        <p>Creating beautiful spaces since 2010</p>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-pinterest"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>Our furniture combines aesthetics with functionality to transform your home into a beautiful and comfortable space.</p>
                        <button className="footer-btn">Learn More</button>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/blog">Our Blog</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/wishlist">Wishlist</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Customer Service</h4>
                        <ul className="footer-links">
                            <li><Link to="/shipping">Shipping Policy</Link></li>
                            <li><Link to="/returns">Returns & Refunds</Link></li>
                            <li><Link to="/warranty">Warranty</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>1234 Furniture Ave, Design District</p>
                        <p>Email: support@myfurniture.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2025 MyFurniture. All rights reserved.</p>
                    <div className="payment-methods">
                        <span>We accept:</span>
                        <img src="/api/placeholder/200/30" alt="Payment Methods" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;