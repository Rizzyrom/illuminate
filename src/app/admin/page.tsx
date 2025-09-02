"use client";
import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the TinaCMS admin interface
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/index.html';
    }
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      fontFamily: 'var(--font-body)',
      background: 'var(--black)',
      color: 'var(--white)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '2rem',
        color: 'var(--gold)',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic'
      }}>
        Illuminate Avenue
      </div>
      
      <h1 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem',
        color: 'var(--white)'
      }}>
        Redirecting to CMS Admin...
      </h1>
      
      <p style={{ 
        fontSize: '1.1rem', 
        marginBottom: '2rem',
        color: 'var(--gray-400)'
      }}>
        Loading TinaCMS administration interface
      </p>
      
      <div style={{
        padding: '1rem',
        background: 'var(--gray-900)',
        borderRadius: '8px',
        border: '1px solid var(--gray-800)',
        maxWidth: '500px'
      }}>
        <p style={{ margin: '0', fontSize: '0.9rem' }}>
          If you&apos;re not redirected automatically, 
          <a 
            href="/admin/index.html" 
            style={{ 
              color: 'var(--gold)', 
              textDecoration: 'underline',
              marginLeft: '0.5rem'
            }}
          >
            click here to access the admin interface
          </a>
        </p>
      </div>
    </div>
  );
}