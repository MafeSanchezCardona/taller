import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import ModalText from './ModalText'
import RegistrationEditForm from './RegistrationEditForm'

function ModalCustom({ show, movement, editMovement, handleClose, message, title }) {

    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {movement != null ?
                        <RegistrationEditForm editMovement={editMovement} movement={movement} handleClose={handleClose} />
                        : <ModalText message={message} />
                    }
                </Modal.Body>
                <Modal.Footer hidden={movement != null}>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCustom
