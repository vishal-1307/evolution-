import React from 'react';
import { Award, Users, Zap, Heart } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <Award size={40} />,
            title: "Certified Instructors",
            description: "Learn from national-level champions and certified dance professionals."
        },
        {
            icon: <Users size={40} />,
            title: "Personal Attention",
            description: "Small batch sizes ensure every student gets the guidance they need."
        },
        {
            icon: <Zap size={40} />,
            title: "Modern Facilities",
            description: "Spacious studio with professional flooring, mirrors, and sound systems."
        },
        {
            icon: <Heart size={40} />,
            title: "Supportive Community",
            description: "Join a family that celebrates every milestone and encourages growth."
        }
    ];

    return (
        <section className="why-choose-us container">
            <div className="section-header text-center">
                <h2 className="section-title">WHY CHOOSE <span className="highlight">EVOLUTION</span>?</h2>
                <p className="section-subtitle">We don't just teach steps; we build character.</p>
            </div>

            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div className="benefit-card" key={index}>
                        <div className="benefit-icon-wrapper">
                            {benefit.icon}
                        </div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
