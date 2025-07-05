import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-grid">
                    <div className="contact-form">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h3>Find Us</h3>
                        <div className="info-item">
                            <strong>Address:</strong>
                            <p>123 Restaurant Street<br />Brooklyn, NY 11201</p>
                        </div>
                        <div className="info-item">
                            <strong>Hours:</strong>
                            <p>Monday - Saturday: 10:00 AM - 10:00 PM<br />Sunday: Closed</p>
                        </div>
                        <div className="info-item">
                            <strong>Phone:</strong>
                            <p>(555) 123-4567</p>
                        </div>
                        <div className="info-item">
                            <strong>Email:</strong>
                            <p>info@deliciouseats.com</p>
                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <h2 className="section-title">Find Us On Google Map!</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7659006362434!2d-73.96411068459586!3d40.62502677934051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244c844866933%3A0xbde74981ea7251bf!2sDi%20Fara%20Pizza!5e0!3m2!1sen!2sus!4v1623264524549!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;