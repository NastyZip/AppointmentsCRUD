import React from 'react';

export default function AppointmentCard({ appointment, deleteAppointment, editAppointment }) {
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(' ');
    return parts.map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <div className="appointment-card" style={styles.card}>
      <div style={styles.avatarContainer}>
        <span style={styles.initialsText}>{getInitials(appointment.name)}</span>
      </div>

      <div style={styles.content}>
        <div style={styles.textGroup}>
          <h3 style={styles.title}>
            {appointment.name} — {appointment.service || 'Consultation'}
          </h3>
          <p style={styles.date}>
            {appointment.createdAt?.toDate 
              ? appointment.createdAt.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
              : 'Jul 10, 2024'}
          </p>
        </div>

   
        <div style={styles.actionRow}>
          <button onClick={editAppointment} style={styles.blackBtn}>
            Edit
          </button>
          <button onClick={deleteAppointment} style={styles.blackBtn}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    border: '1px solid #eaeaea',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  avatarContainer: {
    width: '80px',
    height: '80px',
    backgroundColor: '#F3F4F6',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  initialsText: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  title: {
    margin: 0,
    fontSize: '17px',
    fontWeight: '700',
    color: '#000',
    letterSpacing: '-0.02em'
  },
  date: {
    margin: 0,
    fontSize: '14px',
    color: '#666',
  },
  actionRow: {
    display: 'flex',
    gap: '8px',
  },
  blackBtn: {
    backgroundColor: '#000', 
    color: '#fff',          
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    transition: 'opacity 0.2s ease',
  }
};