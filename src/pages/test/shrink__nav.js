import React, { useState, useEffect } from 'react';

const ShrinkingNavbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  // Add scroll event listener for shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: 'linear-gradient(90deg, rgba(0,35,55,1) 0%, rgba(0,103,182,1) 100%)',
    color: '#eaeaea',
    width: '100vw',
    height: isShrunk ? '60px' : '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top:'0',
    zIndex: '1000',
    boxShadow: '0px 2px 15px 0 rgba(255,255,255,.7)',
    transition: 'height 0.5s ease-in-out',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent:'spaced-between',
    alignItems: 'center',
    padding: '10px',
  };




  return (
    <>
      <nav id="navbar" style={navbarStyle}>
        <div style={containerStyle}>
          <div>
            <h1>YOUR LOGO</h1>
          </div>
          <div>
            <button style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#ef9700', color: '#eaeaea', fontSize: '20px', border: 'none' }}>Get In Touch</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ShrinkingNavbar;
