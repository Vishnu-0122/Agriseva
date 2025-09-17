import React from 'react';
import { Link } from 'react-router-dom';

const AdvisoryPage = () => {
  const styles = {
    pageContainer: {
      padding: '2rem 0',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: '700',
      color: '#1F2937',
      marginBottom: '0.5rem',
      textAlign: 'center',
    },
    subtitle: {
      color: '#6B7280',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '0 1.5rem',
    },
    card: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#10B981',
      marginBottom: '1rem',
    },
    cardText: {
      color: '#6B7280',
      marginBottom: '1.5rem',
    },
    button: {
      backgroundColor: '#22C55E',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      marginTop: 'auto', // Pushes the button to the bottom of the card
      alignSelf: 'flex-start',
      textDecoration: 'none', // Remove the underline from the Link component
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>AI-Powered Crop Advisory</h1>
      <p style={styles.subtitle}>
        Get expert advice on crops, pests, and fertilizers instantly through our intelligent system.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Real-time Chat</h2>
          <p style={styles.cardText}>
            Talk to our AI-powered chatbot in your local language for instant advice on your farm.
          </p>
          <button style={styles.button}>Start Chat</button>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Upload for Diagnosis</h2>
          <p style={styles.cardText}>
            Upload an image of a pest or disease-affected crop for an accurate diagnosis and recommended treatment.
          </p>
          {/* Changed button to Link and added the 'to' prop */}
          <Link to="/crop-health" style={styles.button}>
            Upload Image
          </Link>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Fertilizer Guide</h2>
          <p style={styles.cardText}>
            Based on your soil data, get a personalized plan for when and what to apply for best results.
          </p>
          <button style={styles.button}>Get My Plan</button>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryPage;