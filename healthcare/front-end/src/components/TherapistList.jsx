// TherapistList.js
import React, { useEffect, useState } from 'react';
import TherapistCard from './TherapistCard';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Navbar from './Navbar'

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
    <>
    <Navbar/>
    <Container>
      <h2 className="my-4">Therapist List</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {therapists.map((therapist) => (
          <Col key={therapist._id} md={4}>
            <TherapistCard therapist={therapist} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default TherapistList;
