import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList'; 
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <Header />
      
      <main>
      
        <section id="home">
          <Introduction />
        </section>

       
        <section id="appointments" className="content-section">
          <div className="section-container">
            
            <AppointmentList 
              appointments={appointments} 
              deleteAppointment={deleteAppointment} 
            />
          </div>
        </section>

 
        <section id="book" className="content-section gray-bg">
          <div className="section-container">
           
            <AppointmentForm addAppointment={addAppointment} />
          </div>
        </section>

        
        <section id="faq" className="content-section">
          <div className="section-container">
            <FAQSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;