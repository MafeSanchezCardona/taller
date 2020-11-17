import React, { useState } from 'react'
import { Badge, InputGroup, ListGroup } from 'react-bootstrap'
import NumberFormat from 'react-number-format';
import ModalCustom from './ModalCustom'
import ItemEditButtons from './ItemEditButtons'
import BadgeEditItem from './BadgeEditItem';

function Movement({ movement, editMovement, removeMovement }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleRemove = () => {
        removeMovement(movement.id);
    };

    return (
        <div>
            <InputGroup className="w-100">
                <InputGroup.Prepend>
                    <ItemEditButtons handleRemove={handleRemove} handleShow={handleShow} />
                    <ModalCustom editMovement={editMovement} movement={movement} show={show} handleClose={handleClose}
                        title="Editar Movimiento" />
                </InputGroup.Prepend>
                <ListGroup.Item style={{ width: '80%' }}>
                    {movement.name}
                    <BadgeEditItem movement={movement} />
                </ListGroup.Item>
            </InputGroup>
        </div>

    );
};

export default Movement
