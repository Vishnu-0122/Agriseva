import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AddFarmForm from '../components/AddFarmForm';

const HomePage = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    heroSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '19.5rem 0',
      backgroundImage: 'url(/Wallpaper.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      marginBottom: '3rem',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      color: 'white',
      lineHeight: '1.25',
    },
    heroSubtitle: {
      marginTop: '1rem',
      fontSize: '1.25rem',
      color: 'white',
      maxWidth: '50rem',
    },
    heroButton: {
      marginTop: '2rem',
      backgroundColor: '#10B981',
      color: 'white',
      fontWeight: '600',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      background: 'white',
      padding: '2rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      textDecoration: 'none', // Added to remove link underline
      color: 'inherit', // Added to keep text color consistent
    },
    featureCard: {
      padding: '2rem',
      borderLeft: '4px solid #10B981',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#10B981',
      marginBottom: '1rem',
    },
    cardText: {
      color: '#6B7280',
    },
  };

  return (
    <>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Your Smart Crop Advisory System</h1>
        <p style={styles.heroSubtitle}>
          Empowering small and marginal farmers with AI-driven insights to boost productivity and income.
        </p>
        <button onClick={scrollToFeatures} style={styles.heroButton}>
          Explore Our Features
        </button>
      </div>

      <AddFarmForm />

      <div ref={featuresRef} style={styles.featureGrid}>
        {/* Linked to Crop Health Page */}
        <Link to="/crop-health" style={{ ...styles.card, ...styles.featureCard }}>
          <h2 style={styles.cardTitle}>Pest & Disease Detection</h2>
          <p style={styles.cardText}>
            Upload an image of your crop to get an instant diagnosis and expert advice on treatment.
          </p>
        </Link>
        
        {/* Fertilizer Recommendation (no link change) */}
        <div style={{ ...styles.card, ...styles.featureCard }}>
          <h2 style={styles.cardTitle}>Fertilizer Recommendation</h2>
          <p style={styles.cardText}>
            Get personalized fertilizer recommendations based on your soil type and specific crop needs.
          </p>
        </div>
        
        {/* Linked to Weather Page */}
        <Link to="/weather" style={{ ...styles.card, ...styles.featureCard }}>
          <h2 style={styles.cardTitle}>Weather & Advisory</h2>
          <p style={styles.cardText}>
            Receive real-time weather forecasts and timely crop advisories to plan your farming activities.
          </p>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
