import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import RegistrationBasicForm from './RegistrationBasicForm';

function RegistrationEditForm({ editMovement, movement, handleClose }) {

    const [movementEdit, setMovementEdit] = useState(movement);

    const [validated, setValidated] = useState(false);

    const handleInputChange = (e) => {
        setMovementEdit({ ...movementEdit, [e.target.name]: e.target.value })
    };

    const validation = (e, form) => {
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        validation(e, form);

        if (form.checkValidity() === true) {
            editMovement(movementEdit);
            setValidated(false);
            handleClose();
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <RegistrationBasicForm movement={movementEdit} handleInputChange={handleInputChange} onClickClose={handleClose}
                titleCancel="Cerrar" titlePrimary="Editar Movimiento" />
        </Form>
    )
}

export default RegistrationEditForm
