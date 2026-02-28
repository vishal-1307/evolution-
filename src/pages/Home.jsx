import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Shield, PlayCircle } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import './Home.css';

const Home = () => {
    const [formState, setFormState] = useState({
        name: '',
        age: '',
        contact: '',
        program: ''
    });

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            access_key: "72da7e43-a274-46bd-bccf-78b30ebcfe78",
            subject: "New Callback Request (Home Page)",
            from_name: "Evolution Website",
            ...formState
        };

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    alert("Callback Request Sent!");
                    setFormState({ name: '', age: '', contact: '', program: '' });
                } else {
                    alert(json.message);
                }
            })
            .catch(error => {
                alert("Something went wrong!");
                console.log(error);
            });
    };

    return (
        <div className="home">
            {/* 1. Hero Banner */}
            <section className="hero" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 8, 10, 0.8), rgba(0, 20, 30, 0.6)), url('${import.meta.env.BASE_URL}hero-bg.png')` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container text-center">
                    <h1 className="hero-title">
                        EVOLUTION DANCE & KARATE ACADEMY
                        <span className="d-block">WHERE PASSION MEETS DISCIPLINE</span>
                    </h1>
                    <div className="hero-buttons">
                        <Link to="/join" className="btn-primary">JOIN NOW</Link>
                        <Link to="/classes" className="btn-secondary">VIEW CLASSES</Link>
                    </div>
                </div>
            </section>

            {/* 2. About Academy (Short Section) */}
            <section className="about-short container text-center">
                <h2>WELCOME TO <span className="highlight">EVOLUTION</span></h2>
                <div className="about-divider"></div>
                <p>
                    With over 10 years of excellence, Evolution Dance & Karate Academy is the premier destination for performing arts and martial arts training.
                    Our certified trainers are dedicated to nurturing talent, building confidence, and fostering a spirit of discipline in every student.
                    Whether you aspire to be a professional dancer or a black belt karateka, your journey begins here.
                </p>
            </section>

            {/* 3. Why Join Us (Benefits) */}
            <WhyChooseUs />

            {/* Stats Section */}
            <StatsSection />

            {/* 4. Programs Overview */}
            <section className="programs-overview container">
                <div className="section-header text-center">
                    <h2>OUR <span className="highlight">PROGRAMS</span></h2>
                    <p>Discover your potential with our expert-led courses.</p>
                </div>
                <div className="programs-grid">
                    <div className="program-card">
                        <Music size={40} className="program-icon" />
                        <h3>Hip-Hop & Freestyle</h3>
                        <p>Master the latest moves, grooves, and urban styles.</p>
                        <Link to="/classes" className="btn-link">Learn More <ArrowRight size={16} /></Link>
                    </div>
                    <div className="program-card">
                        <PlayCircle size={40} className="program-icon" />
                        <h3>Contemporary</h3>
                        <p>Expressive dance focusing on fluidity and emotion.</p>
                        <Link to="/classes" className="btn-link">Learn More <ArrowRight size={16} /></Link>
                    </div>
                    <div className="program-card">
                        <Music size={40} className="program-icon" />
                        <h3>Bollywood</h3>
                        <p>High-energy routines mixing traditional and modern beats.</p>
                        <Link to="/classes" className="btn-link">Learn More <ArrowRight size={16} /></Link>
                    </div>
                    <div className="program-card">
                        <Shield size={40} className="program-icon" />
                        <h3>Karate (Shotokan)</h3>
                        <p>From white belt to black belt - discipline, defense, fitting.</p>
                        <Link to="/classes" className="btn-link">Learn More <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* 5. Gallery Preview */}
            <section className="gallery-preview">
                <div className="container">
                    <div className="header-flex">
                        <h2>LIFE AT <span className="highlight">EVOLUTION</span></h2>
                        <Link to="/gallery" className="view-all-link">View All Gallery <ArrowRight size={16} /></Link>
                    </div>
                    <div className="gallery-grid-home">
                        <div className="gallery-item-home item-1" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}photo-015.jpg')` }}></div>
                        <div className="gallery-item-home item-2" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}photo-060.jpg')` }}></div>
                        <div className="gallery-item-home item-3" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}photo-025.jpg')` }}></div>
                        <div className="gallery-item-home item-4" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}photo-065.jpg')` }}></div>
                    </div>
                </div>
            </section>

            {/* 6. Student Reviews */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />

            {/* 7. Join Us / Registration Section */}
            <section className="home-join-section">
                <div className="container join-container">
                    <div className="join-text">
                        <h2>READY TO <span className="highlight">START?</span></h2>
                        <p>Book your free trial class today. Limited slots available for new batches.</p>
                    </div>
                    <form
                        className="mini-join-form"
                        name="callback-request"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleFormSubmit}
                    >
                        <input type="hidden" name="form-name" value="callback-request" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Student Name"
                            required
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            required
                            value={formState.age}
                            onChange={handleInputChange}
                        />
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Contact Number"
                            required
                            value={formState.contact}
                            onChange={handleInputChange}
                        />
                        <select
                            name="program"
                            value={formState.program}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Program</option>
                            <option value="Dance">Dance</option>
                            <option value="Karate">Karate</option>
                        </select>
                        <button type="submit" className="btn-primary">REQUEST CALLBACK</button>
                    </form>
                </div>
            </section>

            {/* 8. Final Call-to-Action Banner */}
            <section className="cta-banner text-center">
                <h2>BEGIN YOUR DANCE OR KARATE JOURNEY TODAY WITH EVOLUTION ACADEMY!</h2>
                <Link to="/join" className="btn-white">REGISTER NOW</Link>
            </section>
        </div>
    );
};

export default Home;
