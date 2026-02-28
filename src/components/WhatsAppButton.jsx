import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '919798140068';
    const message = 'Hi! I am interested in joining Evolution Dance & Karate Academy. Please share details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 32 32" fill="#fff" width="28" height="28">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.12-1.96A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.608c-.39 1.098-1.932 2.01-3.17 2.276-.846.18-1.95.324-5.67-1.218-4.762-1.974-7.824-6.82-8.06-7.138-.228-.318-1.878-2.502-1.878-4.772s1.188-3.39 1.61-3.854c.42-.462.918-.578 1.224-.578.306 0 .612.004.88.016.282.012.66-.108.032 1.57-.282.654-1.494 3.648-1.626 3.912-.132.264-.22.572-.044.918.178.348.264.564.528.87.264.306.556.684.792.918.264.264.54.55.924.95.384.4.768.834 1.316 1.34.69.636 1.36 1.12 1.914 1.482.552.36.87.3 1.188-.044.318-.348 1.362-1.55 1.724-2.082.36-.534.72-.444 1.212-.264.492.18 3.126 1.476 3.66 1.746.534.27.89.396 1.022.618.132.222.132 1.29-.258 2.388z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
