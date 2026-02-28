import React from 'react';
import './Classes.css';

const Classes = () => {
    return (
        <div className="classes-page">
            <div className="page-header-classes" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${import.meta.env.BASE_URL}hero-bg.png')` }}>
                <h1>Our <span className="highlight">Programs</span></h1>
                <p>Train your body and mind with our expert-led courses.</p>
            </div>

            <section className="program container">
                <div className="program-content">
                    <h2>Karate Training</h2>
                    <p className="program-desc">
                        Our Karate program focuses on discipline, self-defense, and physical fitness.
                        We follow the traditional Shotokan style, suitable for all ages.
                    </p>
                    <ul className="program-features">
                        <li>Self Defense Techniques</li>
                        <li>Physical Conditioning</li>
                        <li>Belt Grading System</li>
                        <li>National Tournament Preparation</li>
                    </ul>

                    <div className="program-details-grid">
                        <div className="detail-box">
                            <span className="label">Duration</span>
                            <span className="value">1 Hr / Session</span>
                        </div>
                        <div className="detail-box">
                            <span className="label">Age Group</span>
                            <span className="value">4+ Years</span>
                        </div>
                        <div className="detail-box">
                            <span className="label">Batches</span>
                            <span className="value">Mon - Sat</span>
                        </div>
                    </div>

                    <button className="btn-primary">Join Karate</button>
                </div>
                <div className="program-image">
                    <img src={`${import.meta.env.BASE_URL}photo-035.jpg`} alt="Karate Class" />
                </div>
            </section>

            <section className="program container reverse">
                <div className="program-content">
                    <h2>Dance Classes</h2>
                    <p className="program-desc">
                        Express yourself through rhythm and movement. We offer a variety of styles
                        taught by professional choreographers.
                    </p>
                    <ul className="program-features">
                        <li>Hip Hop & Urban</li>
                        <li>Contemporary & Modern</li>
                        <li>Bollywood Freestyle</li>
                        <li>Annual Stage Shows</li>
                    </ul>

                    <div className="program-details-grid">
                        <div className="detail-box">
                            <span className="label">Duration</span>
                            <span className="value">1 Hr / Session</span>
                        </div>
                        <div className="detail-box">
                            <span className="label">Age Group</span>
                            <span className="value">5+ Years</span>
                        </div>
                        <div className="detail-box">
                            <span className="label">Batches</span>
                            <span className="value">Mon - Sat</span>
                        </div>
                    </div>

                    <button className="btn-primary">Join Dance</button>
                </div>
                <div className="program-image">
                    <img src={`${import.meta.env.BASE_URL}photo-020.jpg`} alt="Dance Class" />
                </div>
            </section>

            <section className="schedule container">
                <h2>Weekly <span className="highlight">Schedule</span></h2>
                <div className="timetable-wrapper">
                    <div className="timetable">
                        {/* Simple CSS Grid Timetable */}
                        <div className="time-header">Time</div>
                        <div className="day-header">Mon</div>
                        <div className="day-header">Tue</div>
                        <div className="day-header">Wed</div>
                        <div className="day-header">Thu</div>
                        <div className="day-header">Fri</div>
                        <div className="day-header">Sat</div>

                        <div className="time-slot">4:00 PM</div>
                        <div className="class-slot karate">Karate (Kids)</div>
                        <div className="class-slot dance">Hip Hop</div>
                        <div className="class-slot karate">Karate (Kids)</div>
                        <div className="class-slot dance">Hip Hop</div>
                        <div className="class-slot karate">Karate (Kids)</div>
                        <div className="class-slot dance">Open Practice</div>

                        <div className="time-slot">5:00 PM</div>
                        <div className="class-slot dance">Contemporary</div>
                        <div className="class-slot karate">Karate (Adv)</div>
                        <div className="class-slot dance">Contemporary</div>
                        <div className="class-slot karate">Karate (Adv)</div>
                        <div className="class-slot dance">Bollywood</div>
                        <div className="class-slot karate">Sparring</div>

                        <div className="time-slot">6:00 PM</div>
                        <div className="class-slot karate">Adult Fitness</div>
                        <div className="class-slot dance">Freestyle</div>
                        <div className="class-slot karate">Adult Fitness</div>
                        <div className="class-slot dance">Freestyle</div>
                        <div className="class-slot karate">Self Defense</div>
                        <div className="class-slot dance">Choreography</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Classes;
