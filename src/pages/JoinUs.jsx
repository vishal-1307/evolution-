import React, { useState } from 'react';
import './JoinUs.css';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        age: '',
        gender: '',
        parentName: '',
        phone: '',
        email: '',
        program: '',
        batch: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formBody = {
            "form-name": "admission",
            ...formData
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(formBody)
        })
            .then(() => {
                alert("Registration Request Submitted Successfully!");
                setFormData({
                    studentName: '',
                    age: '',
                    gender: '',
                    parentName: '',
                    phone: '',
                    email: '',
                    program: '',
                    batch: '',
                    message: ''
                });
            })
            .catch(error => alert(error));
    };

    return (
        <div className="join-page">
            <div className="join-hero" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${import.meta.env.BASE_URL}hero-bg.png') center/cover` }}>
                <div className="container">
                    <h1>JOIN <span className="highlight">EVOLUTION</span></h1>
                    <p>Start your journey towards excellence today.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="form-wrapper">
                    <div className="form-header text-center">
                        <h2>ADMISSION <span className="highlight">FORM</span></h2>
                        <p>Please fill in the details below to register for a trial class or admission.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="registration-form" name="admission" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="admission" />

                        {/* Student Details */}
                        <div className="form-section">
                            <h3>Student Details</h3>
                            <div className="form-grid">
                                <div className="join-form-group">
                                    <label>Student Name *</label>
                                    <input
                                        type="text"
                                        name="studentName"
                                        value={formData.studentName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="join-form-group">
                                    <label>Age *</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                        placeholder="Age in years"
                                    />
                                </div>
                                <div className="join-form-group">
                                    <label>Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Guardian Details */}
                        <div className="form-section">
                            <h3>Parent / Guardian Details</h3>
                            <div className="form-grid">
                                <div className="join-form-group">
                                    <label>Parent Name *</label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Parent/Guardian Name"
                                    />
                                </div>
                                <div className="join-form-group">
                                    <label>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div className="join-form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Program Selection */}
                        <div className="form-section">
                            <h3>Program Preferences</h3>
                            <div className="form-grid">
                                <div className="join-form-group">
                                    <label>Interested Program *</label>
                                    <select name="program" value={formData.program} onChange={handleChange} required>
                                        <option value="">Select Program</option>
                                        <option value="Dance">Dance (Hip-Hop, Contemporary, etc.)</option>
                                        <option value="Karate">Karate (Martial Arts)</option>
                                        <option value="Both">Both</option>
                                    </select>
                                </div>
                                <div className="join-form-group">
                                    <label>Preferred Batch</label>
                                    <select name="batch" value={formData.batch} onChange={handleChange}>
                                        <option value="">Any Time</option>
                                        <option value="Morning">Morning Batch</option>
                                        <option value="Afternoon">Afternoon Batch</option>
                                        <option value="Evening">Evening Batch</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="form-group full-width">
                            <label>Health Issues / Previous Experience / Notes</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Any medical conditions or previous training experience we should know about..."
                            ></textarea>
                        </div>

                        <div className="form-actions text-center">
                            <button type="submit" className="btn-primary btn-large">SUBMIT REGISTRATION</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
