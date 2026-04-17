import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [formState, setFormState] = useState({ name: '', age: '', contact: '', program: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        const data = {
            access_key: "72da7e43-a274-46bd-bccf-78b30ebcfe78",
            subject: "New Callback Request (Home Page)",
            from_name: "Evolution Website",
            ...formState
        };
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data)
        }).then(async (response) => {
            let json = await response.json();
            if (response.status === 200) {
                setFormStatus('success');
                setFormState({ name: '', age: '', contact: '', program: '' });
            } else {
                setFormStatus('error');
            }
        }).catch(() => setFormStatus('error'));
    };

    return (
        <div className="home-grunge">

            {/* ─── HERO ─── */}
            <section className="hg-hero">
                <div className="hg-hero-bg">
                    <img
                        src={`${import.meta.env.BASE_URL}hero-bg.png`}
                        alt="Evolution Dance & Karate"
                        className="hg-hero-img"
                    />
                    <div className="hg-hero-overlay" />
                    {/* Grunge overlay icons */}
                    <span className="hg-grunge-star hg-star-right">★</span>
                    <span className="hg-grunge-star hg-star-left">✦</span>
                </div>
                <div className="hg-hero-content">
                    <div className="hg-hero-accent-text">EVOLUTION</div>
                    <h1 className="hg-hero-title">EVOLUTION</h1>
                    <div className="hg-hero-divider">
                        <div className="hg-gold-bar" />
                        <span className="hg-grit-bg">GRIT</span>
                    </div>
                    <h2 className="hg-hero-sub">
                        <span className="hg-line" />
                        DANCE &amp; KARATE ACADEMY
                        <span className="hg-line" />
                    </h2>
                    <p className="hg-hero-tagline">WHERE PASSION MEETS DISCIPLINE</p>
                    <div className="hg-hero-buttons">
                        <Link to="/join" className="hg-btn-primary">Join Now</Link>
                        <Link to="/classes" className="hg-btn-outline">View Classes</Link>
                    </div>
                </div>
            </section>

            {/* ─── STATS BAR ─── */}
            <section className="hg-stats-wrap">
                <div className="hg-stats-border">
                    <div className="hg-stats-inner">
                        <div className="hg-stat">
                            <div className="hg-stat-num">10+</div>
                            <div className="hg-stat-label">Years of Excellence</div>
                        </div>
                        <div className="hg-stat">
                            <div className="hg-stat-num">500+</div>
                            <div className="hg-stat-label">Active Students</div>
                        </div>
                        <div className="hg-stat">
                            <div className="hg-stat-num">10+</div>
                            <div className="hg-stat-label">National Awards</div>
                        </div>
                        <div className="hg-stat">
                            <div className="hg-stat-num">8</div>
                            <div className="hg-stat-label">Elite Programs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ABOUT (WELCOME) ─── */}
            <section className="hg-about">
                <div className="hg-about-text">
                    <h2 className="hg-about-title">
                        <span className="hg-paint-stroke">WELCOME</span>
                        <span>TO EVOLUTION</span>
                    </h2>
                    <div className="hg-about-body">
                        <p>
                            For over a decade, we have been the heartbeat of Madhubani's artistic and athletic community.
                            Directed by <strong className="hg-director">Manish Thakur</strong>, our academy bridges
                            the gap between the fluid grace of dance and the disciplined power of karate.
                        </p>
                        <blockquote className="hg-quote">
                            "Our mission is to foster an environment where students evolve into the best versions of themselves."
                        </blockquote>
                        <Link to="/about" className="hg-btn-white">
                            Our Story <span>→</span>
                        </Link>
                    </div>
                </div>
                <div className="hg-about-images">
                    <div className="hg-img-border-gold" />
                    <div className="hg-img-border-white" />
                    <div className="hg-img-grid">
                        <div className="hg-img-col hg-col-offset">
                            <img src={`${import.meta.env.BASE_URL}photo-015.jpg`} alt="Dance" className="hg-img hg-img-tall hg-grayscale" />
                            <img src={`${import.meta.env.BASE_URL}photo-035.jpg`} alt="Karate" className="hg-img hg-img-med" />
                        </div>
                        <div className="hg-img-col">
                            <img src={`${import.meta.env.BASE_URL}photo-025.jpg`} alt="Academy" className="hg-img hg-img-med" />
                            <img src={`${import.meta.env.BASE_URL}photo-060.jpg`} alt="Training" className="hg-img hg-img-tall hg-grayscale hg-border-white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PROGRAMS ─── */}
            <section className="hg-programs hg-torn-top hg-torn-bottom">
                <div className="hg-brush-overlay" />
                <div className="hg-programs-inner">
                    <div className="hg-section-header">
                        <span className="hg-accent-label">EXPERIENCE</span>
                        <h2 className="hg-programs-title">ELITE PROGRAMS</h2>
                        <div className="hg-title-bar" />
                    </div>
                    <div className="hg-programs-grid">
                        {/* Dance */}
                        <div className="hg-program-card hg-dance-card">
                            <img
                                src={`${import.meta.env.BASE_URL}photo-020.jpg`}
                                alt="Dance Programs"
                                className="hg-program-img"
                            />
                            <div className="hg-program-overlay" />
                            <div className="hg-program-content">
                                <h3 className="hg-program-name">DANCE</h3>
                                <div className="hg-program-list-grid">
                                    <ul className="hg-prog-list">
                                        <li>* Hip Hop</li>
                                        <li>* House</li>
                                        <li>* Breaking</li>
                                        <li>* Bollywood</li>
                                    </ul>
                                    <ul className="hg-prog-list">
                                        <li>* Contemporary</li>
                                        <li>* Classical</li>
                                        <li>* Zumba</li>
                                    </ul>
                                </div>
                                <Link to="/classes" className="hg-btn-prog">Explore →</Link>
                            </div>
                        </div>
                        {/* Karate */}
                        <div className="hg-program-card hg-karate-card">
                            <img
                                src={`${import.meta.env.BASE_URL}photo-060.jpg`}
                                alt="Karate Programs"
                                className="hg-program-img"
                            />
                            <div className="hg-program-overlay" />
                            <div className="hg-program-content">
                                <h3 className="hg-program-name">KARATE</h3>
                                <ul className="hg-prog-list">
                                    <li>* Self Defence</li>
                                    <li>* Gymnastic</li>
                                    <li>* Kickboxing</li>
                                    <li>* Tournament Prep</li>
                                </ul>
                                <Link to="/classes" className="hg-btn-prog">Explore →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── GALLERY PREVIEW ─── */}
            <section className="hg-gallery">
                <div className="hg-gallery-header">
                    <div className="hg-gallery-title-wrap">
                        <div className="hg-moments-bg">MOMENTS</div>
                        <h2 className="hg-gallery-title">
                            LIFE AT<br />
                            <span className="hg-gold">EVOLUTION</span>
                        </h2>
                    </div>
                    <Link to="/gallery" className="hg-btn-primary">Full Gallery</Link>
                </div>
                <div className="hg-gallery-grid">
                    <div className="hg-gallery-item hg-gi-white hg-gi-rotate-n2">
                        <img src={`${import.meta.env.BASE_URL}photo-015.jpg`} alt="Gallery 1" />
                        <span className="hg-gi-num">01</span>
                    </div>
                    <div className="hg-gallery-item hg-gi-gold hg-gi-rotate-3 hg-gi-mt">
                        <img src={`${import.meta.env.BASE_URL}photo-025.jpg`} alt="Gallery 2" />
                        <span className="hg-gi-num hg-gi-num-white">02</span>
                    </div>
                    <div className="hg-gallery-item hg-gi-white hg-gi-rotate-n1">
                        <img src={`${import.meta.env.BASE_URL}photo-035.jpg`} alt="Gallery 3" />
                        <span className="hg-gi-num">03</span>
                    </div>
                    <div className="hg-gallery-item hg-gi-gold hg-gi-rotate-2 hg-gi-mt">
                        <img src={`${import.meta.env.BASE_URL}photo-065.jpg`} alt="Gallery 4" />
                        <span className="hg-gi-num hg-gi-num-white">04</span>
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIAL ─── */}
            <section className="hg-testimonial hg-torn-top hg-torn-bottom">
                <div className="hg-brush-overlay hg-brush-light" />
                <div className="hg-testimonial-inner">
                    <span className="hg-quote-mark">"</span>
                    <blockquote className="hg-testimonial-text">
                        "Evolution is more than an academy; it's where I found my confidence.
                        The instructors push you to your limits while ensuring you feel like family."
                    </blockquote>
                    <div className="hg-cite-bar" />
                    <cite className="hg-cite">
                        <span className="hg-cite-name">Rahul Kumar</span>
                        <span className="hg-cite-role">Senior Karate Student &amp; Trainer</span>
                    </cite>
                </div>
            </section>

            {/* ─── CALLBACK FORM ─── */}
            <section className="hg-callback">
                <div className="hg-callback-inner">
                    <div className="hg-callback-text">
                        <span className="hg-accent-label">Get Started</span>
                        <h2 className="hg-callback-title">BOOK A FREE<br /><span className="hg-gold">TRIAL CLASS</span></h2>
                        <p>Limited slots available. Reserve yours today.</p>
                    </div>
                    <form className="hg-form" onSubmit={handleFormSubmit}>
                        <input
                            type="text" name="name" placeholder="Student Name"
                            required value={formState.name} onChange={handleInputChange}
                            className="hg-input"
                        />
                        <input
                            type="number" name="age" placeholder="Age"
                            required value={formState.age} onChange={handleInputChange}
                            className="hg-input"
                        />
                        <input
                            type="tel" name="contact" placeholder="Contact Number"
                            required value={formState.contact} onChange={handleInputChange}
                            className="hg-input"
                        />
                        <select name="program" value={formState.program} onChange={handleInputChange} className="hg-input hg-select">
                            <option value="">Select Program</option>
                            <option value="Dance">Dance</option>
                            <option value="Karate">Karate</option>
                        </select>
                        <button type="submit" className="hg-btn-primary hg-form-btn" disabled={formStatus === 'sending'}>
                            {formStatus === 'sending' ? 'Sending...' : 'REQUEST CALLBACK'}
                        </button>
                        {formStatus === 'success' && <p className="hg-form-success">✓ Request sent! We'll call you soon.</p>}
                        {formStatus === 'error' && <p className="hg-form-error">Something went wrong. Please try again.</p>}
                    </form>
                </div>
            </section>

            {/* ─── FINAL CTA ─── */}
            <section className="hg-cta">
                <div className="hg-cta-box">
                    <div className="hg-brush-overlay" />
                    <div className="hg-cta-join-bg">JOIN</div>
                    <h2 className="hg-cta-title">
                        READY TO<br />START YOUR<br />
                        <span className="hg-cta-white">JOURNEY?</span>
                    </h2>
                    <p className="hg-cta-sub">Limited slots available for our new batch. Register today.</p>
                    <Link to="/join" className="hg-btn-cta">Register Now</Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
