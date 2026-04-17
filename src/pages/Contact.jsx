import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send } from 'lucide-react';
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            access_key: "72da7e43-a274-46bd-bccf-78b30ebcfe78",
            subject: "New Message (Contact Page)",
            from_name: "Evolution Website",
            ...formData
        };

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    alert("Message Sent! We will get back to you soon.");
                    setFormData({ name: '', email: '', phone: '', message: '' });
                } else {
                    alert(json.message);
                }
            })
            .catch(error => {
                alert("Something went wrong!");
                console.log(error);
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${import.meta.env.BASE_URL}hero-bg.png') center/cover` }}>
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
                            <a href="https://www.instagram.com/madhubani__dance" target="_blank" rel="noreferrer" className="social-btn insta">
                                <Instagram />
                            </a>
                            <a href="https://www.facebook.com/manish.thakur.749341/" target="_blank" rel="noreferrer" className="social-btn fb">
                                <Facebook />
                            </a>
                            <a href="https://www.youtube.com/@Evolution.dance.academy/" target="_blank" rel="noreferrer" className="social-btn twitter">
                                <Youtube />
                            </a>
                            <a href="https://wa.me/919798140068" target="_blank" rel="noreferrer" className="social-btn" style={{background: '#25D366', color: '#fff'}} aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.5411715141194!2d86.0750619481828!3d26.348796448843377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd18935d4643%3A0xe8507b2bd1290180!2sEVALUATION%20DANCE%20AND%20KARATE%20ACADEMY!5e1!3m2!1sen!2sin!4v1776404256982!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Academy Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
