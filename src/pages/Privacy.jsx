import React from 'react';
import './PolicyPages.css';

const Privacy = () => {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <h1>Privacy <span className="highlight">Policy</span></h1>
            </div>
            <div className="container policy-content">
                <p className="policy-updated">Last Updated: February 2026</p>

                <h2>1. Information We Collect</h2>
                <p>We collect personal information provided during registration including student name, age, gender, parent/guardian details, phone numbers, email addresses, and any medical history shared for safety purposes.</p>

                <h2>2. How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul>
                    <li>Process admissions and manage student records</li>
                    <li>Communicate class schedules, events, and announcements</li>
                    <li>Send progress reports to parents/guardians</li>
                    <li>Improve our services and training programs</li>
                </ul>

                <h2>3. Data Protection</h2>
                <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. Student data is stored securely and accessible only to authorized academy staff.</p>

                <h2>4. Third-Party Sharing</h2>
                <p>We do not sell, trade, or share your personal information with third parties, except when required by law or for competition/certification registrations with your consent.</p>

                <h2>5. Photos & Videos</h2>
                <p>Photos and videos captured during academy events may be used for marketing on our website and social media. You may request removal of specific content by contacting us directly.</p>

                <h2>6. Cookies & Website Data</h2>
                <p>Our website may use cookies to enhance your browsing experience. These cookies do not collect personal information and can be disabled through your browser settings.</p>

                <h2>7. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. Contact us at <strong>info@evolutionacademy.com</strong> to exercise these rights.</p>
            </div>
        </div>
    );
};

export default Privacy;
