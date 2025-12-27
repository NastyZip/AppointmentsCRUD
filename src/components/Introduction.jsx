import React from 'react';

export default function Introduction({ onNext }) {
  return (
    <section id="home"  className="introduction">
      <div className="intro-content">
        <h1 className="main-title">Book Your Appointment.</h1>
        <h2 className="sub-title">Simple appointment CRUD.</h2>
        <button className="get-started-btn"
            onClick={() => {
            document.getElementById('book-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
            }}
        >
             Get Started
        </button>
      </div>
    </section>
  );
}