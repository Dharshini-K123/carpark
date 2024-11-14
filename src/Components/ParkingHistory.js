// src/components/ParkingHistory.js
import React, { useEffect, useState } from 'react';

const ParkingHistory = () => {
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    // Get parking history from local storage
    const data = JSON.parse(localStorage.getItem('parkingHistory')) || [];
    setParkingData(data);
  }, []);

  if (!parkingData || parkingData.length === 0) {
    return (
      <p style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
        No parking history available.
      </p>
    );
  }

  return (
    <div
      style={{
        width: '90%',
        maxWidth: '600px',
        margin: '5rem auto',
        padding: '2rem',
        backgroundColor: '#222222',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <h2 style={{ color: '#00ffcc', fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #00ffcc', paddingBottom: '0.5rem' }}>
        Parking History
      </h2>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {parkingData.map((entry, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#444444',
              padding: '1.5rem',
              borderRadius: '8px',
              margin: '1.5rem 0',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
            }}
          >
            <p style={{ margin: '0.5rem 0', color: '#e0e0e0' }}>
              <strong style={{ color: 'white' }}>Location:</strong> {entry.location}
            </p>
            <p style={{ margin: '0.5rem 0', color: '#e0e0e0' }}>
              <strong style={{ color: 'white' }}>Date:</strong> {entry.date}
            </p>
            <p style={{ margin: '0.5rem 0', color: '#e0e0e0' }}>
              <strong style={{ color: 'white' }}>Time:</strong> {entry.time}
            </p>
            <p style={{ margin: '0.5rem 0', color: '#e0e0e0' }}>
              <strong style={{ color: 'white' }}>Car Plate:</strong> {entry.carPlate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingHistory;
