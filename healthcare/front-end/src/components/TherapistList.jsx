// TherapistList.js
import React, { useEffect, useState } from 'react';

const TherapistList = () => {
  const [therapists, setTherapists] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/therapists')
            .then(response => response.json())
            .then(data => setTherapists(data))
            .catch(error => console.error('Error fetching therapists:', error));
    }, []);

    const handleSelectTherapist = (therapistId) => {
        setSelectedTherapist(therapistId);
        console.log(`Selected therapist ID: ${therapistId}`);
    };

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
