import React, { useState } from 'react';
import InfoModal from './InfoModal'; 

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <footer style={styles.footerContainer}>
    
      {activeModal && (
        <InfoModal type={activeModal} onClose={() => setActiveModal(null)} />
      )}

    
      <div style={styles.logoSection}>
        <div style={styles.logoPlaceholder}>
          <span style={styles.square}></span>
          <span style={styles.circle}></span>
          <span style={styles.triangle}></span>
        </div>
      </div>

   
      <div style={styles.linksWrapper}>
        
      
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Appointments</h4>
          <button style={linkStyle} onClick={() => alert('Navigate to View')}>View</button>
          <button style={linkStyle} onClick={() => alert('Navigate to Book')}>Book</button>
          <button style={linkStyle} onClick={() => alert('Navigate to Edit')}>Edit/Delete</button>
        </div>

       
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Support</h4>
          
          <button style={linkStyle} onClick={() => setActiveModal('contact')}>Contact</button>
          <button style={linkStyle} onClick={() => setActiveModal('help')}>Help Center</button>
        </div>

     
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Info</h4>
          <button style={linkStyle} onClick={() => setActiveModal('terms')}>Terms</button>
          <button style={linkStyle} onClick={() => setActiveModal('privacy')}>Privacy</button>
          <button style={linkStyle} onClick={() => setActiveModal('about')}>About</button>
        </div>

      </div>
    </footer>
  );
}


const linkStyle = {
  background: 'none',
  border: 'none',
  color: '#8e8e8e', 
  padding: '4px 0',
  display: 'block',
  cursor: 'pointer',
  fontSize: '14px',
  textAlign: 'left',
  fontFamily: 'inherit',
  transition: 'color 0.2s ease'
};


const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '80px 10% 60px 10%', 
    backgroundColor: '#fff',
    borderTop: '1px solid #f0f0f0',
    marginTop: '50px'
  },
  logoSection: {
    flex: 1,
  },
  logoPlaceholder: {
    display: 'flex',
    gap: '6px',
    opacity: 0.2, 
  },
  square: { width: '18px', height: '18px', backgroundColor: '#000' },
  circle: { width: '18px', height: '18px', backgroundColor: '#000', borderRadius: '50%' },
  triangle: {
    width: 0, height: 0,
    borderLeft: '9px solid transparent',
    borderRight: '9px solid transparent',
    borderBottom: '18px solid #000'
  },
  linksWrapper: {
    display: 'flex',
    gap: '60px', 
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100px'
  },
  columnTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#000',
    marginBottom: '15px',
    marginTop: 0
  }
};