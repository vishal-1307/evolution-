import React from 'react';
import { Award, Users, Zap, Heart } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <Award size={32} />,
            title: "Certified Instructors",
            description: "Learn from national-level champions and certified dance professionals."
        },
        {
            icon: <Users size={32} />,
            title: "Personal Attention",
            description: "Small batch sizes ensure every student gets the guidance they need."
        },
        {
            icon: <Zap size={32} />,
            title: "Modern Facilities",
            description: "Spacious studio with professional flooring, mirrors, and sound systems."
        },
        {
            icon: <Heart size={32} />,
            title: "Supportive Community",
            description: "Join a family that celebrates every milestone and encourages growth."
        }
    ];

    return (
        <section className="why-choose-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Why Us</span>
                    <h2>Why Choose <span className="highlight">Evolution</span>?</h2>
                    <p>We don't just teach steps; we build character.</p>
                </div>

                <div className="why-grid">
                    {benefits.map((benefit, index) => (
                        <div className="why-card" key={index}>
                            <div className="why-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
