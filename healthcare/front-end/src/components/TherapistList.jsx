// TherapistList.js
import  { useState, useEffect } from 'react';
import TherapistCard from './TherapistCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function TherapistList() {
    const [therapists, setTherapists] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [selectedTherapist, setSelectedTherapist] = useState(null);

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
        <div className="container">
            <div className="row">
                {therapists.map(therapist => (
                    <TherapistCard
                        key={therapist._id}
                        therapist={therapist.username}
                        onSelect={handleSelectTherapist}
                    />
                ))}
            </div>
        </div>
    );
}

export default TherapistList;
