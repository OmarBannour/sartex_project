import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rendement.css';

// Replace with your ESP8266 IP address
const ESP8266_IP = 'http://192.168.1.126';



const CountPage = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  // Function to fetch the count from ESP8266
  const fetchCount = async () => {
    try {
      const response = await axios.get(`${ESP8266_IP}/`);
      setCount(parseInt(response.data, 10));
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error fetching count: ' + error.message);
    }
  };

  // Function to reset the count on the ESP8266
  const resetCount = async () => {
    try {
      await axios.get(`${ESP8266_IP}/reset`);
      fetchCount(); // Refresh the count after resetting
    } catch (error) {
      setError('Error resetting count: ' + error.message);
    }
  };

  // Fetch the count when the component mounts
  useEffect(() => {
    fetchCount();
    // Optional: Set an interval to refresh the count periodically
    const interval = setInterval(fetchCount, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Rendement de jour</h1>
        {error ? <p className="error">{error}</p> : <p className="count">Count: {count}</p>}
        <button className="reset-button" onClick={resetCount}>Reset Count</button>
      </div>
    </div>
  );
};

export default CountPage;
