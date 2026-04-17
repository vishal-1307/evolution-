import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
    const stats = [
        { number: '10+', label: 'Years' },
        { number: '500+', label: 'Students Trained' },
        { number: '10+', label: 'Awards Won' },
        { number: '8', label: 'Programs' }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
