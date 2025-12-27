import React, { useState, useEffect } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
     
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
   
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header>
      <div 
        className={`header-left ${isMobile ? 'clickable' : ''}`} 
        onClick={toggleMenu}
      >
        <span className="icon circle"></span>
        <span className="icon square"></span>
        <span className="icon triangle"></span>

     
        {isMobile && isMenuOpen && (
          <div className="dropdown-menu">
            <a href="#appointments">View Appointments</a>
            <a href="#book">Add Appointment</a>
            <a href="#appointments">Edit/Delete</a>
          </div>
        )}
      </div>

      <nav className="header-center">
        <a href="#appointments">View Appointments</a>
        <a href="#book">Add Appointment</a>
        <a href="#appointments">Edit/Delete</a>
      </nav>

      <div className="header-right">
        <button 
            onClick={() => {
            document.getElementById('book-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
            }}
        >
             Book Now
  </button>
      </div>
    </header>
  );
}