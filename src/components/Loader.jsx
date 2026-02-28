import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 600);
        }, 2000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`loader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <img src="/evolution-logo.png" alt="Evolution" className="loader-logo" />
                <h1 className="loader-title">EVOLUTION</h1>
                <p className="loader-subtitle">Dance & Karate Academy</p>
                <div className="loader-bar">
                    <div className="loader-bar-fill"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
