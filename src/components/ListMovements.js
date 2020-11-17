import React from 'react'
import { Badge, Card, Col, Row } from 'react-bootstrap';
import Movements from './Movements';
import Search from './Search';

function ListMovements({ movements, editMovement, removeMovement }) {
    return (
        <Card>
            <Card.Header>
                Listado de Movimientos
                <Badge pill variant="primary" className="float-right">{movements.length}</Badge>
            </Card.Header>
            <Card.Body>
                <Search movements={movements} editMovement={editMovement} removeMovement={removeMovement} />
            </Card.Body>
        </Card >
    );
};

export default ListMovements
