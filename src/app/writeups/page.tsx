'use client';

import Header from '../components/Header'; 

export default function WriteupsPage() {
  return (
    <>
      <Header />
      
      <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
      
        paddingTop: '80px' 
      }}>
        
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '40px', 
          color: 'var(--text-main)' 
        }}>
          Under Construction...
        </h1>

        <a 
          href="/" 
          style={{ 
            color: 'black', 
            background: 'var(--accent)', 
            padding: '12px 30px', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'transform 0.2s ease'
          }}
     
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Return Home
        </a>

      </main>
    </>
  );
}