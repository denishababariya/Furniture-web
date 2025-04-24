import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Modern Living Room Collection',
      subtitle: 'Transform your living space with our exclusive designs',
      cta: 'Shop Now',
      
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Bedroom Essentials',
      subtitle: 'Create your perfect sanctuary with our premium collection',
      cta: 'Explore More',
    },
    {
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Office Furniture Sale',
      subtitle: 'Up to 40% off on selected office furniture',
      cta: 'View Deals',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <button className="slide-cta primary-btn">{slide.cta}</button>
          </div>
        </div>
      ))}
      <button className="slider-nav prev" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="slider-nav next" onClick={nextSlide}>
        <FaArrowRight />
      </button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;