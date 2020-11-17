import React from 'react'
import { ListGroup } from 'react-bootstrap'
import MovementItem from './MovementItem'

function Movements({ movements, editMovement, removeMovement }) {
    return (
        <ListGroup className="mt-3 w-100">
            {movements.map((movement, index) => (
                <MovementItem movement={movement} editMovement={editMovement} removeMovement={removeMovement} />
            ))}

        </ListGroup>
    )
}

export default Movements
