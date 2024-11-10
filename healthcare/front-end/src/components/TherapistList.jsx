// TherapistList.js
import React, { useEffect, useState } from 'react';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the list of therapists from the backend
  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await fetch('http://localhost:3000/reso/t');
        if (!response.ok) {
          throw new Error('Failed to fetch therapists');
        }
        const data = await response.json();
        setTherapists(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTherapists();
  }, []);

  return (
    <div>
      <h2>Therapist List</h2>
      {error && <p>{error}</p>}
      <ul>
        {therapists.map((therapist) => (
          <li key={therapist._id}>{therapist.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default TherapistList;
