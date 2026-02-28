import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="container stats-container">

                {/* Left Side: Artistic Image */}
                <div className="stats-image-wrapper">
                    <img src="/photo-070.jpg" alt="Dancer" className="stats-dancer-img" />
                    {/* Decorative Paint/Brush effect could go here if we had SVGs, 
              for now we'll use CSS shapes/gradients */}
                    <div className="stats-blob"></div>
                </div>

                {/* Right Side: Content */}
                <div className="stats-content">
                    <div className="stats-header">
                        <h2 className="stats-heading">NUMBERS</h2>
                        <span className="stats-watermark">AT A GLANCE</span>
                    </div>

                    <div className="stats-bar">
                        <div className="stat-item">
                            <span className="stat-number">2015</span>
                            <span className="stat-label">Year Founded</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Expert Faculty</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Students Trained</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Awards Won</span>
                        </div>
                    </div>

                    <p className="stats-description">
                        Join the fastest growing community of artists and martial artists in Madhubani.
                        Experience professional training that transforms beginners into champions.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
