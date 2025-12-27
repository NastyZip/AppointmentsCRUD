import React from 'react';

export default function InfoModal({ type, onClose }) {
  
  const content = {
    contact: { title: "Contact Us", text: "Reach us at @nastydev2001@gmail.com or via our social channels." },
    help: { title: "Help Center", text: "Need assistance? Our support team is available 24/7 to help with bookings." },
    terms: { title: "Terms & Conditions", text: "By using this platform, you agree to our automated booking and cancellation policies." },
    privacy: { title: "Privacy Policy", text: "Your data is encrypted and stored securely. We do not sell your personal information." },
    about: { title: "About Project", text: "A modern appointment management system built for speed and simplicity." },
  };

  const active = content[type] || { title: "Info", text: "Content not found." };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>{active.title}</h2>
          <button onClick={onClose} style={styles.closeX}>✕</button>
        </div>
        <div style={styles.body}>
          <p style={styles.text}>{active.text}</p>
        </div>
        <button onClick={onClose} style={styles.actionBtn}>Understood</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000
  },
  modal: {
    backgroundColor: '#fff', width: '90%', maxWidth: '400px',
    borderRadius: '20px', padding: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' },
  title: { margin: 0, fontSize: '20px', fontWeight: '800', color: '#000' },
  closeX: { background: '#f0f0f0', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' },
  text: { color: '#555', lineHeight: '1.5', fontSize: '15px' },
  actionBtn: {
    width: '100%', backgroundColor: '#000', color: '#fff', border: 'none',
    padding: '12px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', marginTop: '20px'
  }
};