import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import ModalCustom from './ModalCustom'
import { MdCancel, MdEdit } from "react-icons/md";

function ItemEditButtons({ handleRemove, handleShow }) {
    return (
        <>
            <Button variant="outline-dark" type="button" style={{ border: '1px solid rgba(0, 0, 0, 0.125)' }}
                onClick={handleRemove}>
                <MdCancel />
            </Button>
            <Button variant="outline-dark" type="button" style={{ border: '1px solid rgba(0, 0, 0, 0.125)' }}
                onClick={handleShow}>
                <MdEdit />
            </Button>

        </>
    )
}

export default ItemEditButtons
