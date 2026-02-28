import React from 'react';
import './PolicyPages.css';

const Refund = () => {
    return (
        <div className="policy-page">
            <div className="policy-hero">
                <h1>Refund <span className="highlight">Policy</span></h1>
            </div>
            <div className="container policy-content">
                <p className="policy-updated">Last Updated: February 2026</p>

                <h2>1. General Policy</h2>
                <p>Fees once paid are generally non-refundable. We encourage all students to take a free trial class before enrolling to ensure suitability.</p>

                <h2>2. Eligible Refund Scenarios</h2>
                <ul>
                    <li><strong>Medical Reasons:</strong> A full or partial refund may be provided if a student is medically advised to discontinue physical activities, with valid documentation from a registered medical practitioner.</li>
                    <li><strong>Batch Cancellation:</strong> If a batch is permanently cancelled by the academy, a full refund or transfer to another batch will be offered.</li>
                    <li><strong>Relocation:</strong> If a student's family relocates out of the city, a partial refund for unused months may be considered on a case-by-case basis.</li>
                </ul>

                <h2>3. Non-Refundable Items</h2>
                <ul>
                    <li>Registration/admission fees</li>
                    <li>Uniform and equipment costs</li>
                    <li>Event participation fees</li>
                    <li>Fees for months already attended</li>
                </ul>

                <h2>4. Refund Process</h2>
                <p>To request a refund, submit a written application at the academy office along with supporting documents. Refund requests are processed within 15 working days after approval.</p>

                <h2>5. Contact</h2>
                <p>For refund queries please contact: <strong>+91 9798140068</strong> or visit the academy office during working hours.</p>
            </div>
        </div>
    );
};

export default Refund;
