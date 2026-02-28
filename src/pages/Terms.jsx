import React from 'react';
import './PolicyPages.css';

const Terms = () => {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <h1>Terms & <span className="highlight">Conditions</span></h1>
            </div>
            <div className="container policy-content">
                <p className="policy-updated">Last Updated: February 2026</p>

                <h2>1. Enrollment & Admission</h2>
                <p>By enrolling at Evolution Dance & Karate Academy, you agree to abide by the rules and regulations set by the academy. Admission is subject to availability and age eligibility for the selected program.</p>

                <h2>2. Fees & Payment</h2>
                <p>All fees must be paid in advance on a monthly basis. Fee once paid is non-refundable except as stated in our Refund Policy. Late payment may result in suspension of classes.</p>

                <h2>3. Attendance & Conduct</h2>
                <p>Students are expected to maintain regular attendance and follow the academy's code of conduct. Disruptive behaviour, bullying, or misconduct may result in suspension or expulsion without a refund.</p>

                <h2>4. Safety & Liability</h2>
                <p>Evolution Academy maintains the highest safety standards. However, participation in physical activities carries inherent risks. Parents/guardians acknowledge and accept these risks upon enrollment. The academy is not liable for any injuries sustained during training when safety guidelines are followed.</p>

                <h2>5. Uniforms & Equipment</h2>
                <p>Students must wear the prescribed uniform during classes. For Karate, the academy provides the initial gi (uniform). Replacement costs are borne by the student.</p>

                <h2>6. Photography & Media</h2>
                <p>The academy reserves the right to photograph or record students during classes, performances, and events for promotional purposes. Parents may opt out by submitting a written request.</p>

                <h2>7. Schedule Changes</h2>
                <p>The academy reserves the right to modify class schedules, batch timings, and instructors. Students will be notified in advance of any changes.</p>

                <h2>8. Contact</h2>
                <p>For any queries regarding these terms, contact us at <strong>+91 9798140068</strong> or <strong>info@evolutionacademy.com</strong>.</p>
            </div>
        </div>
    );
};

export default Terms;
