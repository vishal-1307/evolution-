import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                alert("Message Sent! We will get back to you soon.");
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch(error => alert(error));
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Get In <span className="highlight">Touch</span></h1>
                <p>Start your journey with us today</p>
            </div>

            <div className="container contact-container">

                {/* Contact Info Side */}
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p className="info-subtitle">
                        Have questions? Reach out to us directly or visit our academy.
                    </p>

                    <div className="info-item">
                        <div className="icon-box"><MapPin /></div>
                        <div>
                            <h3>Visit Us</h3>
                            <p>Town Club Field Road, Madhubani, Bihar</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-box"><Phone /></div>
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 9798140068</p>
                            <p>+91 7557792932</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon-box"><Mail /></div>
                        <div>
                            <h3>Email Us</h3>
                            <p>info@evolutionacademy.com</p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="social-links-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn insta">
                                <Instagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn fb">
                                <Facebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn twitter">
                                <Twitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="contact-form-wrapper">
                    <form
                        className="contact-form"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <h2>Send a Message</h2>

                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="name">Your Name</label>
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            <label htmlFor="phone">Phone Number</label>
                        </div>

                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>

                        <button type="submit" className="btn-submit">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>

            {/* Embedded Map */}
            <div className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.6981784578!2d86.04!3d26.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIxJzAwLjAiTiA4NsKwMDInMjQuMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Academy Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
