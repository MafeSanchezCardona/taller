import React from 'react'
import { Card } from 'react-bootstrap'

import RegistrationForm from './RegistrationForm';

function Registry({ addMovement, finalBalance }) {

    return (
        <Card>
            <Card.Header>Registro</Card.Header>
            <Card.Body>
                <RegistrationForm addMovement={addMovement} finalBalance={finalBalance} />
            </Card.Body>
        </Card >
    );
};

export default Registry
