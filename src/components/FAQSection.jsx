import React, { useState } from 'react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "Simply fill out the form above with your name, email, and message, then click 'Add New Appointment'."
    },
    {
      question: "How can I edit or delete an appointment?",
      answer: "You can find your bookings in the Appointments list. Click the red 'Delete' button to remove a record."
    },
    {
      question: "Is appointment data saved securely?",
      answer: "Yes, all data is handled locally within your session and follows modern security practices."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="faq-screen">
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <div className="faq-icon-wrapper">
       
                <span className="faq-line horizontal"></span>
                <span className={`faq-line vertical ${activeIndex === index ? 'rotate' : ''}`}></span>
              </div>
              <h3 className="faq-question">{faq.question}</h3>
            </div>
            

            <div className={`faq-answer-container ${activeIndex === index ? 'open' : ''}`}>
              <div className="faq-answer-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}