/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// TherapistCard.js
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TherapistCard(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.key}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Specialization: {props.therapist}
                    </h6>
                    {/* <p className="card-text">
                        Experience: {therapist.experience} years
                    </p> */}
                    <button
                        className="btn btn-primary"
                        onClick={() => onSelect(props.key)}
                    >
                        Select Therapist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TherapistCard;
