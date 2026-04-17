import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 600);
        }, 1800);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`} style={fadeOut ? { opacity: 0, transition: 'opacity 0.6s ease' } : {}}>
            <div className="loader-content">
                <span className="loader-logo">EVOLUTION</span>
                <div className="loader-bar"></div>
            </div>
        </div>
    );
};

export default Loader;
