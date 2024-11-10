/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// TherapistCard.js
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// TherapistCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TherapistCard = ({ therapist }) => {
  return (
    <>
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{therapist.username}</Card.Title>
        <Card.Text>
          <strong>Number of Patients:</strong> {therapist.patients ? therapist.patients.length : 0}
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default TherapistCard;
