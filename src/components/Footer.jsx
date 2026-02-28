import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Column 1: Academy Info */}
                <div className="footer-col academy-info">
                    <div className="footer-brand">
                        <img src="/evolution-logo.png" alt="Evolution Academy" className="footer-logo-img" />
                        <h2 className="footer-logo">EVOLUTION</h2>
                    </div>
                    <p className="footer-intro">
                        Where Passion Meets Discipline. Join us to master the art of Dance and Karate with certified professionals.
                    </p>
                    <div className="footer-contact-details">
                        <p><MapPin size={16} /> Town Club Field Road, Madhubani</p>
                        <p><Phone size={16} /> +91 9798140068</p>
                        <p><Mail size={16} /> info@evolutionacademy.com</p>
                    </div>
                </div>



                {/* Column 3: Policies */}
                <div className="footer-col policies">
                    <h3>Policies</h3>
                    <ul>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/refund">Refund Policy</Link></li>
                    </ul>
                </div>

                {/* Column 4: Social Media */}
                <div className="footer-col social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={20} /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><Facebook size={20} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon"><Youtube size={20} /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Evolution Dance & Karate Academy. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
