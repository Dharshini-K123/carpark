// src/components/BookingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const BookingPage = ({ onSubmit }) => {
  const [carPlate, setCarPlate] = useState('');
  const [formData, setFormData] = useState({ location: '', date: '', time: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const apiKey = '340970e546e44ffc803b31f28d865f99'; // Replace with your actual OpenCage API key

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { ...formData, carPlate };

    // Save to local storage
    const existingData = JSON.parse(localStorage.getItem('parkingHistory')) || [];
    existingData.push(bookingData);
    localStorage.setItem('parkingHistory', JSON.stringify(existingData));

    if (typeof onSubmit === 'function') {
      onSubmit(bookingData);
    }

    navigate('/parkdetect');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchGeocodeData(latitude, longitude);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage("Permission denied. Please allow location access.");
              break;
            case error.POSITION_UNAVAILABLE:
              setErrorMessage("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setErrorMessage("The request to get your location timed out.");
              break;
            default:
              setErrorMessage("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  };

  const fetchGeocodeData = async (latitude, longitude) => {
    try {
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setFormData({ ...formData, location: data.results[0].formatted });
        setErrorMessage(''); // Clear any previous error
      } else {
        setErrorMessage("No location data found.");
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      setErrorMessage("Failed to fetch location data.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
        <button type="button" onClick={getCurrentLocation}>Use Current Location</button>
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <label>
        Car Plate Number:
        <input
          type="text"
          value={carPlate}
          onChange={(e) => setCarPlate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Book Parking</button>

      {errorMessage && <div className="alert-error">{errorMessage}</div>}
    </form>
  );
};

export default BookingPage;
