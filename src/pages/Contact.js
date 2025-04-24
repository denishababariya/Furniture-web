import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h2>Contact Us</h2>
                    <p className="text-muted">We'd love to hear from you. Please fill out this form or use our contact information below.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="contact-info bg-light p-4 rounded h-100">
                        <h4 className="mb-4">Get in Touch</h4>
                        
                        <div className="d-flex align-items-center mb-3">
                            <FaPhone className="text-primary me-3" />
                            <div>
                                <h5 className="mb-0">Phone</h5>
                                <p className="mb-0">(123) 456-7890</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mb-3">
                            <FaEnvelope className="text-primary me-3" />
                            <div>
                                <h5 className="mb-0">Email</h5>
                                <p className="mb-0">support@myfurniture.com</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <FaMapMarkerAlt className="text-primary me-3" />
                            <div>
                                <h5 className="mb-0">Address</h5>
                                <p className="mb-0">1234 Furniture Ave, Design District</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="mb-3">Business Hours</h4>
                            <p className="mb-1">Monday - Friday: 9:00 AM - 8:00 PM</p>
                            <p className="mb-1">Saturday: 10:00 AM - 6:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="contact-form bg-light p-4 rounded">
                        <h4 className="mb-4">Send us a Message</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;