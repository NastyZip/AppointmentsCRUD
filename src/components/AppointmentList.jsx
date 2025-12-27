import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; 
import { collection, onSnapshot, query, orderBy, doc, deleteDoc, updateDoc } from "firebase/firestore";
import AppointmentCard from './AppointmentCard';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  
 
  const [modalMode, setModalMode] = useState(null); 
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const q = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAppointments(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAction = async () => {
    if (modalMode === 'delete') {
      await deleteDoc(doc(db, "appointments", selectedAppt.id));
    } else if (modalMode === 'edit') {
      await updateDoc(doc(db, "appointments", selectedAppt.id), { name: editValue });
    }
    closeModal();
  };

  const openModal = (mode, appt) => {
    setModalMode(mode);
    setSelectedAppt(appt);
    setEditValue(appt.name);
  };

  const closeModal = () => {
    setModalMode(null);
    setSelectedAppt(null);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section id="appointments" className="content-section" style={{ position: 'relative' }}>
      
    
      {modalMode && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.card}>
            <h2 style={modalStyles.title}>
              {modalMode === 'edit' ? 'Edit Appointment' : 'Confirm Delete'}
            </h2>
            <p style={modalStyles.subtitle}>
              {modalMode === 'edit' ? 'Update the client name below:' : `Are you sure you want to remove ${selectedAppt.name}?`}
            </p>

            {modalMode === 'edit' && (
              <input 
                style={modalStyles.input}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            )}

            <div style={modalStyles.btnGroup}>
              <button onClick={closeModal} style={modalStyles.cancelBtn}>Cancel</button>
              <button onClick={handleAction} style={modalStyles.confirmBtn}>
                {modalMode === 'edit' ? 'Save Changes' : 'Delete Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="appointment-grid">
        {appointments.map((a) => (
          <AppointmentCard 
            key={a.id} 
            appointment={a} 
            deleteAppointment={() => openModal('delete', a)}
            editAppointment={() => openModal('edit', a)} 
          />
        ))}
      </div>
    </section>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000
  },
  card: {
    backgroundColor: '#fff', padding: '32px', borderRadius: '20px',
    width: '90%', maxWidth: '400px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  },
  title: { margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' },
  subtitle: { color: '#666', fontSize: '14px', marginBottom: '20px' },
  input: {
    width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd',
    marginBottom: '20px', outline: 'none', fontSize: '16px'
  },
  btnGroup: { display: 'flex', gap: '10px' },
  cancelBtn: { flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #eee', cursor: 'pointer', fontWeight: '600' },
  confirmBtn: { flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#000', color: '#fff', cursor: 'pointer', fontWeight: '600' }
};