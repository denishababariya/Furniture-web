import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilter, FaTimes, FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import '../css/shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const staticProducts = [
    {
      _id: 1,
      name: "Modern Leather Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      price: 899.99,
      rating: 4.5,
      category: "Living Room",
      description: "Elegant leather sofa with premium materials",
      discount: 10,
      createdAt: "2023-10-01"
    },
    {
      _id: 2,
      name: "Queen Size Bed Frame",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      price: 699.99,
      rating: 4.8,
      category: "Bedroom",
      description: "Sturdy queen-size bed frame with minimalist design",
      discount: 0,
      createdAt: "2023-10-05"
    },
    {
      _id: 3,
      name: "Dining Table Set",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
      price: 1299.99,
      rating: 4.7,
      category: "Dining Room",
      description: "Six-person dining set with solid oak construction",
      discount: 15,
      createdAt: "2023-09-28"
    },
    {
      _id: 4,
      name: "Ergonomic Office Chair",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
      price: 249.99,
      rating: 4.3,
      category: "Office",
      description: "Adjustable office chair with lumbar support",
      discount: 0,
      createdAt: "2023-10-10"
    },
    {
      _id: 5,
      name: "Coffee Table",
      image: "https://images.unsplash.com/photo-1567538096631-e720f9ddce6a",
      price: 199.99,
      rating: 4.2,
      category: "Living Room",
      description: "Modern glass coffee table with wooden accents",
      discount: 5,
      createdAt: "2023-09-25"
    },
    {
      _id: 6,
      name: "Lounge Chair",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91",
      price: 349.99,
      rating: 4.6,
      category: "Living Room",
      description: "Comfortable lounge chair with premium upholstery",
      discount: 0,
      createdAt: "2023-10-03"
    },
    {
      _id: 7,
      name: "Scandinavian Bookshelf",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe",
      price: 399.99,
      rating: 4.4,
      category: "Storage",
      description: "Minimalist bookshelf with adjustable shelves",
      discount: 20,
      createdAt: "2023-10-08"
    },
    {
      _id: 8,
      name: "Velvet Accent Chair",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
      price: 289.99,
      rating: 4.7,
      category: "Living Room",
      description: "Luxurious velvet accent chair with gold-finished legs",
      discount: 0,
      createdAt: "2023-10-12"
    },
    {
      _id: 9,
      name: "King Size Mattress",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      price: 899.99,
      rating: 4.9,
      category: "Bedroom",
      description: "Premium memory foam mattress for ultimate comfort",
      discount: 10,
      createdAt: "2023-10-15"
    },
    {
      _id: 10,
      name: "Standing Desk",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
      price: 499.99,
      rating: 4.5,
      category: "Office",
      description: "Adjustable height standing desk with electric motor",
      discount: 5,
      createdAt: "2023-10-18"
    }
  ];

  const staticCategories = [
    { _id: 1, name: "Living Room" },
    { _id: 2, name: "Bedroom" },
    { _id: 3, name: "Dining Room" },
    { _id: 4, name: "Office" },
    { _id: 5, name: "Storage" }
  ];

  useEffect(() => {
    setProducts(staticProducts);
    setFilteredProducts(staticProducts);
    setCategories(staticCategories);
  }, []);

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, sortBy]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`rating-star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="shop-page">
      <button
        className="filter-toggle-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? <FaTimes /> : <FaFilter />}
        Filters
      </button>

      <div className={`shop-container ${showFilters ? 'show-filters' : ''}`}>
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="filter-options">
              <button
                className={`category-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                <span>All Products</span>
              </button>
              {categories.map(category => (
                <button
                  key={category._id}
                  className={`category-filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range-inputs">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                placeholder="Max"
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <div className="filter-options">
              <button
                className={`sort-btn ${sortBy === 'newest' ? 'active' : ''}`}
                onClick={() => setSortBy('newest')}
              >
                <span>Newest</span>
              </button>
              <button
                className={`sort-btn ${sortBy === 'price-low' ? 'active' : ''}`}
                onClick={() => setSortBy('price-low')}
              >
                <span>Price: Low to High</span>
              </button>
              <button
                className={`sort-btn ${sortBy === 'price-high' ? 'active' : ''}`}
                onClick={() => setSortBy('price-high')}
              >
                <span>Price: High to Low</span>
              </button>
              <button
                className={`sort-btn ${sortBy === 'rating' ? 'active' : ''}`}
                onClick={() => setSortBy('rating')}
              >
                <span>Top Rated</span>
              </button>
            </div>
          </div>
        </aside>

        <main className="products-container">
          <div className="products-grid">
            {currentProducts.map(product => (
              <div key={product._id} className="product-card">
                <div className="product-image-container">
                  {product.discount > 0 && (
                    <span className="discount-tag">-{product.discount}%</span>
                  )}
                  <img
                    src={product.image}
                    className="product-image"
                    alt={product.name}
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
                  <h5 className="product-title">{product.name}</h5>
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
            ))}
            {filteredProducts.length === 0 && (
              <div className="no-products">
                <div className="no-products-icon">🔍</div>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters to find what you're looking for.</p>
                <button
                  className="reset-search-btn"
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange({ min: 0, max: 1000 });
                    setSortBy('newest');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </main>
        {filteredProducts.length > 0 && (
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;