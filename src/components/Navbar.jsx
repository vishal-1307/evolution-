import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/evolution-logo.png" alt="Evolution Academy" className="logo-img" />
                    <span className="logo-text">EVOLUTION</span>
                </Link>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" end className={navLinkClass} onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About Us</NavLink></li>
                    <li><NavLink to="/classes" className={navLinkClass} onClick={closeMenu}>Programs</NavLink></li>
                    <li><NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>Gallery</NavLink></li>
                    <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink></li>
                    <li>
                        <Link to="/join" className="btn-nav" onClick={closeMenu}>
                            REGISTER NOW
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
