import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import ModalCustom from './ModalCustom';
import RegistrationBasicForm from './RegistrationBasicForm';

function RegistrationForm({ addMovement, finalBalance }) {

    const [movement, setMovement] = useState({
        id: "",
        movementType: "ingreso",
        name: "",
        quantity: "",
    });

    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("");

    const [message, setMessage] = useState("");

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleInputChange = (e) => {
        setMovement({ ...movement, [e.target.name]: e.target.value })
    };

    const validation = (e, form) => {
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
    };

    const validationIntern = (validateInternal) => {
        if (movement.movementType === "gasto" && ((+finalBalance) - (+movement.quantity)) < 0) {
            setMessage("No cuenta con saldo suficiente para realizar este movimiento.");
            setTitle("Error");
            handleShow();

            setValidated(false);

            return true;
        }

        return false;
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        validation(e, form);
        const validateInternal = validationIntern();

        if (form.checkValidity() === true && validateInternal === false) {
            addMovement({ ...movement, id: uuidv4() });
            setMovement({ ...movement, name: "", quantity: "" });
            setValidated(false);
            setTitle("Registro Exitoso");
            setMessage(`El ${movement.movementType} fue agregado con éxito`);
            handleShow();
        }

    };

    const handleReset = (e) => {
        e.preventDefault();
        setMovement({ ...movement, name: "", quantity: "" });
        setValidated(false);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <RegistrationBasicForm movement={movement} handleInputChange={handleInputChange} onClickClose={handleReset}
                titleCancel="Cancelar" titlePrimary="Agregar Movimiento" />

            <ModalCustom show={show} handleClose={handleClose} message={message} title={title} />
        </Form>
    )
}

export default RegistrationForm
