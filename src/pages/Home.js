import React, { useState, useEffect } from "react";
import { FaShippingFast, FaHeadset, FaUndoAlt, FaSearch, FaArrowRight, FaChair, FaTablet, FaBed, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineLightbulb } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import '../css/style.css';
import Header from "./Header";
import Slider from "../components/Slider";

const Home = () => {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    // Static product data
    const staticProducts = [
        {
            _id: 1,
            title: "Modern Leather Sofa",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 899.99,
            rating: 4.5,
            category: "Sofas",
            description: "Elegant leather sofa with premium materials and modern design",
            discount: 10
        },
        {
            _id: 2,
            title: "Queen Size Bed Frame",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 699.99,
            rating: 4.8,
            category: "Beds",
            description: "Sturdy queen-size bed frame with minimalist design",
            discount: 0
        },
        {
            _id: 3,
            title: "Dining Table Set",
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 1299.99,
            rating: 4.7,
            category: "Tables",
            description: "Six-person dining set with solid oak construction",
            discount: 15
        },
        {
            _id: 4,
            title: "Ergonomic Office Chair",
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 249.99,
            rating: 4.3,
            category: "Chairs",
            description: "Adjustable office chair with lumbar support and breathable mesh",
            discount: 0
        },
        {
            _id: 5,
            title: "Coffee Table",
            image: "https://images.unsplash.com/photo-1622282101810-f1a033d8fb79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 199.99,
            rating: 4.2,
            category: "Tables",
            description: "Modern glass coffee table with wooden accents",
            discount: 5
        },
        {
            _id: 6,
            title: "Lounge Chair",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 349.99,
            rating: 4.6,
            category: "Chairs",
            description: "Comfortable lounge chair with premium upholstery",
            discount: 0
        },
        {
            _id: 7,
            title: "Scandinavian Bookshelf",
            image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 399.99,
            rating: 4.4,
            category: "Storage",
            description: "Minimalist bookshelf with adjustable shelves",
            discount: 20
        },
        {
            _id: 8,
            title: "Velvet Accent Chair",
            image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price: 289.99,
            rating: 4.7,
            category: "Chairs",
            description: "Luxurious velvet accent chair with gold-finished legs",
            discount: 0
        }
    ];

    // Simulating data fetch to remove the loading effect after 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Filter products based on search and category
    const filteredProducts = staticProducts.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // Get unique categories
    const categories = ["All", ...new Set(staticProducts.map(product => product.category))];

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            content: "The quality and craftsmanship of my new sofa exceeded my expectations. The delivery was prompt and the assembly service was excellent.",
            name: "John Doe",
            avatar: "JD",
            title: "Verified Buyer"
        },
        {
            id: 2,
            content: "Beautiful design, comfortable, and sturdy. The customer service team was incredibly helpful throughout the entire process.",
            name: "Jane Smith",
            avatar: "JS",
            title: "Verified Buyer"
        },
        {
            id: 3,
            content: "My dining table set arrived on time and looks even better in person than in the photos. Excellent quality and value for money.",
            name: "Michael Brown",
            avatar: "MB",
            title: "Verified Buyer"
        }
    ];

    return (
        <div className="modern-furniture-home">
           
            
            {/* Hero Slider Section */}
            <Slider />

            {/* Search Bar - Floating Design */}
            <div className="container position-relative">
                <div className="search-container">
                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Find your perfect furniture piece..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Discover</span>
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Browse our extensive collection of premium furniture</p>
                    </div>
                    
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">
                                <FaChair size={50} />
                            </div>
                            <h4>Sofas</h4>
                            <p>Premium comfort for your living room</p>
                            <a href="#" className="category-link">Explore <FaArrowRight className="ms-1" /></a>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">
                                <FaBed size={50} />
                            </div>
                            <h4>Beds</h4>
                            <p>For the most restful sleep</p>
                            <a href="#" className="category-link">Explore <FaArrowRight className="ms-1" /></a>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">
                                <FaTablet size={50} />
                            </div>
                            <h4>Tables</h4>
                            <p>Elegant centerpieces</p>
                            <a href="#" className="category-link">Explore <FaArrowRight className="ms-1" /></a>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">
                                <FaChair size={50} />
                            </div>
                            <h4>Chairs</h4>
                            <p>Style meets comfort</p>
                            <a href="#" className="category-link">Explore <FaArrowRight className="ms-1" /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products with Modern Cards */}
            <section className="featured-products">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Selection</span>
                        <h2 className="section-title">Featured Collection</h2>
                        <p className="section-subtitle">Discover our most popular and trending furniture pieces</p>
                    </div>
                    
                    {/* Category Filters */}
                    <div className="category-filters">
                        {categories.map((category) => (
                            <button 
                                key={category}
                                className={`category-filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="loading-spinner">
                            <div className="spinner"></div>
                            <p>Loading our collection...</p>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <div className="product-card" key={product._id}>
                                        <div className="product-image-container">
                                            {product.discount > 0 && (
                                                <span className="discount-tag">-{product.discount}%</span>
                                            )}
                                            <img
                                                src={product.image}
                                                className="product-image"
                                                alt={product.title}
                                            />
                                            <div className="product-actions">
                                                <button className="product-action-btn"><FaHeart /></button>
                                                <button className="product-action-btn"><FaShoppingCart /></button>
                                            </div>
                                            <div className="quick-actions">
                                                <button className="quick-action-btn">Quick View</button>
                                                <button className="quick-action-btn primary">Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <span className="product-category">{product.category}</span>
                                            <h5 className="product-title">{product.title}</h5>
                                            <p className="product-description">{product.description}</p>
                                            <div className="product-details">
                                                <div className="product-price-container">
                                                    {product.discount > 0 ? (
                                                        <>
                                                            <span className="product-original-price">${product.price.toFixed(2)}</span>
                                                            <span className="product-price">${(product.price * (1 - product.discount/100)).toFixed(2)}</span>
                                                        </>
                                                    ) : (
                                                        <span className="product-price">${product.price.toFixed(2)}</span>
                                                    )}
                                                </div>
                                                <div className="product-rating">
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <span key={index} className={`rating-star ${index < Math.round(product.rating) ? 'filled' : ''}`}>★</span>
                                                    ))}
                                                    <span className="rating-number">({product.rating})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-products">
                                    <div className="no-products-icon">🔍</div>
                                    <h3>No products found</h3>
                                    <p>We couldn't find any products matching your search criteria.</p>
                                    <button className="reset-search-btn" onClick={() => { setSearch(""); setActiveCategory("All"); }}>
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    
                    <div className="view-all-container">
                        <button className="view-all-btn">View All Products <FaArrowRight className="ms-2" /></button>
                    </div>
                </div>
            </section>

            {/* Banner Section with Parallax */}
            <section className="banner-section">
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <span className="banner-tag">Limited Time Offer</span>
                    <h2>Summer Sale</h2>
                    <p>Up to 40% off on selected items</p>
                    <div className="countdown-timer">
                        <div className="countdown-item">
                            <span className="countdown-number">14</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-number">23</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-number">59</span>
                            <span className="countdown-label">Mins</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-number">42</span>
                            <span className="countdown-label">Secs</span>
                        </div>
                    </div>
                    <button className="banner-btn">Shop The Sale</button>
                </div>
            </section>

            {/* Services Section with Icons */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Promise</span>
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">We're committed to providing an exceptional shopping experience</p>
                    </div>
                    
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <FaShippingFast size={40} />
                            </div>
                            <h4>Fast Delivery</h4>
                            <p>Free shipping on all orders over $500</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaHeadset size={40} />
                            </div>
                            <h4>24/7 Support</h4>
                            <p>Expert assistance always available</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaUndoAlt size={40} />
                            </div>
                            <h4>Easy Returns</h4>
                            <p>30-day hassle-free return policy</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <MdOutlineLightbulb size={40} />
                            </div>
                            <h4>Design Advice</h4>
                            <p>Free interior design consultation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="instagram-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Inspiration</span>
                        <h2 className="section-title">Follow Our Instagram</h2>
                        <p className="section-subtitle">See how our customers style our furniture in their homes</p>
                    </div>
                    
                    <div className="instagram-grid">
                        <div className="instagram-item">
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instagram Post" />
                            <div className="instagram-overlay">
                                <a href="#" className="instagram-link">View Post</a>
                            </div>
                        </div>
                        <div className="instagram-item">
                            <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instagram Post" />
                            <div className="instagram-overlay">
                                <a href="#" className="instagram-link">View Post</a>
                            </div>
                        </div>
                        <div className="instagram-item">
                            <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instagram Post" />
                            <div className="instagram-overlay">
                                <a href="#" className="instagram-link">View Post</a>
                            </div>
                        </div>
                        <div className="instagram-item">
                            <img src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instagram Post" />
                            <div className="instagram-overlay">
                                <a href="#" className="instagram-link">View Post</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="instagram-cta">
                        <a href="#" className="instagram-cta-link">@myfurniture</a>
                    </div>
                </div>
            </section>

            {/* Testimonials with Modern Styling */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Testimonials</span>
                        <h2 className="section-title">What Our Customers Say</h2>
                        <p className="section-subtitle">Read about experiences from our satisfied customers</p>
                    </div>
                    
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial) => (
                            <div className="testimonial-card" key={testimonial.id}>
                                <div className="testimonial-quote">"</div>
                                <div className="testimonial-content">
                                    <p>{testimonial.content}</p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.avatar}</div>
                                    <div className="author-info">
                                        <h5>{testimonial.name}</h5>
                                        <p>{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            

        
        </div>
    );
};

export default Home;