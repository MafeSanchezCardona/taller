import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { MdAssignment } from "react-icons/md";

function NameInputForm({ movement, handleInputChange }) {
    return (
        <Form.Group as={Row}>
            <Form.Label column sm="4">Nombre</Form.Label>
            <Col sm="8">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text><MdAssignment /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control required type="text" placeholder="Ingrese un nombre" name="name"
                        value={movement.name} onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un Nombre de Movimiento.
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Form.Group>
    )
}

export default NameInputForm
