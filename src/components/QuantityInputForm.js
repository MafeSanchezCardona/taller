import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { MdAttachMoney } from "react-icons/md";

function QuantityInputForm({ movement, handleInputChange }) {
    return (
        <Form.Group as={Row}>
            <Form.Label column sm="4">Cantidad</Form.Label>
            <Col sm="8">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text><MdAttachMoney /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control required type="number" placeholder="Ingrese una cantidad" name="quantity"
                        value={movement.quantity} onChange={handleInputChange} pattern="^[0-9]+" min="1" />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese una Cantidad de Movimiento.
                        </Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Form.Group>
    )
}

export default QuantityInputForm
