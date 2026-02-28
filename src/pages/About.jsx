import React, { useRef } from 'react';
import { Award, Users, Shield, Heart, Zap, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
    const navigate = useNavigate();
    const secretClickCountRef = useRef(0);
    const secretTimerRef = useRef(null);

    const handleSecretClick = () => {
        secretClickCountRef.current += 1;
        if (secretTimerRef.current) clearTimeout(secretTimerRef.current);
        if (secretClickCountRef.current >= 5) {
            secretClickCountRef.current = 0;
            navigate('/evolution-admin-gallery');
        } else {
            secretTimerRef.current = setTimeout(() => {
                secretClickCountRef.current = 0;
            }, 3000);
        }
    };

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${import.meta.env.BASE_URL}karate-class.png') center/cover` }}>
                <div className="container">
                    <h1>ABOUT <span className="highlight">EVOLUTION</span></h1>
                    <p>More than an academy. A legacy of discipline and art.</p>
                </div>
            </section>

            {/* Story / Mission / Vision */}
            <section className="about-story container section-padding">
                <div className="story-grid">
                    <div className="story-text">
                        <h2>OUR <span className="highlight">STORY</span></h2>
                        <p>
                            Founded in 2012, Evolution Dance & Karate Academy started with a simple belief:
                            that the discipline of martial arts and the expression of dance are two sides of the same coin—personal growth.
                            Over the last decade, we have trained over 5000 students, creating national champions and professional performers.
                        </p>
                        <div className="mission-vision-box">
                            <div>
                                <h3>Mission</h3>
                                <p>To empower youth through physical fitness, mental discipline, and creative expression.</p>
                            </div>
                            <div>
                                <h3>Vision</h3>
                                <p>To be the leading center for holistic development in Bihar, nurturing future leaders and artists.</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-image">
                        <img src={`${import.meta.env.BASE_URL}photo-090.jpg`} alt="Our Journey" />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>OUR <span className="highlight">VALUES</span></h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <Shield size={40} className="value-icon" />
                            <h3>Discipline</h3>
                            <p>The foundation of all success.</p>
                        </div>
                        <div className="value-card">
                            <Zap size={40} className="value-icon" />
                            <h3>Creativity</h3>
                            <p>Expressing the unsaid through movement.</p>
                        </div>
                        <div className="value-card">
                            <Heart size={40} className="value-icon" />
                            <h3>Fitness</h3>
                            <p>A healthy body houses a sharp mind.</p>
                        </div>
                        <div className="value-card">
                            <Award size={40} className="value-icon" />
                            <h3>Confidence</h3>
                            <p>Believing in oneself, on and off stage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructors (Moved from separate page) */}
            <section className="instructors-section container section-padding">
                <div className="section-header text-center">
                    <h2>MEET OUR <span className="highlight">MASTERS</span></h2>
                    <p>The guiding lights behind every student's success</p>
                </div>
                <div className="instructors-grid">
                    <div className="instructor-card">
                        <div className="instructor-img-wrapper">
                            <img src={`${import.meta.env.BASE_URL}photo-045.jpg`} alt="Sensei Rahul" />
                        </div>
                        <h3>Sensei Rahul Kumar</h3>
                        <span className="sc-role">HEAD KARATE INSTRUCTOR</span>
                        <p>Black Belt 4th Dan | 15+ Years Exp</p>
                        <div className="sc-achievements">
                            <span><Star size={14} /> National Gold Medalist</span>
                            <span><Star size={14} /> Certified Self-Defense Trainer</span>
                        </div>
                    </div>
                    <div className="instructor-card">
                        <div className="instructor-img-wrapper">
                            <img src={`${import.meta.env.BASE_URL}photo-080.jpg`} alt="Priya Singh" />
                        </div>
                        <h3>Priya Singh</h3>
                        <span className="sc-role" onClick={handleSecretClick} style={{ cursor: 'default', userSelect: 'none' }}>HEAD DANCE CHOREOGRAPHER</span>
                        <p>Hip-Hop & Contemporary Specialist | 10+ Years Exp</p>
                        <div className="sc-achievements">
                            <span><Star size={14} /> Winner of 'Dance Bihar Dance'</span>
                            <span><Star size={14} /> Trained by International Artists</span>
                        </div>
                    </div>
                    {/* Add more instructors as needed */}
                </div>
            </section>

            {/* Infrastructure & Certifications */}
            <section className="infra-cert-section section-padding">
                <div className="container infra-grid">
                    <div className="infra-box">
                        <h2>WORLD CLASS <span className="highlight">INFRASTRUCTURE</span></h2>
                        <ul>
                            <li><CheckCircle size={20} className="check-icon" /> Professional Wooden Flooring (Injury Free)</li>
                            <li><CheckCircle size={20} className="check-icon" /> Full-Wall Mirrors for Self-Correction</li>
                            <li><CheckCircle size={20} className="check-icon" /> Premium JBL Sound System</li>
                            <li><CheckCircle size={20} className="check-icon" /> Safety Mats & Karate Gear</li>
                        </ul>
                    </div>
                    <div className="cert-box">
                        <h2>AUTHORIZED <span className="highlight">CERTIFICATIONS</span></h2>
                        <p>We don't just train; we certify your progress.</p>
                        <div className="cert-badges">
                            <div className="cert-badge">KAI Recognition (Karate)</div>
                            <div className="cert-badge">Trinity College (Dance Theory)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Parents Trust Us */}
            <section className="trust-section container section-padding text-center">
                <h2>WHY PARENTS <span className="highlight">TRUST US</span></h2>
                <div className="trust-grid">
                    <div className="trust-item">
                        <h3>Safe Environment</h3>
                        <p>CCTV monitored premises with female attendants.</p>
                    </div>
                    <div className="trust-item">
                        <h3>Regular Updates</h3>
                        <p>Monthly progress reports and parent-teacher meetings.</p>
                    </div>
                    <div className="trust-item">
                        <h3>Holistic Growth</h3>
                        <p>Focus on grades, behaviour, and overall personality.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
