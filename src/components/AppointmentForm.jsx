import React, { useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "appointments"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
        status: "pending"
      });

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-section" className="form-screen" style={{ position: 'relative' }}>
      
   
      {submitted && (
        <div style={styles.overlay}>
          <div style={styles.modalCard}>
            <div style={styles.iconCircle}>✓</div>
            <h2 style={styles.modalTitle}>Success!</h2>
            <p style={styles.modalText}>Your appointment has been requested. We'll get back to you shortly.</p>
            <button 
              onClick={() => setSubmitted(false)} 
              style={styles.closeBtn}
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}

      <form className="modern-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="@gmail.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea 
            placeholder="Your message..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending..." : "Add New Appointment"}
        </button>
      </form>
    </section>
  );
}


const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  },
  modalCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    animation: 'slideUp 0.4s ease-out'
  },
  iconCircle: {
    width: '60px',
    height: '60px',
    backgroundColor: '#4ade80',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    margin: '0 auto 20px auto'
  },
  modalTitle: {
    margin: '0 0 10px 0',
    color: '#111827',
    fontSize: '24px',
    fontWeight: '700'
  },
  modalText: {
    color: '#6b7280',
    fontSize: '16px',
    marginBottom: '25px',
    lineHeight: '1.5'
  },
  closeBtn: {
    backgroundColor: '#111827',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.2s'
  }
};