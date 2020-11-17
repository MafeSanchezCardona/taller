import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function MovementTypeForm({ movement, handleInputChange }) {
    return (
        <Form.Group as={Row}>
            <Form.Label column sm="4">Tipo Movimiento</Form.Label>
            <Col sm="8">
                <Form.Control as="select" name="movementType" defaultChecked={movement.movementType}
                    onClick={handleInputChange}>
                    <option value="ingreso">Ingreso</option>
                    <option value="gasto">Gasto</option>
                </Form.Control>
            </Col>
        </Form.Group>
    )
}

export default MovementTypeForm
