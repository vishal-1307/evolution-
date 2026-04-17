import React, { useState, useEffect } from 'react';
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

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="overline">Testimonials</span>
                    <h2>Student Stories</h2>
                    <p>Hear from our community.</p>
                </div>

                <div className="testimonial-content">
                    <div className="testimonial-quote-mark">"</div>
                    <p className="testimonial-text">{reviews[current].text}</p>
                    <h4 className="testimonial-author">{reviews[current].name}</h4>
                    <span className="testimonial-role">{reviews[current].role}</span>

                    <div className="testimonial-dots">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`testimonial-dot ${current === index ? 'active' : ''}`}
                                onClick={() => setCurrent(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
