import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "Aditya Kumar",
            role: "Karate Student",
            text: "Evolution Academy changed my life. The discipline I learned here helps me in my studies too. Best place for martial arts in Madhubani!"
        },
        {
            name: "Priya Singh",
            role: "Dance Student",
            text: "I was shy to dance, but the instructors here are so supportive. Now I perform on stage with confidence. Thank you Evolution!"
        },
        {
            name: "Rahul Mishra",
            role: "Parent",
            text: "My son has become more active and focused since joining the karate classes. Highly recommend this academy to all parents."
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">STUDENT <span className="highlight">STORIES</span></h2>
                    <p className="section-subtitle">Hear from our community.</p>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div className="testimonial-card" key={index}>
                            <Quote size={40} className="quote-icon" />
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4>{review.name}</h4>
                                    <span>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
