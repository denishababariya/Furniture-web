import React from 'react';

const About = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mb-4">About MyFurniture</h2>
                    <div className="card shadow-sm p-4 mb-4">
                        <h4>Our Story</h4>
                        <p>Since 2010, MyFurniture has been dedicated to bringing beautiful, functional, and high-quality furniture to homes across the country. What started as a small family business has grown into a trusted name in home furnishing.</p>
                    </div>
                    
                    <div className="card shadow-sm p-4 mb-4">
                        <h4>Our Mission</h4>
                        <p>We believe that everyone deserves to live in a space they love. Our mission is to provide affordable, stylish furniture that transforms houses into homes, while delivering exceptional customer service every step of the way.</p>
                    </div>
                    
                    <div className="row mt-4">
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h3 className="h5 mb-3">Quality First</h3>
                                    <p>We source only the finest materials and work with skilled craftsmen to ensure lasting quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h3 className="h5 mb-3">Design Excellence</h3>
                                    <p>Our furniture combines contemporary aesthetics with timeless design principles.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h3 className="h5 mb-3">Customer Focus</h3>
                                    <p>Your satisfaction is our priority, from browsing to delivery and beyond.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;