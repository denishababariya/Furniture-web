import React, { useState } from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 3,
      name: 'Dining Table Set',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c'
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // TODO: Implement add to cart functionality
    console.log('Adding to cart:', item);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Wishlist</h2>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              {wishlistItems.length === 0 ? (
                <div className="text-center py-4">
                  <h4>Your wishlist is empty</h4>
                  <p className="text-muted">Add items to your wishlist to save them for later</p>
                </div>
              ) : (
                wishlistItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="row align-items-center mb-3 p-3 border rounded hover-shadow"
                  >
                    <div className="col-md-2">
                      <img src={item.image} alt={item.name} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-0">{item.name}</h5>
                      <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="col-md-4 text-end">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => addToCart(item)}
                      >
                        <FaShoppingCart className="me-2" />
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;