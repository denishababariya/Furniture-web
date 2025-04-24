import React, { useState } from 'react';
import { FaTrash, FaHeart, FaRegHeart, FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Modern Leather Sofa',
      price: 899.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      inWishlist: false
    },
    {
      id: 2,
      name: 'Queen Size Bed Frame',
      price: 699.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      inWishlist: true
    }
  ]);

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 3,
      name: 'Dining Table Set',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const toggleWishlist = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      if (!item.inWishlist) {
        setWishlistItems([...wishlistItems, {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image
        }]);
      } else {
        setWishlistItems(wishlistItems.filter(wItem => wItem.id !== id));
      }
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, inWishlist: !item.inWishlist } : item
      ));
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, inWishlist: false } : item
    ));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Cart Section */}
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="mb-4">Your Cart</h2>
              {cartItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="row align-items-center mb-3 p-3 border rounded hover-shadow">
                  <div className="col-md-2">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-4">
                    <h5 className="mb-0">{item.name}</h5>
                    <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, -1)}>
                        <FaMinus />
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <p className="fw-bold mb-0">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="col-md-1 d-flex justify-content-end">
                    <button
                      className="btn btn-link text-danger me-2"
                      onClick={() => removeFromCart(item.id)}>
                      <FaTrash />
                    </button>
                    <button
                      className="btn btn-link text-primary"
                      onClick={() => toggleWishlist(item.id)}>
                      {item.inWishlist ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wishlist Section */}
         
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="mb-4">Order Summary</h3>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center">
                Proceed to Checkout <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
