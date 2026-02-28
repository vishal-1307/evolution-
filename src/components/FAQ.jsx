import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            question: "What is the minimum age to join?",
            answer: "For Dance classes, the minimum age is 5 years. For Karate training, children as young as 4 years can enroll. We have age-appropriate batches for all groups."
        },
        {
            question: "Do you offer a free trial class?",
            answer: "Yes! We offer one free trial class for both Dance and Karate programs. This helps students and parents decide which program is the best fit before committing to admission."
        },
        {
            question: "What are the class timings?",
            answer: "Classes run Monday to Saturday. Kids batches are at 4:00 PM, intermediate at 5:00 PM, and advanced/adult batches at 6:00 PM. Check our Programs page for the full weekly schedule."
        },
        {
            question: "Do you provide uniforms?",
            answer: "For Karate students, we provide the initial karate gi (uniform) as part of the admission kit. Dance students are required to wear comfortable activewear. Specific costumes for stage performances are arranged separately."
        },
        {
            question: "Is parking available at the academy?",
            answer: "Yes, we have dedicated parking space for two-wheelers and cars at our Town Club Field Road, Madhubani location."
        },
        {
            question: "How can I track my child's progress?",
            answer: "We provide monthly progress reports and conduct parent-teacher meetings. For Karate, students progress through the belt grading system. Dance students showcase their skills in periodic internal performances."
        },
        {
            question: "Do you prepare students for competitions?",
            answer: "Absolutely! We actively prepare and send students for state and national level competitions in both Dance and Karate. Our students have won numerous awards at prestigious events across Bihar and India."
        },
        {
            question: "What safety measures are in place?",
            answer: "Our premises are CCTV monitored. We use professional wooden flooring and safety mats to prevent injuries. First-aid kits are always available. We also have female attendants for children's safety."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>FREQUENTLY ASKED <span className="highlight">QUESTIONS</span></h2>
                    <p>Everything you need to know before joining</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggle(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <ChevronDown size={22} className="faq-icon" />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
